import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StatesFacades } from 'src/app/core/facades/state.facade';
import { RoleDto, UserDto } from 'src/app/core/interfaces/dto';
import { User } from 'src/app/core/interfaces/payloads';
import { ComponentsModule } from 'src/app/modules/components.module';
import { NgZoroModule } from 'src/app/modules/ngzoro.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone : true,
  imports  : [RouterModule,ComponentsModule,NgZoroModule,CommonModule]
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  private readonly state = inject(StatesFacades);
  public userRole !: RoleDto ;

  ngOnInit(): void {
    this.loadUserRole();
  }

  loadUserRole() {
    this.state.selectUser().subscribe((response)=>{
      const user : UserDto = JSON.parse(response.user.user);
      this.userRole = user.role as RoleDto;
    })
  }

  logout() {
    this.state.logout();
    location.href = "/auth/login";
    return;
  }
}
