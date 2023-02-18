import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, ca_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ca from '@angular/common/locales/ca';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(ca);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: ca_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
