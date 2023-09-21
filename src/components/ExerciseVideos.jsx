import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading related videos...';

  return (
    <Box
      sx={{
        mt: {
          lg: '200px',
          xs: '20px'
        }
      }}
      p='20px'
    >
      <Typography
        variant='h4'
        mb='33px'>
        Watch
        {' '}
        <span
          style={{
            color: '#FF2625',
            textTransform: 'capitalize'
          }}>
          {name}
        </span>
        {' '}
        exercise videos
      </Typography>

      <Box
        className='exercise-video-container'
        sx={{
          gap: {
            lg: '80px',
            sm: '50px',
            xs: '0'
          },
        }}>
        {exerciseVideos?.slice(0, 6)?.map((item) => (
          <a
            key={item.video.videoId}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title} />

            <Box>
              <Typography
                variant='h5'
                color='#000000'
              >
                {item.video.title}
              </Typography>

              <Typography
                variant='h6'
                color='#000000'
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  )
}

export default ExerciseVideos
