import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LinkComponent } from './website-components/link/link.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'planet',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'highrise',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bridge',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bunglow',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'mass excavation',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'buildingdemolition',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'high rich',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'shead',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'special',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'alltypedemolition',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'alltypeexcavator',
    loadChildren: () =>
      import('./website-components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'links',
    component: LinkComponent,
  },
  // { path: '', component: LandingComponent },

  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
