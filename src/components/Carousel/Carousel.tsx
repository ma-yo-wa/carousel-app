import React, { useState } from 'react';
import styled from 'styled-components';
import { VideoPlayer } from './VideoPlayer';
import previousButton from '../../assets/previous.svg';
import nextButton from '../../assets/next.svg';

interface Video {
  id: string;
  url: string;
  title: string;
}

interface CarouselProps {
  videos: Video[];
}

const CarouselWrapper = styled.div`
  margin: 0 auto;
  padding: 120px 0 80px 80px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 82px 0 82px 16px;
  }
`;

const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-right: 80px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const NavigationButtons = styled.div`
  display: none;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  padding: 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 20px;
  margin-right: -50px;
  overflow-y: hidden;
`;

const CarouselItem = styled.div`
`;

const VideoTitle = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
`;

export const Carousel: React.FC<CarouselProps> = ({ videos }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleVideos = [...videos.slice(startIndex), ...videos.slice(0, startIndex)].slice(0, 5);

  return (
    <CarouselWrapper>
      <CarouselHeader>
        <Title>A day in the life</Title>
        <NavigationButtons>
          <NavButton onClick={handlePrev}>
            <img src={previousButton}/>
          </NavButton>
          <NavButton onClick={handleNext}>
            <img src={nextButton}/>
          </NavButton>
        </NavigationButtons>
      </CarouselHeader>
      <CarouselTrack>
        {visibleVideos.map((video, index) => (
          <CarouselItem 
            key={video.id}
          >
            <VideoPlayer
              video={video}
              isActive={index === 0}
              autoPlay={index === 0}
            />
            <VideoTitle>{video.title}</VideoTitle>
          </CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselWrapper>
  );
};