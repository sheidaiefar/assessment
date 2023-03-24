import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { TemplateDirective } from './repeater/directives/template.directive';
import { RepeatComponent } from './repeat/repeat.component';
import { RepeatDirective } from './repeat/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeaterComponent,
    TemplateDirective,
    RepeatComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
