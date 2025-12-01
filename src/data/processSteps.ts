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
    title: 'Call or WhatsApp Our Team',
    description: 'Contact us at 9910443876 or 8130135822',
    icon: '1'
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Share Baby / Care Requirements',
    description: 'Tell us about your specific care needs',
    icon: '2'
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Receive Verified Staff Profiles',
    description: 'Get police-verified caregiver profiles',
    icon: '3'
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Interview & Select Preferred Caregiver',
    description: 'Meet candidates and choose the best fit',
    icon: '4'
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Care Begins with Ongoing 24×7 Support',
    description: 'Start care with continuous support from our team',
    icon: '5'
  }
];
