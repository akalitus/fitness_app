import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      px='20px'
      sx={{
        gap: {
          sm: '122px',
          xs: '24px'
        },
        mt: {
          sm: '32px',
          xs: '20px'
        },
        ml: {
          sm: '50px'
        },
        justifyContent: 'none',
      }}
    >
      <Link to='/'>
        <img
          style={{
            width: '48px',
            height: '48px',
            margin: '0 20px'
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
            borderBottom: '3px solid #FF2625'
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{
            textDecoration: 'none',
            color: '#3A1212'
          }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar