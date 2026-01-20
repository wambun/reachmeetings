# Product Requirements Document (PRD)
# REACH Meetings & Events Website Redesign

**Version:** 1.0
**Date:** January 19, 2026
**Project:** Full Multi-Page Website Redesign

---

## 1. Executive Summary

This PRD outlines the complete redesign of the REACH Meetings & Events website, transforming it from its current Wix-based platform into a modern, premium Next.js 15 application. The new design will adopt the sophisticated UI/UX patterns from the Vectura design reference while maintaining REACH's brand identity and content.

---

## 2. Current State Analysis (client/old)

### 2.1 Existing Sitemap

Based on analysis of https://www.reachmeetings.com/:

```
REACH Meetings & Events
├── Home (/)
├── Who We Are (/about)
│   ├── Our Story
│   ├── Our Team (11 team members)
│   │   ├── Lauren Dunnaway - Co-Founder, President
│   │   ├── Gretchen Mitchell - Co-Founder, CEO
│   │   ├── DeeDee Bailey - Senior Planner
│   │   ├── Nora Bakke - Senior Planner
│   │   ├── Traci Colangelo - Senior Sourcing Specialist & Travel Manager
│   │   ├── Taylor Brown - Meeting Planner
│   │   ├── Olga Carroll - Sourcing Manager
│   │   ├── Krista Gibson - Sourcing Manager
│   │   ├── Ginger Murchison - Senior Planner
│   │   ├── Ashley Hellstern - Travel Agent & Disney Specialist
│   │   └── Nathalie Proche' - Travel Advisor
│   ├── Our Clients
│   └── Individual Bio Pages
│       ├── /meet-lauren-dunnaway
│       └── /gretchen-mitchell-bio
├── What We Do (/what-we-do)
│   ├── Full Meeting & Event Management (/meetings)
│   ├── Venue Sourcing (/venue-sourcing)
│   ├── Incentive Programs (/incentive-programs)
│   ├── Event Staffing (/event-staffing)
│   ├── Life Science Meetings (/life-science-meetings)
│   ├── Executive Retreats (/executive-retreats)
│   ├── Investor Meetings (/investor-meetings)
│   ├── Full Service Travel Agency
│   └── Wedding & Social Venue Sourcing (/wedding-hotel-block-sourcing)
├── Client Journey (/client-journey)
│   ├── Pre-Event Services
│   ├── On-Site Services
│   └── Post-Event Services
├── Blog (/thereachresource)
│   ├── All Posts
│   ├── Categories
│   │   ├── Getting Started
│   │   └── Your Community
│   └── Individual Posts
│       ├── The REACH Advantage: Global Travel Partners
│       ├── Europe's eVisa Requirement
│       ├── Trends in Incentive Travel
│       └── The Power of Sisterhood
└── Contact Us (/contact)
```

### 2.2 Current Site Characteristics

**Content Structure:**
- Simple hierarchical navigation with dropdowns
- Text-heavy content with minimal imagery
- Basic contact form with dropdown for inquiry type
- Footer with social links (LinkedIn, Instagram, Facebook)
- Newsletter subscription form
- Accreditation badges (IATAN, ASTA)

**Branding Elements:**
- Logo: REACH Meetings & Events
- Corporate Address: 3736 Bee Cave Rd, Suite 1174, West Lake Hills, TX 78746
- Social Media: LinkedIn, Instagram, Facebook
- Founded: 2020

---

## 3. Design Target Analysis (client/new)

### 3.1 New Design Sitemap (Vectura Reference)

```
Vectura (Design Reference)
├── Home (/)
├── Product (/product)
│   ├── Expense Tracking (#expense-tracking)
│   ├── Budget Control (#budget-control)
│   ├── Report Engine (#report-engine)
│   ├── Smart Approvals (#management-feature-1)
│   ├── Vendor Oversight (#management-feature-2)
│   └── Role Management (#management-feature-3)
├── Pricing (/pricing)
├── Case Studies (/case-studies)
│   └── Individual Case Studies
├── Company
│   ├── About (/about)
│   ├── Blog (/blog)
│   │   └── Individual Posts with Categories
│   ├── Careers (/careers)
│   └── Contact (/contact)
│       ├── Support (/contact/support)
│       └── Sales (/contact/sales)
└── Legal
    ├── Terms of Service (/legal/terms-of-service)
    ├── Privacy Policy (/legal/privacy-policy)
    └── Cookie Policy (/legal/cookie-policy)
```

### 3.2 Visual Design Analysis

#### Color System
- **Primary Background:** Dark navy/charcoal (#0A0A0F or similar)
- **Secondary Background:** Slightly lighter dark tones with subtle gradients
- **Accent Colors:** Muted blues, subtle purple undertones
- **Text Colors:**
  - Primary text: White (#FFFFFF)
  - Secondary text: Muted gray (#A0A0A0)
  - Accent text: Highlighted with soft glow effects

#### Typography
- **Headings:** Large, bold sans-serif with generous letter-spacing
- **Body:** Clean, readable sans-serif
- **Hierarchy:** Strong contrast between H1 (very large) and body text
- **Special Effects:** Subtle word-by-word animation on hero headings

#### Layout Patterns
- **Max Width:** ~1600px for premium, spacious feel
- **Padding:** Generous whitespace (px-6 sm:px-8 lg:px-12)
- **Grid:** Clean CSS Grid layouts with responsive columns
- **Sections:** Full-width backgrounds with contained content

#### Component Patterns

**1. Navigation**
- Sticky header with logo left, links center, CTA right
- Dropdown mega-menus with grouped items
- Two-column dropdown layout with descriptions
- Smooth hover transitions

**2. Hero Sections**
- Large H1 with animated word appearance
- Centered layout with description below
- Dual CTA buttons (primary + secondary)
- Subtle background effects

**3. Feature Lists**
- Interactive tab/list components
- Animated content switching
- Visual mockups/illustrations
- Progress indicators

**4. Stats Sections**
- Large animated numbers
- Counter animations on scroll
- Supporting descriptive text
- Grid layout (3-4 columns)

**5. Testimonials**
- Quote-based design with large text
- Author info with photo
- Stats/metrics alongside quote
- Subtle background patterns

**6. Pricing Tables**
- Toggle for monthly/annual pricing
- Feature comparison grid
- Highlighted "Best Value" option
- Clean checkbox indicators

**7. FAQ Sections**
- Accordion/collapsible design
- Clean expand/collapse animations
- Side-by-side with CTA card

**8. Blog Cards**
- Image + metadata + title layout
- Category badges
- Author avatars
- "Read more" hover states
- Category filter tabs

**9. Footer**
- Multi-column link organization
- Contact information
- Social media icons
- Legal links
- Disclaimer text

#### Animation Patterns
- **Framer Motion:** Smooth entrance animations
- **Scroll-triggered:** Elements animate on scroll into view
- **Hover effects:** Subtle scale, color, and glow transitions
- **Number counters:** Animated counting for statistics
- **Accordion:** Smooth expand/collapse for FAQs

---

## 4. Content Mapping Strategy

### 4.1 Page-by-Page Mapping

| Old Page | New Page | Component Strategy |
|----------|----------|-------------------|
| Home | Home | Hero + Services Overview + Team Preview + Testimonials + CTA |
| Who We Are | About | Story Section + Team Grid + Client Logos + Stats |
| What We Do | Services (index) | Hero + Service Cards + Feature Details |
| Individual Services | Services/[slug] | Dynamic routes for each service |
| Client Journey | How We Work | Timeline/Steps component |
| Blog | Blog | Blog list with categories |
| Blog Posts | Blog/[slug] | MDX-based blog posts |
| Contact | Contact | Contact cards + Form + FAQ |

### 4.2 New Sitemap for REACH

```
REACH Meetings & Events (Redesigned)
├── Home (/)
│   ├── Hero Section (tagline + CTAs)
│   ├── Client Logos/Social Proof
│   ├── Services Overview Grid
│   ├── Why Choose REACH (stats)
│   ├── Team Preview
│   ├── Testimonials
│   └── CTA Section
├── About (/about)
│   ├── Hero + Mission
│   ├── Our Story
│   ├── Team Section with Bio Cards
│   ├── Our Clients
│   ├── Stats Section
│   └── Accreditations
├── Services (/services)
│   ├── Services Overview Hero
│   └── Services Grid with descriptions
├── Services/[slug]
│   ├── /services/meeting-management
│   ├── /services/venue-sourcing
│   ├── /services/incentive-programs
│   ├── /services/event-staffing
│   ├── /services/life-science-meetings
│   ├── /services/executive-retreats
│   ├── /services/investor-meetings
│   ├── /services/travel-agency
│   └── /services/wedding-venue-sourcing
├── How We Work (/how-we-work)
│   ├── Client Journey Hero
│   ├── Pre-Event Timeline
│   ├── On-Site Services
│   ├── Post-Event Services
│   └── CTA Section
├── Blog (/blog)
│   ├── Blog Hero
│   ├── Category Filters
│   └── Blog Post Grid
├── Blog/[slug]
│   └── Individual blog posts
├── Contact (/contact)
│   ├── Contact Hero
│   ├── Contact Options Cards
│   ├── Contact Form
│   └── FAQ Section
└── Legal
    ├── /legal/terms
    ├── /legal/privacy
    └── /legal/cookies
```

### 4.3 Content Data Structure

```typescript
// Types for content management

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  image?: string;
}

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedIn?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX
  author: TeamMember;
  publishedAt: string;
  category: BlogCategory;
  featuredImage: string;
}

type BlogCategory =
  | 'industry-insights'
  | 'travel-tips'
  | 'company-news'
  | 'event-planning';

interface ClientJourneyPhase {
  title: string;
  items: string[];
}
```

---

## 5. Technical Implementation Plan

### 5.1 Technology Stack

- **Framework:** Next.js 15 (App Router)
- **React:** React 19
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn UI (built from scratch)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

### 5.2 Directory Structure

```
/app
├── (marketing)
│   ├── layout.tsx          # Marketing pages layout
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx        # Services index
│   │   └── [slug]/page.tsx # Individual service
│   ├── how-we-work/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Individual post
│   ├── contact/page.tsx
│   └── legal/
│       ├── terms/page.tsx
│       ├── privacy/page.tsx
│       └── cookies/page.tsx
├── layout.tsx              # Root layout
└── globals.css

/components
├── landing/               # Landing page components
│   ├── LandingHero.tsx
│   ├── LandingFeature.tsx
│   ├── LandingStats.tsx
│   ├── LandingTestimonial.tsx
│   ├── LandingTeam.tsx
│   ├── LandingCTA.tsx
│   ├── LandingFAQ.tsx
│   └── index.ts
├── shared/                # Shared components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── MobileNav.tsx
│   └── ui/               # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── ...
└── blog/
    ├── BlogCard.tsx
    ├── BlogList.tsx
    └── BlogCategories.tsx

/lib
├── data/
│   ├── services.ts
│   ├── team.ts
│   ├── testimonials.ts
│   └── site-config.ts
└── utils.ts

/content
└── blog/
    └── *.mdx              # Blog posts in MDX
```

### 5.3 Component Implementation Priority

**Phase 2A: Global Layout**
1. Root layout with metadata
2. Header with navigation
3. Mobile navigation drawer
4. Footer with links and newsletter
5. Theme configuration (dark theme)

**Phase 2B: Core Pages**
1. Home page with all sections
2. About page with team grid
3. Services index + individual pages
4. How We Work page
5. Contact page with form

**Phase 2C: Blog & Legal**
1. Blog listing page
2. Blog post template
3. Legal pages

### 5.4 Key Implementation Details

**Navigation:**
```tsx
// Mega menu structure
const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Who We Are',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about#story' },
      { name: 'Our Team', href: '/about#team' },
    ]
  },
  {
    name: 'What We Do',
    href: '/services',
    children: [
      { name: 'Meeting Management', href: '/services/meeting-management' },
      // ... other services
    ]
  },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
```

**Animation Config:**
```tsx
// Framer Motion variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

---

## 6. Logo and Branding

### 6.1 Assets to Preserve

- **Logo:** Extract from current site and optimize
- **Favicon:** Generate from logo
- **Brand Colors:** Adapt to dark theme while maintaining recognition
- **Accreditation Badges:** IATAN, ASTA logos

### 6.2 Brand Adaptation

The REACH brand will be adapted to work with the dark, premium aesthetic of the new design:
- Logo will need light/dark variants
- Accent colors should complement the dark theme
- Typography will follow new design system while maintaining brand voice

---

## 7. Success Metrics

### 7.1 Technical Requirements

- Lighthouse Score: 90+ across all categories
- Core Web Vitals: Pass all metrics
- Mobile Responsive: Full mobile support
- Accessibility: WCAG AA compliance
- Build: Zero TypeScript/ESLint errors

### 7.2 Design Requirements

- Visual parity with Vectura reference design
- Smooth Framer Motion animations
- Responsive across all breakpoints
- Consistent component library
- Premium, professional aesthetic

---

## 8. Timeline & Phases

### Phase 1: Architecture & PRD (Complete)
- [x] Sitemap analysis
- [x] Visual design analysis
- [x] Content mapping
- [x] Technical planning

### Phase 2: Execution
- [ ] Global layout implementation
- [ ] Core page development
- [ ] Blog & legal pages
- [ ] Animation polish
- [ ] Testing & QA

---

## Appendix A: Service Content Outline

### Full Meeting & Event Management
- End-to-end event planning
- Venue management
- Vendor coordination
- On-site execution

### Venue Sourcing
- Site selection expertise
- Contract negotiation
- Cost analysis
- Vendor relationships

### Incentive Programs
- Custom trip design
- Participant management
- Reward fulfillment
- ROI tracking

### Event Staffing
- Professional staff sourcing
- Training & preparation
- On-site coordination
- Quality assurance

### Life Science Meetings
- Compliance expertise
- HCP meeting management
- Documentation
- Regulatory adherence

### Executive Retreats
- C-suite event expertise
- Strategic planning facilitation
- Premium venue curation
- VIP management

### Investor Meetings
- Roadshow coordination
- Presentation setup
- Logistics management
- Confidentiality protocols

### Travel Agency
- Corporate travel
- Leisure travel
- Group bookings
- Disney specialization

### Wedding & Social Venue Sourcing
- Hotel block negotiation
- Venue comparison
- Contract support
- Group coordination

---

## Appendix B: Team Bios Reference

Current team members to feature:
1. Lauren Dunnaway - Co-Founder, President
2. Gretchen Mitchell - Co-Founder, CEO
3. DeeDee Bailey - Senior Planner
4. Nora Bakke - Senior Planner
5. Traci Colangelo - Senior Sourcing Specialist & Travel Manager
6. Taylor Brown - Meeting Planner
7. Olga Carroll - Sourcing Manager
8. Krista Gibson - Sourcing Manager
9. Ginger Murchison - Senior Planner
10. Ashley Hellstern - Travel Agent & Disney Specialist
11. Nathalie Proche' - Travel Advisor
