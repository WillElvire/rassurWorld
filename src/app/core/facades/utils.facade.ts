
import { ToastService } from './../services/utils/toast/toast.service';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn : 'root'
})
export class UtilsFacades {

  public toastService   = inject(ToastService);


  errorToastMessage(message  : string) {
    return this.toastService.setMessage(message).buildDanger();
  }

  successToastMessage(message  : string) {
    return this.toastService.setMessage(message).buildSuccess();
  }
}
