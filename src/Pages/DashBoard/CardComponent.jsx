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
  Divider,
  Link,
} from '@chakra-ui/react';
import {
  Icon as TablerIcon,
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  Settings,
  Logout,
  SwitchHorizontal,
} from 'tabler-icons-react';

const mockData = [
  {
    today: 'today',
    weekOne: '1W',
    dateRange: { Icon: 'User', dayTime: 'Friday 04 June, 2021.' },
  },
];

const DatePickerParent = () => {
  return mockData.map((item, index) => {
    return (
      <Box key={index}>
        <Box display='flex'>
          {item?.today && <div>{item?.today}</div>}
          {item?.weekOne && <div>{item?.weekOne}</div>}
          {item?.dateRange?.Icon && <div>{item?.dateRange?.Icon}</div>}
        </Box>
        <Box>
          {item?.dateRange?.dayTime && <div>{item?.dateRange?.dayTime}</div>}
        </Box>
      </Box>
    );
  });
};
const CardComponent = ({ item: tensil }) => {
  return (
    <Flex
      as='div'
      w='618px'
      h='205px'
      mr='50px'
      p={30}
      borderRadius={6}
      boxShadow='0px 1px 2px rgba(61, 67, 86, 0.2)'
      background='#FFFFFF'
    >
      <Box>
        {tensil?.Revenue && tensil?.TotalOrders && tensil?.TotalCustomers && (
          <DatePickerParent />
        )}
        <hr></hr>
        <Box display='flex'>
          {tensil?.Revenue && <div>{tensil?.Revenue}</div>}
          {tensil?.TotalOrders && <div>{tensil?.TotalOrders}</div>}
          {tensil?.TotalCustomers && <div>{tensil?.TotalCustomers}</div>}
          {tensil?.TotalProducts && <div>{tensil?.TotalProducts}</div>}
          {tensil?.TotalDrivers && <div>{tensil?.TotalDrivers}</div>}
        </Box>
      </Box>
    </Flex>
  );
};

export default CardComponent;
