import { UserDto, UserStateDto } from './../../../core/interfaces/dto';
import { StatesFacades } from './../../../core/facades/state.facade';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { LoginDto } from 'src/app/core/interfaces/dto';
import { ComponentsModule } from 'src/app/modules/components.module';
import { ServiceModule } from 'src/app/modules/service.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone : true,
  imports : [CommonModule,RouterModule,FormsModule,ServiceModule,ComponentsModule],
  providers : []
})
export class LoginComponent {

  utils     = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router    = inject(Router);
  state     = inject(StatesFacades);
  location  = inject(Location);

  loaded : boolean = false;

  login : LoginDto = {
    email : "",
    password : ""
  }


  SignIn() {
   const verif = this.Verification();
   if(!verif) return this.utils.errorToastMessage("Veuillez renseigner tous les champs");
   if(!this.utils.testEmail(this.login.email)) return this.utils.errorToastMessage("Veuillez renseigner une addresse email valide");
   return this.callToServer();
  }

  callToServer() {
    this.loaded = true;
    this.appFacade.login(this.login).subscribe( {
      next :  (response: any)=>{
        this.loaded = false;
        this.state.updateUser(response.body["returnObject"] as UserStateDto)
        this.utils.successToastMessage("Bienvenue sur le portail Rassur");
        location.href = "/admin/index";
        return ;
      },
      error : (err)=>{
        this.loaded = false;
        if(!!err.error?.code){
          this.utils.errorToastMessage(err.error.message);
        }
      }
    }
   )
  }

  Verification() {
   return !!this.login.email  && !! this.login.password
  }

  back(){
    this.location.back();
  }

}
