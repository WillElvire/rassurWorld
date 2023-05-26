import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const ngZoroElements = [NzButtonModule, NzIconModule ,NzSliderModule, NzLayoutModule,NzMenuModule,NzSpinModule];

@NgModule({
  declarations: [],
  imports: [ngZoroElements],
  exports: [ngZoroElements],
})
export class NgZoroModule {}
