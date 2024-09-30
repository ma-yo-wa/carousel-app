import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import pause from '../../assets/pause.svg';
import play from '../../assets/play.svg';
import toggleMuteButton from '../../assets/toggleMute.svg';

interface VideoPlayerProps {
  video: {
    id: string;
    url: string;
  };
  isActive: boolean;
  autoPlay: boolean;
}
const ActiveVideo =  styled.div<{ isActive: boolean }>`
  border: 4px solid ${({ isActive }) => (isActive ? '#69A2FF' : 'transparent')};
  padding: 12px;
  border-radius: 20px;
 
`
const VideoWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const Video = styled.video`
  width: 300px;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const ControlButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isActive, autoPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVideoLoaded) {
          setIsVideoLoaded(true);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isVideoLoaded]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <ActiveVideo isActive={isActive}>
      <VideoWrapper>
        <Video
          ref={videoRef}
          src={video.url}
          autoPlay={autoPlay}
          muted={autoPlay}
          loop
          playsInline
        >
          {isVideoLoaded && <source src={video.url} type="video/mp4" />}
        </Video>
        {isActive && (
          <Controls>
            <ControlButton onClick={toggleMute}>
              <img src={toggleMuteButton}/>
            </ControlButton>
            <ControlButton onClick={togglePlay}>
              {isPlaying ? <img src={pause}/> : <img src={play}/>}
            </ControlButton>
          </Controls>
        )}
      </VideoWrapper>
    </ActiveVideo>
  );
};