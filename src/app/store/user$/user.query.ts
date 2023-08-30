import { Injectable } from '@angular/core';
import { UserState } from './user.state';
import { Query, applyTransaction } from '@datorama/akita';
import { UserStore} from './user.store';
import { UserDto, UserStateDto } from 'src/app/core/interfaces/dto';



@Injectable()
export class UserQuery extends Query<UserState> {

  //user$   = this.select();
  isLoggedIn$ = this.select(state => !!state["user"]);
  selectUser$ = this.select('user');
  fullUser$   = this.select(['user', 'token']);
  isLoading$  = this.selectLoading();
  selectId$   = this.select(['id']);
  error$      = this.selectError();
  token$       = this.select("token");


  constructor(protected override store: UserStore) {
    super(store);
  }

  get isLoggedIn() {
    const user = this.getValue()["user"];
    return !!user;
  }

  get user() {
    return this.getValue()["user"];
  }

  get fullUser() {
   return JSON.parse(this.user?.user?.user)
  }

  update(user : UserStateDto) {
    return applyTransaction(()=>{
      this.store.update(user);
      this.store.setLoading(true);
    })
  }

  logout() {
    this.store.reset();
  }
}
