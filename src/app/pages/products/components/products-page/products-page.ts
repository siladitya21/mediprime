import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  inStock: boolean;
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
    { id: 'cardiovascular', name: 'Cardiovascular', iconName: 'heart' },
    { id: 'diabetes', name: 'Diabetes Care', iconName: 'activity' },
    { id: 'antibiotics', name: 'Antibiotics', iconName: 'shield' },
    { id: 'vitamins', name: 'Vitamins', iconName: 'pill' },
    { id: 'pain-relief', name: 'Pain Relief', iconName: 'bandage' },
    { id: 'respiratory', name: 'Respiratory', iconName: 'wind' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'CardioGuard Plus',
      category: 'cardiovascular',
      description: 'Advanced cardiovascular support formula for maintaining healthy heart function and blood pressure.',
      image: 'assets/images/products/cardio.jpg',
      price: '₹499',
      features: ['Supports Heart Health', 'Regulates Blood Pressure', 'Improves Circulation'],
      inStock: true
    },
    {
      id: 2,
      name: 'GlucoBalance Pro',
      category: 'diabetes',
      description: 'Comprehensive diabetes management solution for optimal blood sugar control.',
      image: 'assets/images/products/glucose.jpg',
      price: '₹599',
      features: ['Blood Sugar Control', 'Insulin Support', 'Natural Ingredients'],
      inStock: true
    },
    {
      id: 3,
      name: 'BioShield Antibiotics',
      category: 'antibiotics',
      description: 'Broad-spectrum antibiotic for effective bacterial infection treatment.',
      image: 'assets/images/products/antibiotic.jpg',
      price: '₹299',
      features: ['Fast Acting', 'Broad Spectrum', 'Minimal Side Effects'],
      inStock: true
    },
    {
      id: 4,
      name: 'VitaMax Complete',
      category: 'vitamins',
      description: 'Complete multivitamin formula with essential nutrients for daily wellness.',
      image: 'assets/images/products/vitamins.jpg',
      price: '₹399',
      features: ['25+ Vitamins & Minerals', 'Energy Boost', 'Immunity Support'],
      inStock: true
    },
    {
      id: 5,
      name: 'PainRelief Ultra',
      category: 'pain-relief',
      description: 'Fast-acting pain relief for headaches, muscle pain, and inflammation.',
      image: 'assets/images/products/pain.jpg',
      price: '₹199',
      features: ['Quick Relief', 'Long-lasting Effect', 'Non-drowsy Formula'],
      inStock: true
    },
    {
      id: 6,
      name: 'RespiCare Advanced',
      category: 'respiratory',
      description: 'Respiratory health support for easier breathing and lung function.',
      image: 'assets/images/products/respiratory.jpg',
      price: '₹449',
      features: ['Lung Support', 'Breathing Aid', 'Allergy Relief'],
      inStock: true
    },
    {
      id: 7,
      name: 'HeartShield Omega-3',
      category: 'cardiovascular',
      description: 'Premium omega-3 supplement for cardiovascular and cognitive health.',
      image: 'assets/images/products/omega3.jpg',
      price: '₹699',
      features: ['High EPA/DHA', 'Heart Health', 'Brain Function'],
      inStock: true
    },
    {
      id: 8,
      name: 'DiabeCare Strips',
      category: 'diabetes',
      description: 'Accurate blood glucose monitoring strips for diabetes management.',
      image: 'assets/images/products/strips.jpg',
      price: '₹899',
      features: ['High Accuracy', '50 Test Strips', 'Easy to Use'],
      inStock: false
    },
    {
      id: 9,
      name: 'ImmunoBoost Pro',
      category: 'vitamins',
      description: 'Advanced immunity booster with vitamin C, D3, and zinc.',
      image: 'assets/images/products/immune.jpg',
      price: '₹549',
      features: ['Immunity Boost', 'Antioxidant Rich', 'Daily Defense'],
      inStock: true
    },
    {
      id: 10,
      name: 'ArthriCare Joint Support',
      category: 'pain-relief',
      description: 'Joint health formula for flexibility and reduced inflammation.',
      image: 'assets/images/products/joint.jpg',
      price: '₹799',
      features: ['Joint Flexibility', 'Cartilage Support', 'Anti-inflammatory'],
      inStock: true
    },
    {
      id: 11,
      name: 'BronchoClear Syrup',
      category: 'respiratory',
      description: 'Natural cough syrup for respiratory relief and throat soothing.',
      image: 'assets/images/products/syrup.jpg',
      price: '₹249',
      features: ['Natural Formula', 'Cough Relief', 'Throat Comfort'],
      inStock: true
    },
    {
      id: 12,
      name: 'ProbioHealth Digestive',
      category: 'vitamins',
      description: 'Probiotic supplement for digestive health and gut balance.',
      image: 'assets/images/products/probiotic.jpg',
      price: '₹649',
      features: ['10 Billion CFU', 'Gut Health', 'Digestive Support'],
      inStock: true
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
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
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