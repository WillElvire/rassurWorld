import { environment } from "src/environments/environment.prod";

export type currencyType = "XOF" | "USD";
export type channelType  = "ussd"| "tpe";
export type momoProvider = "moov"| "orange" |"mtn";

export interface mobileMoneyResponse {
    status      : number,
    message     : string,
    pay_token   : string,
    payment_url : string,
    notif_token : string,
    state       : string ,
    user_msisdn : string
}

export interface mobileMoneyTpeResponse {
    meta: {
        type    :string,
        source  : string ,
        channel :channelType
    }
}

export class mobileMoneyPayload {
  currency    ?: currencyType
  order_id    : string;
  amount      : number;
  state       ?: string ;
  return_url  : string ;
  cancel_url  : string ;
  reference   : string;
  user_msisdn?: string;

  constructor(amount : number){
    this.return_url = "http://localhost:4200/payment/success";
    this.cancel_url = "http://localhost:4200/payment/failed";
    this.amount = amount;
    this.order_id = generateId();
    this.reference = "Payment des frais d'assurance"
  }

}
export const generateId = ()=> {
  return "tr" + Math.floor(500000) +""+ new Date().getTime();
}

export class TransferDto {

    private provider : string
    private request  : string;
    private response : string;
    private ip       : string;
    private browser  : string;
    private apiPath  : string;
    private method   : string;

    constructor(apiPath : string ,method : string, request = null , response = null , browser : any = null  , ip :any = null ){
       this.provider  =  environment.TRANSFER_PROVIDER;
       this.request   = JSON.stringify(request);
       this.response  = JSON.stringify(response);
       this.browser   = browser ;
       this.apiPath   = apiPath;
       this.method    = method;
       this.ip        = ip;
    }
}
