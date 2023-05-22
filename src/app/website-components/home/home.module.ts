import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {HomeRoutingModule } from './home-routing.module';
import {HomeComponent } from './home.component';
import {IvyCarouselModule } from "angular-responsive-carousel";
import {MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {CarouselModule } from 'ngx-owl-carousel-o';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';
import { AboutUsModule } from 'src/app/component-x/about-us/about-us/about-us.module';
import { AboutUsComponent } from 'src/app/component-x/about-us/about-us.component';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/database';


// const firebaseConfig = {
//   apiKey: "AIzaSyDcLlNRgtiXBbrHy1moVxroVj8CLO9lNg8",
//   authDomain: "mirza-demolition.firebaseapp.com",
//   projectId: "mirza-demolition",
//   storageBucket: "mirza-demolition.appspot.com",
//   messagingSenderId: "585023862450",
//   appId: "1:585023862450:web:d9b2110d677a9a1b8dbbab",
//   measurementId: "G-RFEYZZLZFS"
// };
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AboutUsModule
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    EmailService
  ],
})

export class HomeModule {}
