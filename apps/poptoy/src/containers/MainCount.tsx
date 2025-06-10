'use client';

import ImageButton from '@/components/ImageButton';
import { useState, useRef, useEffect } from 'react';

const MainCountContainer = () => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const countRef = useRef(0);
  const totalCountRef = useRef(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  // 🔸 localStorage에서 초기 totalCount 불러오기
  useEffect(() => {
    const savedTotal = localStorage.getItem('totalCount');
    const parsed = savedTotal ? Number(savedTotal) : 0;
    setTotalCount(parsed);
    totalCountRef.current = parsed;
  }, []);

  // 🔸 10초마다 서버 전송 (여기선 console.log로 대체)
  useEffect(() => {
    const interval = setInterval(() => {
      if (countRef.current > 0) {
        console.log(`✅ ${countRef.current} clicks sent`);
        setCount(0);
        countRef.current = 0;
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // 🔸 클릭 처리 함수
  const handleClick = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      countRef.current = newCount;
      return newCount;
    });

    setTotalCount((prev) => {
      const newTotal = prev + 1;
      localStorage.setItem('totalCount', newTotal.toString());
      totalCountRef.current = newTotal;
      return newTotal;
    });
  };

  // 🔸 모든 키 입력 시 클릭 + 애니메이션 실행
  useEffect(() => {
    const handleKeyDown = () => {
      handleClick();

      if (textRef.current) {
        textRef.current.classList.add('shake-scale');
        setTimeout(() => {
          textRef.current?.classList.remove('shake-scale');
        }, 600);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-8 items-center text-center">
      이건 단순한 클릭이 아닙니다 이것은 절규입니다.
      <br /> 지금 이순간에도 누군가는 ‘집’ 을 외치고 있습니다.
      <br />
      클릭 한 번으로 집에 갈 순 없지만, 순위는 올릴 수 있습니다.
      <p ref={textRef} className="text-2xl font-bold mt-4 transition-all">
        집 가고 싶다 x {totalCount}
      </p>
      <ImageButton onClick={handleClick} />
    </div>
  );
};

export default MainCountContainer;
