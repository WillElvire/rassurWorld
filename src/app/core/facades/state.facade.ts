import { Injectable } from '@angular/core';
import { UserQuery } from 'src/app/store/user$/user.query';
import { UserDto, UserStateDto } from '../interfaces/dto';
import { AppFacade } from './app.facade';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class StatesFacades {
  constructor(
    private UserQuery: UserQuery,
    private AppFacades : AppFacade

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

  private updateUserState(user : UserStateDto) {
    return this.UserQuery.update(user)
  }

  selectId() {
    return this.UserQuery.selectId$;
  }

  fullUser() {
    return this.UserQuery.fullUser$;
  }

  dispatchUser(user: UserStateDto) {
    return this.UserQuery.update(user);
  }

  updateUser(user : UserStateDto) {
    this.AppFacades.setStorage({key : environment.STORAGE_USER_TOKEN,value : user.token});
    this.AppFacades.setStorage({key : environment.STORAGE_USER_KEY, value : JSON.stringify(user.user)});
    return this.updateUserState(user);
  }


}
