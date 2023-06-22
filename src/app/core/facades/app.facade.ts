import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFunctionService } from '../services/functions/app.function';
import { insuranceType } from '../type/system.type';
import { StorageManagerService } from '../services/storage/storage.manager';


@Injectable({
  providedIn : 'root'
})
export class AppFacade {

  private appFunction = inject(AppFunctionService);
  private storageService = inject(StorageManagerService);


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

  updateTransaction(transactionDetail : any) {
    return this.appFunction.updateTransaction(transactionDetail);
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
}
