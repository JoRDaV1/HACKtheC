import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './Home.css'
import { Web3Storage } from 'web3.storage'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { ContractAddress, abi } from './constants'
import { Spinner } from '@chakra-ui/react'
import Hackerdash from './Hackerdash'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Button,
  ButtonGroup,
  BsThreeDotsVertical,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Container,
  SimpleGrid,
  Flex,
  Box,
  BiLike,
} from '@chakra-ui/react'
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react'

const Home = () => {
  const apiToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJhRDQzQWRGOTQwODE4YzY4MjZmQmEzNUUwMjFFNTdCRDAxQThEN0EiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY3NDgyMDAzNTUsIm5hbWUiOiJIYWNrZXgifQ.bAnq4DgU5OhwADCPQ0WJn97uD5YqdnMWusvSXCOC0Ak'

  const client = new Web3Storage({ token: apiToken })

  const [Name, setName] = useState('')
  const [Upload, setUpload] = useState('')

  const [bounty, setBounty] = useState('')

  const [contractAddress, setContractaddress] = useState('')

  const [Transid, settransid] = useState('')
  const [balance, setintialbalance] = useState('')

  const [metamask, setmetamask] = useState(false)

  const [spinner, setspinner] = useState(false)

  const dataList = [
    {
      id: '1',
      product: 'Product 1',
      summary: 'This is a summary, can be any length',
      longLine: '100$',
    },
    {
      id: '2',
      product: 'Product Two',
      summary:
        'Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf',
      longLine: '250$',
    },
    {
      id: '3',
      product: 'Long Product',
      summary: 'Finalize them summary, hurry, we are close to deadline',
      longLine: '50$',
    },
  ]

  const handleUpload = async (event) => {
    const fdata = event.target.files[0]

    console.log('before getting', fdata)

    var fileInput = document.getElementById('input')

    const rootCid = await client.put(fileInput.files, {
      name: fdata.name,
      maxRetries: 3,
    })

    console.log(rootCid)
    const res = await client.get(rootCid)
    const files = await res.files()
    settransid(files[0].cid)
    console.log(`https://ipfs.io/ipfs/${files[0].cid}`)
  }

  async function registerform(e) {
    e.preventDefault()
    setspinner(true)
    console.log(Name, Transid, contractAddress, bounty)
    await register(Name, Transid, contractAddress, balance, bounty)
  }
  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('metamask')
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      setmetamask(true)
    } else alert('Install metamask')
  }

  async function register(
    contractName,
    contractID,
    contractAddress,
    initialBalance,
    bounty,
  ) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(ContractAddress, abi, signer)

    console.log(contract)

    try {
      const transactionResponse = await contract.registration(
        contractName,
        contractID,
        contractAddress,
        initialBalance,
        { value: ethers.utils.parseEther(bounty) },
      )
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
          setUpload('Uploaded Succesfully !!!')
          setspinner(false)
        })
        resolve()
      } catch (error) {
        console.log(error)
      }
    })
  }
  return (
    <div>
      <div className="home">
        <ChakraProvider>
          <Tabs isFitted variant="enclosed">
            <TabList mb="2em">
              <Tab _selected={{ color: 'white', bg: '#d3ac74' }}>Company</Tab>
              <Tab _selected={{ color: 'white', bg: '#d3ac74' }}>Hacker</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex width="full" align="center" justifyContent="center">
                  <Box p={2}>
                    <Box textAlign="center">
                      <FormLabel> {Upload}</FormLabel>
                    </Box>
                    <Box my={4} textAlign="left">
                      {spinner ? (
                        <Spinner />
                      ) : (
                        <form onSubmit={registerform}>
                          {metamask ? (
                            <FormLabel>
                              {' '}
                              Connected With Metamask Succesfully
                            </FormLabel>
                          ) : (
                            <Button onClick={connect}>
                              Connect With Metamask &nbsp; {'   '}
                              <iconify-icon icon="logos:metamask-icon"></iconify-icon>
                            </Button>
                          )}{' '}
                          <FormControl mt={6}>
                            <FormLabel>Name </FormLabel>
                            <Input
                              placeholder=""
                              onChange={(e) => setName(e.target.value)}
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel>Smart Contract Address</FormLabel>
                            <Input
                              placeholder=""
                              onChange={(e) =>
                                setContractaddress(e.target.value)
                              }
                            />
                          </FormControl>
                          <FormControl mt={6}>
                            <FormLabel>Bounty</FormLabel>
                            <Input
                              onChange={(e) => setBounty(e.target.value)}
                              placeholder="TFIL"
                            />
                          </FormControl>
                          <FormControl mt={6}>
                            <FormLabel>Intial Balance</FormLabel>
                            <Input
                              onChange={(e) => setintialbalance(e.target.value)}
                              placeholder="wei"
                            />
                          </FormControl>
                          <FormControl mt={6}>
                            <FormLabel>Smart Contract</FormLabel>
                            <Input
                              onChange={handleUpload}
                              type="file"
                              id="input"
                              name="file"
                              placeholder="please upload .sol file"
                            />
                          </FormControl>
                          <Button width="full" mt={4} type="submit">
                            Upload
                          </Button>
                        </form>
                      )}
                    </Box>
                  </Box>
                </Flex>{' '}
              </TabPanel>
              <TabPanel>
                <Hackerdash />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ChakraProvider>
      </div>
    </div>
  )
}

export default Home
