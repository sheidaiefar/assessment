import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { RepeatDirective } from './components/repeat/repeat.directive';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,  
    RepeatComponent,
    RepeatDirective,
    SortPipe,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
