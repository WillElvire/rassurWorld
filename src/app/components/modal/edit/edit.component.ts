import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from 'src/app/core/interfaces/dto';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() user !: UserDto ;
  propertyNames !: any;
  propertyValues !: any




  ngOnInit(): void {
    this.propertyNames  = Object.keys(this.user);
    this.propertyValues = Object.values(this.user);
  }

  changeKeys(obj : any , newkeys : any) {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = newkeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }

  save() {
    let obj :any = {};
    obj = this.changeKeys(obj,this.user);
    console.log(obj)

    /*this.user = this.propertyValues.reduce(function(result :any, item :any, index :any, array :any) {
      result[index] = item; //a, b, c
      return result;
    }, {});
    console.log(this.user)*/
  }
}
