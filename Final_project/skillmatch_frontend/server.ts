import { renderApplication } from '@angular/platform-server';
import { AppComponent } from './src/app/app.component';
import { provideServerRendering } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';

export function getPrerenderParams() {
  return {
    '/dashboard/post-job/:id': [
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ],
    '/jobs/:id': [
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ]
  };
}

export function render(url: string, document: string) {
  return renderApplication(() => bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      provideClientHydration()
    ]
  }), {
    document,
    url
  });
} 