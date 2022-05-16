import React, { useEffect } from 'react';
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
import {
  Link as forgretPasswordLinkRoute,
  useNavigate,
} from 'react-router-dom';
import { Form } from '../../../node_modules/antd/lib/index';
import { login, newLogin } from 'services/authServices';
import { useState, useHistory } from 'react';
import useAuth from 'Hooks/useAuth';

const entireBgColr = {
  backgroundColor: '#FFFFFF',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};
const LoginPage = ({ selectedCompany }) => {
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isError, setError] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const handleLoginValidation = async (e) => {
    e.preventDefault();

    // const response = await login({ phone, password });
    const response = await newLogin({ phone, password });
    console.log('warisi', response);
    if (response.status === 'error') {
      // window.alert('Incorrect phone number or password');
      return setError({ server: 'Incorrect phone number or password' });
    }
    if (response.status === 401) {
      // window.alert('Invalid credentials');
      return setError({ server: response.error });
    }

    if (response?.data) {
      const { data: userDetails } = response;
      setAuth((prev) => {
        return { ...prev, userDetails };
      });
      navigate('/authenticateUserPage', { replace: true });
    }
  };

  return (
    <div style={entireBgColr}>
      <Header />
      <Form>
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
          {isError.server && (
            <div style={{ backgroundColor: '#FF4127' }}>{isError.server}</div>
          )}
          <Box mt={20} mb={5}>
            <PhoneInput
              label='Phone Number'
              onHandlePhoneDialCodeChange={(value) => setPhone(value)}
            />
          </Box>
          <Box as='div' mb={4}>
            <PasswordInput
              label='password'
              onChange={(value) => setPassword(value)}
              isInvalid={true}
              errorBorderColor='yellow'
              // className='passwordfield'
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
      </Form>
    </div>
  );
};

export default LoginPage;
