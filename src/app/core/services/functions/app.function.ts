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


  login(data : any) {
    this.api.setApiType("rest");
    this.api.setEncrypted(true);
    return this.api.post({endpoint : "/api/auth/login", data }).pipe(shareReplay(1));
  }

  register(data : any) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : "/api/auth/register",data}).pipe(shareReplay(1));
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
}
