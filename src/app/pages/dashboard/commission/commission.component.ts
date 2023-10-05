import { Component } from '@angular/core';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent {
  isVisible : boolean = false;

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
