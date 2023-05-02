import { NgZoroModule } from './ngzoro.module';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../layouts/admin/admin.component';
import { RouterModule } from '@angular/router';
import { AssurComponent } from '../layouts/assur/assur.component';
import { ComponentsModule } from './components.module';


@NgModule({
  declarations: [AssurComponent,AdminComponent],
  imports: [RouterModule,ComponentsModule,NgZoroModule],
  exports: [],
})
export class LayoutModule {}
