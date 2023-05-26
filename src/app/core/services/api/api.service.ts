import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaderBuilder } from '../../classes/header.builder';


@Injectable()
export class HttpService {

  apiType : string = "rest";
  isEnc   : boolean = false;

  constructor(private http : HttpClient) {

  }

  setApiType(apiType : string){
   this.apiType = apiType;
  }

  setEncrypted(isEncrypted : boolean){
    this.isEnc = isEncrypted;
  }

  get<T>(endpoint : string ) {
    return this.http.get<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader(),observe: "response"});
  }

  post<T>(parameter : Required<{endpoint : string , data : any}> ) {
    //return this.http.post<T>(`${this.getBaseUrl()}${parameter.endpoint}`,this.returnCorrectDataFormat(parameter.data), {headers : this.httpHeader()} );
    return this.http.post<T>(`${this.getBaseUrl()}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader(),observe: "response"} );
  }

  put<T>(parameter : Required<{endpoint : string , data : any}>) {
    //return this.http.put<T>(`${this.getBaseUrl()}${parameter.endpoint}`, this.returnCorrectDataFormat(parameter.data),{headers : this.httpHeader()});
    return this.http.put<T>(`${this.getBaseUrl()}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader(),observe: "response"});
  }

  delete<T>(endpoint : string) {
    return this.http.delete<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader(),observe: "response"});
  }

  getHtml(endpoint: string) {
    return this.http.get(`${this.getBaseUrl()}${endpoint}`,{headers : {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'text/html; charset=utf-8',
    },
    responseType : "text",
    observe : "body"});
  }

  getBaseUrl() {
    switch(this.apiType) {
      case "rest" :
         return environment.BASE_URL;
      case "assets" :
        return "/assets/";
      default :
        return environment.BASE_URL;
    }
  }





  httpHeader() {
    return  new HttpHeaderBuilder()
    .build();
   ;
  }



  /*request(request : IHttpData) {
    if(request.request == EHttpRequest.POST) {
    }
  } */
}
