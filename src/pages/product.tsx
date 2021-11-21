
import {Container, Flex, HStack, Text, Input, Icon, Button, Box, Image, Link, Grid, Stack} from '@chakra-ui/react';
import {RiShareFill, RiHeart2Fill} from 'react-icons/ri'
import {Header} from '../components/Header'


export default function Product() {
  return (
    <>  
      <Header />    

      <Container w="100%" mt="6" maxWidth={1480} mx="auto" px="6" > 

      
      <HStack mt={32} spacing={20} justify="space-between">
        <Stack spacing={4} w="100%">
          <Image src="images/HP-20th-Event.jpg" alt="harry Potter" objectFit="contain"  w="600px"/>
          <Flex justify="space-between">
            <Text fontSize="2xl">Harry Potter 20 years celebration</Text>
            <Box>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
            </Box>
          </Flex>
          <Flex flexDir="column">
              <Text fontWeight="bold" color="#81AFDD">Price</Text>
              <Text  fontSize="2xl">$ 250 (0.5709)</Text>
              <Button mt="20px" bg="#FF4820" borderRadius="full" _hover = {{bg: "#AE67FA"}}>Obtain</Button>
          </Flex>
        </Stack>
        <Stack spacing={4}>
          <Text w="100%">
            The celebration began early Wednesday morning with a live-
            streamed eventMore than 1.1 million fans worldwide tuned in 
            to this event last year, and the 2021 event is expected to bring 
            more attention given its the film franchise's 20th anniversary.
          </Text>

          <HStack spacing={20}>
            <Flex flexDir="column" align="center">
              <Text fontSize="2xl">1</Text>
              <Text color="#FF4820" fontSize="14px">Owner</Text>
            </Flex>
            <Flex flexDir="column" align="center">
              <Text fontSize="2xl">1670</Text>
              <Text color="#FF4820" fontSize="14px">Views</Text>
            </Flex>
          </HStack>
          <Stack spacing={1}>
              <Text color="#81AFDD">Created By</Text>
              <Text fontSize="2xl" fontWeight="bold">Second Star to the Right Children's Books</Text>
              <Text color="#FF4820" fontSize="14px">See all activities</Text>
          </Stack>
          
          <Stack spacing={1}>
              <Text color="#81AFDD">Contract Address</Text>
              <Text>0x4635d8f2483ce568439ac38c385999c2789b28955323d36ab...</Text>
          </Stack>
          <Stack spacing={1}>
              <Text color="#81AFDD">Token ID</Text>
              <Text>67357545824835684393838599927892895532336488965214...</Text>
          </Stack>
          <Stack spacing={1}>
              <Text color="#81AFDD">Blockchain</Text>
              <Text>ETHEREUM</Text>
          </Stack>
        </Stack>
      </HStack>

      
      <Box as="footer" mt={6} >
        <Flex justify="space-between" align="center">
          <Text fontSize="14px">2021 | NFT<Text color="#FF4820" as="span">Tickers</Text></Text>
          <Flex align="center" justify="center">
            <Text mr={2}>powered by</Text>
            <Image src="images/celo_logo.png" alt="celo" boxSize="80px" objectFit="contain"  />
          </Flex>
          <Text color="#81AFDD" fontSize="12px">Made by Eduardo Reis</Text>
        </Flex>
      </Box>
      
      
    </Container>
    </>
    
  )
}
