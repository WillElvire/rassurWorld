import { Injectable } from '@angular/core';
import { UserQuery } from 'src/app/store/user$/user.query';
import { UserDto } from '../interfaces/dto';


@Injectable({
  providedIn: 'root',
})
export class StatesFacades {
  constructor(
    private UserQuery: UserQuery,

  ) {}

  selectUser() {
    return this.UserQuery.selectUser$;
  }



  get isLoggedIn() {
    return this.UserQuery.isLoggedIn;
  }

  get logout() {
    return this.UserQuery.logout();
  }

  updateUserState(user : UserDto) {
    return this.UserQuery.update(user)
  }



  selectId() {
    return this.UserQuery.selectId$;
  }

  fullUser() {
    return this.UserQuery.fullUser$;
  }

  dispatchUser(user: UserDto) {
    return this.UserQuery.update(user);
  }

}
