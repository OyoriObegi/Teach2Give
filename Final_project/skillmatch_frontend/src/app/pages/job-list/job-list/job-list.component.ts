import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-list',
  imports: [FormsModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})


export class JobListComponent {
  searchTerm: string = '';

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
  
  filteredJobs() {
    if (!this.searchTerm.trim()) {
      return this.jobs;
    }

    const lower = this.searchTerm.toLowerCase();
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(lower) ||
      job.company.toLowerCase().includes(lower) ||
      job.location.toLowerCase().includes(lower)
    );
  }

}
