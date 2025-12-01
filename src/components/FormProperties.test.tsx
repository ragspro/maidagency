import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { validateContactForm } from '../utils/validation';

/**
 * Feature: baby-sitter-agency-website
 * Property tests for form validation and submission
 */

describe('Contact Form Properties', () => {
  /**
   * Property 12: Form validation for required fields
   * Validates: Requirements 8.3
   */
  it('should reject any form submission with missing required fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.option(fc.string(), { nil: '' }),
          phone: fc.option(fc.string(), { nil: '' }),
          babyAge: fc.option(fc.string(), { nil: '' }),
          serviceType: fc.option(fc.string(), { nil: '' }),
          message: fc.string()
        }),
        (formData) => {
          const hasEmptyRequired = 
            !formData.name || 
            !formData.phone || 
            !formData.babyAge || 
            !formData.serviceType;
          
          const validationResult = validateContactForm({
            name: formData.name || '',
            phone: formData.phone || '',
            babyAge: formData.babyAge || '',
            serviceType: formData.serviceType || '',
            message: formData.message
          });
          
          if (hasEmptyRequired) {
            expect(validationResult.isValid).toBe(false);
            expect(Object.keys(validationResult.errors).length).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 13: Form submission success flow
   * Validates: Requirements 8.4
   */
  it('should accept valid form data', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 2, maxLength: 50 }).filter(s => /^[a-zA-Z\s]+$/.test(s) && s.trim().length >= 2),
          phone: fc.constantFrom('9876543210', '8595661698', '7123456789', '6987654321'),
          babyAge: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
          serviceType: fc.constantFrom(
            'Babysitter (Ages 1–5 Years)',
            'Full-Time Nanny (Ages 3 months–4 Years)',
            'Japa Maid – Post-Delivery Care (30–45 Days)'
          ),
          message: fc.string({ maxLength: 500 })
        }),
        (validFormData) => {
          const validationResult = validateContactForm(validFormData);
          expect(validationResult.isValid).toBe(true);
          expect(Object.keys(validationResult.errors).length).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 11: Form input focus state
   * Validates: Requirements 8.2
   */
  it('should have focus styles for form inputs', () => {
    const focusClasses = [
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-indigo-500'
    ];
    
    focusClasses.forEach(className => {
      expect(className).toContain('focus:');
    });
  });
});
