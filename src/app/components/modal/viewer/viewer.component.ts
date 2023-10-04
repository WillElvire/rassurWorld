import { AfterViewInit, Component, Input, inject } from '@angular/core';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent  implements AfterViewInit{

  @Input() source  !: string  ;


  ngAfterViewInit() {

  }


  checkSource(source : any) {
   return source.includes(".pdf");

  }


}
