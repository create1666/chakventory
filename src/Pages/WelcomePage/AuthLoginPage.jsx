import React, { useEffect, useRef } from 'react';
import Header from './Header/Header';
import _ from 'lodash';
import Icon from 'Components/Icon/Icon';
import PhoneInput from 'Components/PHONEINPUT/PhoneInput';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
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
import { login, otpVerify } from 'services/authServices';
import { useState, useHistory } from 'react';
import useAuth from 'Hooks/useAuth';

dayjs.extend(duration);

const entireBgColr = {
  backgroundColor: '#FFFFFF',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};

const formatCountdown = (timeleft) => {
  const duration = dayjs.duration(timeleft, 'seconds');
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  console.log('time', duration);

  return `${minutes <= 9 ? '0' : ''}${minutes}:${
    seconds <= 9 ? '0' : ''
  }${seconds}`;
};

const AuthLoginPage = ({ selectedCompany }) => {
  const [otpReuest, setOtp] = useState(new Array(4).fill(''));
  const { auth, setAuth } = useAuth();
  const [timeleft, setTimeleft] = useState(600);
  const [requestError, setRequetError] = useState({});
  const componentMounted = useRef(true);

  const navigate = useNavigate();

  const onHandleOtp = (e, index) => {
    // if (isNaN(e.value)) return false;

    setOtp([
      ...otpReuest.map((prev, prevIndex) =>
        prevIndex === index ? e.value : prev
      ),
    ]);
    // focus next input...
    if (e.nextSibling) {
      e.nextSibling.focus();
    }
  };
  const { userDetails } = auth;
  console.log('userDetails->', userDetails);
  const { userId, phone } = userDetails;
  const otp = otpReuest.join('');
  console.log('otup', otp);
  const handleLoginValidation = async (e) => {
    e.preventDefault();

    const response = await otpVerify({ userId, otp });
    console.log('RES', response);
    if (response.data.status === false)
      return setRequetError({ server: response.data.message });
    if (response.data.status === 'expired')
      return setRequetError({ server: response.data.message });

    if (response.data.status === 'ok') {
      const {
        data: { data: tok },
      } = response;
      setAuth((prev) => {
        console.log('prev,', prev);
        return { ...prev, token: tok };
      });
      setRequetError({ server: response.data.message });
      navigate('/dashboard', { replace: true });
    }
  };
  console.log('auth->', auth);
  console.log('aerw', requestError.server);
  let timerInterval;
  useEffect(() => {
    if (componentMounted.current) {
      timerInterval = setInterval(() => {
        setTimeleft((prev) => (prev !== 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      // This code runs when component is unmounted
      componentMounted.current = false;
      clearInterval(timerInterval); // (4) set it to false when we leave the page
    };
  }, []);
  return (
    <div style={entireBgColr}>
      <Header />
      <Form>
        <Flex
          alignItems='center'
          flexDir='column'
          m='auto'
          mt='130px'
          as='div'
          bg='#F4F5F7'
          w='430px'
          h='436px'
          p={3}
          border='1px solid blue'
          borderRadius={6}
          boxShadow='0px 0px 10px rgba(61, 77, 76, 0.3)'
        >
          <Box m='auto' alignItems='center' flexDir='column' display='flex'>
            <Text>Verify Number</Text>
            <Text>Please enter verification sent to</Text>
            <div style={{ color: '#3D4356', fontSize: '14px' }}>
              +
              {[
                phone.slice(0, 3),
                ' ',
                phone.slice(3, 6),
                ' ',
                phone.slice(6, 9),
                ' ',
                phone.slice(10),
              ].join('')}
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}
            >
              {otpReuest.map((item, index) => (
                <input
                  style={{
                    textAlign: 'center',
                    padding: '10px',
                    margin: '10px',
                    width: '50px',
                    background: 'transparent',
                    boxShadow: '0px 0px 10px rgba(61, 77, 76, 0.3)',
                  }}
                  maxLength={1}
                  key={index}
                  name='otp'
                  type={'text'}
                  onChange={(e) => onHandleOtp(e.target, index)}
                  value={item}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <Button
              onClick={handleLoginValidation}
              w='350px'
              color='white'
              bg='#553FFB'
              _hover={{
                backgroundColor: 'none',
              }}
            >
              Login
            </Button>
          </Box>
          <div>{formatCountdown(timeleft)}</div>
        </Flex>
      </Form>
    </div>
  );
};

export default AuthLoginPage;
