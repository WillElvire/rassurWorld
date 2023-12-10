import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-failed',
  standalone: true,
  imports: [CommonModule,NgZoroModule],
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss']
})
export class FailedComponent {

  back() {
    return location.href="/"
  }
}
