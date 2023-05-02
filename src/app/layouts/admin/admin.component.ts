import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/modules/components.module';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone : true,
  imports  : [RouterModule,ComponentsModule,NgZoroModule]
})
export class AdminComponent {
  isCollapsed = false;
}
