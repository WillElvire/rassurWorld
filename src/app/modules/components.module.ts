import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { NgZoroModule } from './ngzoro.module';
import { LoaderComponent } from '../components/widgets/loader/loader.component';
import { CountrypickerComponent } from '../components/widgets/countrypicker/countrypicker.component';
import { CommonModule } from '@angular/common';
import { TypeTiersComponent } from '../components/widgets/type-tiers/type-tiers.component';
import { FormsModule } from '@angular/forms';
import { CotationComponent } from '../components/modal/cotation/cotation.component';
import { RoleComponent } from '../components/modal/role/role.component';
import { OfferComponent } from '../components/modal/offer/offer.component';
import { UploadComponent } from '../components/modal/upload/upload.component';
import { DeleteComponent } from '../components/modal/delete/delete.component';
import { UserComponent } from '../components/modal/user/user.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    CountrypickerComponent,
    TypeTiersComponent,
    CotationComponent,
    RoleComponent,
    OfferComponent,
    UploadComponent,
    DeleteComponent,
    UserComponent,
  ],
  imports: [CommonModule,RouterModule, NgZoroModule,FormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    CountrypickerComponent,
    TypeTiersComponent,
    CotationComponent,
    RoleComponent,
    OfferComponent,
    UploadComponent,
    UserComponent
  ],

})
export class ComponentsModule {}
