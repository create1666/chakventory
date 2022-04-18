import React from 'react';
import Icon from 'Components/Icon/Icon';
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  Image,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import EyesHideIcon from '../../Assets/eyes-off.svg';
import EyesShowIcon from '../../Assets/eyes-open.svg';

const PasswordInput = ({
  onChange,
  isInvalid,
  label,
  placeholder = 'Enter password',
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex flexDir='column' m='auto' w='350px'>
      {label && <Text color='blue'>{label}</Text>}

      <Box
        as='div'
        display='flex'
        boxShadow=' 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 1px 3px rgba(50, 50, 93, 0.15)'
        borderRadius={6}
        _focusWithin={{
          border: '3px solid rgba(71, 125, 251, 0.4)',
        }}
      >
        <InputGroup size='md'>
          <Input
            border='none'
            _focusWithin={{
              border: 'none',
              boxShadow: 'none',
              outline: 'none',
            }}
            _hover={{
              border: 'none',
              boxShadow: 'none',
              outline: 'none',
            }}
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            isInvalid={isInvalid}
          />
          <InputRightElement>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? <Icon src={EyesHideIcon} /> : <Icon src={EyesShowIcon} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default PasswordInput;
