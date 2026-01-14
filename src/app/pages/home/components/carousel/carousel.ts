import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  currentSlide = 0;
  slides = [
    {
      image: 'assets/images/a.png',
      title: 'Research & Development',
      description: 'Pioneering breakthrough therapies through cutting-edge pharmaceutical research'
    },
    {
      image: 'assets/images/b.png',
      title: 'Drug Manufacturing',
      description: 'State-of-the-art production facilities ensuring highest quality standards'
    },
    {
      image: 'assets/images/c.png',
      title: 'Clinical Trials',
      description: 'Rigorous testing and validation for safe and effective medications'
    },
    {
      image: 'assets/images/d.png',
      title: 'Quality Assurance',
      description: 'Stringent quality control processes for pharmaceutical excellence'
    },
    {
      image: 'assets/images/e.png',
      title: 'Global Distribution',
      description: 'Delivering life-saving medicines to patients worldwide'
    }
  ];

  // Disable right-click context menu
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): boolean {
    event.preventDefault();
    return false;
  }

  // Prevent image dragging
  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent): boolean {
    event.preventDefault();
    return false;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0
      ? this.slides.length - 1
      : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}