import './App.css'
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { DayMemories } from './DayMemories';
import { Memory } from './Memory';

function App() {
  
  const record1 = new Memory("1", "menu1", 100, 15)
  const record2 = new Memory("2", "menu2", 100, 15)
  const record3 = new Memory("3", "menu3", 100, 15)

  const today = new DayMemories(
    "2023/10/10",
    [record1, record2, record3]
  )

  // useStateで記録（日付、種目、重量,回数を管理

  return (
    <Box w="600px" mx="auto" mt="100px">
      {today.map((record,index) => {
          return (
            <>
              <Text fontSize="2xl" as="b">
                {record.date}
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
                  {record.menu}
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
                  <Text>{record.weight}</Text>
                  <Spacer />
                  <Text>{record.rep}</Text>
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
