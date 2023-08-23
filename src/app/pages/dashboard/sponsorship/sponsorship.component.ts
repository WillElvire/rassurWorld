import { UserDto } from 'src/app/core/interfaces/dto';
import { Component, OnInit, inject } from '@angular/core';
import { UserQuery } from 'src/app/store/user$/user.query';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent  implements OnInit{
  private readonly userQuery = inject(UserQuery);
  user ?: UserDto;
  ngOnInit(): void {
    this.user =  this.userQuery.fullUser;
  }
}
