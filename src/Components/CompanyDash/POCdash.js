import React from 'react'
import './company.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

import { ContractAddress2, abi2 } from '../LandingPage/constants2'

function Dashboard() {
  let { id } = useParams()
  const [poc, setpoc] = useState([])

  useEffect(() => {
    async function getPOC(id) {
      // get array of submitted POC(descriptions) on a contract by hackers.

      const provider = new ethers.providers.JsonRpcProvider(
        'https://rpc.ankr.com/fantom_testnet',
      )
      const contract = new ethers.Contract(ContractAddress2, abi2, provider)

      console.log(contract)

      try {
        const transactionResponse = await contract.getPOC(id)
        console.log(transactionResponse)
        setpoc(transactionResponse)
      } catch (error) {
        console.log(error)
      }
    }
    getPOC(id)
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">View Your POCs Here</h1>
          <hr />
        </div>
      </div>
      {poc?.map((poc) => (
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="box">
              <h3>Box 1</h3>
              <p>Description of Box 1</p>
              <form>
                <div className="form-group">
                  <label htmlFor="bountyInput">Bounty</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bountyInput"
                    placeholder="Enter bounty amount"
                  />
                </div>
                <Button variant="primary">Approve</Button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
