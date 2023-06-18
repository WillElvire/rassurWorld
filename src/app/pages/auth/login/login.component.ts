import { CommonModule } from '@angular/common';
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
      next :  (response)=>{
        this.loaded = false;
        console.log(response)
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

}
