import { UserDto } from './../../../core/interfaces/dto';
import { Component, OnInit, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-apporteur',
  templateUrl: './apporteur.component.html',
  styleUrls: ['./apporteur.component.scss']
})
export class ApporteurComponent implements OnInit {

  private readonly appFacades = inject(AppFacade);
  private readonly utilsFacades = inject(UtilsFacades);
  users : UserDto[] = [];
  p : number = 1;
  isVisible : boolean = false;
  code ?: string;
  constructor(){

  }

  ngOnInit(): void {
      this.loadBusinessAccount();
  }

  activeUserAccount(id : any,status : any) {
    this.appFacades.activeUserAccount(id,status).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.loadBusinessAccount();
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }
  loadBusinessAccount() {
   this.appFacades.fetchBusinessAccount().subscribe(
    {
      next : (response)=> {
        const body : any = response.body;
        this.users = body.returnObject;
      },
      error : (err)=> {
        console.log(err)
      }
    }
   )
  }

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  viewBusinessDetail(businessCode : any) {
    this.isVisible  = true;
    this.code = businessCode;
  }
}
