import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { IndexComponent } from './login/pages/pages/index/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
