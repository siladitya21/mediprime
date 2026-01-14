import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <div
      class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 1px); background-size: 40px 40px;"
        ></div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 left-20 w-32 h-32 bg-blue-700/30 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>

      <!-- Content -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Icon -->
          <div
            class="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-pulse"
          >
            <lucide-icon name="construction" [size]="48" class="text-white"></lucide-icon>
          </div>

          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <lucide-icon name="clock" [size]="18" class="text-white"></lucide-icon>
            <span class="text-sm font-semibold text-white">Coming Soon</span>
          </div>

          <!-- Heading -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Feature In Development
          </h1>

          <!-- Description -->
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            We're working hard to bring you this exciting new feature. It will be available in the
            near future as part of our commitment to innovation in healthcare.
          </p>

          <!-- Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <lucide-icon
                name="sparkles"
                [size]="24"
                class="text-white mx-auto mb-2"
              ></lucide-icon>
              <p class="text-white text-sm font-medium">Innovation</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <lucide-icon
                name="shield-check"
                [size]="24"
                class="text-white mx-auto mb-2"
              ></lucide-icon>
              <p class="text-white text-sm font-medium">Quality</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <lucide-icon
                name="heart-pulse"
                [size]="24"
                class="text-white mx-auto mb-2"
              ></lucide-icon>
              <p class="text-white text-sm font-medium">Care</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              routerLink="/home"
              class="group px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
            >
              <lucide-icon name="home" [size]="20"></lucide-icon>
              <span>Back to Home</span>
            </a>
            <a
              routerLink="/products"
              class="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <lucide-icon name="package" [size]="20"></lucide-icon>
              <span>View Products</span>
            </a>
          </div>

          <!-- Additional Info -->
          <div class="mt-12 pt-8 border-t border-white/20">
            <p class="text-blue-200 text-sm">
              Have questions?
              <a routerLink="/contact" class="text-white font-semibold hover:underline ml-1"
                >Contact our team</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `,
  ],
})
export class NotFoundComponent {}
