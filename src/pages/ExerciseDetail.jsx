import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, exerciseURL, youTubeSearchURL, youTubeSearchOptions } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(`${exerciseURL}/exercises/exercise/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youTubeSearchURL}/search?query=${exerciseDetailData.name} exercise`, youTubeSearchOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
