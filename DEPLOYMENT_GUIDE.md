# Deployment Guide - Baby Sitter Agency Website

## 🚀 Quick Deployment to Vercel (Recommended)

### Step 1: Prepare Your Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Baby Sitter Agency Website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/baby-sitter-agency.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

That's it! Your site will be live in ~2 minutes.

### Step 3: Configure EmailJS (Important!)

Before the contact form works, you need to set up EmailJS:

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template with these variables:
   - `{{from_name}}` - Customer name
   - `{{phone}}` - Phone number
   - `{{baby_age}}` - Baby's age
   - `{{service_type}}` - Selected service
   - `{{message}}` - Additional message

5. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

6. Update `src/utils/emailService.ts`:
```typescript
const SERVICE_ID = 'your_service_id_here';
const TEMPLATE_ID = 'your_template_id_here';
const PUBLIC_KEY = 'your_public_key_here';
```

7. Commit and push changes:
```bash
git add src/utils/emailService.ts
git commit -m "Configure EmailJS credentials"
git push
```

Vercel will automatically redeploy with the new configuration.

## 🌐 Custom Domain Setup

### On Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., babysitteragency.com)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

### DNS Records to Add:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Analytics Setup (Optional)

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔍 SEO Post-Deployment

### 1. Submit to Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 2. Update Sitemap
Edit `public/sitemap.xml` with your actual domain:
```xml
<loc>https://yourdomain.com/</loc>
```

### 3. Update Meta Tags
Edit `index.html` with your actual domain in Open Graph tags:
```html
<meta property="og:url" content="https://yourdomain.com" />
```

## 🎨 Customization After Deployment

### Update Contact Information
1. Edit `src/components/Footer.tsx`
2. Edit `src/components/ContactSection.tsx`
3. Edit `src/components/FloatingButtons.tsx`
4. Edit `index.html` (meta tags)
5. Commit and push

### Update Services
1. Edit `src/data/services.ts`
2. Commit and push

### Update Testimonials
1. Edit `src/data/testimonials.ts`
2. Commit and push

### Update FAQs
1. Edit `src/data/faqs.ts`
2. Commit and push

## 🔒 Security Headers

The `vercel.json` file includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

These are automatically applied by Vercel.

## 📱 Testing After Deployment

### 1. Mobile Responsiveness
Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)

### 2. Browser Compatibility
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 3. Performance
Run Lighthouse audit:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Target scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

### 4. Contact Form
1. Fill out form with test data
2. Submit
3. Check if email arrives
4. Verify all fields are included

## 🐛 Troubleshooting

### Contact Form Not Working
- Check EmailJS credentials in `src/utils/emailService.ts`
- Verify EmailJS service is active
- Check browser console for errors
- Ensure template variables match

### Images Not Loading
- Check image paths are correct
- Ensure images are in `public` folder
- Verify image formats (WebP with fallback)

### Animations Not Working
- Check if user has "Reduce Motion" enabled
- Verify Framer Motion is installed
- Check browser console for errors

### Mobile Layout Issues
- Test on actual devices, not just browser resize
- Check touch target sizes (minimum 44x44px)
- Verify viewport meta tag is present

## 📈 Monitoring

### Set Up Uptime Monitoring
Use services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

### Monitor Form Submissions
- Check EmailJS dashboard regularly
- Set up email forwarding
- Monitor spam folder

## 🔄 Continuous Deployment

Every push to `main` branch will automatically:
1. Trigger Vercel build
2. Run TypeScript compilation
3. Build production bundle
4. Deploy to production
5. Update live site

## 📞 Support Checklist

After deployment, ensure:
- [ ] Contact form works
- [ ] Phone links work on mobile
- [ ] WhatsApp button opens correctly
- [ ] Google Maps loads
- [ ] All animations work
- [ ] Mobile responsive
- [ ] SEO tags present
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking (if configured)
- [ ] SSL certificate active (automatic on Vercel)

## 🎉 You're Live!

Your Baby Sitter Agency website is now live and ready to receive customers!

**Next Steps:**
1. Share the link on social media
2. Update Google My Business with website URL
3. Add website to business cards
4. Monitor form submissions
5. Track analytics
6. Gather customer feedback
7. Iterate and improve

**Need Help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- EmailJS Docs: [emailjs.com/docs](https://www.emailjs.com/docs/)
- React Docs: [react.dev](https://react.dev)
