import { Flex, Heading} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex alignItems="center" bg="blackAlpha.800" height="80px" px={10}>
      <Heading fontSize="3xl" color="#fff">Kintore Log</Heading>
    </Flex>
  );
}

export default Header