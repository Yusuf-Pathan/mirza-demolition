import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {HomeRoutingModule } from './home-routing.module';
import {HomeComponent } from './home.component';
// import {IvyCarouselModule } from "angular-responsive-carousel";
import {MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {CarouselModule } from 'ngx-owl-carousel-o';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';
// import { AboutUsComponent } from 'src/app/component-x/about-us/about-us.component';
// import { LandingPageModule } from "../../component-x/landing-page/landing-page.module";
// import { WorkCategoriesModule } from "../../component-x/work-categories/work-categories.module";
// import { AboutUsModule } from 'src/app/component-x/about-us/about-us.module';
// import { ExperiencesModule } from 'src/app/component-x/experiences/experiences.module';
// import { QualitiesModule } from 'src/app/component-x/qualities/qualities.module';
// import { OurArticalsModule } from 'src/app/component-x/our-articals/our-articals.module';
// import { OurProjectsModule } from 'src/app/component-x/our-projects/our-projects.module';
// import { BenifitsModule } from 'src/app/component-x/benifits/benifits.module';
// import { ReviewsModule } from 'src/app/component-x/reviews/reviews.module';
// import { ContactUsModule } from 'src/app/component-x/contact-us/contact-us.module';
// import { UpComingProjectsModule } from 'src/app/component-x/up-coming-projects/up-coming-projects.module';
// import { FooterxModule } from 'src/app/component-x/footerx/footerx.module';

// import { WorkCategoriesModule } from "../../component-x/work-categories/work-categories.module";
// import { LandingComponent } from 'src/app/components/landing/landing.component';
// import { AboutUsModule } from 'src/app/component-x/about-us/about-us.module';
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
        HomeComponent,
        // AboutUsComponent,
        // LandingComponent
    ],
    providers: [
        EmailService
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        // IvyCarouselModule,
        MatIconModule,
        MatExpansionModule,
        MatCardModule,
        CarouselModule,
        ReactiveFormsModule,
        FormsModule,
        MatTreeModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        // LandingPageModule,
        // AboutUsModule,
        // WorkCategoriesModule,
        // ExperiencesModule,
        // QualitiesModule,
        // OurProjectsModule,
        // OurArticalsModule,
        // BenifitsModule,
        // ReviewsModule,
        // ContactUsModule,
        // OurArticalsModule,
        // UpComingProjectsModule,
        // FooterxModule
    ]
})

export class HomeModule {}
