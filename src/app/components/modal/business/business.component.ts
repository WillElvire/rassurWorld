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
  amount : number = 0;
  private readonly appFacade = inject(AppFacade);


  ngOnInit(): void {
      this.fetchBusinessSponsorship();
  }

  calculComission(sponsorship : any []) {
    sponsorship.forEach((element)=> {
      this.amount = this.amount + Number(element.transaction?.primeApporteur);
    })
  }

  fetchBusinessSponsorship() {
    this.appFacade.fetchBusinessSponsorship(this.userCode as string).subscribe({
      next  : (response)=>{
        const body  : any = response.body;
        this.sponsorship = body.returnObject;
        this.calculComission(this.sponsorship);
      },
      error : (err)=>{
        console.log(err)
      }
    });
  }
}
