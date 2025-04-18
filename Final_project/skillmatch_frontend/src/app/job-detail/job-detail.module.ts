import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { JobDetailRoutingModule } from './job-detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailComponent], // ✅ Correct location
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    JobDetailRoutingModule
  ]
})
export class JobDetailModule { }
