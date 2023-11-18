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

  businessRegistration(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/business/registration",data}).pipe(shareReplay(1));
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

  validateCotation(assurId : string) {
    this.api.setApiType("rest");
    return this.api.get("/api/assur/validate/"+assurId).pipe(shareReplay(1));
  }

  uploadPassport(data : any, insuranceController : insuranceType = "voyage"){
    this.api.setApiType("rest");
    return this.api.postImage({endpoint : `/api/assur/${insuranceController}/upload`,data}).pipe(shareReplay(1));
  }

  getInsuranceRequest(data : any){
    this.api.setApiType("rest");
    return this.api.post({endpoint : `/api/admin/get-from-status`,data}).pipe(shareReplay(1));
  }

  getOffer(){
    this.api.setApiType("rest");
    return this.api.get("/api/offer").pipe(shareReplay(1));
  }

  updateUser(data : any) {
    this.api.setApiType("rest");
    return this.api.put({endpoint : "/api/user" , data }).pipe(shareReplay(1))
  }

  addOffer(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/offer" , data}).pipe(shareReplay(1))
  }

  getRequestById(id : string) {
    this.api.setApiType("rest");
    return this.api.get("/api/request/"+id).pipe(shareReplay(1));
  }

  getRequest(){
    this.api.setApiType("rest");
    return this.api.get("/api/request").pipe(shareReplay(1));
  }

  confirmRequest(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/request/confirm",data }).pipe(shareReplay(1));
  }

  getRequestByUserId(id : string) {
    this.api.setApiType("rest");
    return this.api.post({endpoint:"/api/request/user" , data : {user : id }}).pipe(shareReplay(1));
  }

  getRoles() {
    this.api.setApiType("rest");
    return this.api.get("/api/role").pipe(shareReplay(1));
  }

  getStatistics() {
    this.api.setApiType("rest");
    return this.api.get("/api/admin/statistics").pipe(shareReplay(1));
  }


  getBusinessAccount() {
    this.api.setApiType("rest");
    return this.api.get("/api/user/apporteur").pipe(shareReplay(1));
  }


  updateTransaction(data : any) {
    this.api.setApiType("rest");
    return this.api.put({endpoint : "/api/admin/transaction",data}).pipe(shareReplay(1));
  }

  sendMailRelance(data:any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/mail/relance",data}).pipe(shareReplay(1));
  }

  sendMailCotation(data:any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/mail/cotation",data}).pipe(shareReplay(1));
  }

  sendMailPayment(data:any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/mail/payment",data}).pipe(shareReplay(1));
  }

  sendMailWelcome(data:any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/mail/welcome",data}).pipe(shareReplay(1));
  }

  sendFileReceiptAndMail(data :any) {
    this.api.setApiType("rest");
    return this.api.postImage({endpoint : "/api/receipt/upload",data : data}).pipe(shareReplay(1));
  }

  deleteOffer(id : string) {
    this.api.setApiType("rest");
    return this.api.delete("/api/offer/"+id).pipe(shareReplay(1));
  }

  fetchBusinessSponsorship(id : string) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/assur/sponsorship" , data : {parrainId : id}}).pipe(shareReplay(1));
  }


  fetchTeamAccounts(){
    this.api.setApiType('rest');
    return this.api.get('/api/user/team').pipe(shareReplay(1));
  }


  activeUserAccount(id : string , status : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/user/active", data : {userId : id, prevStatus : status} }).pipe(shareReplay(1));
  }


  deleteTeamMember(id: string) {
    this.api.setApiType("rest");
    return this.api.delete("/api/user/team/"+id).pipe(shareReplay(1));
  }


  addRequest(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/request",data}).pipe(shareReplay(1));
  }



  confirmInsurance(id : string) {
    this.api.setApiType("rest");
    return this.api.post({endpoint: "/api/admin/insurance/confirm",data : {insuranceId : id}}).pipe(shareReplay(1));
  }


  /**
   * @section transaction
   */

  getTransfer() {
    this.api.setApiType("rest");
    return this.api.get("/api/transfer/list").pipe(shareReplay(1));
  }

  momoTransfer(momoPayload : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/transfer/momo",data : momoPayload}).pipe(shareReplay(1));
  }

  momoTransferDetail(momoPayload : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/transfer/detail",data : momoPayload}).pipe(shareReplay(1));
  }

}
