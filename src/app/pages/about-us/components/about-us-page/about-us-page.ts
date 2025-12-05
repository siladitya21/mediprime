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
    { value: '7+', label: 'Quality Products' },
    { value: 'Pan-India', label: 'Market Reach' },
    { value: 'Multiple', label: 'Clinical Trials' },
    { value: '100%', label: 'Quality Commitment' }
  ];

  whyChooseUs = [
    {
      icon: 'flask-conical',
      title: 'Scientifically Formulated Products',
      description: 'Our products are developed using rigorous scientific research and evidence-based formulations, ensuring efficacy and safety in every dose.'
    },
    {
      icon: 'map-pin',
      title: 'Pan-India Distribution Capability',
      description: 'With an extensive distribution network across India, we ensure our quality pharmaceutical products reach healthcare providers and patients nationwide.'
    },
    {
      icon: 'microscope',
      title: 'Ongoing Clinical Trials with Academic Partners',
      description: 'We actively collaborate with dental colleges and medical institutions across India to conduct clinical trials and validation studies for our products.'
    },
    {
      icon: 'shield-check',
      title: 'Ethical Practices & Regulatory Compliance',
      description: 'We maintain the highest standards of ethics and comply with all regulatory requirements, ensuring patient safety and trust in every product.'
    },
    {
      icon: 'lightbulb',
      title: 'Strong Focus on Innovation and Microbiome Science',
      description: 'Our commitment to innovation drives us to explore breakthrough therapies and leverage cutting-edge microbiome research for better health outcomes.'
    },
    {
      icon: 'award',
      title: 'High-Quality Manufacturing Standards',
      description: 'Every product is manufactured under stringent quality control measures, meeting international standards for pharmaceutical excellence.'
    }
  ];

  values = [
    {
      iconName: 'microscope',
      title: 'Evidence-Based Innovation',
      description: 'We prioritize scientific validation through clinical trials and academic collaborations with dental colleges and medical institutions across India, ensuring our products are backed by peer-reviewed research.'
    },
    {
      iconName: 'shield-check',
      title: 'Quality & Safety',
      description: 'Manufacturing excellence and adherence to the highest quality standards are non-negotiable. Every formulation meets stringent safety and efficacy benchmarks for patient wellbeing.'
    },
    {
      iconName: 'heart-handshake',
      title: 'Accessibility & Ethics',
      description: 'We believe quality healthcare should be affordable and accessible to all. Our ethical business practices ensure we serve patients first, delivering reliable healthcare solutions.'
    },
    {
      iconName: 'sprout',
      title: 'Community Impact',
      description: 'Through CSR initiatives including tree plantations, health camps, doctor CME programs, and preventive healthcare education, we contribute meaningfully to society beyond medicines.'
    }
  ];

  team = [
    {
      name: 'Leadership Team',
      position: 'Executive Leadership',
      icon: 'briefcase',
      description: 'Guiding Mediprime Biotech with expertise in pharmaceuticals, research, and healthcare innovation.'
    },
    {
      name: 'Research Team',
      position: 'R&D Department',
      icon: 'flask-conical',
      description: 'Exploring breakthrough therapies including novel hyperthyroidism treatments and conducting clinical validation studies.'
    },
    {
      name: 'Medical Affairs',
      position: 'Clinical Collaboration',
      icon: 'stethoscope',
      description: 'Partnering with academic institutions and healthcare professionals to ensure evidence-based product development.'
    },
    {
      name: 'Quality Assurance',
      position: 'Quality Control',
      icon: 'shield-check',
      description: 'Maintaining the highest manufacturing standards and regulatory compliance across all product formulations.'
    }
  ];

  milestones = [
    {
      year: 'Early 2020s',
      event: 'Company Established',
      description: 'Mediprime Biotech founded in Kolkata with a mission to deliver evidence-based pharmaceutical and nutraceutical solutions.'
    },
    {
      year: 'Product Launch',
      event: 'Core Portfolio Introduced',
      description: 'Successfully launched Primolac (Sachet & Capsule), P-Cillin antibiotic series, Medfly 9G multivitamin, and Medicyp appetite stimulant.'
    },
    {
      year: 'Research Milestone',
      event: 'Clinical Trials Initiated',
      description: 'Partnered with multiple dental colleges and medical institutions across India for Primolac clinical validation and efficacy studies.'
    },
    {
      year: 'Innovation Focus',
      event: 'Hyperthyroidism Research',
      description: 'Began early-phase exploration of a first-of-its-kind hyperthyroidism molecule, addressing an unmet global clinical need.'
    },
    {
      year: 'Pan-India Growth',
      event: 'National Expansion',
      description: 'Expanded distribution network across India, making quality pharmaceutical products accessible to diverse markets.'
    },
    {
      year: 'CSR Initiatives',
      event: 'Community Engagement',
      description: 'Launched comprehensive CSR programs including health camps, doctor education, environmental sustainability, and preventive healthcare awareness.'
    }
  ];
}