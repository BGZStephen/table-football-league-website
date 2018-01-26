import { Component, OnInit } from '@angular/core';
import { PublicApiService } from 'app/services/public-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-website-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {

  constructor (
    private publicApi: PublicApiService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.publicApi.website.contactForm({
      body: {message: form.value},
    })
    .subscribe(
      res => {
        this.globalService.notification.show({message: 'Message sent'});
        form.resetForm();
      },
      error => {
        this.globalService.notification.error({message: 'Error sending message, please try again'});
      }
    )
  }
}
