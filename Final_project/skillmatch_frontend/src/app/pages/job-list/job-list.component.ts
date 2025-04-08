import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
  jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechSavvy Inc.',
      location: 'Remote',
      tags: ['Angular', 'TypeScript', 'UI/UX'],
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Insights Corp.',
      location: 'Nairobi, Kenya',
      tags: ['Python', 'SQL', 'Tableau'],
    },
    {
      id: 3,
      title: 'Machine Learning Engineer',
      company: 'AIWorks',
      location: 'Hybrid - Nairobi',
      tags: ['ML', 'TensorFlow', 'Python'],
    }
  ];

}
