import React from 'react';
import Header from './Header/Header';
import _ from 'lodash';
import Icon from 'Components/Icon/Icon';
import PhoneInput from 'Components/PHONEINPUT/PhoneInput';
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
import PasswordInput from 'Components/PASSWORD/PasswordInput';
import { Link as forgretPasswordLinkRoute } from 'react-router-dom';

const entireBgColr = {
  backgroundColor: '#FFFFFF',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};
const LoginPage = ({ selectedCompany }) => {
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  // console.log({ phone, password, companyId: selectedCompany?._id });
  const onHandlePhoneDialCodeChange = (value) => {
    setPhone(value);
    setPassword(value);
  };
  const handleLoginValidation = (e) => {
    e.preventDefault();
    const data = {
      phone: phone,
      password: password,
      companyId: selectedCompany?._id,
    };
  };

  console.log(phone);
  return (
    <div style={entireBgColr}>
      <Header />
      <Flex
        alignItems='center'
        flexDir='column'
        m='auto'
        mt='50px'
        as='div'
        bg='#F4F5F7'
        w='430px'
        h='660px'
        p={3}
        border='1px solid blue'
        borderRadius={6}
        boxShadow='0px 0px 10px rgba(61, 77, 76, 0.3)'
      >
        {/* <Icon src={selectedCompany.imgUrl} /> */}
        <Box mt={20} mb={5}>
          Sign in to your account
        </Box>
        <Box as='div' mb='10px'>
          <img src={selectedCompany.imgUrl} />
        </Box>
        <Text mt='5px'>{selectedCompany.name}</Text>
        <Divider mt={20} w={348} borderColor='#E3E7ED' border={2} />
        <Box mt={20} mb={5}>
          <PhoneInput
            label='Phone Number'
            onHandlePhoneDialCodeChange={onHandlePhoneDialCodeChange}
            isInvalid={false}
          />
        </Box>
        <Box as='div' mb={4}>
          <PasswordInput
            label='password'
            onChange={onHandlePhoneDialCodeChange}
          />
        </Box>

        <Link
          as={forgretPasswordLinkRoute}
          mb={5}
          w='350px'
          ml='440px'
          fontSize='12px'
          color='#477DFB'
          to='/forgot-password'
        >
          Forgot your password?
        </Link>

        <Button
          onClick={handleLoginValidation}
          w='350px'
          color='white'
          bg='#553FFB'
          _hover={{
            backgroundColor: 'none',
          }}
        >
          Continue
        </Button>
      </Flex>
    </div>
  );
};

export default LoginPage;
