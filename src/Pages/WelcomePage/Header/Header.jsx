import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import brandLogoIcon from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <>
      <Box>
        <Image
          ml='2.875rem'
          mt='2.375rem'
          htmlHeight='38.44px'
          htmlWidth='78px'
          src={brandLogoIcon}
          alt='chakventory'
        />
      </Box>
    </>
  );
};

export default Header;
