import React, { useState } from 'react';
import _ from 'lodash';
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
import axios from 'axios';
import { useEffect } from 'react';
import truncate from 'lodash/truncate';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const entireBgColr = {
  backgroundColor: '#E5E5E5',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  position: 'fixed',
};

// const fetchCompanyData = () => {
//   return;
// };
// const fetchCompanyData = async () => {
//   const response = await axios.get(
//     `http://localhost:4000/chakventory/companies`
//   );
//   return response.data;
// };

const WelcomePage = ({ selectedCompany, setSelectedCompany }) => {
  let navigate = useNavigate();

  // the value of the search field
  const [inputValue, setInputValue] = useState('');

  // the search result
  const [foundCompany, setFoundCompany] = useState();

  // useEffect(() => {
  //   const getCompanies = async () => {
  //     try {
  //       const response = await axios.get(
  //         'http://localhost:4000/chakventory/companies'
  //       );
  //       console.log(response);
  //       setFoundCompany(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getCompanies();
  // }, []);

  // const { isLoading, data } = useQuery('company-stores', async () => {
  //   const postsData = await axios.get(
  //     'http://localhost:4000/chakventory/companies'
  //   );
  //   return postsData;
  // });

  const { isLoading, data } = useQuery('stores', async () => {
    const postsData = await axios.get('chakventory/companies');
    return postsData;
  });
  useEffect(() => setFoundCompany(data?.data), [data?.data]);

  useEffect(() => {
    const controller = new AbortController();
    const searchStore = async (search) => {
      const { data } = await axios.get('chakventory/companies', {
        params: { search },
        signal: controller.signal,
      });

      setFoundCompany(data);
    };

    if (inputValue) {
      searchStore(inputValue);
    }

    return () => controller.abort();
  }, [inputValue]);

  if (isLoading) {
    return <div>loadong...</div>;
  }

  const onInputFilter = (e) => {
    let keyword = e.target.value;
    setInputValue(keyword);
  };

  // check if keywordSearch not empty, filter foundCompany to match keyword search.
  // const filteredCompany = inputValue
  // ? foundCompany.filter((company) =>
  //     company?.name?.toLowerCase().includes(inputValue?.toLowerCase())
  //   )
  // ?
  // : foundCompany;

  return (
    <div style={entireBgColr}>
      <Header />
      <Flex alignItems='center' flexDir='column' m='auto' maxW='593px'>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Heading as='h4' fontSize='28px'>
            Welcome
          </Heading>
          <Text color='#8892A2' isTruncated>
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
          <InputGroup onChange={onInputFilter}>
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

          <RadioGroup mt={5} maxH='510px' overflowY='scroll'>
            <div>
              {foundCompany && foundCompany.length > 0 ? (
                foundCompany.map((company) => (
                  <div
                    key={company._id}
                    onClick={() => setSelectedCompany(company)}
                    style={{
                      borderRadius: '5px',
                      background:
                        selectedCompany?._id === company?._id && 'teal',
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
                            {company?.name}
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                            }}
                          >
                            {truncate(company.description, {
                              length: 40,
                              separator: ' ',
                              omission: ' ...',
                            })}
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
        {!_.isEmpty(selectedCompany) ? (
          <Button
            onClick={() => navigate('/login')}
            mt={4}
            w='full'
            color='white'
            bg='#553FFB'
            _hover={{
              backgroundColor: 'none',
            }}
          >
            Continue
          </Button>
        ) : (
          <Button mt={4} w='full' disabled color='white'>
            Continue
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default WelcomePage;
