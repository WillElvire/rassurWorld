import { formatDate } from "@angular/common";
import { systemMapping } from "../type/system.type";

export class Mapper {

  private originalText !: string ;
  private mapType !: systemMapping;
  private mapSource : any;

  constructor(originalText : string, mapSource : any ,  mapType : systemMapping) {
    this.originalText = originalText;
    this.mapType = mapType;
    this.mapSource = mapSource;
  }

  map() {
    return this.enableMappingProcess();
  }

  private enableMappingProcess() {
    switch(this.mapType) {
      case "receipt" :
      return this.mapForReceipt();
      case "mail" :
       return this.mapForMail();
      default :
       return null;
    }
  }


  private mapForMail(){
    return null;
  }

  private mapForReceipt() {
    let data = this.originalText;
    data = data.replace("[nom]",this.mapSource?.firstname as string);
    data = data.replace("[prenom]",this.mapSource?.lastname as string);
    data = data.replace("[amount]",this.mapSource?.transaction.transactionDetail.amount as string);
    data = data.replace("[libelle]",this.mapSource?.transaction.transactionDetail.reason as string);
    data = data.replace("[guid]",this.mapSource?.transaction.id as string);
    data = data.replace("[address]",this.mapSource?.transaction.transactionDetail.billing.address as string);
    data = data.replace("[transaction_type]",this.mapSource?.transaction.transactionType.name as string);
    data = data.replace("[expiration_data]",this.mapSource?.transaction.transactionDetail.billing.expriationDate as string);
    data = data.replace("[mean_of_payement]",this.mapSource?.transaction.transactionDetail.billing.mean_of_payment as string);
    data = data.replace("[reference]",this.mapSource?.transaction.id as string);

    return data;
  }
}
