import { useState } from 'react';
import './App.css'
import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import { DayMemories } from './DayMemories';
import { Memory } from './Memory';

function App() {
  
  const record1 = new Memory("1", "menu1", 100, 15)
  const record2 = new Memory("2", "menu2", 100, 15)
  const record3 = new Memory("3", "menu3", 100, 15)

  const today = new DayMemories(
    "1",
    "2023/10/10",
    [record1, record2, record3]
  )

  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useStateで記録（日付、種目、重量,回数を管理
  const [records, setRecords] = useState([
    today
  ])

  // モダール入力値
  const [dateInput, setDateInput] = useState('');

  // バリデーション（日付、種目、重量）
  const [dateError, setDateError] = useState<string>('');
  const [menuError, setMenuError] = useState('');
  const [weightError, setWeightError] = useState('');

  const dateChange = (date: string) => {
    if (date == "") {
      setDateError("日付を入力してください");
    } else {
      setDateError("");
    }
    setDateInput(date);
  }

  const createMemory = () => {
    onOpen();
  }

  return (
    <Box padding="50px">
      <Flex justifyContent="flex-end">
        <Button colorScheme="blue" borderRadius="50%" onClick={createMemory}>
          +
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新規登録</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box mb={4}>
              <Text mb={2}>日付</Text>
              <Input
                height={8}
                borderRadius={0}
                placeholder="2023/10/01"
                value={dateInput}
                onChange={(e) => dateChange(e.target.value)}
              ></Input>
              <Text color="red">{dateError}</Text>
            </Box>
            <Box mb={4}>
              <Text mb={2}>種目</Text>
              <Select placeholder="種目を選択">
                <option value="option1">ベンチプレス</option>
                <option value="option2">スクワット</option>
                <option value="option3">デットリフト</option>
              </Select>
              <Text color="red">種目を選択してください</Text>
            </Box>
            <Box mb={4}>
              <Text mb={2}>重量</Text>
              <Select placeholder="重さを選択">
                <option value="option1">80kg</option>
                <option value="option2">90kg</option>
                <option value="option3">100kg</option>
              </Select>
              <Text color="red">重量を選択してください</Text>
            </Box>
            <Box>
              <Text mb={2}>Rep</Text>
              <NumberInput width="50%" defaultValue={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} isDisabled={dateInput == "" || dateError != ""}>
              登録
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box w="600px" mx="auto" mt="100px">
        {records.map((record) => {
          return (
            <>
              <Text fontSize="2xl" as="b">
                {record.date}
              </Text>
              {record.memories.map((memory) => {
                return (
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
                )
              })}
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default App
