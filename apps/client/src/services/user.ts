import { MyInfoResponse, UpdateUserInfoRequest } from "@/types/user";
import { apiClient } from "./apiClient";

export const getUserInfo = () => {
  return apiClient.get<MyInfoResponse>("/user/info");
};

export const patchUserInfo = (data: UpdateUserInfoRequest) => {
  return apiClient.patch("/user/info", data);
};
