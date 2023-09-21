import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMussleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: {
          lg: '100px',
          xs: '50px'
        },
        ml: {
          sm: '50px'
        },
        p: '20px',
      }}
    >
      <Typography
        variant='h3'
        mb={5}
      >
        Exercises that target the same muscle group
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
              data={targetMussleExercises}
            />
            : <Loader />
        }
      </Box>

      <Typography
        variant='h3'
        mb={5}
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
              data={equipmentExercises}
            />
            : <Loader />
        }
      </Box>
    </Box>
  )
}

export default SimilarExercises
