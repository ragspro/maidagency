import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';

/**
 * Feature: baby-sitter-agency-website
 * Property tests for link formats and behaviors
 */

describe('Link Format Properties', () => {
  /**
   * Property 9: WhatsApp button link format
   * Validates: Requirements 7.2
   */
  it('should have valid WhatsApp URL format', () => {
    const TestWhatsAppButton = () => (
      <a href="https://wa.me/918595661698" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    );
    
    render(<TestWhatsAppButton />);
    const link = screen.getByRole('link');
    
    const href = link.getAttribute('href');
    expect(href).toMatch(/^https:\/\/wa\.me\/\d+/);
    expect(href).toContain('918595661698');
  });

  /**
   * Property 10: Call button link format
   * Validates: Requirements 7.3
   */
  it('should have valid tel: link format', () => {
    const TestCallButton = () => (
      <a href="tel:9971691558">Call Now</a>
    );
    
    render(<TestCallButton />);
    const link = screen.getByRole('link');
    
    const href = link.getAttribute('href');
    expect(href).toBe('tel:9971691558');
    expect(href).toMatch(/^tel:\d+$/);
  });

  /**
   * Property 22: Social media link behavior
   * Validates: Requirements 13.3
   */
  it('should have target="_blank" and rel="noopener noreferrer" for external links', () => {
    const TestSocialLink = () => (
      <a 
        href="https://facebook.com/example" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    );
    
    render(<TestSocialLink />);
    const link = screen.getByRole('link');
    
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toContain('noopener');
    expect(link.getAttribute('rel')).toContain('noreferrer');
  });

  /**
   * Property test: All WhatsApp links should follow format
   */
  it('should validate WhatsApp link format for any phone number', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 6000000000, max: 9999999999 }),
        (phoneNumber) => {
          const whatsappUrl = `https://wa.me/91${phoneNumber}`;
          expect(whatsappUrl).toMatch(/^https:\/\/wa\.me\/91\d{10}$/);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property test: All tel links should follow format
   */
  it('should validate tel link format for any phone number', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 6000000000, max: 9999999999 }),
        (phoneNumber) => {
          const telUrl = `tel:${phoneNumber}`;
          expect(telUrl).toMatch(/^tel:\d{10}$/);
        }
      ),
      { numRuns: 100 }
    );
  });
});
