import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { TemplateDirective } from './repeater/directives/template.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeaterComponent,
    TemplateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
