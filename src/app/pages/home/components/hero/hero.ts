import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit {
  particles: { x: number; y: number; size: number; duration: number }[] = [];

  ngOnInit() {
    // Generate random particles for background animation
    this.generateParticles();
  }

  generateParticles() {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 15,
      });
    }
  }
}