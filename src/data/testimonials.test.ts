import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { testimonials } from './testimonials';

describe('Testimonial Data Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 6: Testimonial data completeness
   * Validates: Requirements 5.2
   */
  it('should ensure all testimonials have required fields with valid rating', () => {
    fc.assert(
      fc.property(
        fc.constant(testimonials),
        (testimonialList) => {
          testimonialList.forEach(testimonial => {
            expect(testimonial.id).toBeTruthy();
            expect(testimonial.id.length).toBeGreaterThan(0);
            
            expect(testimonial.name).toBeTruthy();
            expect(testimonial.name.length).toBeGreaterThan(0);
            
            expect(testimonial.location).toBeTruthy();
            expect(testimonial.location.length).toBeGreaterThan(0);
            
            expect(testimonial.rating).toBeGreaterThanOrEqual(1);
            expect(testimonial.rating).toBeLessThanOrEqual(5);
            
            expect(testimonial.review).toBeTruthy();
            expect(testimonial.review.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have exactly 5 testimonials as per requirements', () => {
    expect(testimonials).toHaveLength(5);
  });

  it('should have unique testimonial IDs', () => {
    const ids = testimonials.map(t => t.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(testimonials.length);
  });

  it('should have all ratings as 5-star', () => {
    testimonials.forEach(testimonial => {
      expect(testimonial.rating).toBe(5);
    });
  });
});
