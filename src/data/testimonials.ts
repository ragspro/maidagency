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
    name: 'Priya',
    location: 'South Extension',
    rating: 5,
    review: 'Reliable service. The nanny we hired cared for our newborn perfectly. Polite, trained and very supportive.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-2',
    name: 'Simran',
    location: 'Noida',
    rating: 5,
    review: 'Japa Maid service was excellent during my recovery. Real professionals.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-3',
    name: 'Anjali & Vikram',
    location: 'Delhi NCR',
    rating: 5,
    review: 'Best babysitter agency in Delhi NCR. Very smooth process and safe caregivers.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-4',
    name: 'Neha Kapoor',
    location: 'Gurgaon',
    rating: 5,
    review: 'Police verified staff gave us complete peace of mind. The nanny is wonderful with our toddler.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 'testimonial-5',
    name: 'Deepak & Swati',
    location: 'Faridabad',
    rating: 5,
    review: '19+ years of experience shows! Professional coordination and trustworthy caregivers. Highly recommend.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces'
  }
];
