import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private api = 'https://mailthis.to/npcodeninja';

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input);
  }

  //        submitForm(this: any) {
  //     this.http.post('/api/send-email', this.profileForm.data).subscribe(
  //         () => {
  //           console.log('Form data sent successfully');
  //         },
  //         (error: any) => {
  //           console.log('Error occurred while sending form data:', error);
  //         }
  //       );
  // }
}
