import { Component } from '@angular/core';

@Component({
  selector: 'app-assur-voyage',
  templateUrl: './assur-voyage.component.html',
  styleUrls: ['./assur-voyage.component.scss']
})
export class AssurVoyageComponent {

   step1 : boolean = true;
   step2 : boolean = false;

   changeStep() {
    if(this.step1) {
      this.step1 = false;
      this.step2 = true;
    }else{
      this.step2 = false;
      this.step1 = true;
    }
   }
}
