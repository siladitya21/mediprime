import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css',
})
export class ContactUsPage {
  // No form logic needed - just contact information display
}