import React, { useState } from 'react';
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Group,
} from '@mantine/core';
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
// import { MantineLogoSmall } from '../../shared/MantineLogo';
import { Card, Badge, useMantineTheme } from '@mantine/core';
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
import brandLogoIcon from '../../Assets/logo.svg';
import useOnClickOutside from 'Hooks/useOnClickOutside';

const useStyles = createStyles((theme) => ({
  link: {
    width: 100,
    height: 71,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '3px',
    cursor: 'pointer',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },

  active: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][3], 0.25)
          : theme.fn.rgba('#B197FC', 0.25),
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },
}));

const financeData = [{ Overview: 'Overview', History: 'Transaction History' }];
const FinanceSideDRopdown = ({ onClick }) => {
  return financeData.map((item, index) => {
    return (
      <div key={index}>
        <Card.Section
          style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: '1',
            marginLeft: '65px',
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            top: '290px',
            boxShadow: ' 0px 0px 10px rgba(61, 67, 86, 0.2)',
            borderRadius: '6px',
            padding: '8px',
            fontSize: '12px',
            fontWeight: '500',
            color: '#040A1D',
            cursor: 'pointer',
            height: '71px',
          }}
          onClick={onClick}
        >
          <Text mb='20px'> {item.Overview}</Text>
          <Text>{item.History}</Text>
        </Card.Section>
      </div>
    );
  });
};

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
  showFinance,
  onDropDownDisclosure,
}) => {
  const { classes, cx } = useStyles();
  const handleNextPage = () => {
    window.alert('Im working!!');
  };

  return (
    <div>
      <Card.Section
        onClick={onClick}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(85, 63, 251, 0.1)',
          },
        }}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon
          style={{
            color: active && '#553FFB',
          }}
        />
        {label === 'Finance' && (
          <div>
            {showFinance && (
              <FinanceSideDRopdown onClick={() => handleNextPage()} />
            )}
          </div>
        )}
        <Text
          sx={{
            fontSize: '12px',
          }}
        >
          {label}
        </Text>
      </Card.Section>
    </div>
  );
};

const mockdata = [
  { icon: Home2, label: 'Dashboard' },
  { icon: Gauge, label: 'Orders' },
  { icon: DeviceDesktopAnalytics, label: 'Finance' },
  { icon: CalendarStats, label: 'Inventory' },
  { icon: User, label: 'Customers' },
  { icon: Fingerprint, label: 'Logistics' },
  { icon: Settings, label: 'Coupon Codes' },
  { icon: User, label: 'Users' },
  { icon: User, label: 'Settings' },
];

const NavSideBar = () => {
  const [active, setActive] = useState(2);
  const [showFinance, setFinance] = useState(false);
  let varCheck = 'Finance';

  const { ref } = useOnClickOutside(() => setFinance(false));
  const handleOnClick = (index, link) => {
    setActive(index);
    setFinance(false);
    if (link.label === varCheck) {
      return setFinance(!showFinance);
    }
  };
  const onDropDownDisclosure = () => {};
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      showFinance={showFinance}
      active={index === active}
      onClick={() => handleOnClick(index, link)}
      onDropDownDisclosure={() => onDropDownDisclosure()}
    />
  ));

  return (
    <Navbar ref={ref} height={'100vh'} width={'120px'} p='md'>
      <Center>
        <Image
          mt='2.375rem'
          htmlHeight='38.44px'
          htmlWidth='78px'
          src={brandLogoIcon}
          alt='chakventory'
        />
      </Center>
      <Navbar.Section grow mt={50}>
        <Group direction='column' align='center' spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavSideBar;
