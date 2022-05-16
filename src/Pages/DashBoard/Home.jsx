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
        <Box display='flex' ml='50px' mt='150px'>
          {boardData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
