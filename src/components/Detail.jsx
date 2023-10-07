import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import { setExerciseDesc } from '../utils/setExerciseDesc';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: {
          md: 'row'
        },
        mt: {
          lg: '100px',
          xs: '50px'
        },
        p: '20px',
        alignItems: 'center',
      }}    >
      <img
        src={gifUrl}
        alt={name}
        loading='lazy'
        className='detail-image' />

      <Stack
        sx={{
          gap: {
            lg: '35px',
            xs: '20px'
          }
        }}>
        <Typography
          variant='h3'
          textTransform='capitalize'
        >
          {name}
        </Typography>

        <Typography
          variant='h6'
        >
          {setExerciseDesc(name, target)}
        </Typography>

        {extraDetail.map((item) => (
          <Stack
            key={item.icon}
            direction='row'
            gap='24px'
            alignItems='center'
          >
            <Button
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                sx={{
                  width: '50px',
                  height: '50px'
                }}
              />
            </Button>

            <Typography
              textTransform='capitalize'
              variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
