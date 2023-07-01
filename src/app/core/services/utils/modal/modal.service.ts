
import { EventEmitter, Injectable,Type,inject } from '@angular/core';
import { NzModalService, OnClickCallback } from 'ng-zorro-antd/modal';
@Injectable()
export class ModalAppService {

  private  component   !: Type<any>;
  private  modalService  = inject(NzModalService);
  private  title = "";
  private  data : any;
  private  content  : string = "";
  private  actions ?: EventEmitter<any>[] | OnClickCallback<any>[];
  defineComponent<T>(component : Type<T> ){
    this.component = component;
    return this;
  }

  defineTitle(title : string = "") {
    this.title = title;
    return this;
  }

  defineContent(content : string = "") {
    this.content = content;
    return this;
  }

  defineData(data : any) {
   this.data = data;
   return this;
  }

  display() {
    return this.create();
  }

  present() {
    return this.confirm();
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


  private confirm() {
    this.modalService.confirm({
      nzTitle: this.title,
      nzContent: this.content,
      nzOkText: 'Oui',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk:this.actions?.[0],
      nzCancelText: 'Non',
      nzOnCancel: this.actions?.[1]
    });

  }

  defineAction<T>(actions : EventEmitter<T>[] | OnClickCallback<T>[]) {
     this.actions = actions;
     return this;
  }
}
