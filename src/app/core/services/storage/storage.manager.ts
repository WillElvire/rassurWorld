import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class StorageManagerService {

  storage = localStorage;
  constructor(){

  }
  public set(key  : any ,value : any){
    return this.storage.setItem(key,value);
  }
  public async get(key : any ){
    return await this.storage.getItem(key);
  }
  public async remove(key : any ){
    return await this.storage.removeItem(key);
  }
  public clear() {
    this.storage.clear()
  }
}
