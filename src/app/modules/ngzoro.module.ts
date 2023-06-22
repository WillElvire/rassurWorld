import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

const ngZoroElements = [
  NzResultModule,
  NzUploadModule,
  NzButtonModule,
  NzIconModule,
  NzSliderModule,
  NzLayoutModule,
  NzMenuModule,
  NzSpinModule,
  NzModalModule
];

@NgModule({
  declarations: [],
  imports: [ngZoroElements],
  exports: [ngZoroElements],
})
export class NgZoroModule {}
