import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface Product {
  id: number;
  name: string;
  composition: string;
  category: string;
  description: string;
  formulation: string;
  packaging: string;
  features: string[];
  inStock: boolean;
  icon: string;
}

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  selectedCategory: string = 'all';
  searchQuery: string = '';

  categories = [
    { id: 'all', name: 'All Products', iconName: 'package' },
    { id: 'probiotics', name: 'Probiotics', iconName: 'leaf' },
    { id: 'antibiotics', name: 'Antibiotics', iconName: 'shield-plus' },
    { id: 'vitamins', name: 'Vitamins & Minerals', iconName: 'pill' },
    { id: 'appetite', name: 'Appetite Stimulant', iconName: 'utensils' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Medfly 9G',
      composition: 'Multivitamin + Mineral Softgel Capsules',
      category: 'vitamins',
      description: 'A comprehensive nutritional supplement formulated to support immunity, energy metabolism, and overall wellness. Contains essential vitamins and minerals for daily health maintenance.',
      formulation: 'Softgel Capsule',
      packaging: 'Strip Pack',
      features: [
        'Supports immune system function',
        'Enhances energy metabolism',
        'Promotes overall wellness',
        'Complete multivitamin formula',
        'Easy-to-swallow softgel capsules'
      ],
      inStock: true,
      icon: 'tablets'
    },
    {
      id: 2,
      name: 'Primolac Sachet',
      composition: 'Pre-Probiotic Blend',
      category: 'probiotics',
      description: 'A scientifically balanced synbiotic formula supporting gut health, oral microbiome balance, digestive comfort, and recovery in various gastro-oral conditions. Clinically validated through academic collaborations.',
      formulation: 'Sachet',
      packaging: 'Box of Sachets',
      features: [
        'Supports gut health and microbiome balance',
        'Oral health maintenance',
        'Aids digestive comfort',
        'Clinically validated formulation',
        'Easy-to-use sachet format',
        'Synbiotic (prebiotic + probiotic) formula'
      ],
      inStock: true,
      icon: 'leaf'
    },
    {
      id: 3,
      name: 'Primolac Capsules',
      composition: 'Pre-Probiotic Capsule',
      category: 'probiotics',
      description: 'Capsule-based probiotic formulation for long-term gut support, improved digestion, and microbiome restoration. Ideal for daily use in maintaining digestive health.',
      formulation: 'Capsule',
      packaging: 'Blister Pack',
      features: [
        'Long-term gut health support',
        'Improves digestion',
        'Microbiome restoration',
        'Daily maintenance formula',
        'Convenient capsule form',
        'Clinical trial backed'
      ],
      inStock: true,
      icon: 'pill'
    },
    {
      id: 4,
      name: 'P-Cillin LB 625',
      composition: 'Amoxicillin + Clavulanate + Lactic Acid Bacillus Tablets',
      category: 'antibiotics',
      description: 'An advanced antibiotic + probiotic combination designed to treat bacterial infections while preserving gut flora. The lactic acid bacillus helps prevent antibiotic-associated diarrhea.',
      formulation: 'Tablet',
      packaging: 'Strip Pack',
      features: [
        'Broad-spectrum antibiotic coverage',
        'Preserves gut flora during treatment',
        'Reduces antibiotic side effects',
        'Prevents antibiotic-associated diarrhea',
        'Combination therapy advantage',
        'Enhanced patient compliance'
      ],
      inStock: true,
      icon: 'shield-plus'
    },
    {
      id: 5,
      name: 'P-Cillin 228.5',
      composition: 'Amoxicillin + Clavulanate Dry Syrup',
      category: 'antibiotics',
      description: 'Broad-spectrum pediatric antibiotic with high palatability and proven effectiveness. Specially formulated for children with pleasant taste for better compliance.',
      formulation: 'Dry Syrup',
      packaging: 'Bottle',
      features: [
        'Pediatric formulation',
        'High palatability for children',
        'Broad-spectrum coverage',
        'Proven effectiveness',
        'Easy reconstitution',
        'Pleasant taste'
      ],
      inStock: true,
      icon: 'baby'
    },
    {
      id: 6,
      name: 'P-Cillin 457 Forte',
      composition: 'Amoxicillin + Clavulanic Acid',
      category: 'antibiotics',
      description: 'A powerful formulation offering robust coverage for moderate to severe infections. High-strength combination for enhanced therapeutic efficacy.',
      formulation: 'Tablet/Suspension',
      packaging: 'Strip/Bottle',
      features: [
        'High-strength formulation',
        'Moderate to severe infection coverage',
        'Enhanced therapeutic efficacy',
        'Broad-spectrum activity',
        'Beta-lactamase inhibitor included',
        'Proven clinical effectiveness'
      ],
      inStock: true,
      icon: 'pill-bottle'
    },
    {
      id: 7,
      name: 'Medicyp Syrup',
      composition: 'Cyproheptadine + B-Complex + Nicotinamide + D-Panthenol',
      category: 'appetite',
      description: 'A clinically validated appetite stimulant and nutritional support syrup for children and adults. Combines appetite enhancement with essential B vitamins for comprehensive nutritional support.',
      formulation: 'Syrup',
      packaging: 'Bottle',
      features: [
        'Stimulates appetite effectively',
        'Contains essential B-vitamins',
        'Nutritional support',
        'Suitable for children and adults',
        'Clinically validated formula',
        'Pleasant taste for compliance'
      ],
      inStock: true,
      icon: 'droplet'
    }
  ];

  get filteredProducts(): Product[] {
    let filtered = this.products;

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.composition.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.features.some(f => f.toLowerCase().includes(query))
      );
    }

    return filtered;
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  clearFilters() {
    this.selectedCategory = 'all';
    this.searchQuery = '';
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}