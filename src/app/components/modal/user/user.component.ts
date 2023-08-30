import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { UserDto } from 'src/app/core/interfaces/dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers  : [NzModalService]
})
export class UserComponent {

 private utils = inject(UtilsFacades);
 @Output() userToCreate = new EventEmitter();
 user  = {firstname : "",lastname  : "",email     : "",phone     : "",password  : ""};

 saveUser(){
  if(!this.user.firstname ||  !this.user.lastname || !this.user.email || !this.user.phone || !this.user.password) {
    return this.utils.errorToastMessage("Veuillez renseigner les champs");
  }

  if(!this.utils.testEmail(this.user.email)){
    return this.utils.errorToastMessage("Veuillez renseigner un email valable");
  }

  if(!this.utils.testPhoneNumber(this.user.phone)){
    return this.utils.errorToastMessage("Veuillez renseigner un numéro de téléphone valable");
  }

  return this.userToCreate.emit(this.user);

 }
}
