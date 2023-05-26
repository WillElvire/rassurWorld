import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { NgZoroModule } from './ngzoro.module';
import { LoaderComponent } from '../components/widgets/loader/loader.component';
import { CountrypickerComponent } from '../components/widgets/countrypicker/countrypicker.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    CountrypickerComponent,
  ],
  imports: [CommonModule,RouterModule, NgZoroModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    CountrypickerComponent
  ],

})
export class ComponentsModule {}
