import { NgModule } from '@angular/core';
import { AdminComponent } from '../layouts/admin/admin.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { NgZoroModule } from './ngzoro.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [RouterModule, NgZoroModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],

})
export class ComponentsModule {}
