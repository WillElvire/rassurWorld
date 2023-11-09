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
  userToEdit !: UserDto ;
  p : number = 1;
  isVisible : boolean = false;
  isEditVisible : boolean = false;
  code ?: string;
  constructor(){

  }

  ngOnInit(): void {
      this.loadBusinessAccount();
  }

  updateUser(event : any){
    this.isEditVisible = false;
    this.appFacades.updateUser(event as any).subscribe(
       (response)=> {
        const resp : any = response.body;
        console.log(resp)
        this.utilsFacades.successToastMessage("Les informations utilisateur ont été modifiées");
        this.loadBusinessAccount()
      },
       (err)=>  this.utilsFacades.errorToastMessage(!!err.error.message ?  err.error.message :  err.message)
    )
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
    this.isEditVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
    this.isEditVisible = false;
  }

  editUserInformation(user : any) {
   this.userToEdit = user;
   this.isEditVisible = true;
  }

  viewBusinessDetail(businessCode : any) {
    this.isVisible  = true;
    this.code = businessCode;
  }
}
