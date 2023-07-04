import { Component, EventEmitter, Output, inject } from '@angular/core';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  file : any;
  @Output() fileSelected = new EventEmitter<String>();
  private utils = inject(UtilsFacades);

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  sendFile() {
    if(!this.file) {
      return this.utils.errorToastMessage("Veuillez Ajouter un fichier");
    }
    this.fileSelected.emit(this.file);
  }
}
