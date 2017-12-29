import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PublicApiService } from 'app/services/public-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-website-contact-form',
  templateUrl: './website-contact-form.component.html',
})
export class WebsiteContactFormComponent implements OnInit {

  constructor (
    private publicApi: PublicApiService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.publicApi.website.contactForm(form.value)
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
