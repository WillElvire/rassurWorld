import { AppFacade } from 'src/app/core/facades/app.facade';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly appFacade = inject(AppFacade);
  private readonly utilsFacade = inject(UtilsFacades);
  private readonly location = inject(Location);
  id?: string;
  insuranceDto: any;
  isVisible: boolean = false;
  isMailVisible: boolean = false;
  isUploadVisible: boolean = false;
  isViewed : boolean = false;
  isBenefiariesVisible : boolean = false;
  file?: File;
  formData: FormData = new FormData();
  p : number = 1;

  constructor() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.loadRequestDetail(params.id);
    });
  }

  goBack() {
    this.location.back();
  }

  loadRequestDetail(id: string) {
    this.appFacade.getInsurance(id as string).subscribe({
      next: (response: any) => {
        console.log(response);
        this.insuranceDto = response.body.returnObject;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  confirmInsurance() {
    this.appFacade.confirmInsurance(this.id as string).subscribe({
      next: (response: any) => {
        const resp = response.body;
        console.log(resp)
        this.utilsFacade.successToastMessage(resp.message);
        this.loadRequestDetail(this.id as string);
      },
      error: (err) => {
        console.log(err)
        this.utilsFacade.errorToastMessage(!!err.error.message ? err.error.message : err.message);
      },
    });
  }

  addCotation(event: any) {
    this.isVisible = false;
    return this.postCotation(event);
  }

  postCotation(cotation: any) {
    const id = this.insuranceDto.transaction.id;
    this.appFacade.updateTransaction({ id, total_net: cotation.total_net , fees : cotation.fees , total : cotation.total }).subscribe(
      (response) => {
        console.log(response);
        this.loadRequestDetail(this.id as string);
        this.sendMailCotation(cotation);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleOk(): void {
    this.isVisible = false;
    this.isMailVisible = false;
    this.isUploadVisible = false;
    this.isViewed = false;
    this.isBenefiariesVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isMailVisible = false;
    this.isUploadVisible = false;
    this.isViewed = false;
    this.isBenefiariesVisible = false;
  }

  sendFile(event: any) {
    const id = this.insuranceDto.transaction.id;
    this.file = event;

    //const data = { id, file : event, firstname : this.insuranceDto?.user?.firstname, lastname : this.insuranceDto?.user?.lastname,phone : this.insuranceDto?.user?.phone };
    return this.postToServer(id);
  }

  postToServer(id: any) {
    this.formData.append('file', this.file as any);
    this.formData.append('firstname', this.insuranceDto?.user?.firstname);
    this.formData.append('lastname', this.insuranceDto?.user?.lastname);
    this.formData.append('phone', this.insuranceDto?.user?.phone);
    this.formData.append('id', id);

    this.appFacade.fileReceiptAndMail(this.formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.utilsFacade.errorToastMessage(error.message);
      }
    );
  }

  sendRelance() {
    this.appFacade
      .relance({
        firstname: this.insuranceDto?.user?.firstname,
        lastname: this.insuranceDto?.user?.lastname,
        phone: this.insuranceDto?.user?.phone,
        email: this.insuranceDto?.user?.email,
        useWhatsapp: this.insuranceDto?.user?.useWhatsapp,
        subject: 'Relance de paiement',
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          const resp = response.body;
          if (resp.code == 200)
            return this.utilsFacade.successToastMessage(
              'Mail envoyé avec success'
            );
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        },
        (error) => {
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        }
      );
  }

  sendWelcome() {
    this.appFacade
      .welcome({
        firstname: this.insuranceDto?.user?.firstname,
        lastname: this.insuranceDto?.user?.lastname,
        phone: this.insuranceDto?.user?.phone,
        email: this.insuranceDto?.user?.email,
        useWhatsapp: this.insuranceDto?.user?.useWhatsapp,
        subject: 'Mail de bienvenue',
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          const resp = response.body;
          if (resp.code == 200)
            return this.utilsFacade.successToastMessage(
              'Mail envoyé avec success'
            );
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        },
        (error) => {
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        }
      );
  }

  sendMailCotation(amount: string) {
    this.appFacade
      .cotation({
        id: this.insuranceDto.id,
        phone: this.insuranceDto?.user?.phone,
        lastname: this.insuranceDto?.user?.lastname,
        firstname: this.insuranceDto?.user?.firstname,
        cotation: amount,
        email: this.insuranceDto?.user?.email,
        useWhatsapp: this.insuranceDto?.user?.useWhatsapp,
        subject: "Mail d'ajout de cotation",
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          const resp = response.body;
          if (resp.code == 200)
            return this.utilsFacade.successToastMessage(
              'Mail envoyé avec success'
            );
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        },
        (error) => {
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        }
      );
  }

  sendPayment() {
    this.appFacade
      .payment({
        id: this.insuranceDto.id,
        phone: this.insuranceDto?.user?.phone,
        email: this.insuranceDto?.user?.email,
        useWhatsapp: this.insuranceDto?.user?.useWhatsapp,
        subject: 'Lien de paiement',
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          const resp = response.body;
          if (resp.code == 200)
            return this.utilsFacade.successToastMessage(
              'Mail envoyé avec success'
            );
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        },
        (error) => {
          return this.utilsFacade.errorToastMessage(
            "Erreur durant l'envoi du mail"
          );
        }
      );
  }
}
