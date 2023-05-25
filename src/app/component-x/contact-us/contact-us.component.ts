import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  contact = [
    {
      describe:
        'Describe your product idea and we will start working on it within 24 hours.',
      contact: 'Contact us',
    },
  ];
  ngOnInit(): void {}
  onSubmit(profileForm: any) {
    console.warn(profileForm.value);
  }
}
