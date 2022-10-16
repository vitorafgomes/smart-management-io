import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule),

  }
];

export const routing = RouterModule.forChild(routes);
