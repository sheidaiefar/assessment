import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentsComponent as AssessmentsComponent } from './assessments.component';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import {MatDividerModule} from '@angular/material/divider';
import { RepeatComponent } from 'src/app/components/repeat/repeat.component';
import { RepeatDirective } from 'src/app/components/repeat/repeat.directive';


@NgModule({
  declarations: [
    AssessmentsComponent,
    SortPipe,    
    RepeatComponent,
    RepeatDirective,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AssessmentsComponent,
      },
    ]),

    MatExpansionModule,
    MatIconModule,
    MatDividerModule
  ],
})
export class AssessmentsModule {}
