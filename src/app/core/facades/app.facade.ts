import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFunctionService } from '../services/functions/app.function';
import { insuranceType } from '../type/system.type';
import { StorageManagerService } from '../services/storage/storage.manager';
import { UserDto } from '../interfaces/dto';
import { TransferService } from '../services/transfer/transfer.service';


@Injectable({
  providedIn : 'root'
})
export class AppFacade {

  private appFunction     = inject(AppFunctionService);
  private storageService  = inject(StorageManagerService);
  private transferService = inject(TransferService);

  getReceiptFile() {
   return this.appFunction.getReceiptFile();
  }

  getBanks() {
    return this.appFunction.getBanks();
  }

  login(data:any) {
   // data.password =  shajs('sha256').update(data.password).digest('hex');
    return this.appFunction.login(data);
  }

  register(data :any) {
    return this.appFunction.register(data);
  }


  getFileExtension(file: string) {
    return !!file ? file.split(".")[1] : "neant";
  }


  fetchBusinessAccount() {
    return this.appFunction.getBusinessAccount();
  }

  fetchBusinessSponsorship(parrainCode : string){
    return this.appFunction.fetchBusinessSponsorship(parrainCode);
  }

  businessRegistration(data :any) {
    return this.appFunction.businessRegistration(data);
  }

  mobileMoneyPayout(amount : number) {
    return this.transferService.mobileMoneyPayment(amount);
  }

  firstStep(data : any , type : insuranceType = "voyage") {
    return this.appFunction.firstStep(data,type);
  }
  secondStep(data : any , type : insuranceType = "voyage") {
    return this.appFunction.secondStep(data,type);
  }
  thirdStep(data : any , type : insuranceType  = "voyage"){
    return this.appFunction.thirdStep(data,type);
  }

  getCountry(){
    return this.appFunction.getCountry();
  }
  getOfferByKeyword(keyword: string) {
    return this.appFunction.getOfferByKeyword(keyword);
  }
  uploadPassport(data: any , type : insuranceType = "voyage"){
    return this.appFunction.uploadPassport(data,type);
  }
  getInsurance(assurId : string) {
    return this.appFunction.getInsurance(assurId)
  }

  getRequestById(id: string){
    return this.appFunction.getRequestById(id)
  }

  getRequest(){
    return this.appFunction.getRequest();
  }

  updateUser(user : UserDto) {
    return this.appFunction.updateUser(user)
  }

  confirmRequest(data:any){
    return this.appFunction.confirmRequest(data);
  }

  getRequestByUserId(id: string) {
    return this.appFunction.getRequestByUserId(id);
  }

  validateCotation(assurId : string) {
    return this.appFunction.validateCotation(assurId);
  }

  updateTransaction(transactionDetail : any) {
    return this.appFunction.updateTransaction(transactionDetail);
  }

  addOffer(data : any) {
    return this.appFunction.addOffer(data);
  }

  getInsuranceRequest(data: any){
    return this.appFunction.getInsuranceRequest(data)
  }

  getOffer() {
    return this.appFunction.getOffer();
  }

  getRoles() {
    return this.appFunction.getRoles();
  }

  getStatistics() {
    return this.appFunction.getStatistics();
  }

  relance(data:any){
    return this.appFunction.sendMailRelance(data);
  }

  welcome(data: any) {
    return this.appFunction.sendMailWelcome(data);
  }

  fileReceiptAndMail(data :any){
    return this.appFunction.sendFileReceiptAndMail(data)
  }

  cotation(data: any) {
    return this.appFunction.sendMailCotation(data);
  }

  payment(data :any) {
    return this.appFunction.sendMailPayment(data);
  }

  activeUserAccount(id : string | undefined, status : any) {
    return this.appFunction.activeUserAccount(id as string , status);
  }

  deleteOffer(id : string){
    return this.appFunction.deleteOffer(id);
  }

  fetchTeamAccounts() {
    return this.appFunction.fetchTeamAccounts();
  }

  deleteTeamMember(id : string) {
    return this.appFunction.deleteTeamMember(id);
  }

  confirmInsurance(id : string) {
    return this.appFunction.confirmInsurance(id);
  }
  addRequest(data : any) {
    return this.appFunction.addRequest(data);
  }

  getWalletById(walletId : string){
    return this.appFunction.getWalletById(walletId);
  }

  /*--------------------------------*/

  setStorage(data  : {key : string ,value : any}) {
    return this.storageService.set(data.key,data.value);
  }
  getStorage(key : string) {
    return this.storageService.get(key);
  }
  deleteStorage(key : string) {
    return this.storageService.delete(key);
  }
  /*--------------------------------*/



  /*--------------------------------*/
  getTransfer() {
    return this.appFunction.getTransfer();
  }

  momoTransfer(payload :any) {
    return this.appFunction.momoTransfer(payload);
  }
}
