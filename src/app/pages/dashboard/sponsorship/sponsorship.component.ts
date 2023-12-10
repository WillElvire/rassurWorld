import { ServiceModule } from 'src/app/modules/service.module';
import { UserDto } from 'src/app/core/interfaces/dto';
import { Component, OnInit, inject } from '@angular/core';
import { UserQuery } from 'src/app/store/user$/user.query';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent  implements OnInit{
  private readonly userQuery = inject(UserQuery);
  private readonly utils     = inject(UtilsFacades);
  private readonly appFacade = inject(AppFacade);
  user ?: UserDto;
  sponsorship : any[] = [];
  ngOnInit(): void {
    this.user =  this.userQuery.fullUser;
    this.fetchBusinessSponsorship()
  }
  copy(){
    const clipboard = this.user?.code;
    navigator.clipboard.writeText(clipboard as string);
    this.utils.successToastMessage("Code copié");
  }

  p: number = 1;

  fetchBusinessSponsorship() {
    this.appFacade.fetchBusinessSponsorship(this?.user?.code as string).subscribe({
      next  : (response)=>{
        const body  : any = response.body;
        this.sponsorship = body.returnObject;
      },
      error : (err)=>{

      }
    });
  }
}
