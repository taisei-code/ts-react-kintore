import { useState } from 'react';
import './App.css'
import { Box, Button, Flex, Spacer, Text, WrapItem } from '@chakra-ui/react'

function App() {
  
  // useStateで記録（日付、種目、重量,回数を管理
  const [memories, setMemories] = useState(
    {
      date: "2023/10/9",
      menu: "ベンチプレス",
      weight: "80kg",
      rep: "10rep"
    },
  )

  return (
    <Box w="600px" mx="auto" mt="100px">
      {/* {memories.map((memory, index) => {
        return ( */}
          <>
            <Text fontSize="2xl" as="b">
              {memories.date}
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
              {memories.menu}
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
                <Text>{memories.weight}</Text>
                <Spacer />
                <Text>{memories.rep}</Text>
                <Spacer />
              </Flex>
              <Button colorScheme="red">削除</Button>
            </Flex>
          </>
          {/* );
        })} */}
      </Box>
  );
}

export default App
