import {Flex, HStack, Text, Input, Icon, Button, Box, Image, Link } from '@chakra-ui/react';
import {RiSearchLine} from 'react-icons/ri'


export function Header() {
    return (

    <Flex as="header" w="100%" top={0} px={10} mx="auto"  justifyContent="space-between" position="fixed" zIndex="999" bgGradient="linear(to-r, #002853, #040C18)" bgClip="border-box">
        
        <Image src="images/logo.png" alt="party" boxSize="100px" objectFit="contain"  />
        
        <HStack spacing={6} >
          <Link href="/" _hover = {{color: "#AE67FA"}}>Home</Link>
          <Link href="#about" _hover = {{color: "#AE67FA"}}>What is NFT Tickets</Link>
        </HStack>
        <Flex 
          w="300px"
          as="label"
          flex="1"
          py="2"
          px="4"
          ml="32"
          maxWidth={300}
          alignSelf="center"
          color="#fff"
          pos="relative"
          bg="#052D56"
          borderRadius="full"
          >
              <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="2"
                placeholder="Find your artist, event or collection"
                fontSize="13px"
                _placeholder = {{color: '#81AFDD'}} 
                />

               <Icon as={RiSearchLine} fontSize="25" color="#81AFDD" />  
          </Flex>

          <Flex alignItems="center">
            <Text>Sign in</Text>
            <Button bg="#FF4820" ml={6} _hover = {{bg: "#AE67FA"}}>Sign up</Button>
          </Flex>
      </Flex>
    );
}
