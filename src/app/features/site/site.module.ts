import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {routing} from "./site.routing";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    routing
  ]
})
export class SiteModule { }
