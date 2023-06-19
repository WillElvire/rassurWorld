import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class StorageManagerService {

  storage : Storage = localStorage;
  constructor(){

  }
  set(key :string ,value : any) {
    localStorage.setItem(key,JSON.stringify(value));
  }

  get(key :string) {
    return localStorage.getItem(key) as any
  }

  delete(key : string) {
    return localStorage.removeItem(key);
  }

  public clear() {
    this.storage.clear()
  }
}
