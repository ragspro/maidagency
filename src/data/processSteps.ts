export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Contact Us',
    description: 'Call or WhatsApp us with your requirements',
    icon: '1'
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Share Requirements',
    description: 'Tell us about your baby\'s age and care needs',
    icon: '2'
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Meet Candidates',
    description: 'Interview verified nannies at your convenience',
    icon: '3'
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Select & Start',
    description: 'Choose your preferred nanny and begin care',
    icon: '4'
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Ongoing Support',
    description: '24/7 support and free replacement if needed',
    icon: '5'
  }
];
