import { Component } from '@angular/core';

@Component({
  selector: 'app-footerx',
  templateUrl: './footerx.component.html',
  styleUrls: ['./footerx.component.scss']
})
export class FooterxComponent {
  footer: any = [
    {
      logoimg: '../../../assets/images/surat.png',
      timing: 'Sunday - Monday: 24 Hours Available',
      timing2: 'Opening Hours:',
      content:
        'we are professional demolition & Dismantaling contractor we have many years of experience all over india under take demolition project of building & provide safe and trusted service from Mirza Demolition.',
      //
      contactinfo: 'CONTACT INFO',
      contactadd: 'Near Ruderpura Main Road Navsari bazar,surat',
      contactnumber: '9714589292',
      contactnumber2: '06384452903',
      contactmail: 'Noor.Mirza9292@gmail.com',
      contactmail2: 'infoname@gmail.com',
      //
      newsletter: 'NEWSLETTER',
      newsletter2: 'it was a pleasure speaking with you.',
      newsletter3: 'SUBSCRIBE NOW',
      //
      right: '© 2023 design by Eternity',
      li1: 'Home',
      li2: 'About',
      li3: 'Serviced',
      li4: 'Pages',
      li5: 'Blog',
      li6: 'Contact',
    },
  ];
  treeData = [
    {
      name: 'Parent 1',
      children: [{ name: 'Child 1' }, { name: 'Child 2' }],
    },
    {
      name: 'Parent 2',
      children: [{ name: 'Child 3' }, { name: 'Child 4' }],
    },
  ];
}
