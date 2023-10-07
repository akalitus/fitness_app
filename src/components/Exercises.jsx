import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions, exerciseURL, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const exercisesList = exercises.slice(0);

  const lastExercise = currentPage * exercisesPerPage;
  const firstExercise = lastExercise - exercisesPerPage;
  const currentExercises = exercisesList.slice(firstExercise, lastExercise);

  const paginate = (evt, value) => {
    setCurrentPage(value);

    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      try {
        if (bodyPart === 'all') {
          exercisesData = await fetchData(`${exerciseURL}/exercises`, exerciseOptions);

        } else {
          exercisesData = await fetchData(`${exerciseURL}/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercises(exercisesData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchExercisesData();
  }, [bodyPart, setExercises])

  return (
    <Box
      id='exercises'
      sx={{
        mt: {
          lg: '100px',
          xs: '50px'
        },
      }}
      position="relative"
      p='20px'
    >
      <Typography
        variant='h3'
        mb='46px'
      >
        Showing Results
      </Typography>

      <Stack
        align-items='center'
        sx={{
          gap: {
            lg: '70px',
            xs: '30px'
          },
          display: {
            sm: 'grid',
            xs: 'flex'
          },
          gridTemplateColumns: {
            lg: 'repeat(3, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
          gridAutoRows: 'max-content'
        }}
        justifyContent='center'>
        {currentExercises.map((exercise, index) => (

          <ExerciseCard
            key={index}
            exercise={exercise}
          />
        ))}
      </Stack>

      <Stack
        mt='100px'
        alignItems='center'
      >
        {exercises.length > exercisesPerPage
          && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises
