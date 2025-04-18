import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { dashboardRoutes } from './dashboard.routes';
import { RecommendedJobsComponent } from './recommended-jobs/recommended-jobs.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { PostJobComponent } from './post-job/post-job.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(dashboardRoutes),
    DashboardComponent,
    RecommendedJobsComponent,
    MyApplicationsComponent,
    PostJobComponent,
    DashboardHomeComponent
  ]
})
export class DashboardModule { }
