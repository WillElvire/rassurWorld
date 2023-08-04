import { defaultModule } from './../../../core/helpers/api.loader';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { StatesFacades } from 'src/app/core/facades/state.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { firstStepUser } from 'src/app/core/interfaces/dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone : true,
  imports : [CommonModule,RouterModule,defaultModule]
})
export class RegisterComponent {
  utils     = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router    = inject(Router);
  state     = inject(StatesFacades);
  location  = inject(Location);
  loaded : boolean = false;

  register :   firstStepUser = {
    email     : "",
    password  : "",
    firstname : "",
    lastname  : "",
    phone     : ""
  }


  SignIn() {
   const verif = this.Verification();
   if(!verif) return this.utils.errorToastMessage("Veuillez renseigner tous les champs");
   if(!this.utils.testEmail(this.register.email as string)) return this.utils.errorToastMessage("Veuillez renseigner une addresse email valide");
   return this.callToServer();
  }

  callToServer() {
    this.loaded = true;
    /*this.appFacade.login(this.login"").subscribe( {
      next :  (response: any)=>{
        this.loaded = false;
        this.utils.successToastMessage("Votre compte a été crée avec success");
        this.router.navigate(['/auth/login']);
        return ;
      },
      error : (err)=>{
        this.loaded = false;
        if(!!err.error?.code){
          this.utils.errorToastMessage(err.error.message);
        }
      }
    }
   )*/
  }

  Verification() {
   return !!this.register.email  && !! this.register.password
  }

  back(){
    this.location.back();
  }
}
