import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    
  ]
};
