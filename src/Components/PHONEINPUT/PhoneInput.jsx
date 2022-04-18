import React, { useEffect, useState } from 'react';
import { countries } from 'countries-list';
import CountryLists from './CountryLists';
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import _ from 'lodash';
import Icon from 'Components/Icon/Icon';
import dropdown from '../../Assets/dropdown.svg';
import useOnClickOutside from '../../Hooks/useOnClickOutside';

let extractedCountryData;
extractedCountryData = [
  ...Object.entries(countries).map(([key, subject], i) => {
    return {
      ...extractedCountryData,
      emoji: subject.emoji,
      phone: subject.phone,
    };
  }),
];

const PhoneInput = ({ label, onHandlePhoneDialCodeChange, ...props }) => {
  const [selectedRegionData, setregionData] = useState({
    emoji: extractedCountryData[4].emoji,
    phone: extractedCountryData[4].phone,
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dropdownSelect, setDropDown] = useState(false);
  const currentValue = selectedRegionData.phone + ' ' + phoneNumber;

  const handleCountryChange = (region) => {
    setregionData(region);
    setDropDown(!dropdownSelect);
    onHandlePhoneDialCodeChange(currentValue);
  };

  const { ref } = useOnClickOutside(() => setDropDown(false));

  return (
    <Flex ref={ref} flexDir='column' m='auto' w='350px'>
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
        <Flex
          alignItems='center'
          padding='2'
          onClick={() => {
            setDropDown(!dropdownSelect);
            console.log(dropdownSelect);
          }}
        >
          <span>{selectedRegionData.emoji}</span>
          <Box ml='2' mr='2'>
            <span>+</span>
            {`${selectedRegionData.phone}`}
          </Box>
          <Icon src={dropdown} color='gray.300' style={{ cursor: 'pointer' }} />
        </Flex>
        <Input
          type='tel'
          placeholder='phone number'
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
          onChange={(event) => {
            setPhoneNumber(event.target.value);
            onHandlePhoneDialCodeChange(
              selectedRegionData.phone + ' ' + event.target.value
            );
          }}
        />
      </Box>

      {dropdownSelect && (
        <CountryLists
          extractedCountryData={extractedCountryData}
          handleCountryChange={handleCountryChange}
          selectedRegion={selectedRegionData}
        />
      )}
    </Flex>
  );
};

export default PhoneInput;