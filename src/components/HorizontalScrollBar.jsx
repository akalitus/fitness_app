import React, { useEffect, useRef } from "react";
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
  const containerRef = useRef(null);
  const scrollStep = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    scrollStep.current = container.clientWidth;
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;

    if (direction === "left") {
      container.scrollTo({
        left: scrollLeft - scrollStep.current,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      container.scrollTo({
        left: scrollLeft + scrollStep.current,
        behavior: "smooth",
      });
    }
  };

  const handleContainerScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const leftArrow = containerRef.current.parentNode.querySelector('.left-arrow');
    const rightArrow = containerRef.current.parentNode.querySelector('.right-arrow');

    leftArrow.disabled = scrollLeft === 0;
    rightArrow.disabled = scrollLeft + clientWidth === containerWidth;

    if (scrollLeft === 0) {
      leftArrow.classList.add('arrow_disabled')
    } else if (scrollLeft + clientWidth === containerWidth) {
      rightArrow.classList.add('arrow_disabled')
    } else {
      leftArrow.classList.remove('arrow_disabled')
      rightArrow.classList.remove('arrow_disabled')
    }
  };

  const LeftArrow = () => {
    return (
      <Typography
        onClick={() => handleScroll("left")}
        className="left-arrow arrow_disabled"
      >
        <img src={LeftArrowIcon}
          alt="left-arrow" />
      </Typography>
    );
  };

  const RightArrow = () => {
    return (
      <Typography
        onClick={() => handleScroll("right")}
        className="right-arrow"
      >
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return (
    <Box className="scrollWrapper">
      <LeftArrow />
      <RightArrow />
      <Box
        className='scroll-container'
        ref={containerRef}
        onScroll={handleContainerScroll}
      >

        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m='0 40px'
          >
            {isBodyParts
              ? <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
              : <ExerciseCard
                exercise={item} />
            }
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default HorizontalScrollBar
