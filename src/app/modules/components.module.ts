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
import { BusinessComponent } from '../components/modal/business/business.component';
import { WithdrallComponent } from '../components/modal/withdrall/withdrall.component';
import { ViewerComponent } from '../components/modal/viewer/viewer.component';
import { SanitizerPipe } from '../core/pipe/sanitizer.pipe';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { EditComponent } from '../components/modal/edit/edit.component';
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
    BusinessComponent,
    WithdrallComponent,
    ViewerComponent,
    SanitizerPipe,
    EditComponent,

  ],
  imports: [CommonModule,RouterModule, NgZoroModule,FormsModule,NgxImageZoomModule],
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
    UserComponent,
    BusinessComponent,
    WithdrallComponent,
    ViewerComponent,
    EditComponent,
    SanitizerPipe
  ],

})
export class ComponentsModule {}
