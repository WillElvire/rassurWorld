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
  role?: RoleDto | any;
  tryCount?: number;
  isCollaborateur?: boolean;
  code?: string;
}

export interface BeneficiaryDto {
  id?: string;
  firstname?: string;
  lastname?: string;
  dateOfBirth?: string;
  job?: string;
  death?: string;
  ipt?: string;
  areaOfBirth ?:string;
  medicalFees?: string;
  user ?:string;
  assuranceId ?:string;
}

export interface IndividuelleSanteDto {
  principal_activity: string;
  warn_tool_used: string;
  other_activity: string;
  sport_activity: string;
  circulation: boolean;
  isAssured: boolean;
  society: string;
  salary: string;
  taille: string;
  poids: string;
  usage: string;
  surdite: string;
  vision: string;
  pathologie: string;
  infirmite: string;
  degre_infirmite: string;
  maladie_chronique: string;
  autre: string;
}

export interface UserStateDto {
  user: UserDto;
  token: string;
}

export interface firstStepUser {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  password?: string;
  useWhatsapp?: boolean;
  isCollaborateur?: boolean;
  country?: string;
}


export interface insuranceDetail {
  isPayed: boolean,
  isActive: boolean,
  parrainCode:string ,
  user: boolean,
  offer: string,
  detail: string,
  transaction: string,
  date: string,
  createdAt: string,
  isAcepted: string,
  id: string
}
export interface tripInsuranceDto {
  dateOfLeft?: string;
  dateOfBack?: string;
  /*passportNub?: string,
  passportValidity ?: string,
  passportDayOfCreation ?:string,*/
  country?: string;
  tripMotif?: string;
  destination?: string;
  relationship?: string;
  parrainCode?: string;
}

export interface ItypeTiers {
  name?: string;
  guaranty?: [{ name?: string; description?: string; active?: boolean }];
  active?: boolean;
  index?: number;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RoleDto {
  id?: string;
  libelle?: string;
  flag?: number;
  createdAt?: string;
}

export interface InsuranceRequestDto {}
