import React from 'react'
import './company.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { ethers } from 'ethers'
import { ContractAddress2, abi2 } from '../LandingPage/constants2'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  let { id } = useParams()

  const [contractid, setcontractid] = useState([])

  useEffect(() => {
    async function getContractIds(id) {
      // get array of contractids of contracts of companies by passing company address.

      const provider = new ethers.providers.JsonRpcProvider(
        'https://rpc.ankr.com/fantom_testnet',
      )
      const contract = new ethers.Contract(ContractAddress2, abi2, provider)

      console.log(contract)

      try {
        const transactionResponse = await contract.getContractIds(id)
        console.log(transactionResponse)
        setcontractid(transactionResponse)
      } catch (error) {
        console.log(error)
      }
    }

    getContractIds(id)
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">Smart Contracts</h1>
          <p className="text-center">
            {' '}
            Here are the list of smart contracts you have submitted{' '}
          </p>
          <hr />
        </div>
      </div>
      <div>
        {contractid?.map((id) => (
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="box">
                <h3>{id}</h3>
                <p>View Your POCs Here</p>
                <Button onClick={() => navigate(`/pocdash/id`)}> View </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
