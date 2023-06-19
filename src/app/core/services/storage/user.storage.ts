import { environment } from './../../../../environments/environment';
import { UserDto } from './../../interfaces/dto';
import { Injectable, OnInit } from '@angular/core';
import { StorageManagerService } from './storage.manager';
@Injectable({
  providedIn : 'root'
})
export class UserStorage implements OnInit {

  private user !: Partial<UserDto> | null | any ;
  private token !: string | any ;
  private id    !: string | any;

  constructor(private storage : StorageManagerService) {
    const [user,token] = [
      this.storage.get(environment.STORAGE_USER_KEY),
      this.storage.get(environment.STORAGE_USER_TOKEN)
    ];

    this.token = token;

    try
    {
      this.user = {user : JSON.parse(user as any) , token};
    }
    catch(Exception)
    {
      this.user = {user, token}
    }
  }


  ngOnInit(): void {
    //this.loadUserData()
  }

  private async loadUserData() {

    const [user,token] = [
      await this.storage.get(environment.STORAGE_USER_KEY),
      await this.storage.get(environment.STORAGE_USER_TOKEN)
    ];

    this.token = token;

    try
    {
      this.user = {user : JSON.parse(user as string) , token};
    }
    catch(Exception)
    {
      this.user = {user, token}
    }

  }

  get User(){
    console.log("user", this.user)
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
