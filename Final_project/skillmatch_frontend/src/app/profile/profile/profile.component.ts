import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  fullName: string = '';
  email: string = '';
  bio: string = '';
  skills: string = '';
  uploadedCVName: string = '';

  onSave() {
    console.log('Saved profile:', {
      fullName: this.fullName,
      email: this.email,
      bio: this.bio,
      skills: this.skills,
      cv: this.uploadedCVName || 'No CV uploaded'
    });
    alert('Profile saved (mock)');
  }

  onCVUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedCVName = file.name;
      console.log('CV uploaded:', file.name);
    }
  }

}
