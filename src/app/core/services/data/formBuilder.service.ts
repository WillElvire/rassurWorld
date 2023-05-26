import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from "@angular/core";
import { formInput } from '../../type/system.type';


@Injectable({providedIn : 'root'})
export class FormBuilderService {

  /*********** DECLARE VARIABLES    *********/

  private form !: {} | [];
  private inputType : formInput = "object";

  /*********** SET FORM FIELDS    *********/

  setForm(form : {} | []) {
    this.form = form;
    return this;
  }

  /*********** SET TYPE OF FORM INPUT PASSED    *********/

  setInputType(inputType : formInput) {
    this.inputType = !!inputType ?  inputType : 'object';
    return this;
  }

  /*********** CHOOSE THE CORRECT METHOD TO BUILD THE FORM   *********/
  build(){
    return (this.inputType == "object") ?
    this.generateNewFormByObject(this.form as {}) :
    this.generateNewFormByArray(this.form as []);
  }


  /*********** METHOD USE TO GENERATE FORM WHEN OBJECT ARE PASSED IN   *********/
  generateNewFormByObject(form : {}) {
    const formKeys   = Object.keys(form);
    const formValues = Object.values(form);
    let newForm      = new FormGroup({});
    formKeys.forEach((field,index)=> {
      newForm.addControl(field,new FormControl(formValues[index],Validators.required));
    })
    return newForm;
  }

  /*********** METHOD USE TO GENERATE FORM WHEN ARRAY ARE PASSED IN   *********/
  generateNewFormByArray(form : []) {
    let newForm      = new FormGroup({});
    form.forEach((field,index)=> {
      newForm.addControl(field,new FormControl("",Validators.required));
    })
    return newForm;
  }
}
