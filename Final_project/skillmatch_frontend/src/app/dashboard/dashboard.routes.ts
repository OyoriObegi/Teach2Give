import { Routes } from '@angular/router';
import { RecommendedJobsComponent } from './recommended-jobs/recommended-jobs.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { PostJobComponent } from './post-job/post-job.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardHomeComponent
      },
      {
        path: 'recommended-jobs',
        component: RecommendedJobsComponent
      },
      {
        path: 'my-applications',
        component: MyApplicationsComponent
      },
      {
        path: 'post-job',
        component: PostJobComponent
      },
      {
        path: 'post-job/:id',
        component: PostJobComponent
      }
    ]
  }
]; 