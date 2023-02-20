import React from 'react'
import { Box, Text, Link, Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
  const { id, Name, longLine } = props
  const navigate = useNavigate()

  return (
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
          {Name}
        </Text>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        ></Link>
        <Text my={2} color="gray.500">
          Bounty : 5 TFIL
        </Text>
        <Button
          maxWidth="100px"
          my={2}
          onClick={() => {
            navigate(`/contract/${id}/`)
          }}
        >
          View
        </Button>
      </Stack>
    </Box>
  )
}

export default Card
