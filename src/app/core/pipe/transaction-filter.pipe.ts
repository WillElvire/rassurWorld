import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'request'
})
export class TransactionFilterPipe implements PipeTransform {

  transform(transactions: any[], filter ?: string ): any[] {

    if(!filter) {
      return transactions;
    }

    console.log(transactions)

    switch(filter) {
      case "pending" :
      return  transactions.filter((transaction)=>{return transaction?.isConfirmed == false})
      case "active" :
      return  transactions.filter((transaction)=>{return transaction?.isConfirmed == true})
      default  :
      return transactions
    }


  }

}
