import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('should render headline correctly', () => {
    render(<Hero />);
    
    const headline = screen.getByText(/Delhi NCR's Most Trusted/i);
    expect(headline).toBeInTheDocument();
  });

  it('should render subheadline with trust indicators', () => {
    render(<Hero />);
    
    // Check for trust indicators in the component
    expect(screen.getByText(/Years Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Families Served/i)).toBeInTheDocument();
  });

  it('should render CTA buttons with correct labels', () => {
    render(<Hero />);
    
    const callButton1 = screen.getByRole('link', { name: /Call Now – 8595661698/i });
    const callButton2 = screen.getByRole('link', { name: /Call Now – 9971691558/i });
    const whatsappButton = screen.getByRole('link', { name: /Chat on WhatsApp/i });
    
    expect(callButton1).toBeInTheDocument();
    expect(callButton2).toBeInTheDocument();
    expect(whatsappButton).toBeInTheDocument();
  });

  it('should have correct phone number in call button', () => {
    render(<Hero />);
    
    const callButton = screen.getByRole('link', { name: /8595661698/i });
    expect(callButton).toHaveAttribute('href', 'tel:9971691558');
  });
});
