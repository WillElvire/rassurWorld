import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/modules/components.module';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-assur',
  templateUrl: './assur.component.html',
  styleUrls: ['./assur.component.scss'],
  standalone : true,
  imports  : [RouterModule,ComponentsModule,NgZoroModule]
})
export class AssurComponent {

}
