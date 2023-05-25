import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/website-components/home/email.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  // constructor(private conatect: EmailService) {}
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    LastName: new FormControl(''),
    Emails: new FormControl(''),
    Company: new FormControl(''),
    request: new FormControl(''),
  });
  onSubmit(profileForm: any) {
    // this.conatect.PostMessage(profileForm).subscribe(
    //   (response: any) => {
    //     // location.href = 'https://mailthis.to/confirm'
    //     // console.log(response)
    //     this.profileForm.reset();
    //   },
    //   (error: { responseText: any }) => {
    //     console.warn(error.responseText);
    //     console.log({ error });
    //   }
    // );
  }
  conatct: any = [
    {
      describe:
        ' Describe your product idea and we will start working on it within 24 hours.',
      contact: 'Contact us',
    },
  ];
}
