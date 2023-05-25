import { NgModule } from '@angular/core';
import { LandingTemplateComponent } from './landing-template.component';
import { CommonModule } from '@angular/common';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageModule } from '../component-x/landing-page/landing-page.module';
import { AboutUsModule } from '../component-x/about-us/about-us.module';
import { WorkCategoriesModule } from '../component-x/work-categories/work-categories.module';
import { ExperiencesModule } from '../component-x/experiences/experiences.module';
import { QualitiesModule } from '../component-x/qualities/qualities.module';
import { OurProjectsModule } from '../component-x/our-projects/our-projects.module';
import { OurArticalsModule } from '../component-x/our-articals/our-articals.module';
import { BenifitsModule } from '../component-x/benifits/benifits.module';
import { ReviewsModule } from '../component-x/reviews/reviews.module';
import { ContactUsModule } from '../component-x/contact-us/contact-us.module';
import { UpComingProjectsModule } from '../component-x/up-coming-projects/up-coming-projects.module';
import { FooterxModule } from '../component-x/footerx/footerx.module';
import { LandingTemplateRoutingModule } from './landing-template-routing.module';

@NgModule({
  declarations: [LandingTemplateComponent],
  imports: [
    CommonModule,
    LandingTemplateRoutingModule,
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
    LandingPageModule,
    AboutUsModule,
    WorkCategoriesModule,
    ExperiencesModule,
    QualitiesModule,
    OurProjectsModule,
    OurArticalsModule,
    BenifitsModule,
    ReviewsModule,
    ContactUsModule,
    OurArticalsModule,
    UpComingProjectsModule,
    FooterxModule,
  ],
})
export class LandingTemplateModule {}
