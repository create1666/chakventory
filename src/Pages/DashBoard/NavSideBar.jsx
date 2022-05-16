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
import { Image, Box } from '@chakra-ui/react';
import brandLogoIcon from '../../Assets/logo.svg';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const NavbarLink = ({ icon: Icon, label, active, onClick }) => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position='right' withArrow transitionDuration={0}>
      <UnstyledButton
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
      </UnstyledButton>
    </Tooltip>
  );
};

const mockdata = [
  { icon: Home2, label: 'Home' },
  { icon: Gauge, label: 'Dashboard' },
  { icon: DeviceDesktopAnalytics, label: 'Analytics' },
  { icon: CalendarStats, label: 'Releases' },
  { icon: User, label: 'Account' },
  { icon: Fingerprint, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

const NavSideBar = () => {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar height={'100vh'} width={{ base: 80 }} p='md'>
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
