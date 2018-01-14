import { Injectable } from '@angular/core';
import { NotificationService } from 'app/services/notification.service';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private notification: NotificationService,
  ) { }

  process(errorResponse) {
    const errorMessage = errorResponse.error.message;
    console.log(errorMessage)
    this.notification.error({
      message: errorMessage,
    });
  }
}
