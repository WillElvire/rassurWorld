import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NgZoroModule],
})
export class SuccessComponent {
  location = inject(Location);
  back() {
    this.location.back();
  }
}
