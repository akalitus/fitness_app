import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, exerciseURL, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    try {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData(`${exerciseURL}/bodyPartList`, exerciseOptions);

        setBodyParts(['all', ...bodyPartsData]);
      }

      fetchExercisesData();
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleInput = (e) => {
    setSearch(e.target.value.toLocaleLowerCase())
  }

  const handleSearch = async () => {
    try {
      if (search) {
        const exercisesData = await fetchData(exerciseURL, exerciseOptions)

        const searcedData = exercisesData.filter((item) =>
          item.name.toLocaleLowerCase().includes(search)
          || item.target.toLocaleLowerCase().includes(search)
          || item.equipment.toLocaleLowerCase().includes(search)
          || item.bodyPart.toLocaleLowerCase().includes(search)
        );

        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: 'smooth'
        });

        setSearch('');
        setExercises(searcedData);
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Stack
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px'
          }
        }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box
        position='relative'
        mb='72px'
        display='flex'
      >
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
              width: '100%'
            },
            width: {
              lg: '800px',
              sm: '350px',
              xs: '200px'
            },
            background: 'FFFFFF',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={handleInput}
          placeholder='Search Exercises'
          type='text'
        />

        <Button
          className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#FFFFFF',
            textTransform: 'none',
            width: {
              lg: '175px',
              xs: '80px'
            },
            fontSize: {
              lg: '20px',
              xs: '14px'
            },
            height: '56px',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px'
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
