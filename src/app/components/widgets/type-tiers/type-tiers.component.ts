import { Component } from '@angular/core';
import { typeTiers } from 'src/app/core/__moock__/tiers';
import { ItypeTiers } from 'src/app/core/interfaces/dto';

@Component({
  selector: 'app-type-tiers',
  templateUrl: './type-tiers.component.html',
  styleUrls: ['./type-tiers.component.scss']
})
export class TypeTiersComponent {

  tiers : ItypeTiers[] = typeTiers as ItypeTiers[];
  tiersFilter ?: any = this.tiers.filter((item)=> {return item.active == true});
  checkbox : {value : any , index : number ,active : boolean,checked : boolean  }[] = [];

  choice ?: string;
  constructor(){
    this.generateCheckBoxArray();
  }

  filterTiers(index : any) {
    this.tiersFilter = this.tiers.filter((item)=> { return item.index == index } );
    this.active(index);
    this.generateCheckBoxArray();
  }

  desactiveAll(){

  }

  generateCheckBoxArray(){
    this.checkbox = [];
    this.tiersFilter[0]?.guaranty.forEach((element : any,index : number)=>{
      this.checkbox.push({
        value :"",
        active : true,
        index,
        checked : false
      })
    });

  }

  active(index : number){
    return this.tiers.forEach((element)=> {
      if(element.index == index)
      {
        element.active = true;
      }else
      {
        element.active = false;
      }
    })
  }

  fieldsChange(index:any ,event  : any ):void {
    this.checkbox.forEach((element)=> {
      if(element.index != index) {
        element.active  = false;
        element.value   = false;
      }else{
        element.active  = true;
        element.value   = true;
      }
    })
    this.choice = this.tiersFilter[0].guaranty[index].name;
    console.log(this.choice);
  }

}
