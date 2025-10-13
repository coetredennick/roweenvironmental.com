# Rowe Environmental Services Website

Modern, professional website for Rowe Environmental Services featuring mechanical pond and shoreline cleanup services.

## 🌟 Features

- **Modern, Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **SEO Optimized** - Proper schema markup, meta tags, and structured data
- **No-Chemicals Messaging** - Clear value proposition highlighting mechanical removal
- **Mobile Sticky Bar** - Easy call/text/quote access on mobile devices
- **Contact Forms** - Simple quote request forms with photo upload
- **Project Gallery** - Showcase before/after work with engaging cards
- **Performance Optimized** - Fast loading times with lazy loading
- **Accessibility** - WCAG compliant with proper keyboard navigation

## 📁 File Structure

```
rowe-site/
├── index.html          # Main homepage
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── README.md           # This file
├── rowe-logo.jpeg      # Company logo
├── drone-view.JPG      # Project images
├── drone-view2.JPG
├── dock-after.JPG
├── dock-close.JPG
├── trucks-pulling-weedo.JPG
└── [other media files]
```

## 🚀 Quick Start

### Option 1: Open Locally
Simply double-click `index.html` to view in your browser.

### Option 2: Use a Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📸 Image Optimization

Your images need to be optimized for web performance. Here's how:

### Using ImageOptim (Mac - Free)
1. Download from https://imageoptim.com/
2. Drag your images into ImageOptim
3. It will automatically compress them

### Using Online Tools
- **TinyPNG** - https://tinypng.com/ (great for JPG/PNG)
- **Squoosh** - https://squoosh.app/ (convert to WebP/AVIF)

### Using Command Line (Mac/Linux)

#### Install ImageMagick:
```bash
# Mac
brew install imagemagick

# Linux
sudo apt-get install imagemagick
```

#### Convert and Optimize Images:
```bash
# Convert to WebP (recommended)
magick drone-view.JPG -quality 80 -resize 1920x1080\> drone-view.webp
magick drone-view2.JPG -quality 80 -resize 1920x1080\> drone-view2.webp
magick dock-after.JPG -quality 80 -resize 1920x1080\> dock-after.webp
magick dock-close.JPG -quality 80 -resize 1920x1080\> dock-close.webp
magick trucks-pulling-weedo.JPG -quality 80 -resize 1920x1080\> trucks-pulling-weedo.webp

# Optimize JPG files
magick drone-view.JPG -quality 80 -resize 1920x1080\> drone-view-opt.jpg
```

### Target File Sizes
- Hero images: < 200 KB
- Project images: < 150 KB
- Thumbnails: < 50 KB

### Converting HEIC to JPG
```bash
# Mac (built-in)
sips -s format jpeg ashton-on-weedo.HEIC --out ashton-on-weedo.jpg

# Using ImageMagick
magick ashton-on-weedo.HEIC ashton-on-weedo.jpg
```

## 🎨 Customization

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5f2d;      /* Main green */
    --primary-dark: #1e4620;       /* Dark green */
    --accent-color: #87bc45;       /* Light green */
    /* ... other colors */
}
```

### Update Contact Information
Search and replace throughout `index.html`:
- Phone: `(850) 766-6363` → your number
- Address: `1843 Commerce Blvd, Midway, FL 32343` → your address

### Update Schema Markup
Update the JSON-LD schema at the bottom of `index.html` with your business details.

## 📱 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test all phone/SMS links work
- [ ] Test contact form submission
- [ ] Verify all images load
- [ ] Test smooth scrolling navigation
- [ ] Test mobile sticky bar
- [ ] Check page load speed (use PageSpeed Insights)

## 🔧 Integration Tasks

### 1. Set Up Form Backend
The contact form currently shows an alert. You need to integrate it with:
- **FormSpree** (easiest) - https://formspree.io/
- **Netlify Forms** (if hosting on Netlify)
- **Custom PHP backend**
- **Email service API** (SendGrid, Mailgun)

#### Example FormSpree Integration:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 2. Add Google Analytics
Add your GA4 tracking code before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Set Up Call Tracking
Consider using:
- **CallRail** - Dynamic number insertion
- **CallTrackingMetrics**
- Google forwarding numbers

### 4. Update Google Business Profile
Ensure your GBP matches:
- Business name: "Rowe Environmental Services"
- Phone: (850) 766-6363
- Address: 1843 Commerce Blvd, Midway, FL 32343
- Website: your actual URL

## 🌐 Deployment Options

### Netlify (Recommended - Free)
1. Create account at https://netlify.com
2. Drag your folder into Netlify
3. Get instant HTTPS domain
4. Free SSL certificate included

### GitHub Pages (Free)
1. Create GitHub repo
2. Push your files
3. Enable GitHub Pages in settings
4. Use custom domain if desired

### Traditional Hosting
Upload all files via FTP to your web host:
- GoDaddy
- Bluehost
- HostGator
- etc.

## 📊 Performance Optimization

### After Image Optimization:
1. **Enable Caching** (if using traditional hosting)
   - Add `.htaccess` file with cache headers

2. **Use a CDN** (optional but recommended)
   - Cloudflare (free tier available)
   - Automatically speeds up global access

3. **Monitor Performance**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

## ✅ SEO Checklist

- [x] Unique, descriptive title tag
- [x] Meta description under 160 characters
- [x] H1 tag (only one per page)
- [x] Alt text for all images
- [x] Schema.org markup (LocalBusiness)
- [x] Mobile-friendly design
- [x] Fast loading times
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Get citations (Yelp, BBB, Angi)
- [ ] Encourage reviews

## 🎯 Next Steps

### Week 1: Launch Essentials
1. Optimize and convert all images to WebP
2. Set up form backend (FormSpree)
3. Add Google Analytics
4. Deploy to Netlify
5. Test all functionality

### Week 2: SEO Foundation
1. Submit to Google Search Console
2. Create and submit sitemap
3. Verify Google Business Profile
4. Add social media links
5. Get first 3-5 reviews

### Week 3: Content Enhancement
1. Add 3-5 project posts with before/after
2. Create service area pages (Tallahassee, Midway, Killearn)
3. Add FAQ page
4. Write blog post about mechanical removal benefits

### Month 2+: Ongoing
1. Add 2 project posts per month
2. Request reviews from satisfied clients
3. Update photos regularly
4. Monitor analytics and adjust
5. A/B test different CTA copy

## 🆘 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure image files are in same folder as HTML
- Verify file names match exactly (case-sensitive)

### Mobile Menu Not Working
- Check that `script.js` is loading
- Open browser console (F12) to check for errors
- Verify jQuery is not required

### Form Not Submitting
- Integrate with FormSpree or backend service
- Check browser console for errors
- Test email delivery

### Slow Loading
- Optimize images (most common issue)
- Check file sizes
- Use WebP format
- Enable lazy loading (already implemented)

## 📞 Support

For questions about this website:
- Review the improvement doc: `rowe-improvements.docx`
- Check browser console for errors (F12)
- Test in different browsers

## 📄 License

This website is for Rowe Environmental Services. All rights reserved.

---

Built with modern web standards • Mobile-first design • SEO optimized
