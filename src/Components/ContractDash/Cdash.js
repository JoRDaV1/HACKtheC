import React, { useEffect, useState } from 'react'
import './Cdash.css'
import { useParams } from 'react-router-dom'
import { ethers } from 'ethers'
import { ContractAddress, abi } from './constants'

function App() {
  let { id } = useParams()
  const [contractdetail, setcontractdetail] = useState([])
  const [CONTRACTID, setCONTRACTID] = useState([])
  const [contractdetails, setcontractdetails] = useState([[]])
  const [contractid, setcontractid] = useState([])

  const [load, setLoad] = useState('')
  const [init, setinit] = useState('20000')

  const [link, setLink] = useState(
    'https://ipfs.io/ipfs/bafkreifflr2si4cuzs2jq4ccbsklamr3o675rzwwo2t56l3uuhtnke7v5u',
  )
  const [bounty, setbounty] = useState('5 TFIL')

  useEffect(() => {
    async function retrieveContracts() {
      setLoad(true)

      setcontractdetails([])

      const provider = new ethers.providers.JsonRpcProvider(
        'https://rpc.ankr.com/fantom_testnet',
      )
      const contract = new ethers.Contract(ContractAddress, abi, provider)
      const size = await contract.getArraySize()
      console.log(size)
      let arr = []
      let arr2 = []
      for (var i = 0; i < size; i++) {
        const contractID = await contract.arrayID(i)
        if (!contractid.includes(contractID)) {
          contractid.push(contractID)
        }
        const contractDetails = await contract.getContract(contractID)
        arr.push(contractDetails)
      }
      setcontractdetails(arr)

      console.log(arr)
      console.log(id)

      for (let i = 0; i < arr.length; i++) {
        if (id === arr[i][2]) {
          arr2.push(arr[i])
          console.log('found')
          setLoad(false)
        }
      }

      console.log(arr2)
      setcontractdetail(arr2)
      setCONTRACTID(arr2[0][1])
      setbounty(parseInt(arr[0][3]._hex) / 1000000000 + 'FTM')
      await display('https://ipfs.io/ipfs/' + arr2[0][1])

      console.log(parseInt(arr[0][3]._hex))
      console.log(parseInt(arr[0][4]._hex))

      setinit(parseInt(arr[0][4]._hex) / 1000000000)
    }

    retrieveContracts()
  }, [])

  const [hackerAddress, setHackerAdd] = useState('')
  const [Description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Input value:', hackerAddress)
    verify(hackerAddress)
  }

  const handleInputChange = (event) => {
    setHackerAdd(event.target.value)
  }
  const handleInputChange2 = (event) => {
    setDescription(event.target.value)
  }

  async function verify(h_address) {
    // h--> hacker  s--> smart contract

    var s_address = id
    var ini_balance = '20000'

    const res1 = await fetch(
      `https://api-testnet.ftmscan.com/api?module=account&action=txlistinternal&address=${h_address}&startblock=0&endblock=99999999&page=1&offset=1&sort=desc&apikey=APPEVNI46VPZ72M4KW8GVE2C3X3PPTB18M`,
    )
    const data1 = await res1.json()

    console.log('first data', data1)
    const from = data1.result[0].from
    const to = data1.result[0].to
    const value = data1.result[0].value

    // const res2 = await fetch(
    //   `https://hyperspace.filfox.info/api/v1/address/${from}`
    // );
    // const res3 = await fetch(
    //   `https://hyperspace.filfox.info/api/v1/address/${to}`
    // );
    // const data2 = await res2.json();
    // const data3 = await res3.json();
    // const n_from = data2.ethAddress;
    // const n_to = data3.ethAddress;

    const n_from = from
    const n_to = to
    console.log(value)
    console.log(
      n_from.toLowerCase() === s_address.toLowerCase() &&
        n_to.toLowerCase() === h_address.toLowerCase() &&
        value === ini_balance,
    )
    if (
      n_from.toLowerCase() === s_address.toLowerCase() &&
      n_to.toLowerCase() === h_address.toLowerCase() &&
      value === ini_balance
    ) {
      console.log(CONTRACTID)
      await Bounty(CONTRACTID, h_address)
      alert(
        'You Have Succesfully Claimed the ownership !! Bounty Has been Credited to your account',
      )
    } else {
      
      alert('You havent claimed ownership')
    }
    return n_from === s_address && n_to === h_address && value === ini_balance
  }

  async function Bounty(contractID, winner) {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://rpc.ankr.com/fantom_testnet',
    )

    const signer = new ethers.Wallet(
      'your_private_key',
      provider,
    )
    const contract = new ethers.Contract(ContractAddress, abi, signer)

    // var contractID = "adsd4432323";
    // var winner = "0xbE5C450ae99cD36D118822295c051C650FBbb7c8"

    try {
      const transactionResponse = await contract.awardBounty(contractID, winner)
      await listenForTransactionMine(transactionResponse, provider)
    } catch (error) {
      console.log(error)
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)

    return new Promise((resolve, revert) => {
      try {
        provider.once(transactionResponse.hash, (transactionReciept) => {
          console.log(`Done`)
        })
        resolve()
      } catch (error) {
        console.log(error)
      }
    })
  }
  // const handleDownload = async () => {
  //   const link = document.createElement('a');
  //   link.href = linksmAdd; // replace with your link to the smart contract
  //   link.download = "smart-contract.sol";
  //   link.click();
  // };

  const [contractCode, setContractCode] = useState('')

  const display = async (link1) => {
    console.log(link1)
    const response = await fetch(`${link1}`)
    const contractCode = await response.text()
    setContractCode(contractCode)
  }

  useEffect(() => {
    display()
  }, [])

  return (
    <div>
      {load ? (
        <div>Please Wait</div>
      ) : (
        <div className="cdash">
          <div className="smart-contract-box">
            <div className="smart-contract-item">
              <div className="smart-contract-label">
                Smart Contract Address:
              </div>
              <div className="smart-contract-value">{id}</div>
            </div>
            <div className="smart-contract-item">
              <div className="smart-contract-label">Initial Amount:</div>
              <div className="smart-contract-value">{init}</div>
            </div>
            <div className="smart-contract-item">
              <div className="smart-contract-label">Prize Money:</div>
              <div className="smart-contract-value">{bounty}</div>
            </div>

            {/* <a href={linksmAdd} download="smart-contract.sol">
            <button className="smart-contract-button">Download Smart Contract</button>
          </a> */}
          </div>
          {contractCode && (
            <div className="smart-contract-code">
              <pre>{contractCode}</pre>
            </div>
          )}
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your waallet address here"
                className="input-field"
                value={hackerAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Description about the vulnerability here"
                className="input-field"
                value={hackerAddress}
                onChange={handleInputChange2}
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default App
