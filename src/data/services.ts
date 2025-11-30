export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'live-in-24hr',
    icon: '24/7',
    title: '24-Hour Live-In Baby Sitter',
    description: 'Round-the-clock dedicated care with feeding, bathing & sleep management'
  },
  {
    id: 'newborn-care',
    icon: '0-12M',
    title: 'Newborn Care Specialist (0-12 months)',
    description: 'Expert newborn handling, hygiene, night feeds & mother support'
  },
  {
    id: 'toddler-care',
    icon: '1-3Y',
    title: 'Toddler Care (1-3 years)',
    description: 'Meal prep, potty training, early learning activities & development'
  },
  {
    id: 'north-east-nannies',
    icon: 'NE',
    title: 'North East Trained Nannies',
    description: 'Polite, professional, English/Hindi speaking, trusted by 1000s'
  },
  {
    id: 'emergency-replacement',
    icon: '24H',
    title: 'Emergency Replacement Service',
    description: 'Fast replacement within 24 hours if you\'re not satisfied'
  },
  {
    id: 'mother-baby-package',
    icon: 'M+B',
    title: 'Mother & Baby Care Package',
    description: 'Post-delivery support for both mother recovery & baby care'
  }
];
