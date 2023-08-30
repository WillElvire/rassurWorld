import { Component, Input, OnInit, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent  implements OnInit{
   @Input() userCode ?: string ;
  sponsorship : any[] = [];
  private readonly appFacade = inject(AppFacade);


  ngOnInit(): void {
      this.fetchBusinessSponsorship();
  }

  fetchBusinessSponsorship() {
    this.appFacade.fetchBusinessSponsorship(this.userCode as string).subscribe({
      next  : (response)=>{
        const body  : any = response.body;
        this.sponsorship = body.returnObject;
      },
      error : (err)=>{
        console.log(err)
      }
    });
  }
}
