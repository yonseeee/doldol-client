'use client';

import { useEffect, useRef } from 'react';

interface Props {
  onClick?: () => void;
}

const ImageButton: React.FC<Props> = ({ onClick }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 오디오 파일 로딩
    audioRef.current = new Audio('/sounds/pop.mp3');
    audioRef.current.volume = 0.5;
  }, []);

  const handleClick = () => {
    // 1. 전달된 onClick 먼저 실행
    onClick?.();

    // 2. 사운드 재생
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.error('🔇 사운드 재생 오류:', err);
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-48 h-48 bg-center bg-contain bg-no-repeat transition-all
        active:bg-[url('/assets/active.png')]
        bg-[url('/assets/default.png')]
        cursor-pointer
      `}
    ></button>
  );
};

export default ImageButton;
