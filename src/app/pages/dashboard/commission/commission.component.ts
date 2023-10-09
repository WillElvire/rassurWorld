import { Component, inject } from '@angular/core';
import { UserQuery } from 'src/app/store/user$/user.query';


@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent {


  private readonly userQuery = inject(UserQuery);
  public user = this.userQuery.fullUser;
  constructor() {

  }
  isVisible : boolean = false;

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
