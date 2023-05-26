export interface UserDto {
  country?: string;
  date_naissance?: string;
  email?: string;
  firstname?: string;
  id?: string;
  isActive?: boolean;
  lastConnection?: string;
  lastname?: string;
  password?: string;
  phone?: string;
  role?: string;
  tryCount?: number;
}

export interface firstStepUser {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
}
