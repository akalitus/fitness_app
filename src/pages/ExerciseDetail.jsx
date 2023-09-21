import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, exerciseURL, youTubeSearchURL } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(`${exerciseURL}/exercises/exercise/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);
    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
