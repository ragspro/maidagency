import { describe, it, expect } from 'vitest';
import {
  validateName,
  validatePhone,
  validateBabyAge,
  validateServiceType,
  validateMessage,
  validateContactForm,
} from './validation';

describe('Form Validation Utilities', () => {
  describe('validateName', () => {
    it('should return error for empty name', () => {
      expect(validateName('')).toBe('Please enter your name');
      expect(validateName('   ')).toBe('Please enter your name');
    });

    it('should return error for name less than 2 characters', () => {
      expect(validateName('A')).toBe('Name must be at least 2 characters');
    });

    it('should return error for name more than 50 characters', () => {
      const longName = 'A'.repeat(51);
      expect(validateName(longName)).toBe('Name cannot exceed 50 characters');
    });

    it('should return error for name with non-letter characters', () => {
      expect(validateName('John123')).toBe('Name can only contain letters and spaces');
      expect(validateName('John@Doe')).toBe('Name can only contain letters and spaces');
    });

    it('should return null for valid names', () => {
      expect(validateName('John Doe')).toBeNull();
      expect(validateName('Mary Jane')).toBeNull();
      expect(validateName('AB')).toBeNull();
    });
  });

  describe('validatePhone', () => {
    it('should return error for empty phone', () => {
      expect(validatePhone('')).toBe('Please enter your phone number');
      expect(validatePhone('   ')).toBe('Please enter your phone number');
    });

    it('should return error for invalid phone format', () => {
      expect(validatePhone('123')).toBe('Please enter a valid 10-digit Indian mobile number');
      expect(validatePhone('12345678901')).toBe('Please enter a valid 10-digit Indian mobile number');
      expect(validatePhone('5123456789')).toBe('Please enter a valid 10-digit Indian mobile number');
    });

    it('should return null for valid Indian mobile numbers', () => {
      expect(validatePhone('9876543210')).toBeNull();
      expect(validatePhone('8595661698')).toBeNull();
      expect(validatePhone('7123456789')).toBeNull();
      expect(validatePhone('6123456789')).toBeNull();
    });
  });

  describe('validateBabyAge', () => {
    it('should return error for empty baby age', () => {
      expect(validateBabyAge('')).toBe("Please specify your baby's age");
      expect(validateBabyAge('   ')).toBe("Please specify your baby's age");
    });

    it('should return null for any non-empty baby age', () => {
      expect(validateBabyAge('6 months')).toBeNull();
      expect(validateBabyAge('2 years')).toBeNull();
      expect(validateBabyAge('newborn')).toBeNull();
    });
  });

  describe('validateServiceType', () => {
    it('should return error for empty service type', () => {
      expect(validateServiceType('')).toBe('Please select a service type');
      expect(validateServiceType('   ')).toBe('Please select a service type');
    });

    it('should return null for any non-empty service type', () => {
      expect(validateServiceType('Babysitter')).toBeNull();
      expect(validateServiceType('Full-Time Nanny')).toBeNull();
    });
  });

  describe('validateMessage', () => {
    it('should return error for message exceeding 500 characters', () => {
      const longMessage = 'A'.repeat(501);
      expect(validateMessage(longMessage)).toBe('Message cannot exceed 500 characters');
    });

    it('should return null for empty or valid messages', () => {
      expect(validateMessage('')).toBeNull();
      expect(validateMessage('Short message')).toBeNull();
      expect(validateMessage('A'.repeat(500))).toBeNull();
    });
  });

  describe('validateContactForm', () => {
    it('should return errors for all empty required fields', () => {
      const result = validateContactForm({
        name: '',
        phone: '',
        babyAge: '',
        serviceType: '',
        message: '',
      });

      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.phone).toBeDefined();
      expect(result.errors.babyAge).toBeDefined();
      expect(result.errors.serviceType).toBeDefined();
    });

    it('should return valid for all correct fields', () => {
      const result = validateContactForm({
        name: 'John Doe',
        phone: '9876543210',
        babyAge: '6 months',
        serviceType: 'Babysitter',
        message: 'Looking for a nanny',
      });

      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it('should validate individual field errors', () => {
      const result = validateContactForm({
        name: 'A',
        phone: '123',
        babyAge: '6 months',
        serviceType: 'Babysitter',
        message: '',
      });

      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe('Name must be at least 2 characters');
      expect(result.errors.phone).toBe('Please enter a valid 10-digit Indian mobile number');
    });
  });
});
