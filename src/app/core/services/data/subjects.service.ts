import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class SubjectService {

  private enableTranslationOption = new Subject<boolean>();
  enableTranslationOption$ = this.enableTranslationOption.asObservable();
  public setTraslationOptionStatus(status : boolean ) {
    return this.enableTranslationOption.next(status);
  }


}
