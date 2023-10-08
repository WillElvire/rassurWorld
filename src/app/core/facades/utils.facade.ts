import { XLXSProvider } from '../services/third-party/xlxs.service';
import { ModalAppService } from '../services/utils/modal/modal.service';
import { ToastService } from './../services/utils/toast/toast.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsFacades {
  public toastService = inject(ToastService);
  private emailRegex  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private phoneRegex  = /^\+?[1-9][0-9]{7,14}$/;
  public modal        = inject(ModalAppService);
  public xlsProvider  = inject(XLXSProvider);

  errorToastMessage(message: string) {
    return this.toastService.setMessage(message).buildDanger();
  }

  successToastMessage(message: string) {
    return this.toastService.setMessage(message).buildSuccess();
  }
  testEmail(email: string) {
    return this.emailRegex.test(email);
  }

  testPhoneNumber(phone: string) {
    return this.phoneRegex.test(phone);
  }

  confirmation(title: string = '', content: string = '', actions: any[]) {
    return this.modal
      .defineTitle(title)
      .defineContent(content)
      .defineAction(actions)
      .present();
  }
}
