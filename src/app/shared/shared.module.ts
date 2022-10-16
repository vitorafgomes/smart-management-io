import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BootstrapModule} from "./bootstrap.module";
import {RouterModule} from "@angular/router";
import {SmartManagementLayoutModule} from "./layout/layout.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SmartManagementLayoutModule,
    BootstrapModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SmartManagementLayoutModule,
    BootstrapModule
  ]
})
export class SharedModule { }
