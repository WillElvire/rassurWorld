import { Injectable, inject } from '@angular/core';
import { HttpService } from '../api/api.service';
import { shareReplay } from 'rxjs';
import { insuranceType } from '../../type/system.type';
@Injectable({
  providedIn : 'root'
})
export class AppFunctionService {
  private  readonly api = inject(HttpService);

  getReceiptFile() {
    this.api.setApiType("assets");
    return this.api.getHtml(`statics/receipts/transaction.html`).pipe(shareReplay(1));
  }

  getBanks() {
    this.api.setApiType("assets");
    return this.api.get(`statics/json/banks.json`).pipe(shareReplay(1));
  }

  getCountry() {
    this.api.setApiType("assets");
    return this.api.get(`json/country.json`).pipe(shareReplay(1));
  }


  getOfferByKeyword(keyword : string){
    this.api.setApiType("rest");
    return this.api.get("/api/offer/find/"+keyword).pipe(shareReplay(1));
  }


  login(data : any) {
    this.api.setApiType("rest");
    this.api.setEncrypted(true);
    return this.api.post({endpoint : "/api/login", data }).pipe(shareReplay(1));
  }

  register(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/register",data}).pipe(shareReplay(1));
  }

  firstStep(data : any , insuranceController : insuranceType = "voyage") {
    this.api.setApiType("rest");
    return this.api.post({endpoint : `/api/assur/${insuranceController}/first-user-step`,data}).pipe(shareReplay(1));
  }

  secondStep(data : any , insuranceController : insuranceType = "voyage") {
    this.api.setApiType("rest");
    return this.api.post({endpoint : `/api/assur/${insuranceController}/second-user-step`,data}).pipe(shareReplay(1));
  }

  thirdStep(data : any , insuranceController : insuranceType = "voyage") {
    this.api.setApiType("rest");
    return this.api.post({endpoint : `/api/assur/${insuranceController}/third-user-step`,data}).pipe(shareReplay(1));
  }

  getInsurance(assurId : any) {
    this.api.setApiType("rest");
    return this.api.get("/api/assur/get/"+assurId).pipe(shareReplay(1));
  }

  uploadPassport(data : any, insuranceController : insuranceType = "voyage"){
    this.api.setApiType("rest");
    return this.api.postImage({endpoint : `/api/assur/${insuranceController}/upload`,data}).pipe(shareReplay(1));
  }

  getInsuranceRequest(data : any){
    this.api.setApiType("rest");
    return this.api.post({endpoint : `/api/admin/get-from-status`,data}).pipe(shareReplay(1));
  }
}
