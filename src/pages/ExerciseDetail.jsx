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
  const [targetMussleExercises, setTargetMussleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(`${exerciseURL}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youTubeSearchURL}/search?query=${exerciseDetailData.name} exercise`, youTubeSearchOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMussleExercisesData = await fetchData(`${exerciseURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMussleExercises(targetMussleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
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
      <SimilarExercises
        targetMussleExercises={targetMussleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail
