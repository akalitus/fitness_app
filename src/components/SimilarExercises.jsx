import React from 'react';
import { Box, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ currentExercise, targetMussleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: {
          lg: '100px',
          xs: '50px'
        },
        p: '20px',
      }}
    >
      <Typography
        mb={5}
        sx={{
          fontSize: {
            lg: '48px',
            xs: '36px'
          },
          lineHeight: '1.15'
        }}
      >
        Exercises that target the same muscle group
      </Typography>

      <Box
        direction='row'
        mb='80px'
        sx={{
          p: '2',
          position: 'relative'
        }}
      >
        {
          targetMussleExercises.length
            ? <HorizontalScrollBar
              data={targetMussleExercises.filter((item) => item.name !== currentExercise)}
            />
            : <Loader />
        }
      </Box>

      <Typography
        mb={5}
        sx={{
          fontSize: {
            lg: '48px',
            xs: '36px'
          },
          lineHeight: '1.15'
        }}
      >
        Exercises that use the same equipment
      </Typography>

      <Box
        direction='row'
        sx={{
          p: '2',
          position: 'relative'
        }}
      >
        {
          targetMussleExercises.length
            ? <HorizontalScrollBar
              data={targetMussleExercises.filter((item) => item.name !== currentExercise)}
            />
            : <Loader />
        }
      </Box>
    </Box>
  )
}

export default SimilarExercises
