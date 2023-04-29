import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../layouts/admin/admin.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [NzLayoutModule, NzMenuModule, RouterModule,NzIconModule],
  exports: [],
  declarations: [AdminComponent],
})
export class LayoutModule {}
