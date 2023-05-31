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


export interface tripInsuranceDto {
  dateOfLeft ?: string,
  dateOfBack ?: string,
  passportNub?: string,
  passportValidity ?: string,
  passportDayOfCreation ?:string,
  country ?: string,
  tripMotif?: string,
  destination ?: string,
  relationship ?: string
}


export interface  ItypeTiers {
  name ?: string,
  guaranty ?:  [ {name ?: string ,description ?: string,active ?: boolean}],
  active ?:boolean,
  index ?: number,
}
