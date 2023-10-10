import { Component, OnInit, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { UserQuery } from 'src/app/store/user$/user.query';


@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {


  private readonly userQuery    = inject(UserQuery);
  private readonly appFacades   = inject(AppFacade);
  private readonly utilsFacades = inject(UtilsFacades);
  public user = this.userQuery.fullUser;
  amount = 0;
  isLoaded : boolean = true;
  requests : any[] = [];
  isVisible : boolean = false;
  statistiq = {
    pending : 0,
    total : 0
  }
  constructor() {
  }

  ngOnInit(): void {
      this.getUserRequest();
  }

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getAmount(event : any) {
    this.amount = event;
    this.isVisible = false;
    this.addNewRequest();
  }

  getUserRequest() {
    this.appFacades.getRequestByUserId(this.user.id).subscribe({
      next : (response)=> {
        const body = response.body as any;
        this.requests = body.returnObject;
        this.loadStatistics()
        console.log(this.requests);
        this.isLoaded = false;
      },
      error : (error)=> {
        console.log(error);
        this.isLoaded = false;
      }
    })
  }

  loadStatistics() {
    let count = 0;
    let total = 0;
    this.requests.forEach((request)=>{
      total = total + Number(request.amount);
      if(!request.isPayed){
        count = count + 1;
      }
    })

    this.statistiq = {
      pending : count,
      total
    }
  }

  addNewRequest() {
    const data = {
      amount : this.amount,
      type   : 1,
      user   : this.user.id,
      isPayed : 0,
      fees : 0
    }
    this.appFacades.addRequest(data).subscribe({
      next : (response)=> {
        const body = response.body as any;
        this.utilsFacades.successToastMessage(body?.message);
        this.getUserRequest();
      },
      error : (error)=> {
        console.log(error);
        this.isLoaded = false;
      }
    })
  }
}
