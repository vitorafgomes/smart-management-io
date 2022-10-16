import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyLayoutComponent} from "./shared/layout/app-layouts/empty-layout.component";

const routes: Routes = [
  {
    path: "",
    component: EmptyLayoutComponent,
    data: {pageTitle: "Home"},
    children: [
      {
        path: "",
        redirectTo: "site/home",
        pathMatch: "full"
      },
      {
        path: "site",
        loadChildren: () => import("./features/site/site.module").then(m => m.SiteModule),
        data: {pageTitle: "Dashboard"}
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
