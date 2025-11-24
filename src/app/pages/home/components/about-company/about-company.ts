import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css',
})
export class AboutCompanyComponent {
  // Leadership team data
  leaders: Leader[] = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '25+ years in pharmaceutical innovation',
      linkedin: '#'
    },
    {
      name: 'Dr. James Chen',
      title: 'Chief Scientific Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: 'Leading research in molecular therapeutics',
      linkedin: '#'
    },
    {
      name: 'Maria Rodriguez',
      title: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Expert in pharmaceutical operations',
      linkedin: '#'
    },
    {
      name: 'Dr. Michael Okonkwo',
      title: 'VP of Clinical Research',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Pioneer in clinical trial methodology',
      linkedin: '#'
    }
  ];

  // Company timeline/milestones
  milestones: Milestone[] = [
    {
      year: '1975',
      title: 'Foundation',
      description: 'PharmaCare founded with a vision to make healthcare accessible'
    },
    {
      year: '1992',
      title: 'First Breakthrough',
      description: 'Launched groundbreaking cardiovascular treatment'
    },
    {
      year: '2005',
      title: 'Global Expansion',
      description: 'Expanded operations to 50+ countries worldwide'
    },
    {
      year: '2015',
      title: 'Innovation Center',
      description: 'Opened state-of-the-art R&D facility'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading AI-driven drug discovery initiatives'
    }
  ];

  // Values/principles
  values = [
    {
      icon: 'shield',
      title: 'Patient Safety',
      description: 'Unwavering commitment to the highest safety standards in every product we develop.'
    },
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description: 'Pushing boundaries through cutting-edge research and development.'
    },
    {
      icon: 'users',
      title: 'Integrity',
      description: 'Operating with transparency, ethics, and accountability in all we do.'
    },
    {
      icon: 'globe',
      title: 'Global Impact',
      description: 'Making quality healthcare accessible to communities worldwide.'
    }
  ];
}