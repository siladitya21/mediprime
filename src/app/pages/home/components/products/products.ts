import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  indication: string;
  status: 'Available' | 'In Development' | 'Clinical Trial';
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  selectedCategory: string = 'All';
  filteredProducts: Product[] = [];

  categories = [
    { name: 'All', count: 0 },
    { name: 'Oncology', count: 0 },
    { name: 'Cardiology', count: 0 },
    { name: 'Neurology', count: 0 },
    { name: 'Immunology', count: 0 },
    { name: 'Respiratory', count: 0 },
    { name: 'Diabetes', count: 0 }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'OncoPrime',
      category: 'Oncology',
      description: 'Advanced targeted therapy for solid tumors with minimal side effects',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
      indication: 'Non-small cell lung cancer',
      status: 'Available'
    },
    {
      id: 2,
      name: 'CardioShield',
      category: 'Cardiology',
      description: 'Next-generation anticoagulant for stroke prevention',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop',
      indication: 'Atrial fibrillation',
      status: 'Available'
    },
    {
      id: 3,
      name: 'NeuroRegen',
      category: 'Neurology',
      description: 'Breakthrough treatment for neurodegenerative disorders',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      indication: 'Parkinson\'s disease',
      status: 'Clinical Trial'
    },
    {
      id: 4,
      name: 'ImmunoMax',
      category: 'Immunology',
      description: 'Innovative biologic for autoimmune conditions',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop',
      indication: 'Rheumatoid arthritis',
      status: 'Available'
    },
    {
      id: 5,
      name: 'RespiClear',
      category: 'Respiratory',
      description: 'Long-acting bronchodilator with anti-inflammatory properties',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
      indication: 'Chronic obstructive pulmonary disease',
      status: 'Available'
    },
    {
      id: 6,
      name: 'GlucoBalance',
      category: 'Diabetes',
      description: 'Novel insulin sensitizer with cardiovascular benefits',
      image: 'https://images.unsplash.com/photo-1615485500645-926e00b1a3c4?w=600&h=400&fit=crop',
      indication: 'Type 2 diabetes',
      status: 'Available'
    },
    {
      id: 7,
      name: 'CancerVax',
      category: 'Oncology',
      description: 'Personalized cancer vaccine platform',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop',
      indication: 'Multiple cancer types',
      status: 'In Development'
    },
    {
      id: 8,
      name: 'HeartFlow Plus',
      category: 'Cardiology',
      description: 'Advanced therapy for heart failure management',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop',
      indication: 'Congestive heart failure',
      status: 'Clinical Trial'
    },
    {
      id: 9,
      name: 'NeuroCalm',
      category: 'Neurology',
      description: 'Fast-acting treatment for migraine relief',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      indication: 'Severe migraine',
      status: 'Available'
    },
    {
      id: 10,
      name: 'ImmunoGuard',
      category: 'Immunology',
      description: 'Preventive therapy for organ transplant rejection',
      image: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=600&h=400&fit=crop',
      indication: 'Post-transplant care',
      status: 'Available'
    },
    {
      id: 11,
      name: 'BreatheEasy',
      category: 'Respiratory',
      description: 'Combination therapy for severe asthma control',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
      indication: 'Severe asthma',
      status: 'Available'
    },
    {
      id: 12,
      name: 'InsulinNova',
      category: 'Diabetes',
      description: 'Ultra-rapid acting insulin analog',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      indication: 'Type 1 & 2 diabetes',
      status: 'In Development'
    }
  ];

  ngOnInit() {
    this.updateCategoryCounts();
    this.filterProducts();
  }

  updateCategoryCounts() {
    // Count all products
    this.categories[0].count = this.products.length;

    // Count products by category
    this.categories.forEach((category, index) => {
      if (index > 0) {
        category.count = this.products.filter(p => p.category === category.name).length;
      }
    });
  }

  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(
        product => product.category === this.selectedCategory
      );
    }
  }

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    this.filterProducts();
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-700';
      case 'Clinical Trial':
        return 'bg-blue-100 text-blue-700';
      case 'In Development':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }
}