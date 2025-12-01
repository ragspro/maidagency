import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { services } from './services';

describe('Service Data Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 3: Service data completeness
   * Validates: Requirements 2.4
   */
  it('should ensure all services have required non-empty fields', () => {
    fc.assert(
      fc.property(
        fc.constant(services),
        (serviceList) => {
          serviceList.forEach(service => {
            expect(service.id).toBeTruthy();
            expect(service.id.length).toBeGreaterThan(0);
            
            expect(service.icon).toBeTruthy();
            expect(service.icon.length).toBeGreaterThan(0);
            
            expect(service.title).toBeTruthy();
            expect(service.title.length).toBeGreaterThan(0);
            
            expect(service.description).toBeTruthy();
            expect(service.description.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have exactly 6 services as per requirements', () => {
    expect(services).toHaveLength(6);
  });

  it('should have unique service IDs', () => {
    const ids = services.map(s => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(services.length);
  });
});
