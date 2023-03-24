import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { RepeatDirective } from './components/repeat/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,  
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
