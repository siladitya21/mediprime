import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  images: string[];
  detailedDescription?: string;
  benefits?: string[];
  idealFor?: string[];
  keyHighlights?: string[];
  indications?: string[];
  dosage?: string;
  contraindications?: string[];
  sideEffects?: string[];
  storage?: string;
  note?: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product: Product | null = null;
  selectedImageIndex: number = 0;
  showImageModal: boolean = false;

  // Product data matching the exact information provided
  products: Product[] = [
    {
      id: 1,
      name: 'Medicyp Syrup',
      composition: 'Cyproheptadine + B Vitamins + Niacinamide + D-Panthenol',
      category: 'appetite',
      description: 'Boost Appetite & Energize Your Day — Your Wellness Ally!',
      detailedDescription:
        'Get the power of appetite stimulation and essential nutrients in one! Cyproheptadine stimulates appetite & supports healthy weight gain — ideal for picky eaters or those needing a boost. Vitamin B Complex fuels energy, metabolism, and overall vitality. Niacinamide (Vitamin B3) strengthens skin, nerves, and digestive health. D-Panthenol (Provitamin B5) nourishes skin & hair for a healthy glow.',
      formulation: 'Syrup',
      packaging: 'Bottle',
      features: [
        'Cyproheptadine: Stimulates appetite & supports healthy weight gain',
        'Vitamin B Complex: Fuels energy, metabolism, and overall vitality',
        'Niacinamide (Vitamin B3): Strengthens skin, nerves, and digestive health',
        'D-Panthenol (Provitamin B5): Nourishes skin & hair for a healthy glow',
      ],
      benefits: [
        'Enhances appetite and supports weight gain',
        'Boosts energy and fights fatigue',
        'Supports skin, hair, and nerve health',
      ],
      keyHighlights: [
        'Stimulates appetite & supports weight gain',
        'Boosts energy & metabolism',
        'Strengthens skin, nerves, and digestion',
        'Nourishes hair & skin',
        'Consult a doctor before use',
      ],
      inStock: true,
      icon: 'droplet',
      images: [
        'assets/images/medicines/Medicyp Syrup/2a.jpeg',
        'assets/images/medicines/Medicyp Syrup/2b.jpeg',
      ],
      dosage: 'For adults and kids. Consult a healthcare professional for proper dosage.',
      note: 'Consult a doctor before use. Available as syrup.',
      storage: 'Store in a cool, dry place away from direct sunlight.',
    },
    {
      id: 2,
      name: 'P-Cillin LB 625',
      composition: 'Amoxicillin + Clavulanic Acid + Lactic Acid Bacillus',
      category: 'antibiotics',
      description:
        'Fight Infections & Restore Gut Health — Powerful Protection, Balanced Recovery!',
      detailedDescription:
        'Triple-action support for bacterial infections and gut wellness. Amoxicillin + Clavulanic Acid: Broad-spectrum antibiotic duo that kills harmful bacteria and overcomes antibiotic resistance, tackling respiratory, urinary, skin, and other bacterial infections effectively. Lactic Acid Bacillus (Probiotic): Restores gut flora, supports digestion, and boosts immunity — reduces antibiotic-associated diarrhea and promotes gut health.',
      formulation: 'Tablet',
      packaging: 'Strip Pack',
      features: [
        'Amoxicillin + Clavulanic Acid: Broad-spectrum antibiotic duo',
        'Kills harmful bacteria and overcomes antibiotic resistance',
        'Lactic Acid Bacillus (Probiotic): Restores gut flora',
        'Reduces antibiotic-associated diarrhea',
        'Supports digestion and boosts immunity',
      ],
      benefits: [
        'Fights broad-range bacterial infections with enhanced efficacy',
        'Protects gut health with probiotics, minimizing antibiotic side effects',
        'Supports faster recovery and strengthens immune defense',
      ],
      keyHighlights: [
        'Broad-spectrum antibiotic action against bacterial infections',
        'Probiotics restore gut flora & support digestion',
        'Reduces risk of antibiotic-associated gut imbalance',
        'Supports immune system & faster recovery',
        'Consult a healthcare pro for dosage',
      ],
      idealFor: [
        'Respiratory infections',
        'Urinary infections',
        'Skin infections',
        'Other bacterial infections with gut-friendly protection',
      ],
      inStock: true,
      icon: 'shield-plus',
      images: [
        'assets/images/medicines/P-Cillin LB 625/5a.jpeg',
        'assets/images/medicines/P-Cillin LB 625/5b.jpeg',
      ],
      note: 'Consult a doctor before use. Available as tablets.',
      dosage: 'Consult a healthcare professional for proper dosage.',
      storage: 'Store below 25°C in a dry place.',
    },
    {
      id: 3,
      name: 'P-Cillin Dry Syrup',
      composition: 'Amoxicillin 228.5mg/5ml',
      category: 'antibiotics',
      description:
        'Sweet Relief for Little Ones — Powerful Pediatric Antibiotic for Bacterial Infections!',
      detailedDescription:
        'Easy-to-give, delicious-tasting Amoxicillin Dry Syrup 228.5mg — trusted to fight bacterial infections in kids! Amoxicillin (228.5mg/5ml): Broad-spectrum antibiotic effectively treats ear, throat, lung, skin, and urinary tract infections in children. Pediatric-friendly formula: Reconstituted syrup with a sweet flavor, perfect for kids (infants & children). Targets common childhood infections: Pneumonia, tonsillitis, ear infections, sinusitis, and more — relieves symptoms fast.',
      formulation: 'Dry Syrup',
      packaging: '228.5mg/5ml Bottle',
      features: [
        'Broad-spectrum antibiotic for pediatric use',
        'Treats ear, throat, lung, skin, and urinary tract infections',
        'Easy-to-mix, sweet-flavored syrup',
        'Targets common childhood infections effectively',
        'Relieves symptoms fast',
      ],
      benefits: [
        'Effective against a wide range of bacterial infections',
        'Easy-to-mix, pleasant-tasting dry syrup for fuss-free dosing',
        'Supports quick recovery and eases symptoms in kids',
      ],
      keyHighlights: [
        'Treats ear, throat, lung, skin, and urinary infections in kids',
        'Broad-spectrum antibiotic for pediatric use',
        'Easy-to-mix, sweet-flavored syrup for fuss-free dosing',
      ],
      indications: [
        'Pneumonia',
        'Tonsillitis',
        'Ear infections',
        'Sinusitis',
        'Skin infections',
        'Urinary tract infections',
      ],
      inStock: true,
      icon: 'baby',
      images: [
        'assets/images/medicines/P-Cillin Dry Syrup/3a.jpeg',
        'assets/images/medicines/P-Cillin Dry Syrup/3b.jpeg',
      ],
      dosage: 'For pediatric bacterial infections — consult a pediatrician for dosage.',
      storage: 'Store in a cool, dry place; use within 7 days of reconstitution.',
      note: 'Consult a doctor before giving; not for self-medication.',
    },
    {
      id: 4,
      name: 'P-Cillin Forte',
      composition: 'Amoxicillin 457mg',
      category: 'antibiotics',
      description: 'Powerful Amoxicillin 457mg — Effective Relief for Bacterial Infections',
      detailedDescription:
        'Amoxicillin 457mg: A trusted antibiotic for treating a wide range of bacterial infections. Amoxicillin (457mg): A broad-spectrum penicillin antibiotic that targets and eliminates bacteria causing respiratory, ear, throat, skin, urinary tract, and other infections. High-Dose Strength: 457mg dosage ensures potent action against stubborn bacterial infections. Fast & Effective Relief: Reduces symptoms quickly and promotes faster recovery.',
      formulation: 'Suspension',
      packaging: 'Bottle',
      features: [
        'Broad-spectrum penicillin antibiotic',
        'High-Dose Strength: 457mg for potent action',
        'Targets respiratory, ear, throat, skin, and urinary tract infections',
        'Fast & Effective Relief',
        'Promotes faster recovery',
      ],
      benefits: [
        'Treats a broad range of bacterial infections (respiratory, urinary, skin, etc.)',
        'Potent 457mg dose for effective bacterial elimination',
        'Supports rapid recovery and symptom relief',
      ],
      keyHighlights: [
        'Broad-spectrum antibiotic targeting multiple bacterial infections',
        '457mg strength for potent action',
        'Treats respiratory, ear, throat, skin, and urinary tract infections',
        'Take as prescribed; complete the course',
        'Consult a doctor before use; check for penicillin allergy',
      ],
      inStock: true,
      icon: 'pill-bottle',
      images: ['assets/images/medicines/P-Cillin Forte/4.jpeg'],
      dosage:
        'For the treatment of bacterial infections in adults and children. Consult a doctor for dosage.',
      storage: 'Store in a cool, dry place.',
      note: 'Consult a doctor before use; check for penicillin allergy.',
    },
    {
      id: 5,
      name: 'Primolac Sachet',
      composition: 'Pre-Probiotic + Zinc (Saccharomyces Boulardii + Lactobacillus GG)',
      category: 'probiotics',
      description: 'Gut Health & Immunity Boost — Triple-Action Gut Harmony',
      detailedDescription:
        'Rebalance your gut & strengthen your immunity with our Pre-Probiotic Sachet + Zinc — a synergistic blend of good bacteria, yeast, and essential minerals. Saccharomyces Boulardii (Probiotic Yeast): Supports gut health, restores microbial balance, and reduces antibiotic-associated diarrhea. Lactobacillus Rhamnosus GG (Probiotic Bacteria): Boosts gut flora, strengthens digestion, and enhances immune response. Prebiotic Fibers: Nourish beneficial gut microbes, promoting a healthy gut environment. Zinc: Supports immune function, wound healing, and overall gut integrity.',
      formulation: 'Sachet',
      packaging: 'Box of Sachets',
      features: [
        'Saccharomyces Boulardii: Supports gut health and restores microbial balance',
        'Lactobacillus Rhamnosus GG: Boosts gut flora and strengthens digestion',
        'Prebiotic Fibers: Nourish beneficial gut microbes',
        'Zinc: Supports immune function and gut integrity',
        'Reduces antibiotic-associated diarrhea',
      ],
      benefits: [
        'Restores Gut Balance: Probiotics replenish & harmonize gut microflora',
        "Strengthens Immunity: Zinc + Probiotics boost your body's defense",
        'Supports Digestive Wellness: Eases digestion, reduces bloating, and promotes gut comfort',
      ],
      keyHighlights: [
        'Probiotic yeast (S. Boulardii) + bacteria (L. Rhamnosus GG) for gut harmony',
        'Prebiotics nourish good bacteria; Zinc supports immunity',
        'Eases digestion, reduces bloating, and strengthens gut barrier',
        'Suitable for post-antibiotic recovery, stress, or travel',
      ],
      idealFor: [
        'Recovery after antibiotics or illness',
        'Supporting gut health and digestion',
        'Boosting immunity, especially during stress or travel',
        'Maintaining a balanced microbiome',
      ],
      inStock: true,
      icon: 'leaf',
      images: [
        'assets/images/medicines/Primolac Sachet/7a.jpeg',
        'assets/images/medicines/Primolac Sachet/7b.jpeg',
        'assets/images/medicines/Primolac Sachet/7c.jpeg',
      ],
      dosage: 'Consult a healthcare professional for proper dosage.',
      storage: 'Store in a cool, dry place.',
    },
    {
      id: 6,
      name: 'Primolac Capsule',
      composition: 'Pre-Probiotic + L-Glutamine',
      category: 'probiotics',
      description: 'Gut Repair & Immunity Boost — Dual-Action Gut Health Support',
      detailedDescription:
        'Rebuild your gut & strengthen your defense with our Pre-Probiotic Capsules + L-Glutamine Capsules — a powerful duo for gut health and immunity. Pre-Probiotic Capsules: Packed with beneficial probiotics (Lactobacillus & Bifidobacterium) + prebiotic fibers, they restore gut flora, support digestion, and boost gut immunity. L-Glutamine Capsules: This amino acid heals and protects the gut lining, reduces inflammation, and promotes gut repair — essential for leaky gut, stress, or digestive discomfort.',
      formulation: 'Capsule',
      packaging: 'Blister Pack',
      features: [
        'Pre-Probiotic Capsules with Lactobacillus & Bifidobacterium',
        'Prebiotic fibers restore gut flora',
        'L-Glutamine heals and protects the gut lining',
        'Reduces inflammation and promotes gut repair',
        'Essential for leaky gut and digestive discomfort',
      ],
      benefits: [
        'Repairs & Protects Gut Lining: L-Glutamine soothes and rebuilds the gut barrier, easing IBS and leaky gut symptoms',
        'Balances Gut Microbiome: Prebiotics + Probiotics nourish & replenish good bacteria for a healthy gut ecosystem',
        'Boosts Immunity & Digestion: Strengthens gut-brain axis and enhances nutrient absorption',
        'Supports Post-Antibiotic Recovery & Stress Resilience: Replenishes gut health and calms digestive issues',
      ],
      keyHighlights: [
        'Probiotics + prebiotics restore gut flora & support digestion',
        'L-Glutamine repairs and protects the gut lining (ideal for leaky gut/IBS)',
        'Boosts immunity and gut-brain communication',
        'Eases post-antibiotic gut imbalance and stress-related digestive issues',
      ],
      idealFor: [
        'Gut repair and digestive comfort (IBS, leaky gut, or post-antibiotic recovery)',
        'Immunity boost and stress management',
        'Supporting overall gut-brain health',
      ],
      inStock: true,
      icon: 'pill',
      images: [
        'assets/images/medicines/Primolac Capsule/6a.jpeg',
        'assets/images/medicines/Primolac Capsule/6b.jpeg',
        'assets/images/medicines/Primolac Capsule/6c.jpeg',
        'assets/images/medicines/Primolac Capsule/6d.jpeg',
      ],
      dosage: 'Consult a healthcare professional for proper dosage.',
      storage: 'Store in a cool, dry place.',
    },
    {
      id: 7,
      name: 'Medfly 9G',
      composition: 'Omega-3 + Ginseng + L-Carnitine + Multivitamin',
      category: 'vitamins',
      description: 'Boost Energy, Focus & Vitality — Ultimate Daily Wellness Pack',
      detailedDescription:
        'Power up your day with a blend of brain, energy, and immune support — Omega-3 Fatty Acids, Ginseng, L-Carnitine, and Multivitamins in one powerful supplement. Omega-3 Fatty Acids (EPA & DHA): Supports heart and brain health, promotes cognitive function, and reduces inflammation. Ginseng (Panax Ginseng): Boosts mental clarity, energy, and stress resilience; enhances physical and mental performance. L-Carnitine: Converts fat into energy, supports metabolism, and improves endurance and focus. Multivitamin (B-Vitamins, Vitamins C, D, E, A, K, and Minerals): Fills nutritional gaps, supports immune function, energy production, and overall vitality.',
      formulation: 'Softgel Capsule',
      packaging: 'Strip Pack',
      features: [
        'Omega-3 Fatty Acids (EPA & DHA): Heart and brain health support',
        'Ginseng (Panax Ginseng): Boosts mental clarity and energy',
        'L-Carnitine: Converts fat into energy and supports metabolism',
        'Multivitamins: B-Vitamins, Vitamins C, D, E, A, K, and Minerals',
        'Comprehensive daily wellness support',
      ],
      benefits: [
        'Enhances Mental & Physical Energy: Ginseng + L-Carnitine + B-Vitamins work together to boost stamina and focus',
        'Supports Heart & Cognitive Health: Omega-3s promote brain function and cardiovascular wellness',
        'Strengthens Immunity & Vitality: Multivitamins + Ginseng ensure your body gets essential nutrients for daily resilience',
        'Improves Metabolism & Fat Burn: L-Carnitine + Omega-3s support healthy weight management and energy production',
        'Fills Nutritional Gaps: Multivitamins cover your daily essential nutrient needs',
      ],
      keyHighlights: [
        'Omega-3s (EPA & DHA): Brain, heart, and anti-inflammatory support',
        'Ginseng: Enhances energy, focus, and stress resilience',
        'L-Carnitine: Converts fat to energy; boosts metabolism and endurance',
        'Multivitamins: Fills nutrient gaps; supports immunity and vitality',
        'Consult a healthcare pro before use',
      ],
      idealFor: [
        'Busy professionals needing mental and physical stamina',
        'Students and athletes looking for focus and endurance',
        'Anyone seeking overall wellness and immune support',
        'Vegetarians/vegans or those with nutrient deficiencies',
      ],
      inStock: true,
      icon: 'tablets',
      images: [
        'assets/images/medicines/Medfly 9G/1a.jpeg',
        'assets/images/medicines/Medfly 9G/1b.jpeg',
        'assets/images/medicines/Medfly 9G/1c.jpeg',
      ],
      dosage: 'Consult a healthcare professional for proper dosage.',
      storage: 'Store in a cool, dry place.',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.product = this.products.find((p) => p.id === productId) || null;

      if (!this.product) {
        this.router.navigate(['/products']);
      }
    });
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  openImageModal() {
    this.showImageModal = true;
  }

  closeImageModal() {
    this.showImageModal = false;
  }

  nextImage() {
    if (this.product && this.selectedImageIndex < this.product.images.length - 1) {
      this.selectedImageIndex++;
    }
  }

  previousImage() {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    }
  }

  // Check if image exists
  imageExists(src: string): boolean {
    // This is a simple check - in production you might want to use a more robust solution
    return src.startsWith('assets/');
  }

  // Handle image error
  onImageError(event: any) {
    event.target.style.display = 'none';
    const placeholder = event.target.nextElementSibling;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  }

  getCategoryBadgeColor(): string {
    switch (this.product?.category) {
      case 'probiotics':
        return 'bg-green-500';
      case 'antibiotics':
        return 'bg-blue-500';
      case 'vitamins':
        return 'bg-purple-500';
      case 'appetite':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  }

  getCategoryName(): string {
    const categories: { [key: string]: string } = {
      probiotics: 'Probiotics',
      antibiotics: 'Antibiotics',
      vitamins: 'Vitamins & Minerals',
      appetite: 'Appetite Stimulant',
    };
    return this.product ? categories[this.product.category] || '' : '';
  }
}
