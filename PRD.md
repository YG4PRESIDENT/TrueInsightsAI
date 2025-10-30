# Product Requirements Document (PRD)
## TrueInsightsAI.com Landing Page - Peekaboo Style Replication

**Project Name:** TrueInsightsAI.com Landing Page  
**Company:** TrueInsightsAI.com
**Document Version:** 1.0  
**Last Updated:** October 29, 2025  
**Project Owner:** Yahir Gonzalez  
**Status:** Planning Phase

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Project Goals & Objectives](#project-goals--objectives)
3. [Target Audience](#target-audience)
4. [Design Reference](#design-reference)
5. [Functional Requirements](#functional-requirements)
6. [Technical Requirements](#technical-requirements)
7. [Design Specifications](#design-specifications)
8. [Content Requirements](#content-requirements)
9. [Success Metrics](#success-metrics)
10. [Project Milestones](#project-milestones)
11. [Risk Assessment](#risk-assessment)
12. [Open Questions](#open-questions)

---

## Executive Summary

This project aims to create a high-converting landing page for **TrueInsightsAI.com**, a GEO SEO company, by replicating the design, animations, and user experience of aipeekaboo.com. The landing page will serve as the primary marketing tool to attract and convert potential clients interested in local SEO services.

**Key Deliverable:** A pixel-perfect, animated, responsive landing page that mirrors Peekaboo's clean and actionable design while communicating TrueInsightsAI's GEO SEO services.

---

## Project Goals & Objectives

### Primary Goals
1. **Create a visually stunning landing page** that matches Peekaboo's design quality
2. **Generate qualified leads** through clear CTAs and value proposition
3. **Establish credibility** through social proof and professional design
4. **Educate visitors** about GEO SEO services and benefits

### Secondary Goals
- Achieve fast load times (<3 seconds)
- Score 90+ on Lighthouse performance
- Ensure WCAG AA accessibility compliance
- Optimize for search engines (SEO)

### Success Criteria
- [ ] Design matches reference site 95%+ in visual quality
- [ ] All animations are smooth (60fps)
- [ ] Mobile responsive across all devices
- [ ] Forms capture leads successfully
- [ ] Page loads in under 3 seconds

---

## Target Audience

### Primary Audience
- **Business Owners** with multiple locations
- **Marketing Managers** at mid-size companies
- **Marketing Agencies** offering GEO SEO services to clients

### User Personas
1. **Local Business Owner**
   - Needs: Better local search visibility
   - Pain Points: Competition in local search, Google My Business management
   - Goal: Increase foot traffic and local customers

2. **Marketing Agency**
   - Needs: White-label GEO SEO solutions
   - Pain Points: Scaling local SEO for multiple clients
   - Goal: Demonstrate value to clients with reports and analytics

3. **Enterprise Marketing Manager**
   - Needs: Multi-location tracking and reporting
   - Pain Points: Managing SEO across dozens/hundreds of locations
   - Goal: Centralized dashboard and automated reporting

---

## Design Reference

**Reference Site:** https://aipeekaboo.com

### Design Philosophy
- Clean, minimal aesthetic
- Generous whitespace
- Clear visual hierarchy
- Smooth, purposeful animations
- Modern, professional feel
- High contrast for readability
- Actionable CTAs throughout

---

## Functional Requirements

### FR-001: Navigation
- **Priority:** HIGH
- Sticky header that remains visible on scroll
- Smooth scroll to anchor sections
- Mobile hamburger menu
- Logo links to homepage
- "Login" and "Start Free Trial" CTAs in header

### FR-002: Hero Section with Lead Capture
- **Priority:** HIGH
- URL input field with validation
- "Analyze my website" CTA button
- Form submission handling
- Success/error states
- Optional: Backend integration for actual analysis

### FR-003: Animated Product Showcase
- **Priority:** HIGH
- Dashboard mockup display
- Animated annotation arrows
- Sequential reveal animations
- Responsive repositioning on mobile

### FR-004: Social Proof Display
- **Priority:** MEDIUM
- Client logo carousel/grid
- Testimonial cards
- Trust indicators

### FR-005: Dual Offering Cards
- **Priority:** HIGH
- "For Brands" card with features
- "For Agencies" card with features
- Different CTAs for each audience
- Hover effects

### FR-006: Feature Tabs
- **Priority:** MEDIUM
- Tabbed interface for features
- Smooth transitions between tabs
- Icon + title for each tab
- Content area with descriptions

### FR-007: Pricing Tables
- **Priority:** HIGH
- Toggle between "Brands" and "Agencies"
- Three pricing tiers minimum
- Feature comparison
- "Popular" and "Enterprise" badges
- CTA buttons per tier

### FR-008: FAQ Accordion
- **Priority:** MEDIUM
- Collapsible FAQ items
- Smooth expand/collapse animation
- Two-column layout on desktop
- Single column on mobile

### FR-009: Contact/Demo Form
- **Priority:** HIGH
- Form validation
- Required field indicators
- Success/error messaging
- Integration with backend (Supabase)

### FR-010: Footer
- **Priority:** LOW
- Navigation links
- Social media links
- Newsletter signup
- Legal links (Privacy, Terms)

---

## Technical Requirements

### TR-001: Technology Stack
**Frontend Framework:**
- **Selected:** Next.js 14+ with Static Export (for GitHub Pages compatibility)
- **Reasoning:** SEO optimization, performance, React ecosystem, easy Supabase integration
- **Note:** Using static export (`next export`) to generate static HTML/CSS/JS for GitHub Pages
- **Limitation:** No server-side rendering or API routes (client-side only)

**Styling:**
- **CSS Framework:** Tailwind CSS v3.4+
- **Animation Libraries:** 
  - Framer Motion (component animations)
  - GSAP (complex scroll animations)
- **Icons:** Lucide React

**Backend:**
- **Database/Auth:** Supabase (client-side SDK)
- **Forms:** Direct Supabase client integration or Supabase Edge Functions

**Hosting:**
- **Platform:** GitHub Pages (free static hosting)
- **Domain:** TrueInsightsAI.com (custom domain can be connected via GitHub Pages settings)
- **Deployment:** Automated via GitHub Actions on push to main branch

### TR-002: Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### TR-003: Performance Requirements
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Total page size: <2MB
- Images: WebP format with fallbacks
- Lazy loading for below-fold content

### TR-004: Responsive Breakpoints
```
mobile: 375px - 639px
tablet: 640px - 1023px
desktop: 1024px - 1439px
large: 1440px+
```

### TR-005: Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Alt text for all images
- Color contrast ratios meet standards

### TR-006: SEO Requirements
- Meta tags (title, description)
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt
- Semantic HTML structure
- Fast load times

---

## Design Specifications

### DS-001: Color Palette
```css
/* Primary Colors */
--primary-black: #000000
--primary-white: #FFFFFF
--background-cream: #F5F1E8
--background-dark: #1A1A1A

/* Accent Colors */
--accent-purple: #8B5CF6      /* Agencies */
--accent-green: #10B981       /* Brands */
--accent-blue: #3B82F6        /* Links */

/* Gradients */
--gradient-pink-orange: linear-gradient(90deg, #FF6B9D 0%, #FFA500 100%)

/* Neutral Colors */
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-400: #9CA3AF
--gray-500: #6B7280
--gray-600: #4B5563
--gray-700: #374151
--gray-800: #1F2937
--gray-900: #111827
```

### DS-002: Typography
```css
/* Font Families */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
--font-display: 'Inter', sans-serif  /* For headlines */

/* Font Sizes */
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
--text-5xl: 3rem        /* 48px */
--text-6xl: 3.75rem     /* 60px */
--text-7xl: 4.5rem      /* 72px */

/* Font Weights */
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
```

### DS-003: Spacing System
```css
/* Based on 8px grid */
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px */
```

### DS-004: Border Radius
```css
--radius-sm: 0.25rem    /* 4px */
--radius-md: 0.5rem     /* 8px */
--radius-lg: 0.75rem    /* 12px */
--radius-xl: 1rem       /* 16px */
--radius-2xl: 1.5rem    /* 24px */
--radius-full: 9999px   /* Circular */
```

### DS-005: Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### DS-006: Animation Specifications

**Timing Functions:**
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1)
```

**Duration:**
```css
--duration-fast: 150ms
--duration-normal: 300ms
--duration-slow: 500ms
--duration-slower: 700ms
```

**Animation Types:**
1. **Fade In:** Opacity 0 → 1, slight upward movement
2. **Slide In:** Transform translateY(20px) → translateY(0)
3. **Scale In:** Transform scale(0.95) → scale(1)
4. **Stagger:** Sequential delay of 100ms per item
5. **Draw Arrow:** SVG path animation using stroke-dashoffset

---

## Content Requirements

### CR-001: Copy/Messaging

**Company Name:** TrueInsightsAI.com

**Hero Section:**
- **Headline:** [To be provided]
  - Example: "Get your free GEO SEO audit."
- **Subheadline:** [To be provided]
  - Example: "Track, analyze, and grow your local search presence across Google, Bing, and Apple Maps."

**Value Propositions:**
- [List of 3-5 key benefits]
- Example: "Monitor your local rankings in real-time"
- Example: "Identify and fix NAP inconsistencies"
- Example: "Discover competitor strategies that work"

### CR-002: Assets Needed

**Logo & Branding:**
- [ ] Company logo (SVG preferred)
- [ ] Favicon (multiple sizes)
- [ ] Brand color palette
- [ ] Brand guidelines (if available)

**Images:**
- [ ] Dashboard mockup (high-res)
- [ ] Team photos (circular crop, 400x400px minimum)
- [ ] Client logos (grayscale, SVG preferred)
- [ ] Illustration/icons for feature sections

**Social Proof:**
- [ ] Client testimonials (3-5)
  - Quote
  - Name
  - Title
  - Company
  - Photo
- [ ] Client/partner logos (8-12)
- [ ] Statistics (if available)
  - Number of clients
  - Locations tracked
  - Success metrics

### CR-003: Legal/Compliance
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Cookie Policy (if applicable)
- [ ] GDPR compliance statement (if targeting EU)

---

## Success Metrics

### Quantitative Metrics
1. **Performance:**
   - Lighthouse Score: >90
   - Page Load Time: <3s
   - First Contentful Paint: <1.5s

2. **Conversion:**
   - Form submission rate: Track baseline
   - CTA click-through rate: Track baseline
   - Time on page: Target >2 minutes

3. **Technical:**
   - 0 console errors
   - 0 accessibility violations
   - Mobile usability score: 100/100

### Qualitative Metrics
- Design approval from stakeholders
- User feedback (if testing)
- Responsive across devices
- Smooth animations on all devices

---

## Project Milestones

### MILESTONE 1: Project Setup & Foundation
**Duration:** 1-2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Next.js project initialized
- [ ] Tailwind CSS configured
- [ ] Design tokens/variables defined
- [ ] Component structure planned
- [ ] Git repository setup
- [ ] Development environment ready
- [ ] Supabase project connected

**Dependencies:** None

**Success Criteria:**
- Project runs locally without errors
- Design system tokens implemented
- Base components scaffolded

---

### MILESTONE 2: Static Foundation Sections
**Duration:** 3-4 days  
**Status:** Not Started

**Deliverables:**
- [ ] Header/Navigation component
  - Desktop navigation
  - Mobile hamburger menu
  - Sticky header functionality
  - CTA buttons
- [ ] Hero section (static, no animations yet)
  - Headline
  - Subheadline
  - Input field
  - CTA button
  - Platform logos
- [ ] Social proof section
  - Client logos grid
  - "Trusted by" heading
- [ ] Testimonial section
  - Card layout
  - Client photo
  - Quote
  - Attribution
- [ ] Footer component
  - Links
  - Newsletter signup
  - Social icons
  - Legal links

**Dependencies:** Milestone 1

**Success Criteria:**
- All sections display correctly on desktop
- Content is properly structured
- Responsive layout working
- No layout shifts

---

### MILESTONE 3: Complex Interactive Sections
**Duration:** 3-4 days  
**Status:** Not Started

**Deliverables:**
- [ ] Product showcase section
  - Dashboard mockup display
  - Annotation system (static)
  - Curved arrow SVGs
  - Layout positioning
- [ ] Dual offering cards
  - "For Brands" card
  - "For Agencies" card
  - Feature lists
  - Different CTAs
- [ ] Feature tabs component
  - Tab navigation
  - Tab content areas
  - Active state styling
  - Content switching logic
- [ ] Pricing tables
  - Brands/Agencies toggle
  - Three pricing tiers
  - Feature comparison
  - Badge system
  - CTA buttons per tier
- [ ] Team section
  - Team member cards
  - Photos
  - Bios
  - LinkedIn buttons
- [ ] FAQ accordion
  - Question/answer pairs
  - Expand/collapse functionality
  - Two-column layout

**Dependencies:** Milestone 2

**Success Criteria:**
- All interactive elements function correctly
- State management working
- Toggle switches working
- Accordion expands/collapses smoothly
- Tabs switch content properly

---

### MILESTONE 4: Animations & Micro-interactions
**Duration:** 2-3 days  
**Status:** Not Started

**Deliverables:**
- [ ] Scroll-triggered animations
  - Fade in on viewport entry
  - Staggered list animations
  - Parallax effects
- [ ] Hero animations
  - Fade in on page load
  - Platform logo float effects
- [ ] Product showcase animations
  - Dashboard slide/fade in
  - Sequential annotation pop-ins
  - Arrow drawing animations
  - Speech bubble animation
- [ ] Hover effects
  - Button hover states
  - Card lift effects
  - Logo hover effects
  - Link underline animations
- [ ] Transition effects
  - Tab switching
  - FAQ expand/collapse
  - Form state changes
  - Modal open/close (if applicable)
- [ ] Loading states
  - Skeleton screens
  - Progress indicators
  - Button loading states

**Dependencies:** Milestone 3

**Success Criteria:**
- All animations run at 60fps
- No jank or stuttering
- Animations feel natural and purposeful
- Reduced motion preferences respected
- Performance not degraded

---

### MILESTONE 5: Form Functionality & Backend Integration
**Duration:** 2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Form validation
  - URL input validation
  - Email validation
  - Required field checks
  - Error messaging
- [ ] Form submission handling
  - Success states
  - Error states
  - Loading states
- [ ] Supabase integration
  - Database schema
  - API endpoints
  - Lead capture storage
  - Newsletter signup storage
- [ ] Email notifications (optional)
  - Admin notification
  - User confirmation email

**Dependencies:** Milestone 2, Supabase setup

**Success Criteria:**
- Forms submit successfully
- Data saves to Supabase
- Proper error handling
- User feedback on all actions
- No data loss on error

---

### MILESTONE 6: Content Integration & Customization
**Duration:** 1-2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Replace placeholder content
  - All copy updated
  - Brand-specific messaging
  - GEO SEO terminology
- [ ] Image integration
  - Logo implementation
  - Dashboard mockup
  - Team photos
  - Client logos
  - Icons
- [ ] Branding application
  - Colors updated
  - Fonts matched
  - Visual identity consistent
- [ ] SEO optimization
  - Meta tags
  - Open Graph tags
  - Structured data
  - Alt text for images
  - Heading hierarchy

**Dependencies:** Content assets provided, Milestone 2-5

**Success Criteria:**
- All content is final
- No placeholder text remaining
- All images optimized
- SEO tags complete
- Brand consistency throughout

---

### MILESTONE 7: Responsive & Cross-browser Testing
**Duration:** 2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Mobile responsiveness
  - iPhone (375px - 428px)
  - Android (360px - 412px)
  - Tablet portrait (768px - 834px)
  - Tablet landscape (1024px)
- [ ] Desktop testing
  - Standard (1366px - 1920px)
  - Large displays (2560px+)
- [ ] Browser compatibility
  - Chrome
  - Firefox
  - Safari
  - Edge
  - Mobile browsers
- [ ] Device testing
  - iOS Safari
  - Android Chrome
  - Tablet browsers
- [ ] Interaction testing
  - Touch interactions
  - Keyboard navigation
  - Screen reader testing

**Dependencies:** Milestone 6

**Success Criteria:**
- Works on all target browsers
- No layout breaks on any device
- Touch interactions work properly
- No horizontal scroll
- All content readable on mobile

---

### MILESTONE 8: Performance Optimization
**Duration:** 1-2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Image optimization
  - WebP conversion
  - Lazy loading
  - Responsive images
  - Proper sizing
- [ ] Code optimization
  - Bundle size reduction
  - Tree shaking
  - Code splitting
  - Minification
- [ ] Loading optimization
  - Critical CSS inline
  - Defer non-critical JS
  - Preload key resources
  - Font optimization
- [ ] Caching strategy
  - Service worker (if applicable)
  - Cache headers
  - CDN setup
- [ ] Performance testing
  - Lighthouse audits
  - WebPageTest
  - Real device testing

**Dependencies:** Milestone 7

**Success Criteria:**
- Lighthouse score >90
- Page load <3s
- First Contentful Paint <1.5s
- No layout shift (CLS <0.1)
- Images optimized

---

### MILESTONE 9: Accessibility & Polish
**Duration:** 1-2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Accessibility audit
  - WAVE tool scan
  - axe DevTools scan
  - Manual keyboard testing
  - Screen reader testing
- [ ] Accessibility fixes
  - ARIA labels
  - Focus management
  - Color contrast
  - Semantic HTML
  - Alt text verification
- [ ] Final polish
  - Spacing consistency
  - Typography refinement
  - Color consistency
  - Hover state review
  - Error state review
- [ ] Copy review
  - Spelling/grammar check
  - Link verification
  - Consistency check

**Dependencies:** Milestone 8

**Success Criteria:**
- WCAG AA compliance
- 0 critical accessibility issues
- Keyboard navigation works
- Screen reader friendly
- All links work

---

### MILESTONE 10: Pre-launch QA & Deployment
**Duration:** 1-2 days  
**Status:** Not Started

**Deliverables:**
- [ ] Final QA checklist
  - All forms tested
  - All links verified
  - All animations working
  - All content finalized
  - Cross-browser verified
  - Mobile tested
- [ ] Analytics setup
  - Google Analytics 4
  - Conversion tracking
  - Event tracking
  - Goal setup
- [ ] Deployment configuration
  - Environment variables
  - Domain setup
  - SSL certificate
  - CDN configuration
- [ ] Production deployment
  - Deploy to Vercel/Netlify
  - DNS configuration
  - Smoke testing
  - Monitoring setup

**Dependencies:** All previous milestones

**Success Criteria:**
- Site live on production domain
- All functionality working in production
- Analytics tracking
- No console errors
- SSL active
- DNS propagated

---

### MILESTONE 11: Post-Launch Monitoring
**Duration:** Ongoing  
**Status:** Not Started

**Deliverables:**
- [ ] Monitor analytics
- [ ] Track conversion rates
- [ ] Review user behavior
- [ ] Collect feedback
- [ ] Bug fixes
- [ ] Performance monitoring
- [ ] A/B test planning (future)

**Dependencies:** Milestone 10

**Success Criteria:**
- No critical bugs
- Forms submitting successfully
- Analytics data flowing
- Performance stable

---

## Risk Assessment

### High Priority Risks

**Risk #1: Complex Animations Impact Performance**
- **Probability:** Medium
- **Impact:** High
- **Mitigation:** Use CSS transforms, test on lower-end devices, implement fallbacks
- **Contingency:** Reduce animation complexity or disable on low-power mode

**Risk #2: Content Not Ready on Time**
- **Probability:** High
- **Impact:** Medium
- **Mitigation:** Use placeholder content, create content templates
- **Contingency:** Launch with placeholders, update after launch

**Risk #3: Responsive Design Breaks on Edge Cases**
- **Probability:** Medium
- **Impact:** Medium
- **Mitigation:** Test early and often, use proven breakpoints
- **Contingency:** Fix in post-launch patch

**Risk #4: Third-party Dependencies Break**
- **Probability:** Low
- **Impact:** High
- **Mitigation:** Lock dependency versions, test updates carefully
- **Contingency:** Have rollback plan, vendor lock escape plan

---

## Open Questions

### Pre-Development Questions

**Q1: Brand Assets**
- [ ] Do you have an existing logo?
- [ ] Do you have brand colors defined?
- [ ] Do you have team photos available?
- [ ] Do you have client testimonials?

**Q2: Functionality**
- [ ] Should the URL analyzer actually work or just be a lead capture?
- [ ] Do you want live chat integration?
- [ ] Do you need multi-language support?
- [ ] Should pricing be displayed or "Contact Us"?

**Q3: Backend/Integration**
- [ ] Supabase project already set up?
- [ ] What email service for notifications? (SendGrid, Postmark, Resend?)
- [ ] CRM integration needed? (HubSpot, Salesforce, etc.)
- [ ] Payment processing needed? (Stripe, etc.)

**Q4: Content**
- [ ] Company name finalized?
- [ ] Service tiers defined?
- [ ] Pricing structure decided?
- [ ] Feature lists written?
- [ ] FAQ questions/answers ready?

**Q5: Timeline**
- [ ] What's the target launch date?
- [ ] Any hard deadlines?
- [ ] Prefer incremental review after each milestone?

**Q6: Domain & Hosting**
- [ ] Is TrueInsightsAI.com registered?
- [ ] Preferred hosting platform?
- [ ] Existing hosting account or need new?

---

## Appendix

### A. Technology Stack Details

**Frontend:**
```
- Next.js 14.x (App Router)
- React 18.x
- TypeScript 5.x
- Tailwind CSS 3.4.x
- Framer Motion 11.x
- GSAP 3.x
- Lucide React (icons)
```

**Backend:**
```
- Supabase (Database, Auth, Storage)
- Next.js API Routes / Server Actions
```

**DevOps:**
```
- Git (version control)
- GitHub (repository)
- GitHub Pages (hosting & deployment - free)
- GitHub Actions (CI/CD for automated deployment)
```

**Development Tools:**
```
- ESLint (linting)
- Prettier (formatting)
- Lighthouse (performance)
- Chrome DevTools
- React DevTools
```

### B. File Structure
```
/TrueInsightsAI.com
├── /app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── /api
│       └── /submit-form
├── /components
│   ├── /ui (buttons, inputs, cards)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx
│   ├── SocialProof.tsx
│   ├── Testimonials.tsx
│   ├── DualOffering.tsx
│   ├── FeatureTabs.tsx
│   ├── Pricing.tsx
│   ├── Team.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── /lib
│   ├── supabase.ts
│   ├── utils.ts
│   └── constants.ts
├── /public
│   ├── /images
│   ├── /icons
│   └── favicon.ico
├── /styles
│   └── animations.css
├── PRD.md
├── MILESTONES.md
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

### C. Component Hierarchy
```
Page
├── Header
│   ├── Logo
│   ├── Navigation
│   └── CTAButtons
├── Hero
│   ├── Headline
│   ├── Subheadline
│   ├── URLInput
│   └── PlatformLogos
├── ProductShowcase
│   ├── DashboardMockup
│   └── Annotations[]
├── SocialProof
│   └── ClientLogos[]
├── Testimonial
│   ├── ClientPhoto
│   ├── Quote
│   └── Attribution
├── ValueProp (Dark Section)
├── DualOffering
│   ├── BrandsCard
│   └── AgenciesCard
├── FeatureHighlight
│   ├── TabNav
│   └── TabContent[]
├── Pricing
│   ├── Toggle
│   └── PricingTiers[]
├── Team
│   └── TeamMember[]
├── FAQ
│   └── AccordionItem[]
└── Footer
    ├── Links
    ├── Newsletter
    └── Social
```

### D. Resources & References

**Design Inspiration:**
- https://aipeekaboo.com (primary reference)

**Animation References:**
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)

**Performance:**
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals](https://web.dev/vitals/)

**Accessibility:**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-28 | AI Assistant | Initial PRD creation |
| 1.1 | 2025-10-29 | AI Assistant | Company name confirmed as TrueInsightsAI.com |

---

## Approval & Sign-off

**Project Owner:** Yahir Gonzalez  
**Date:** _________________  
**Signature:** _________________

---

*This PRD is a living document and will be updated as the project evolves.*

