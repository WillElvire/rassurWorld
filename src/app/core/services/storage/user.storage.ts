import { UserDto } from './../../interfaces/dto';
import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage.manager';
@Injectable({
  providedIn : 'root'
})
export class UserStorage {

  private user !: Partial<UserDto> | null | any ;
  private key   : string = "rassur_user";
  private token !: string | any ;
  private id    !: string | any;

  constructor(private storage : StorageManagerService) {
    const [user,token] =  [this.storage.get(this.key),this.storage.get("token")];
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
    this.storage.set(this.key, user.user);
    this.storage.set("token",user.token);
  }

async removeUser(){
    await this.storage.remove(this.key);
    await this.storage.remove("token");
  }
}
