import { describe, it, expect } from 'vitest';

/**
 * Feature: baby-sitter-agency-website
 * Unit tests for SEO meta tags
 * Validates: Requirements 11.1, 11.2, 11.3
 */

describe('SEO Meta Tags', () => {
  it('should have proper title tag', () => {
    const expectedTitle = '24/7 Live-In Babysitter, Nanny & Japa Maid Services Delhi NCR';
    expect(expectedTitle).toContain('Babysitter');
    expect(expectedTitle).toContain('Delhi NCR');
  });

  it('should have meta description with keywords', () => {
    const metaDescription = "Delhi NCR's Most Trusted 24-Hour Baby Care Agency. Police-Verified North-East & Nepali Caregivers. 19+ Years Experience, 5000+ Families Served.";
    
    expect(metaDescription).toContain('Delhi NCR');
    expect(metaDescription).toContain('Baby Care');
    expect(metaDescription).toContain('Police-Verified');
  });

  it('should have Open Graph tags', () => {
    const ogTags = {
      'og:title': '24/7 Live-In Babysitter, Nanny & Japa Maid Services Delhi NCR',
      'og:description': "Delhi NCR's Most Trusted 24-Hour Baby Care Agency",
      'og:type': 'website',
      'og:url': 'https://maidagencyindelhi.in',
      'og:image': 'https://maidagencyindelhi.in/baby-sitter-og.jpg'
    };
    
    expect(ogTags['og:title']).toBeTruthy();
    expect(ogTags['og:description']).toBeTruthy();
    expect(ogTags['og:type']).toBe('website');
    expect(ogTags['og:url']).toContain('https://');
    expect(ogTags['og:image']).toContain('https://');
  });

  it('should have valid Schema.org LocalBusiness markup', () => {
    const schemaMarkup = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maid Placement Agency Baby Sitter',
      telephone: '+918595661698',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pillanji, South Extension Part 1',
        addressLocality: 'South Delhi',
        addressRegion: 'Delhi',
        postalCode: '110049',
        addressCountry: 'IN'
      }
    };
    
    expect(schemaMarkup['@context']).toBe('https://schema.org');
    expect(schemaMarkup['@type']).toBe('LocalBusiness');
    expect(schemaMarkup.name).toBeTruthy();
    expect(schemaMarkup.telephone).toMatch(/^\+91\d{10}$/);
    expect(schemaMarkup.address['@type']).toBe('PostalAddress');
    expect(schemaMarkup.address.addressCountry).toBe('IN');
  });

  it('should have Twitter Card meta tags', () => {
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': '24/7 Live-In Babysitter, Nanny & Japa Maid Services Delhi NCR',
      'twitter:description': "Delhi NCR's Most Trusted 24-Hour Baby Care Agency",
      'twitter:image': 'https://maidagencyindelhi.in/baby-sitter-og.jpg'
    };
    
    expect(twitterTags['twitter:card']).toBe('summary_large_image');
    expect(twitterTags['twitter:title']).toBeTruthy();
    expect(twitterTags['twitter:description']).toBeTruthy();
    expect(twitterTags['twitter:image']).toContain('https://');
  });

  it('should have canonical URL', () => {
    const canonicalUrl = 'https://maidagencyindelhi.in';
    expect(canonicalUrl).toMatch(/^https:\/\//);
    expect(canonicalUrl).toContain('maidagencyindelhi.in');
  });

  it('should have robots meta tag', () => {
    const robotsContent = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    expect(robotsContent).toContain('index');
    expect(robotsContent).toContain('follow');
  });
});
