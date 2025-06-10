import { Info } from '@/types/info';
import { Typography } from '@ui/components';
import dayjs from 'dayjs';
import CountUp from 'react-countup';

const sampleData: Info[] = [
  {
    id: 1,
    group_name: '전공 15회차',
    count: 97,
    created_at: dayjs('2023-10-01T12:00:00Z'),
  },
  {
    id: 2,
    group_name: '전공 16회차',
    count: 1024,
    created_at: dayjs('2023-10-01T12:00:00Z'),
  },
  {
    id: 3,
    group_name: '전공 17회차',
    count: 108,
    created_at: dayjs('2023-10-01T12:00:00Z'),
  },
  {
    id: 4,
    group_name: '전공 18회차',
    count: 0,
    created_at: dayjs('2023-10-01T12:00:00Z'),
  },
];

const MainRankingContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Typography variant={'h36'}>집 가고 싶은 단체 랭킹</Typography>
      {sampleData.map((item, index) => (
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
      ))}
    </div>
  );
};

export default MainRankingContainer;
