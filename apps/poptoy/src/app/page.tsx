'use client';

import { Button, Typography } from '@ui/components';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const countRef = useRef(0);
  const totalCountRef = useRef(0); // ✅ 추가

  useEffect(() => {
    const savedTotal = localStorage.getItem('totalCount');
    const parsed = savedTotal ? Number(savedTotal) : 0;
    setTotalCount(parsed);
    totalCountRef.current = parsed; // ✅ 초기화 시 ref에도 저장
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countRef.current > 0) {
        // 👉 여기선 서버로 전송만 하고, totalCount는 수정하지 않음
        console.log(`✅ ${countRef.current} clicks sent`);

        // reset only
        setCount(0);
        countRef.current = 0;
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      <Typography variant="h36-bold">메인 페이지</Typography>
      <div className="flex flex-col gap-4 mt-8">
        <Typography variant="h24-bold">집 가고 싶다.</Typography>
        <Typography variant="h24-bold">현재 상태: {totalCount}</Typography>
        <Button variant={'primary'} size={'large'} onClick={handleClick}>
          집 가고 싶다.
        </Button>
      </div>
    </>
  );
}
