import React, { useState } from 'react';
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
import Header from './Header/Header';
import { Heading } from '@chakra-ui/react';
import searchIcon from '../../Assets/searchIcon.svg';
import Icon from 'Components/Icon/Icon';
import { Radio, RadioGroup } from '@chakra-ui/react';
import brandLogoIcon from '../../Assets/logo.svg';

const companies = [
  {
    _id: '62418aca3aea74699087ef58',
    name: 'bush',
    imgUrl: `${brandLogoIcon}`,
    description:
      'Browse premium related images on iStock | Save 20% with code UNSPLASH20',
    __v: 0,
  },
  {
    _id: '62418aca3aea74699087ef59',
    name: 'harn',
    imgUrl: `${brandLogoIcon}`,
    description: 'Code on a laptop screen',
    __v: 0,
  },
  {
    _id: '62418aca3aea74699087ef5a',
    name: 'lumy',
    imgUrl: `${brandLogoIcon}`,
    description: 'The focus',
    __v: 0,
  },
  {
    _id: '62418aca3aea74699087ef5b',
    name: 'Algo-baba',
    imgUrl: `${brandLogoIcon}`,
    description: 'Editorial, Health & Wellness, Athletics',
    __v: 0,
  },
  {
    _id: '62418d993aea74699087ef62',
    name: 'lummy',
    imgUrl: `${brandLogoIcon}`,
    description: 'The focus',
    __v: 0,
  },
  {
    _id: '62418d993aea74699087ef61',
    name: 'harlan',
    imgUrl: `${brandLogoIcon}`,
    description: 'Code on a laptop screen',
    __v: 0,
  },
  {
    _id: '62418d993aea74699087ef60',
    name: 'Jc-ush',
    imgUrl: `${brandLogoIcon}`,
    description:
      'Browse premium related images on iStock | Save 20% with code UNSPLASH20',
    __v: 0,
  },
  {
    _id: '62418d993aea74699087ef63',
    name: 'Algo-bba',
    imgUrl: `${brandLogoIcon}`,
    description: 'Editorial, Health & Wellness, Athletics',
    __v: 0,
  },
  {
    _id: '62418dac3aea74699087ef6b',
    name: 'Alo-baba',
    imgUrl: `${brandLogoIcon}`,
    description: 'Editorial, Health & Wellness, Athletics',
    __v: 0,
  },
  {
    _id: '62418dac3aea74699087ef6a',
    name: 'lmy',
    imgUrl: `${brandLogoIcon}`,
    description: 'The focus',
    __v: 0,
  },
  {
    _id: '62418dac3aea74699087ef69',
    name: 'arlan',
    imgUrl: `${brandLogoIcon}`,
    description: 'Code on a laptop screen',
    __v: 0,
  },
  {
    _id: '62418dac3aea74699087ef68',
    name: 'Jc-bu',
    imgUrl: `${brandLogoIcon}`,
    description:
      'Browse premium related images on iStock | Save 20% with code UNSPLASH20',
    __v: 0,
  },
];

const entireBgColr = {
  backgroundColor: '#E5E5E5',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};

const WelcomePage = () => {
  const [selectedValue, setValue] = React.useState({});
  const [active, setActive] = useState(false);

  // the value of the search field
  const [inputValue, setInputValue] = useState('');

  // the search result
  const [foundCompany, setFoundCompany] = useState(companies);

  // check if keywordSearch not empty, filter foundCompany to match keyword search.
  const onInputFilter = (e) => {
    let keyword = e.target.value;
    if (keyword !== '') {
      let filteredCompany = foundCompany.filter((company) =>
        company.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFoundCompany(filteredCompany);
    } else {
      // If the text field is empty, show all companiesInfo
      setFoundCompany(companies);
    }

    setInputValue(keyword);
  };

  const onCompanyChange = (name, value) => {
    setValue((old) => ({
      ...old,
      [name]: value,
    }));
    setActive(true);
  };

  return (
    <div style={entireBgColr}>
      <Header />
      <Flex alignItems='center' flexDir='column' m='auto' maxW='593px'>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Heading as='h4' fontSize='28px'>
            Welcome
          </Heading>
          <Text color='gray.100' isTruncated>
            Please select the name of the store you want to sign in to.
          </Text>
        </Box>

        {/* input filter-search area */}

        <Flex
          mt={5}
          as='div'
          bg='#FFFFFF'
          w='593px'
          maxH='510px'
          p={3}
          flexDir='column'
          borderRadius={6}
        >
          <InputGroup onChange={onInputFilter} inputValue={inputValue}>
            <InputLeftElement
              children={<Icon src={searchIcon} color='gray.300' />}
            />

            <Input
              type='text'
              placeholder='Search Shop'
              focusBorderColor='none'
              bg='#F4F5F7'
              border='none'
              value={inputValue}
            />
          </InputGroup>

          <RadioGroup
            mt={5}
            overflowY='scroll'
            onChange={(value) => onCompanyChange('name', value)}
            selectedValue={selectedValue}
          >
            <div>
              {foundCompany && foundCompany.length > 0 ? (
                foundCompany.map((company) => (
                  <div
                    borderRadius={5}
                    style={{
                      background:
                        selectedValue?.name === company?.name && '#AEB3FF',
                      borderRadius: '5px',
                    }}
                  >
                    <Radio
                      size='sm'
                      colorScheme='purple'
                      name={company._id}
                      value={company.name}
                      alignItems='center'
                      ml={4}
                    >
                      <div style={{ display: 'flex', alignItems: 'start' }}>
                        <Image
                          w={45}
                          h={45}
                          borderRadius={6}
                          src={company.imgUrl}
                          ml={4}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '18px',
                          }}
                        >
                          <span
                            style={{
                              color: '#040A1D',
                              fontWeight: 500,
                              fontSize: '16px',
                            }}
                          >
                            {company.name}
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                            }}
                          >
                            {company.description}
                          </span>
                        </div>
                      </div>
                    </Radio>
                  </div>
                ))
              ) : (
                <Heading display='flex' alignItems='center' flexDir='column'>
                  Not found
                </Heading>
              )}
            </div>
          </RadioGroup>
        </Flex>
        {active ? (
          <Button mt={4} w='full' color='white' bg='#553FFB'>
            Continue
          </Button>
        ) : (
          <Button mt={4} w='full' color='white'>
            Continue
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default WelcomePage;
