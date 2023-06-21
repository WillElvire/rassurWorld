
import { Injectable, TemplateRef, Type, inject } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
@Injectable()
export class ModalAppService {

  private  component   !: Type<any>;
  private  modalService  = inject(NzModalService);
  private  title = "";
  private  data : any;

  defineComponent<T>(component : Type<T> ){
    this.component = component;
    return this;
  }

  defineTitle(title : string = "") {
    this.title = title;
    return this;
  }

  defineData(data : any) {
   this.data = data;
   return this;
  }

  display() {
    return this.create();
  }
  private create() {
    this.modalService.create({
      nzTitle: this.title,
      nzContent: this.component,
      nzFooter : null,
      nzWidth  : 700,
      nzData   : this.data
    });
  }
}
