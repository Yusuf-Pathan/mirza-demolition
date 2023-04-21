import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
// material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// custom modules
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LandingComponent } from './components/landing/landing.component';
import { ReviewComponent } from './components/review/review.component';
import { StickyHeaderComponent } from './common/sticky-header/sticky-header.component';
import { VideoComponent } from './components/video/video.component';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CategoryComponent,
    FooterComponent,
    GalleryComponent,
    LandingComponent,
    ReviewComponent,
    StickyHeaderComponent,
    VideoComponent,
    WorksComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    // material modules
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
