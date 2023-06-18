import { EntityState } from "@datorama/akita";
import { UserStateDto } from "src/app/core/interfaces/dto";


export interface UserState  extends EntityState<UserStateDto, number> {

}


export function createInitialState(): UserState {
  return {
    token: '',
    user: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      role: {
        id: '',
      },
    },
  };
}


export function defaultUserState() : UserStateDto {
  return {
    token: '',
    user: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password : '',
      role: {
        id: '',
      },
    },
  };
}
