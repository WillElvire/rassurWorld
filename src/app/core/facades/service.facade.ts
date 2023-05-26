import { Injectable,inject } from "@angular/core";
import { SubjectService } from "../services/data/subjects.service";
import { FormBuilderService } from "../services/data/formBuilder.service";
import { formInput, modalComponent } from "../type/system.type";


@Injectable({
  providedIn : 'root'
})
export class AppServiceFacade {

  /************************  VARIABLE DECLARATION  ******************/
    public  readonly subjectService         = inject(SubjectService);
    private readonly formBuilderService     = inject(FormBuilderService);
  /************************  VARIABLE DECLARATION  ******************/
  getLang() {

  }

  buildForm(formField : {} | [] ,inputType ?: formInput) {
    return this.formBuilderService.setForm(formField).setInputType(inputType as formInput).build();
  }


}
