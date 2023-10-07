import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import { linkData } from '../data/linkData';

const Footer = () => {
  return (
    <Box
      mt='80px'
      bgcolor='#FFF3F4'
    >
      <Stack
        gap='20px'
        alignItems='center'
        px='40px'
        pt='24px'
      >
        <img
          height='90px'
          src={Logo}
          alt='logo' />

        <Typography
          variant='h5'
          pb='40px'
          mt='20px'
          textAlign='center'
        >
          Made by
          {' '}
          <a
            style={{
              textDecoration: 'none',
              color: '#3A1212',
            }}
            href={linkData}
          >
            Sergey Ladorski
          </a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
