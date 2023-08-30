import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserQuery } from 'src/app/store/user$/user.query';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private readonly router      = inject(Router);
  private readonly userQuery   = inject(UserQuery);
  public isLoggedIn : boolean  = false;
  public url ?: string ;


  ngOnInit(): void {
    this.url = this.router.url;
    this.loadUserRole();
  }

  loadUserRole() {

    this.isLoggedIn = !!this.userQuery.fullUser;
    /*().subscribe((response)=>{
      const user : UserDto = JSON.parse(response.user.user);
      this.userRole = user.role as RoleDto;
    })*/
  }
}
