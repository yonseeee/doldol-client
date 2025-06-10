'use client';

import { useEffect, useState } from 'react';
import { Button, Typography } from '@ui/components';
import CountUp from 'react-countup';
import { Info } from '@/types/info';
import { supabase } from '@/lib/supabase';
import { RestoreLine } from '@icons/RestoreLine';

const MainRankingContainer = () => {
  const [data, setData] = useState<Info[]>([]);
  const [loading, setLoading] = useState(true); // ✅ 로딩 상태 추가

  const fetchData = async () => {
    setLoading(true); // ✅ 시작 시 로딩 true
    const { data, error } = await supabase
      .from('info')
      .select()
      .order('count', { ascending: false });

    if (!error && data) {
      setData(data);
      // console.log('✅ 데이터 가져오기 성공:', data);
    } else {
      // console.error('❌ 데이터 가져오기 실패:', error);
    }

    setLoading(false); // ✅ 끝나면 로딩 false
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full mt-20">
      <Typography variant={'h24-medium'}>
        누가누가 제일 집에 가고 싶나
      </Typography>

      <Button
        variant={'outlined'}
        size={'small'}
        icon={{ DefaultComponent: RestoreLine }}
        onClick={fetchData}
        className="mt-2 mb-6"
      >
        새로 고침
      </Button>

      {loading ? (
        <Typography variant="b16">불러오는 중...</Typography>
      ) : data.length === 0 ? (
        <Typography variant="b16">표시할 데이터가 없습니다.</Typography>
      ) : (
        data.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full max-w-md p-4 border-b"
          >
            <Typography variant={'b18-medium'}>{index + 1}위</Typography>
            <Typography variant={'b18'}>{item.group_name}</Typography>
            <Typography variant={'b16'}>
              <CountUp end={item.count} duration={2} />회
            </Typography>
          </div>
        ))
      )}
    </div>
  );
};

export default MainRankingContainer;
