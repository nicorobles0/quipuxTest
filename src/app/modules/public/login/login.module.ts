import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
