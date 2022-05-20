import React from 'react';
import CardComponent from './CardComponent';
import SideBar from './SideBar';
import { boardData } from 'mockData';
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Button,
  Divider,
  Link,
} from '@chakra-ui/react';
const Home = () => {
  return (
    <Flex background='#E5E5E5'>
      <Box display='flex'>
        <SideBar />
        <Flex flexDir='column'>
          <Box>
            <Text
              color='#040A1D'
              fontSize='40px'
              ml='48px'
              mt='145px'
              fontWeight='900'
            >
              Dashboard
            </Text>
          </Box>
          <Box display='flex' ml='50px'>
            {boardData.map((item, index) => (
              <CardComponent key={index} item={item} />
            ))}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
