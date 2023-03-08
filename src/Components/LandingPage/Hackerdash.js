import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { ContractAddress2, abi2 } from './constants2'
import { ContractAddress, abi } from './constants'

import { Box, Text, Link, Button, Stack, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Hackerdash() {
  const navigate = useNavigate()

  const [bounty, setbounty] = useState('5 TFIL')

  const [contractid, setcontractid] = useState([])
  const [contractdetails, setcontractdetails] = useState([[]])
  const [loaded, setloaded] = useState('')
  useEffect(() => {
    async function retrieveContracts() {
      setcontractdetails([])
      setloaded(true)

      const provider = new ethers.providers.JsonRpcProvider(
        'https://rpc.ankr.com/fantom_testnet',
      )
      const contract = new ethers.Contract(ContractAddress2, abi2, provider)
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

      const contract2 = new ethers.Contract(ContractAddress, abi, provider)
      const size2 = await contract2.getArraySize()
      console.log(size2)
      for (i = 0; i < size2; i++) {
        const contractID = await contract2.arrayID(i)
        if (!contractid.includes(contractID)) {
          contractid.push(contractID)
        }
        const contractDetails2 = await contract2.getContract(contractID)
        arr.push(contractDetails2)
      }
      setcontractdetails(arr)

      console.log(arr)
      //   console.log(contractid)
      setloaded(false)
      setbounty()

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
            <Box
              p={4}
              display={{ md: 'flex' }}
              maxWidth="32rem"
              borderWidth={1}
              margin={2}
            >
              <Stack
                align={{ base: 'center', md: 'stretch' }}
                textAlign={{ base: 'center', md: 'left' }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="#d3ac74"
                >
                  {data[0]}
                </Text>
                {data.s_solved ? (
                  <Text
                    fontWeight="bold"
                    fontSize="md"
                    letterSpacing="wide"
                    color="green"
                    objectPosition={{ base: 'top', md: 'right' }}
                  >
                    Solved
                  </Text>
                ) : (
                  <Text
                    fontWeight="bold"
                    fontSize="md"
                    letterSpacing="wide"
                    color="red"
                  >
                    Not Solved{' '}
                  </Text>
                )}

                {data[4] ? (
                  <>
                    {' '}
                    <Text
                      my={1}
                      display="block"
                      fontSize="md"
                      lineHeight="normal"
                      fontWeight="semibold"
                      href="#"
                    >
                      Bounty : {parseInt(data[4]._hex) / 1000000000} FTM
                    </Text>{' '}
                  </>
                ) : (
                  <></>
                )}

                <Text my={2} color="gray.500"></Text>
                <Button
                  maxWidth="100px"
                  my={2}
                  onClick={() => {
                    navigate(`/contract/${data[2]}/`)
                  }}
                >
                  View
                </Button>
              </Stack>
            </Box>
          ))}
        </div>
      )}
    </div>
  )
}

export default Hackerdash
