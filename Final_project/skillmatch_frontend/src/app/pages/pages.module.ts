import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './landing/landing.component';
import { JobListComponent } from './job-list/job-list.component';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [LandingComponent, JobListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    MatIconModule
  ]
})
export class PagesModule { }
