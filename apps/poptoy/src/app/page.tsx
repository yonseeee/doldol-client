'use client';

import { CommonLayout } from '@/components/layout/CommonLayout';
import MainCountContainer from '@/containers/MainCount';
import MainRankingContainer from '@/containers/Ranking';

export default function Home() {
  return (
    <CommonLayout isLogoVisible isFooterVisible>
      <MainCountContainer />
      <MainRankingContainer />
    </CommonLayout>
  );
}
