import { environment } from './../../../../environments/environment';
import { UserDto } from './../../interfaces/dto';
import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage.manager';
@Injectable({
  providedIn : 'root'
})
export class UserStorage {

  private user !: Partial<UserDto> | null | any ;
  private token !: string | any ;
  private id    !: string | any;

  constructor(private storage : StorageManagerService) {
    const [user,token] =  [this.storage.get(environment.STORAGE_USER_KEY),this.storage.get(environment.STORAGE_USER_TOKEN)];
    this.user = user;
    this.token = token;
  }

  get User(){
   return  this.user;
  }

  get UserId() {
    return  this.id;
  }

  get isLoggedIn(){
    return !!this.user;
  }

  get Token() {
    return this.token;
  }

  addUser(user : any ) {
    this.storage.set(environment.STORAGE_USER_KEY, user.user);
    this.storage.set(environment.STORAGE_USER_TOKEN,user.token);
  }

async removeUser(){
    await this.storage.remove(environment.STORAGE_USER_KEY);
    await this.storage.remove(environment.STORAGE_USER_TOKEN);
  }
}
