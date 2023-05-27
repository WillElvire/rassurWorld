import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFunctionService } from '../services/functions/app.function';
import { insuranceType } from '../type/system.type';


@Injectable({
  providedIn : 'root'
})
export class AppFacade {

  private appFunction = inject(AppFunctionService);


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
}
