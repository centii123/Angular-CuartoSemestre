import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from '../shared/nav/nav.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
