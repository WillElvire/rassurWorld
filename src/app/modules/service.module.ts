import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastService } from '../core/services/utils/toast/toast.service';
import { UtilsFacades } from '../core/facades/utils.facade';
import { HttpService } from '../core/services/api/api.service';
import { AppFacade } from '../core/facades/app.facade';
import { AppFunctionService } from '../core/services/functions/app.function';
import { SubjectService } from '../core/services/data/subjects.service';
import { AppServiceFacade } from '../core/facades/service.facade';
import { OnBoardResolver } from '../core/services/resolvers/onboard.resolver';
import { FormBuilderService } from '../core/services/data/formBuilder.service';
import { StorageManagerService } from '../core/services/storage/storage.manager';
import { UserStorage } from '../core/services/storage/user.storage';
import { StatesFacades } from '../core/facades/state.facade';
import { UserQuery } from '../store/user$/user.query';
import { ModalAppService } from '../core/services/utils/modal/modal.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { XLXSProvider } from '../core/services/third-party/xlxs.service';
import { TransferService } from '../core/services/transfer/transfer.service';

@NgModule({
  declarations: [],
  providers: [
    ToastService,
    UtilsFacades,
    HttpService,
    AppFacade,
    AppFunctionService,
    SubjectService,
    AppServiceFacade,
    OnBoardResolver,
    FormBuilderService,
    StorageManagerService,
    UserStorage,
    Storage,
    StatesFacades,
    UserQuery,
    ModalAppService,
    NzModalService,
    XLXSProvider,
    TransferService

  ],
  exports: [HttpClientModule],
  imports : [HttpClientModule]
})
export class ServiceModule {}
