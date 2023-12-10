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
import { RoleTypes } from 'src/app/core/enums/roles.enum';

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

  clearForm = () => {
    this.login  = {
      email : "",
      password : ""
    }
}

  callToServer() {
    this.loaded = true;
    this.appFacade.login(this.login).subscribe( {
      next :  (response: any)=>{
        this.loaded = false;
        const userConnected = response.body["returnObject"] as UserStateDto;
        this.state.updateUser(userConnected)
        this.utils.successToastMessage("Bienvenue sur le portail Rassur");
        console.log(userConnected)
        this.redirectUserByRole(userConnected?.user?.role?.libelle);
        //location.href = "/admin/index";
        return ;
      },
      error : (err)=>{
        this.loaded = false;
        if(!!err.error?.code){
          this.utils.errorToastMessage(err.error.message);
          this.clearForm()
        }
      }
    }
   )
  }

  Verification() {
   return !!this.login.email  && !! this.login.password
  }


  /**
   * @description Redirige l'utilisateur en fonction de son role
   * @param role
   * @returns
   * @memberof LoginComponent
   * @todo : faire la redirection en fonction du role
   *
   */
  redirectUserByRole(role : string) {
    switch(role) {
      case RoleTypes.APPORTEUR :
        location.href = "/admin/commission";
        break;
      case RoleTypes.ADMIN :
        location.href = "/admin/index";
        break;
      case RoleTypes.MEMBER :
        location.href = "/admin/index";
        break;
      case RoleTypes.CUSTOMER :
        location.href = "/admin/index";
        break;
      default :
      location.href = "/admin/index";
        break;
    }
  }

  back(){
    this.location.back();
  }

}
