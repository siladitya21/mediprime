import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

/**
 * LoaderComponent
 * ----------------
 * Displays a full-screen EA-Sports-style animated loading overlay
 * whenever the application's global loading state is active.
 *
 * Features:
 * - Multi-ring animated spinner
 * - Pulsating center effect
 * - Energy lines animation
 * - Dynamic progress bar
 * - Loading text with animated dots
 * - Company slogan display
 *
 * The component listens to `loaderService.loading$` to show or hide the loader.
 */
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loaderService.loading$ | async) {
      <div class="loader-overlay">
        <div class="loader-container">

          <!-- EA Sports style animated loader -->
          <div class="ea-loader">
            <div class="spinner-ring ring-1"></div>
            <div class="spinner-ring ring-2"></div>
            <div class="spinner-ring ring-3"></div>
            <div class="center-pulse"></div>

            <!-- Animated energy lines -->
            <div class="energy-line line-1"></div>
            <div class="energy-line line-2"></div>
            <div class="energy-line line-3"></div>
            <div class="energy-line line-4"></div>
          </div>

          <!-- Animated loading text -->
          <div class="loading-text">
            <span class="text-main">LOADING</span>
            <span class="text-dots">
              <span class="dot">.</span>
              <span class="dot">.</span>
              <span class="dot">.</span>
            </span>
          </div>

          <!-- Dynamic progress bar with glow -->
          <div class="progress-container">
            <div class="progress-bar"></div>
            <div class="progress-glow"></div>
          </div>

          <!-- Brand slogan -->
          <div class="slogan">MediPrime Biotech</div>

        </div>
      </div>
    }
  `,
  styleUrls: ['./loader.css']
})
export class LoaderComponent {

  /**
   * Injects the global LoaderService to listen for app-wide loading state.
   *
   * @param loaderService - Service controlling loader visibility via an observable.
   */
  constructor(public loaderService: LoaderService) {}
}
