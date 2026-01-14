import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LucideAngularModule, Home, User, Settings, icons } from 'lucide-angular';
import { routes } from './app.routes';
import { loaderInterceptor } from './shared/loader-interceptor';
import { AppTitleStrategy } from './core/seo/app-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    importProvidersFrom(LucideAngularModule.pick(icons)),
    provideRouter(routes),
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
  ],
};
