import {Container, Flex, HStack, Text, Input, Icon, Button, Box, Image, Link, Grid} from '@chakra-ui/react';
import {RiShareFill, RiHeart2Fill} from 'react-icons/ri'
import {Header} from '../components/Header'


export default function Home() {
  return (
    <>  
      <Header />    

      <Container w="100%" mt="6" maxWidth={1480} mx="auto" px="6" > 

      <Box pt={20}>
      <Flex justify="space-between" align="center">
        <Box maxWidth="800px" >
          <Text bgGradient="linear(to-l, #F49867, #AE67FA)"
          mb={8}
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold">Some moments are unique and deserve to be kept forever! </Text>
          
          <Text color="#81AFDD" fontSize="20px"  mb={10} >
          With NFTickets you can perpetuate an unforgettable concert, your favorite artist's album, the movie you love, or a visit to the art exhibition you want to see. So, whatever the event, you will have it in a unique way whenever and wherever you are.  
          </Text>

          <Button bg="#FF4820" borderRadius="full" _hover = {{bg: "#AE67FA"}}>Connect your Wallet</Button>
          <Flex  align="center">
            <Text mr={4}> It is coming pretty soon at: </Text>
            <Image mr={4} src="images/app-store.svg" alt="appstore" objectFit="contain"  boxSize="100px"/>
            <Image src="images/Google-Play.svg" alt="playstore" objectFit="contain"  boxSize="115px"/>
          </Flex>
        </Box>
      
        <Image src="images/main_img2.png" alt="party" boxSize="600px" objectFit="contain" />
      </Flex>
      </Box>

      <Text mb={6} fontSize="2xl" color="#81AFDD">Shinig ...</Text>

      <Box w="100%" h="300px"  mb={20}><Link href="/product"><Image src="images/hp20years.png" alt="harry Potter" objectFit="contain"  boxSize="100%"/></Link>
            <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
            </Box>  
      </Box>
      

      <Grid templateColumns="repeat(4, 1fr)" mb={20} gap={6}>
        <Box w="100%" h="400" ><Image src="images/banner1.png" alt="party" objectFit="cover"  boxSize="400px"/>
          <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
          </Box>
        </Box>
        <Box w="100%" h="400" ><Image src="images/banner2.png" alt="party"  objectFit="cover" boxSize="400px" />
          <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
          </Box>
        </Box>
        <Box w="100%" h="400" ><Image src="images/banner4.png" alt="party"  objectFit="cover" boxSize="400px" />
          <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
          </Box>
        </Box>
        <Box w="100%" h="400" ><Image src="images/banner3.png" alt="party"  objectFit="cover" boxSize="400px" />
          <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
          </Box>
        </Box>
      </Grid>

      <Text mb={6} fontSize="2xl" color="#81AFDD">Coming soon ...</Text>
      <Grid templateColumns="repeat(2, 1fr)" mb={20} gap={6}>
      <Box w="100%" h="300px" ><Image src="images/art_banner.jpg" alt="party" objectFit="cover"   boxSize="100%"/>
          <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
          </Box>
      </Box>
      <Box w="100%" h="300px" ><Image src="images/band.jpg" alt="party" objectFit="cover"   boxSize="100%"/>
          <Box mt={2}>
              <Button variant="link"><RiHeart2Fill fontSize="20px" color="#81AFDD"/></Button>
              <Button variant="link"><RiShareFill fontSize="20px" color="#81AFDD"/></Button>
          </Box>
      </Box>
      </Grid>

      

      {/* <Box as="section" id="about" className={styles.about} pt={28}></Box>
      <Box as="section" id="product" className={styles.product} pt={28}></Box>
      <Box as="section" id="price" className={styles.price} pt={28}></Box> */}
      <Box as="footer">
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
