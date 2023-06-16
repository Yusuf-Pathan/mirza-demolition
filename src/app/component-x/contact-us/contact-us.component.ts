import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import "../../../assets/script/smtp.js";


declare let Email: any

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  items: any[] = [];
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emails: new FormControl(''),
    company: new FormControl(''),
    request: new FormControl(''),
  });

  constructor() {}

  onSubmit(profileForm: any) {
    debugger;

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'mirza4387@gmail.com',
      Password: 'D8E2EE88E53330121C12CD08FF5CE3F1D02E',
      To: 'pathanp570@gmail.com',
      From: "mirza4387@gmail.com",
      Subject: 'Sent by Customer website created by Eternity Techno to Mirza Demolition',
      Body: `
      <i>This is sent as a feedback from my resume page.</i>
      <br/>
      <b>First Name: </b>
        ${profileForm.firstName}
      <br />
      <b>Last Name: </b>
        ${profileForm.lastName}
      <br />
      <b>Email: </b>
        ${profileForm.emails}
      <br />
      <b>Company: </b>
        ${profileForm.company}
      <br />
      <b>Message:</b>
      <br />
        ${profileForm.request}
      <br>
      <br>
      <b>~End of Message.~</b> `,
    }).then((message: any) => {
      alert(message);
    });
  }
}
