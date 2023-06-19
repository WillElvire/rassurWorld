
import { EntityStore,StoreConfig } from '@datorama/akita';
import { UserState, createInitialState } from './user.state';
import { Injectable } from '@angular/core';
import { UserDto, UserStateDto } from 'src/app/core/interfaces/dto';
import { UserStorage } from 'src/app/core/services/storage/user.storage';
import { StorageManagerService } from 'src/app/core/services/storage/storage.manager';


@Injectable({providedIn:'root'})
@StoreConfig({name : 'user'})
export class UserStore extends EntityStore<UserState> {

  user !: UserState;
  constructor() {
    super(defaultUserService.getInstance().getUser());
  }

}

/*export class userStateAdapter   {
  user$ !: UserStateDto;
  constructor(private user : UserStateDto) {
    this.user = user;
  }

}*/

@Injectable()
class defaultUserService {

  private static INSTANCE :defaultUserService;
  private constructor(private userService : UserStorage){

  }

  public static  getInstance() : defaultUserService
  {
    if(defaultUserService.INSTANCE == null) return new defaultUserService(new UserStorage(new StorageManagerService()));
    return defaultUserService.INSTANCE;
  }

  getUser() {
    console.log("this.userService.User",this.userService.User)
    return (!!this.userService.User ) ? this.userService.User : createInitialState();
  }
}
