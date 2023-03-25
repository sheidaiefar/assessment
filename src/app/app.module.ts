import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { RepeatDirective } from './components/repeat/repeat.directive';
import { SorterPipe } from './pipes/sorter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortingPipe } from './pipes/sorting.pipe';



@NgModule({
  declarations: [
    AppComponent,  
    RepeatComponent,
    RepeatDirective,
    SorterPipe,
    SortPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
