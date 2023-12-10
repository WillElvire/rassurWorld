import { Component, inject, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  readonly appFacade = inject(AppFacade);
  p=1;
  transactions : any[] = [];

  ngOnInit(): void {
    this.loadTransfers()
  }
  parse(element : any) {
    return JSON.parse(element);
  }
  loadTransfers() {
    this.appFacade.getTransfer().subscribe({
      next : (response)=>{
        const body = response.body as any;
        this.transactions = body.returnObject;
      } ,
      error : (err)=> console.log(err)
    })
  }
}
