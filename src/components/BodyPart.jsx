import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  const handleClick = () => {
    setBodyPart(item);
    window.scrollTo({
      top: 1800, left: 100, behavior: 'smooth'
    })
  }

  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className="body-part__card"
      sx={{
        borderTop: bodyPart === item
          && '4px solid #FF2625',
        background: '#FFFFFF',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={handleClick}
    >
      <img
        className='body-part-icon'
        style={{
          width: '40px',
          height: '40px'
        }}
        src={Icon}
        alt='dumbbell'
      />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize">
        {item}
      </Typography>

    </Stack>
  )
}

export default BodyPart
