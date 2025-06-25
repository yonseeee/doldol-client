"use client";

import { withAuth } from "@/components/HOC/withAuth";
import ProfileContainer from "@/containers/my-page/Profile";

const MyPage: React.FC = () => {
  return <ProfileContainer />;
};

export default withAuth(MyPage);
