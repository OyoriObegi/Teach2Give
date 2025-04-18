import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { jobsRoutes } from './jobs.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(jobsRoutes),
    JobListComponent
  ]
})
export class JobsModule { } 