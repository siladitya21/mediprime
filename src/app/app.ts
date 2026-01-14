import { Component, signal } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterOutlet,
  ActivatedRoute,
  NavigationCancel,
  NavigationError,
  NavigationStart,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { LoaderService } from './shared/services/loader.service';
import { LoaderComponent } from './shared/components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router, private loaderService: LoaderService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loaderService.hide();
      }
    });
  }
}
