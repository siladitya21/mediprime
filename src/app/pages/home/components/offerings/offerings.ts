import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  benefits: string[];
  products?: { name: string; description: string }[];
}

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [LucideAngularModule, CommonModule,RouterModule],
  templateUrl: './offerings.html',
  styleUrl: './offerings.css',
})
export class Offerings {
  private platformId = inject(PLATFORM_ID);

  // Modern signals instead of class properties
  isModalOpen = signal(false);
  selectedService = signal<ServiceDetail | null>(null);

  // Readonly and Record type for better type safety
  private readonly serviceDetails: Record<string, ServiceDetail> = {
    gutHealth: {
      id: 'gutHealth',
      title: 'Gut Health & Probiotics',
      subtitle: 'Microbiome Restoration & Digestive Wellness',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>',
      description:
        'Our pre-probiotic formulations represent cutting-edge research in gut health and microbiome science. Primolac products are scientifically balanced synbiotic formulas that combine prebiotics and probiotics to support comprehensive digestive wellness, oral microbiome balance, and recovery in various gastro-oral conditions.',
      features: [
        'Scientifically balanced synbiotic formula combining prebiotics and probiotics',
        'Supports both gut and oral microbiome health',
        'Available in convenient sachet and capsule formats',
        'Backed by ongoing clinical trials with dental and medical colleges',
        'Evidence-based formulation for optimal efficacy',
        'Long-term microbiome restoration support',
      ],
      benefits: [
        'Improved digestive comfort and function',
        'Enhanced oral health and hygiene',
        'Faster recovery from gastro-oral conditions',
        'Restoration of beneficial gut bacteria',
        'Support during antibiotic treatment',
        'Improved nutrient absorption',
      ],
      products: [
        {
          name: 'Primolac Sachet',
          description:
            'Pre-probiotic blend for immediate digestive support and oral microbiome balance',
        },
        {
          name: 'Primolac Capsules',
          description:
            'Long-term gut support with improved digestion and microbiome restoration',
        },
      ],
    },
    antibiotic: {
      id: 'antibiotic',
      title: 'Antibiotic Support Therapy',
      subtitle: 'Advanced Infection Treatment with Gut Protection',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
      description:
        'Our P-Cillin series represents an innovative approach to antibiotic therapy. By combining broad-spectrum antibiotics with probiotic support, we address bacterial infections while actively preserving beneficial gut flora, reducing common antibiotic side effects.',
      features: [
        'Amoxicillin + Clavulanate combination for broad-spectrum coverage',
        'P-Cillin LB 625 includes Lactic Acid Bacillus for gut flora protection',
        'Pediatric-friendly formulations with proven effectiveness',
        'High palatability for better patient compliance',
        'Multiple strength options for different severity levels',
        'Advanced formulation to minimize antibiotic-associated complications',
      ],
      benefits: [
        'Effective treatment of bacterial infections',
        'Reduced antibiotic-associated diarrhea',
        'Preserved gut microbiome during treatment',
        'Better tolerance and fewer side effects',
        'Comprehensive infection coverage',
        'Suitable for all age groups',
      ],
      products: [
        {
          name: 'P-Cillin LB 625',
          description:
            'Amoxicillin + Clavulanate + Lactic Acid Bacillus for infection treatment with probiotic protection',
        },
        {
          name: 'P-Cillin 228.5',
          description:
            'Pediatric dry syrup formulation with high palatability and proven effectiveness',
        },
        {
          name: 'P-Cillin 457 Forte',
          description:
            'Powerful formulation for moderate to severe infections with robust coverage',
        },
      ],
    },
    nutrition: {
      id: 'nutrition',
      title: 'Nutritional Supplementation',
      subtitle: 'Comprehensive Vitamin & Mineral Support',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
      description:
        'Medfly 9G is a comprehensive nutritional supplement designed to support immunity, energy metabolism, and overall wellness. Our multivitamin and mineral formulation addresses common nutritional gaps in modern diets, supporting optimal health and vitality.',
      features: [
        'Comprehensive multivitamin and mineral formula',
        'Convenient softgel capsule format for better absorption',
        'Scientifically formulated for maximum efficacy',
        'High-quality ingredients with proven bioavailability',
        'Supports multiple body systems simultaneously',
        'Suitable for daily wellness maintenance',
      ],
      benefits: [
        'Enhanced immune system function',
        'Improved energy levels and metabolism',
        'Better overall health and wellness',
        'Reduced nutritional deficiencies',
        'Antioxidant protection',
        'Support for skin, hair, and nail health',
      ],
      products: [
        {
          name: 'Medfly 9G Softgels',
          description:
            'Comprehensive multivitamin + mineral softgel capsules for daily nutritional support',
        },
      ],
    },
    appetite: {
      id: 'appetite',
      title: 'Appetite Enhancement',
      subtitle: 'Growth & Nutritional Support Solutions',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      description:
        'Medicyp Syrup is a clinically validated appetite stimulant enriched with B-complex vitamins, Nicotinamide, and D-Panthenol. Designed for both children and adults experiencing reduced appetite or requiring nutritional support during growth phases or recovery.',
      features: [
        'Cyproheptadine as primary appetite stimulant',
        'B-complex vitamin fortification for metabolic support',
        'Nicotinamide for cellular energy production',
        'D-Panthenol for overall nutritional enhancement',
        'Pleasant taste for better compliance in children',
        'Clinically validated formulation',
      ],
      benefits: [
        'Improved appetite and food intake',
        'Enhanced growth in children',
        'Better nutritional status',
        'Increased energy levels',
        'Support during illness recovery',
        'Weight gain in underweight individuals',
      ],
      products: [
        {
          name: 'Medicyp Syrup',
          description:
            'Appetite stimulant with B-complex, Nicotinamide & D-Panthenol for children and adults',
        },
      ],
    },
    research: {
      id: 'research',
      title: 'Clinical Research & Trials',
      subtitle: 'Evidence-Based Product Development',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
      description:
        'At Mediprime Biotech, we believe in the power of scientific evidence. Our extensive collaboration with academic institutions, dental colleges, and medical research centers across India ensures that every product is backed by rigorous clinical validation and peer-reviewed research.',
      features: [
        'Partnerships with multiple dental and medical colleges across India',
        'Comprehensive clinical trial programs',
        'Advanced microbiome analysis studies',
        'Real-world efficacy evaluation',
        'Long-term patient outcome monitoring',
        'Peer-reviewed publication commitment',
      ],
      benefits: [
        'Science-backed product efficacy',
        'Transparent research methodology',
        'Continuous product improvement',
        'Healthcare professional confidence',
        'Patient safety assurance',
        'Contribution to medical knowledge',
      ],
      products: [],
    },
    rnd: {
      id: 'rnd',
      title: 'Innovative R&D',
      subtitle: 'Breakthrough Drug Discovery',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
      description:
        "Our R&D division is actively pursuing groundbreaking research in unmet therapeutic areas. Most notably, we are in the early exploration phase of developing a first-of-its-kind hyperthyroidism molecule—an area where no novel breakthrough drug has yet been discovered globally. This reflects our long-term commitment to innovation and addressing critical healthcare gaps.",
      features: [
        'First-in-class hyperthyroidism molecule research',
        'Focus on globally unmet therapeutic needs',
        'Novel drug discovery methodologies',
        'Early-stage molecular exploration',
        'Commitment to breakthrough innovation',
        'Long-term research investment',
      ],
      benefits: [
        'Potential treatment for previously untreatable conditions',
        'Global healthcare impact',
        'Advancement of medical science',
        'Improved patient outcomes',
        'Innovation leadership in pharma',
        'Future-ready therapeutic solutions',
      ],
      products: [],
    },
  };

  openModal(serviceId: string): void {
    this.selectedService.set(this.serviceDetails[serviceId]);
    this.isModalOpen.set(true);

    // SSR-safe: Only manipulate document in browser
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedService.set(null);

    // SSR-safe: Only manipulate document in browser
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
  }
}