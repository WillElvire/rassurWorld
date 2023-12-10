import { AfterViewInit, Component, Input, ViewChild, inject } from '@angular/core';
//const imageThumbnail = require('image-thumbnail');

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent  implements AfterViewInit{

  @Input() source  !: string  ;
  @ViewChild("image") image ?: any ;


  ngAfterViewInit() {

  }





  async generateImageThumbnail(source : string) {
    //const result =  await imageThumbnail(source);
    //console.log(result);
  }


  checkSource(source : any) {
   return source.includes(".pdf");
  }


}
