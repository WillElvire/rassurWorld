import { environment } from './../../../../environments/environment';
import { UserDto } from './../../interfaces/dto';
import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage.manager';
@Injectable({
  providedIn : 'root'
})
export class UserStorage  {

  private user  ?: Partial<UserDto> | null | any ;
  private token ?: string | any ;
  private id    !: string | any;


  constructor(private storage : StorageManagerService) {
    this.loadUserData()
  }


  private async loadUserData() {

    const [user,token] = [
       this.storage.get(environment.STORAGE_USER_KEY),
       this.storage.get(environment.STORAGE_USER_TOKEN)
    ];

    this.token = token;
    this.user  = user;
    console.log(this.user,this.token)
  }


  User(){
    try
    {
      this.user  = {user : JSON.parse(this.user as any) , token : this.token};
    }
    catch(Exception)
    {
      this.user =  {user : this.user, token : this.token}
    }

    console.log("user ======>",this.user);
    return this.user;
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
    await this.storage.delete(environment.STORAGE_USER_KEY);
    await this.storage.delete(environment.STORAGE_USER_TOKEN);
  }
}
