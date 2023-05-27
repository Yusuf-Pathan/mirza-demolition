import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LandingComponent } from './components/landing/landing.component';
import { LinkComponent } from './redirect-path/link.component';
import { FooterxComponent } from './component-x/footerx/footerx.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-template/landing-template.module').then(
        (m) => m.LandingTemplateModule
      ),
  },
  {
    path: 'highreach',
    loadChildren: () =>
      import(
        './redirect-path/high-reach-demolition/high-reach-demolition.module'
      ).then((m) => m.HighReachDemolitionModule),
  },
  {
    path: 'buildings',
    loadChildren: () =>
      import(
        './redirect-path/building-demolition/building-demolition.module'
      ).then((m) => m.BuildingDemolitionModule),
  },
  {
    path: 'robotic',
    loadChildren: () =>
      import(
        './redirect-path/robotic-demolition/robotic-demolition.module'
      ).then((m) => m.RoboticDemolitionModule),
  },
  {
    path: 'shead',
    loadChildren: () =>
      import('./redirect-path/shead-demoliton/shead-demoliton.module').then(
        (m) => m.SheadDemolitonModule
      ),
  },
  {
    path: 'alltype',
    loadChildren: () =>
      import(
        './redirect-path/all-type-demoliton/all-type-demoliton.module'
      ).then((m) => m.AllTypeDemolitonModule),
  },
  {
    path: 'special',
    loadChildren: () =>
      import('./redirect-path/special-demoliton/special-demoliton.module').then(
        (m) => m.SpecialDemolitonModule
      ),
  },
  {
    path: 'alltypeex',
    loadChildren: () =>
      import(
        './redirect-path/all-type-excavator-rate/all-type-excavator-rate.module'
      ).then((m) => m.AllTypeExcavatorRateModule),
  },
  {
    path: 'plant',
    loadChildren: () =>
      import('./redirect-path/plant-demolition/plant-demolition.module').then(
        (m) => m.PlantDemolitionModule
      ),
  },
  {
    path: 'highrise',
    loadChildren: () =>
      import(
        './redirect-path/high-rise-building/high-rise-building.module'
      ).then((m) => m.HighRiseBuildingModule),
  },
  {
    path: 'bridge',
    loadChildren: () =>
      import('./redirect-path/bridge-demolition/bridge-demolition.module').then(
        (m) => m.BridgeDemolitionModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./component-x/footerx/footerx.module').then(
        (m) => m.FooterxModule
      ),
  },
  {
    path: 'bungalow',
    loadChildren: () =>
      import(
        './redirect-path/bungalow-demolition/bungalow-demolition.module'
      ).then((m) => m.BungalowDemolitionModule),
  },
  {
    path: 'mass',
    loadChildren: () =>
      import('./redirect-path/mass-excavation/mass-excavation.module').then(
        (m) => m.MassExcavationModule
      ),
  },

  {
    path: 'links',
    component: LinkComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
