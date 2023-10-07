import { UserQuery } from 'src/app/store/user$/user.query';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable, Self } from "@angular/core";
import { HttpHeaderBuilder } from '../../classes/header.builder';


@Injectable()
export class HttpService {

  apiType : string = "rest";
  isEnc   : boolean = false;
  token   ?: string;
  constructor(private http : HttpClient,@Self()private userQuery : UserQuery) {
    this.userQuery.token$.subscribe((token)=>{
      console.log(token);
      this.token = !!token ? JSON.parse(token) : token;
    })
  }

  setApiType(apiType : string){
   this.apiType = apiType;
  }

  setEncrypted(isEncrypted : boolean){
    this.isEnc = isEncrypted;
  }

  get<T>(endpoint : string ) {
    return this.http.get<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader(),observe: "response",reportProgress : true});
  }

  post<T>(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post<T>(`${this.getBaseUrl()}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader(),observe: "response",reportProgress : true} );
  }

  put<T>(parameter : Required<{endpoint : string , data : any}>) {
    return this.http.put<T>(`${this.getBaseUrl()}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader(),observe: "response",reportProgress : true});
  }

  delete<T>(endpoint : string) {
    return this.http.delete<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader(),observe: "response",reportProgress : true});
  }

  getHtml(endpoint: string) {
    return this.http.get(`${this.getBaseUrl()}${endpoint}`,{headers : {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'text/html; charset=utf-8',
      'Authorization': `Bearer ${this.token?.toString()}`
    },
    observe : "response"});
  }

  postImage<T>(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post(`${this.getBaseUrl()}${parameter.endpoint}`, parameter.data,{headers : {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'multipart/form-data; charset=utf-8',
      'Authorization': `Bearer ${this.token?.toString()}`
    },
    responseType : "text",
    observe : "body"});

  }

  getBaseUrl() {
    switch(this.apiType) {
      case "rest" :
         return environment.BASE_URL_DEV;
      case "assets" :
        return "/assets/";
      default :
        return environment.BASE_URL;
    }
  }





  httpHeader() {

    return  new HttpHeaderBuilder()
    .addHeader({key : "Authorization", value :`Bearer ${this.token?.toString()}`})
    .build();
   ;
  }



  /*request(request : IHttpData) {
    if(request.request == EHttpRequest.POST) {
    }
  } */
}
