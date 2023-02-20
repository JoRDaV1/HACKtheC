import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { ContractAddress, abi } from './constants'
import Card2 from './Card'

function Hackerdash() {
  const [contractid, setcontractid] = useState([])
  const [contractdetails, setcontractdetails] = useState([[]])
  const [loaded, setloaded] = useState('')
  useEffect(() => {
    async function retrieveContracts() {
      setcontractdetails([])
      setloaded(true)

      const provider = new ethers.providers.JsonRpcProvider(
        'https://api.hyperspace.node.glif.io/rpc/v1',
      )
      const contract = new ethers.Contract(ContractAddress, abi, provider)
      const size = await contract.getArraySize()
      console.log(size)
      let arr = []
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
      //   console.log(contractid)
      setloaded(false)

      //   contractdetails.forEach((data) => {
      //     console.log(data[0])
      //   })
    }

    retrieveContracts()
  }, [])

  return (
    <div>
      {loaded ? (
        <h1> Please Wait ....</h1>
      ) : (
        <div>
          {contractdetails.map((data) => (
            <Card2
              Name={data[0]}
              id={data[2]}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Hackerdash
