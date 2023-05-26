export interface MerchantLoginPayload {
  merchantID: string;
  password: string;
}

export interface MerchantConnection {
  merchant: Merchant;
  token: any;
}

export interface User {}

export interface Merchant {
  merchantName: string;
  merchantId: string;
  password: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  phoneNumber: string;
  terminalId: string;
  status: string;
  date_profile: Date;
}
