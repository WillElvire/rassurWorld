import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-successfull',
  standalone: true,
  imports: [CommonModule,NgZoroModule],
  templateUrl: './successfull.component.html',
  styleUrls: ['./successfull.component.scss']
})
export class SuccessfullComponent {

  back() {
    return location.href="/"
  }
}
