import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    LastName: new FormControl(''),
    Emails: new FormControl(''),
    Company: new FormControl(''),
    request: new FormControl('')
  });
  onSubmit(){
    console.log(this.profileForm.value);
    this.profileForm.reset();
     alert('data submitted') 
  }
}
