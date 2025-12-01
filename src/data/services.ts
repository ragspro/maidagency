export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  priceRange?: string;
  detailedDescription?: string;
  features?: string[];
  duration?: string;
}

export const services: Service[] = [
  {
    id: 'babysitter',
    icon: 'baby',
    title: 'Babysitter (Ages 1–5 Years)',
    description: 'Daily baby routines including feeding, bathing, burping, dressing, hygiene care, playtime assistance and overall supervision.',
    priceRange: '₹18,000 – ₹22,000 per month',
    detailedDescription: 'Our experienced babysitters provide comprehensive care for children aged 1-5 years, ensuring their safety, comfort, and development throughout the day.',
    features: [
      'Daily feeding and meal preparation',
      'Bathing and hygiene care',
      'Burping and diaper changing',
      'Dressing and grooming',
      'Playtime and activity supervision',
      'Basic learning activities',
      'Safety monitoring'
    ],
    duration: 'Full-time (24/7 live-in)'
  },
  {
    id: 'full-time-nanny',
    icon: 'nanny',
    title: 'Full-Time Nanny (Ages 3 months–4 Years)',
    description: 'Complete A-to-Z childcare: feeding, diaper changing, burping, baby sleep schedules, hygiene maintenance, learning activities & emotional care.',
    priceRange: '₹22,000 – ₹30,000 per month',
    detailedDescription: 'Professional nannies providing complete childcare from infancy to early childhood, with focus on development, learning, and emotional bonding.',
    features: [
      'Complete infant care (3 months+)',
      'Feeding and nutrition management',
      'Diaper changing and potty training',
      'Sleep schedule management',
      'Learning and development activities',
      'Emotional care and bonding',
      'Health and hygiene maintenance',
      'Age-appropriate play and education'
    ],
    duration: 'Full-time (24/7 live-in)'
  },
  {
    id: 'japa-maid',
    icon: 'mother-baby',
    title: 'Japa Maid – Post-Delivery Care (30–45 Days)',
    description: 'Professional postnatal experts for mother-baby care including massage, bathing, feeding assistance, recovery support and newborn supervision.',
    priceRange: 'Flexible packages available',
    detailedDescription: 'Specialized postnatal care experts who support both mother and newborn during the critical recovery period after delivery. Packages extendable up to 3 months.',
    features: [
      'Mother massage and recovery support',
      'Newborn bathing and care',
      'Breastfeeding assistance',
      'Baby massage techniques',
      'Nutrition guidance for mother',
      'Sleep schedule management',
      'Emotional support',
      'Light household help'
    ],
    duration: '30-45 days (extendable to 3 months)'
  },
  {
    id: 'elder-care',
    icon: 'elder-care',
    title: 'Elder & Patient Care Attendant',
    description: '24-hour trained attendants for seniors and patients requiring hygiene support, feeding assistance, medication reminders & personal mobility support.',
    priceRange: '₹15,000 – ₹25,000 per month',
    detailedDescription: 'Compassionate and trained attendants providing round-the-clock care for elderly family members and patients with special needs.',
    features: [
      '24-hour personal care',
      'Hygiene and bathing assistance',
      'Feeding and meal support',
      'Medication reminders',
      'Mobility assistance',
      'Companionship',
      'Basic health monitoring',
      'Emergency response'
    ],
    duration: 'Full-time (24/7 live-in)'
  },
  {
    id: 'cook-helper',
    icon: 'cook',
    title: 'Cook & Domestic Helper',
    description: 'Live-in household staff for cooking (veg/non-veg), cleaning, kitchen management and daily house help assistance.',
    priceRange: '₹12,000 – ₹20,000 per month',
    detailedDescription: 'Skilled domestic helpers who manage cooking, cleaning, and household tasks efficiently, allowing you to focus on what matters most.',
    features: [
      'Veg/Non-veg cooking',
      'Kitchen management',
      'House cleaning',
      'Utensil washing',
      'Grocery management',
      'Laundry assistance',
      'General household help'
    ],
    duration: 'Full-time (24/7 live-in)'
  },
  {
    id: 'emergency-replacement',
    icon: 'emergency',
    title: 'Emergency Replacement Support',
    description: 'Fast 24-hour emergency staff replacement in case of dissatisfaction or urgent family requirements.',
    priceRange: 'No extra charges',
    detailedDescription: 'We understand emergencies happen. Our rapid replacement service ensures you never face a gap in care when you need it most.',
    features: [
      '24-hour response time',
      'No additional charges',
      'Pre-verified replacements',
      'Same quality standards',
      'Immediate availability',
      'Flexible arrangements',
      'Ongoing support'
    ],
    duration: 'As needed'
  }
];
