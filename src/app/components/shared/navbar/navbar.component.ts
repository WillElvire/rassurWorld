import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private readonly router  = inject(Router);
  public url ?: string ;

  ngOnInit(): void {
    this.url = this.router.url;
  }

}
