import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './pages/assessment/assessment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/assessment'
  },
  {
    path: 'assessment',
    component: AssessmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
