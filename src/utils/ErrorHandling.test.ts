import { describe, it, expect } from 'vitest';
import { validateContactForm } from './validation';

/**
 * Error Handling Tests
 * Validates: Requirements 8.3, 8.4
 */

describe('Error Handling', () => {
  it('should show errors for invalid form inputs', () => {
    const invalidData = {
      name: 'A',
      phone: '123',
      babyAge: '',
      serviceType: '',
      message: ''
    };
    
    const result = validateContactForm(invalidData);
    
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.phone).toBeDefined();
  });

  it('should handle empty form submission gracefully', () => {
    const emptyData = {
      name: '',
      phone: '',
      babyAge: '',
      serviceType: '',
      message: ''
    };
    
    const result = validateContactForm(emptyData);
    
    expect(result.isValid).toBe(false);
    expect(Object.keys(result.errors).length).toBeGreaterThan(0);
  });

  it('should provide user-friendly error messages', () => {
    const result = validateContactForm({
      name: '',
      phone: '',
      babyAge: '',
      serviceType: '',
      message: ''
    });
    
    expect(result.errors.name).toContain('name');
    expect(result.errors.phone).toContain('phone');
  });
});
