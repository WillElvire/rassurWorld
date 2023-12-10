import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDto } from 'src/app/core/interfaces/dto';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() user !: UserDto ;
  @Output() newUser = new EventEmitter<UserDto>();
  propertyNames !: any;
  propertyValues !: any;




  ngOnInit(): void {
    // get the keys and values of the user object
    this.propertyNames  = Object.keys(this.user);
    // get the keys and values of the user object
    this.propertyValues = Object.values(this.user);
  }



  save() {
    // creating a new array
    const newData = [this.propertyValues];
    // mergin the two arrays
    const result : any = newData.map((r : any)=> Object.fromEntries(r.map((c : any, i : any) => [this.propertyNames[i], c])));
    // emit the new user
    this.newUser.emit(result[0])
  }
}
