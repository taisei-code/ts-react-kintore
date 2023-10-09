import { useState } from 'react';
import './App.css'
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { Memories } from './Memories';

function App() {
  
  // useStateで記録（日付、種目、重量,回数を管理
  const [memories, setMemories] = useState([
      new Memories("2023/7/19", "ベンチ", "20kg", "10rep"),
      new Memories("2023/7/19", "ベンチ", "20kg", "10rep"),
      new Memories("2023/7/19", "ベンチ", "20kg", "10rep"),
      new Memories("2023/7/20", "ベンチ", "20kg", "10rep"),
      new Memories("2023/7/20", "ベンチ", "20kg", "10rep"),
    ]
  )

  return (
    <Box w="600px" mx="auto" mt="100px">
      {memories.map((memory, index) => {
          return (
            <>
              <Text fontSize="2xl" as="b">
                {memory.date}
              </Text>
              <Flex w="100%" mt={2} alignItems="center" mb="50px">
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
                  {memory.menu}
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
                  <Text>{memory.weight}</Text>
                  <Spacer />
                  <Text>{memory.rep}</Text>
                  <Spacer />
                </Flex>
                <Button colorScheme="red">削除</Button>
              </Flex>
            </>
          );
        })}
      </Box>
  );
}

export default App
