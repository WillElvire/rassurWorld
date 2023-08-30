import { UserDto } from './../../../core/interfaces/dto';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { Component, inject, OnInit } from '@angular/core';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { AppFunctionService } from 'src/app/core/services/functions/app.function';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  private appFacades    = inject(AppFacade);
  private utilsFacades  = inject(UtilsFacades);
  isVisible: boolean    = false;
  teams : UserDto[]     = [];
  p : number            = 1;

  ngOnInit(): void {
    this.fetchTeamAccount();
  }

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }


  deleteMember(id : string | undefined) {
    this.appFacades.deleteTeamMember(id as string).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.fetchTeamAccount();
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }

  onBoardUser(event : any) {
    this.appFacades.register(event).subscribe({
      next : (response : any)=> {
        this.utilsFacades.successToastMessage(response.body.message);
        this.fetchTeamAccount();
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }


  fetchTeamAccount() {
    this.appFacades.fetchTeamAccounts().subscribe({
      next : (response)=> {
        console.log(response)
        const body : any = response?.body;
        this.teams = body.returnObject as UserDto[];
        console.log(this.teams)
      },
      error : (err)=> {
        this.utilsFacades.errorToastMessage(!!err.error.message ? err.error.message : err.message);
        console.log(err)
      }
    })
  }
}
