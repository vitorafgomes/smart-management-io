import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import {RouterModule} from "@angular/router";
import {EmptyLayoutComponent} from "./app-layouts/empty-layout.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MainLayoutComponent,
    EmptyLayoutComponent
  ],
})
export class SmartManagementLayoutModule { }
