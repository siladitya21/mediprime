import { Component, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from './shared/services/loader.service';
import { LoaderComponent } from "./shared/components/loader/loader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('medi-prime');
  private navigationInProgress = false;

  constructor(
    private router: Router,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

        this.loaderService.show();
      }

      if (event instanceof NavigationEnd) {

        this.loaderService.hide();
      }

      if (event instanceof NavigationCancel) {

        this.loaderService.hide();
      }

      if (event instanceof NavigationError) {

        this.loaderService.hide();
      }
    });
  }
}