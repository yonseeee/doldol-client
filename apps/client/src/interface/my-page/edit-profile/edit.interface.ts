export interface EditProfileInputForm {
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface EditProfileRequest {
  name: string;
  password?: string; // 일반 유저만 보냄
}
