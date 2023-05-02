import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';

const ngZoroElements = [NzButtonModule, NzIconModule ,NzSliderModule, NzLayoutModule,NzMenuModule];

@NgModule({
  declarations: [],
  imports: [ngZoroElements],
  exports: [ngZoroElements],
})
export class NgZoroModule {}
