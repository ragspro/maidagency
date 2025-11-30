export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    location: 'Noida',
    rating: 5,
    review: 'Best nanny agency in Delhi! Our North East nanny is like family now. Takes care of our 8-month baby with so much love. Highly recommended!',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-2',
    name: 'Rahul Verma',
    location: 'Gurugram',
    rating: 5,
    review: 'Very professional service. They arranged a trained nanny within 1 day. Our baby loves her. Thank you maid placement agency!',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-3',
    name: 'Anjali & Vikram',
    location: 'South Delhi',
    rating: 5,
    review: 'Trusted and reliable. The nanny is experienced, clean and speaks good Hindi. Our worries are gone. Best decision for working parents.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-4',
    name: 'Neha Kapoor',
    location: 'Ghaziabad',
    rating: 5,
    review: 'After trying 3 other agencies, found this gem. Their replacement policy is genuine. Very happy with the service quality.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-5',
    name: 'Deepak & Swati',
    location: 'Faridabad',
    rating: 5,
    review: '15/10 service! The nanny handles our twins perfectly. Background verified, trustworthy, and kids are always happy with her.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces'
  }
];
