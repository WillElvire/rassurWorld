import { shareReplay } from 'rxjs';
import { HttpService } from './../api/api.service';
import { Injectable,inject } from "@angular/core";
import { mobileMoneyPayload, momoProvider } from "./transfer.dto";

@Injectable()
export class TransferService {

  api = inject(HttpService);

  mobileMoneyPayment(amount : number) {
    const payload = new mobileMoneyPayload(amount);
    this.api.setApiType("transfer");
    return this.api.post({endpoint : "/mobilemoney/v1",data  : payload}).pipe(shareReplay(1))
  }
}
