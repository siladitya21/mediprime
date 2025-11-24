import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [
    {
      image: '/api/placeholder/1200/675',
      title: 'Cardiovascular Health',
      description: 'Advanced heart health medications for better cardiovascular wellness'
    },
    {
      image: '/api/placeholder/1200/675',
      title: 'Respiratory Care',
      description: 'Innovative solutions for asthma, COPD and breathing disorders'
    },
    {
      image: '/api/placeholder/1200/675',
      title: 'Pain Management',
      description: 'Effective pain relief solutions with minimal side effects'
    },
    {
      image: '/api/placeholder/1200/675',
      title: 'Digestive Health',
      description: 'Comprehensive gastrointestinal care for optimal digestion'
    }
  ];

  private autoPlayInterval: any;
  private autoPlayDuration = 4000; // 4 seconds

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoPlay();
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0
      ? this.slides.length - 1
      : this.currentSlide - 1;
    this.resetAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDuration);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private resetAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}