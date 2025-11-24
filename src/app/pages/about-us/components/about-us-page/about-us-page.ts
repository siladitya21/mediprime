import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
})
export class AboutUsPage {
  stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '500+', label: 'Healthcare Products' },
    { value: '10M+', label: 'Lives Impacted' },
    { value: '50+', label: 'Countries Worldwide' }
  ];

  values = [
    {
      iconName: 'shield-check',
      title: 'Quality Assurance',
      description: 'Committed to delivering the highest quality pharmaceutical products that meet international standards and regulations.'
    },
    {
      iconName: 'flask-conical',
      title: 'Innovation',
      description: 'Pioneering research and development to create breakthrough solutions for modern healthcare challenges.'
    },
    {
      iconName: 'heart',
      title: 'Patient Care',
      description: 'Placing patient welfare at the heart of everything we do, ensuring accessible and affordable healthcare solutions.'
    },
    {
      iconName: 'handshake',
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all our business practices and relationships.'
    }
  ];

  team = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Executive Officer',
      description: 'Leading MediPrime with over 20 years of pharmaceutical industry experience.'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Chief Scientific Officer',
      description: 'Driving innovation in drug development and research initiatives.'
    },
    {
      name: 'Mr. Amit Patel',
      position: 'Chief Operations Officer',
      description: 'Ensuring operational excellence and quality management across all facilities.'
    },
    {
      name: 'Dr. Sneha Reddy',
      position: 'Head of Research & Development',
      description: 'Leading breakthrough research in biotechnology and pharmaceuticals.'
    }
  ];

  milestones = [
    { year: '2008', event: 'Company Founded', description: 'MediPrime Biotech established with a vision to revolutionize healthcare.' },
    { year: '2012', event: 'First Product Launch', description: 'Successfully launched our first pharmaceutical product line.' },
    { year: '2015', event: 'International Expansion', description: 'Expanded operations to 10 countries across Asia and Africa.' },
    { year: '2018', event: 'Research Breakthrough', description: 'Achieved major breakthrough in oncology drug development.' },
    { year: '2020', event: 'Global Recognition', description: 'Received international awards for innovation and quality.' },
    { year: '2023', event: 'Sustainable Future', description: 'Launched green manufacturing initiative for environmental sustainability.' }
  ];
}