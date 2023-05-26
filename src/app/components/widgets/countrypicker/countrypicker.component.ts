import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-countrypicker',
  templateUrl: './countrypicker.component.html',
  styleUrls: ['./countrypicker.component.scss']
})
export class CountrypickerComponent  implements OnInit{

  countries !: any[];
  appFacade = inject(AppFacade);
  @Input() country ?: string;
  @Output() countryChange = new EventEmitter<string>();


  ngOnInit(): void {
     this.appFacade.getCountry().subscribe((response)=>{
      this.countries = response.body as any[];
     })
  }

  selectCountry(event : any){
    this.countryChange.emit(event?.target.value)
  }

}
