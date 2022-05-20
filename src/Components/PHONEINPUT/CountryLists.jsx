import React from 'react';
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

const CountryLists = ({
  extractedCountryData,
  selectedRegion,
  countryCode,
  handleCountryChange,
  ...props
}) => {
  return (
    <Flex
      {...props}
      flexDir='column'
      m='auto'
      maxW='593px'
      overflowY='scroll'
      h='300px'
      cursor='pointer'
      ml='1'
      mt='5'
      position='absolute'
      bottom='80px'
      zIndex={2}
    >
      <div
        style={{
          backgroundColor: '#AEB3FF',
          borderRadius: 5,
        }}
      >
        {extractedCountryData?.map((country, i) => (
          <div
            onClick={() => handleCountryChange(country.phone)}
            key={i}
            style={{
              padding: '10px',
              backgroundColor: countryCode === country?.phone ? '#553ffb' : '',
            }}
          >
            <span style={{ marginRight: '15px' }}>{country?.emoji}</span>
            <span>{country?.phone}</span>
          </div>
        ))}
      </div>
    </Flex>
  );
};

export default CountryLists;
