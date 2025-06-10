'use client';

import { GROUP_SORT } from '@/common';
import ImageButton from '@/components/ImageButton';
import { supabase } from '@/lib/supabase';
import Dropdown from '@ui/components/Dropdown/Dropdown';
import { useState, useRef, useEffect } from 'react';

const MainCountContainer = () => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [group, setGroup] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  const countRef = useRef(0);
  const totalCountRef = useRef(0);
  const groupRef = useRef('');
  const textRef = useRef<HTMLParagraphElement>(null);

  const onChangeGroup = (item: any) => {
    if (item.id === '0') {
      setGroup('');
    } else {
      setGroup(item.label);
    }
  };

  // group이 바뀔 때마다 ref도 최신화
  useEffect(() => {
    groupRef.current = group;
  }, [group]);

  // 🔸 localStorage에서 초기 totalCount 불러오기
  useEffect(() => {
    const savedTotal = localStorage.getItem('totalCount');
    const parsed = savedTotal ? Number(savedTotal) : 0;
    setTotalCount(parsed);
    totalCountRef.current = parsed;
  }, []);

  // 🔸 10초마다 서버 전송 (여기선 console.log로 대체)
  useEffect(() => {
    const interval = setInterval(async () => {
      console.log(
        `현재 클릭 수: ${countRef.current}, 그룹: ${groupRef.current}`
      );
      if (countRef.current > 0 && groupRef.current !== '') {
        const increment = countRef.current;

        const { error } = await supabase.rpc('increment_count', {
          group_name_input: groupRef.current,
          increment_value: increment,
        });

        if (error) {
          console.error('❌ Supabase 업데이트 실패:', error);
        } else {
          console.log(`✅ ${increment} clicks sent to Supabase`);
          setCount(0);
          countRef.current = 0;
        }
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
      setIsActive(true);
      handleClick();

      if (textRef.current) {
        textRef.current.classList.add('shake-scale');
        setTimeout(() => {
          textRef.current?.classList.remove('shake-scale');
        }, 600);
      }

      // 일정 시간 후 active 해제
      setTimeout(() => {
        setIsActive(false);
      }, 250); // 100~150ms 정도가 자연스럽습니다
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
      <div className="flex gap-4 mt-8">
        <Dropdown
          items={GROUP_SORT}
          displayKey="label"
          valueKey="id"
          placeholder="회차 선택"
          onChange={onChangeGroup}
        />
      </div>
      <p ref={textRef} className="text-2xl font-bold mt-4 transition-all">
        집 가고 싶다 x {totalCount}
      </p>
      <ImageButton onClick={handleClick} isActive={isActive} />
    </div>
  );
};

export default MainCountContainer;
