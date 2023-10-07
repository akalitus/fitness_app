import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  const location = useLocation();

  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      px='20px'
      sx={{
        gap: {
          sm: '90px',
          xs: '24px'
        },
        mt: {
          sm: '32px',
          xs: '20px'
        },
        justifyContent: 'none',
      }}
    >
      <Link to='/'>
        <img
          style={{
            height: '90px',
          }}
          src={Logo}
          alt="logo" />
      </Link>

      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'

        sx={{
          gap: {
            xs: '24px',
            sm: '40px'
          }
        }}
      >
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: location.pathname === '/' && '3px solid #FF2625'
          }}
        >
          Home
        </Link>

        {
          location.pathname === '/'
          &&
          <a
            href='#exercises'
            style={{
              textDecoration: 'none',
              color: '#3A1212'
            }}>
            Exercises
          </a>
        }
      </Stack>
    </Stack >
  )
}

export default Navbar
