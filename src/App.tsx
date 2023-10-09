import './App.css'
import { Box, Button, Flex, Spacer, Text, WrapItem } from '@chakra-ui/react'

function App() {
  

  return (
    <Box w="600px" mx="auto" mt="100px">
      <Text fontSize="2xl" as="b">
        2023/10/9
      </Text>
      <Flex w="100%" mt={2} alignItems="center">
        <Flex
          w="200px"
          h="50px"
          mr="20px"
          px={5}
          alignItems="center"
          color="#fff"
          bg="blackAlpha.800"
          borderRadius="5px"
        >
          項目名1
        </Flex>
        <Flex
          w="380px"
          h="50px"
          mr="20px"
          px={5}
          alignItems="center"
          color="#fff"
          bg="blackAlpha.800"
          borderRadius="5px"
        >
          <Spacer />
          <Text>80kg</Text>
          <Spacer />
          <Text>10rep</Text>
          <Spacer />
        </Flex>

        <Button colorScheme="red">削除</Button>
      </Flex>
    </Box>
  );
}

export default App
