# GEO Technical Implementations
## Copy-Paste Code & Configurations for AI Optimization

---

## 🤖 ROBOTS.TXT OPTIMIZATION

### Basic robots.txt (Allow All AI Bots)

```txt
# Allow all AI crawlers
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: ImagesiftBot
Allow: /

# Traditional search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemap location
Sitemap: https://yourdomain.com/sitemap.xml
```

### For WordPress Sites
Place in root directory OR use plugin like "Yoast SEO" to edit

### For Next.js Sites
Create `public/robots.txt` file

### For Custom Sites
Upload to root directory (`/robots.txt`)

---

## 📋 SCHEMA MARKUP TEMPLATES

### 1. RealEstateAgent Schema (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Jane Smith Real Estate",
  "image": "https://yourdomain.com/images/jane-smith.jpg",
  "description": "Award-winning Austin real estate agent specializing in luxury homes and first-time buyers. 15+ years of experience, 500+ homes sold.",
  "@id": "https://yourdomain.com",
  "url": "https://yourdomain.com",
  "telephone": "+1-512-555-0100",
  "email": "jane@yourdomain.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street, Suite 100",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.267153,
    "longitude": -97.743057
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Austin",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Round Rock",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Cedar Park",
      "containedIn": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "sameAs": [
    "https://www.facebook.com/janesmith",
    "https://www.linkedin.com/in/janesmith",
    "https://www.instagram.com/janesmithrealestate",
    "https://www.zillow.com/profile/janesmith",
    "https://www.realtor.com/agent/janesmith"
  ],
  "knowsAbout": [
    "Real Estate",
    "Luxury Homes",
    "First-Time Home Buyers",
    "Investment Properties",
    "Austin Real Estate Market"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "National Association of Realtors"
  },
  "award": [
    "Top Producer 2023",
    "Five Star Professional 2022-2024",
    "Austin Business Journal Top Realtor"
  ]
}
</script>
```

**Where to place:** In the `<head>` section of your homepage

---

### 2. Person Schema (About Page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jane Smith",
  "jobTitle": "Real Estate Agent & Broker",
  "url": "https://yourdomain.com",
  "image": "https://yourdomain.com/images/jane-smith.jpg",
  "description": "Jane Smith is an award-winning real estate agent in Austin, Texas with over 15 years of experience helping clients buy and sell homes. She specializes in luxury properties and first-time homebuyers.",
  "email": "jane@yourdomain.com",
  "telephone": "+1-512-555-0100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Jane Smith Real Estate"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Texas at Austin"
  },
  "knowsAbout": [
    "Real Estate Sales",
    "Property Valuation",
    "Negotiation",
    "Austin Real Estate Market",
    "Home Staging",
    "Investment Properties"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "License",
      "name": "Texas Real Estate License #12345"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "Certified Luxury Home Marketing Specialist"
    }
  ],
  "award": [
    "Top Producer 2023 - Austin Board of Realtors",
    "Five Star Professional 2022-2024",
    "Austin Business Journal Top Realtor 2023"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/janesmith",
    "https://www.facebook.com/janesmith",
    "https://www.instagram.com/janesmithrealestate",
    "https://twitter.com/janesmith",
    "https://www.zillow.com/profile/janesmith",
    "https://www.realtor.com/agent/janesmith"
  ]
}
</script>
```

---

### 3. Service Schema (Service Pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Buying Services",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Jane Smith Real Estate",
    "telephone": "+1-512-555-0100",
    "url": "https://yourdomain.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Austin",
    "containedIn": {
      "@type": "State",
      "name": "Texas"
    }
  },
  "description": "Comprehensive home buying services in Austin, TX. We guide first-time homebuyers and experienced investors through every step of the process, from pre-approval to closing.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Buying Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Buyer Consultation",
          "description": "Initial consultation to understand your needs and budget"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Search",
          "description": "Customized property search based on your criteria"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Tours",
          "description": "Scheduled tours of properties that match your needs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Offer Negotiation",
          "description": "Expert negotiation to get the best price and terms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Closing Assistance",
          "description": "Guidance through inspection, appraisal, and closing"
        }
      }
    ]
  }
}
</script>
```

**Create separate service pages for:**
- Home Buying
- Home Selling
- Investment Properties
- Luxury Real Estate
- First-Time Homebuyers

---

### 4. FAQPage Schema (Any page with FAQs)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to hire a realtor in Austin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Austin, Texas, realtors typically work on commission. For buyers, the service is usually free as the seller pays the commission (typically 2.5-3% of the sale price). For sellers, you can expect to pay around 5-6% total commission, split between your agent and the buyer's agent."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to buy a home in Austin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The home buying process in Austin typically takes 30-45 days from offer acceptance to closing. However, the search phase can vary widely depending on your criteria and the current market conditions. Working with an experienced local agent can help expedite the process."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best neighborhoods in Austin for families?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top family-friendly neighborhoods in Austin include Circle C, Steiner Ranch, Tarrytown, West Lake Hills, and Mueller. These areas offer excellent schools (both public and private), parks, community amenities, and safe environments. Each neighborhood has its own character and price range to fit different budgets."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a pre-approval before looking at homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not legally required, getting pre-approved for a mortgage is highly recommended before starting your home search in Austin. Pre-approval shows sellers you're a serious buyer, helps you understand your budget, and can make your offer more competitive in Austin's often competitive market."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Austin real estate market like right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Austin real estate market remains active with moderate price growth. As of 2025, median home prices are around $550,000-600,000, with inventory levels improving compared to the shortage of recent years. Interest rates and local economic conditions continue to influence the market. Contact us for the most current market analysis."
      }
    }
  ]
}
</script>
```

**Pro tip:** Add FAQs to EVERY page. AI models love them.

---

### 5. Review/Rating Schema (If you have reviews)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Jane Smith Real Estate",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "datePublished": "2024-10-15",
      "reviewBody": "Jane helped us find our dream home in Austin. Her knowledge of the local market and negotiation skills saved us thousands. Highly recommend!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "datePublished": "2024-09-28",
      "reviewBody": "Excellent experience working with Jane. She made the home selling process smooth and stress-free. Our home sold in 10 days for over asking price!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
</script>
```

---

### 6. BreadcrumbList Schema (Navigation)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yourdomain.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://yourdomain.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Home Buying",
      "item": "https://yourdomain.com/services/home-buying"
    }
  ]
}
</script>
```

---

### 7. Article Schema (Blog Posts)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top 10 Neighborhoods in Austin for First-Time Homebuyers in 2025",
  "image": "https://yourdomain.com/images/austin-neighborhoods.jpg",
  "author": {
    "@type": "Person",
    "name": "Jane Smith",
    "url": "https://yourdomain.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Jane Smith Real Estate",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/images/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20",
  "description": "Discover the best Austin neighborhoods for first-time homebuyers, including affordability, schools, amenities, and investment potential.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourdomain.com/blog/best-neighborhoods-first-time-buyers"
  }
}
</script>
```

---

## 🗺️ XML SITEMAP OPTIMIZATION

### Basic Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage (highest priority) -->
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- About page -->
  <url>
    <loc>https://yourdomain.com/about</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Services pages (high priority) -->
  <url>
    <loc>https://yourdomain.com/services/home-buying</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://yourdomain.com/services/home-selling</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Neighborhood guides -->
  <url>
    <loc>https://yourdomain.com/neighborhoods/west-lake-hills</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Blog posts -->
  <url>
    <loc>https://yourdomain.com/blog/best-neighborhoods-first-time-buyers</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Contact page -->
  <url>
    <loc>https://yourdomain.com/contact</loc>
    <lastmod>2024-11-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
</urlset>
```

**Priority Guidelines:**
- Homepage: 1.0
- Main service pages: 0.9
- About page: 0.8
- Neighborhood guides: 0.7
- Blog posts: 0.6
- Contact/other pages: 0.5

**Change Frequency:**
- Homepage: weekly (if you update regularly)
- Service pages: monthly
- Blog posts: monthly (if updated)
- Static pages: yearly

---

## 📊 TRACKING AI BOT CRAWLS

### Google Analytics 4 Custom Event (If client has GA4)

Add to Google Tag Manager or directly to site:

```javascript
// Track AI bot referrals
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'ai_bot_visit',
  'bot_type': 'AI Crawler',
  'user_agent': navigator.userAgent
});
```

### Server Log Analysis Script (For developers)

```bash
# Analyze server logs for AI bot visits
# Run on server via SSH

grep -i "GPTBot\|OAI-SearchBot\|PerplexityBot\|ClaudeBot\|CCBot" access.log | \
awk '{print $1, $4, $7}' | \
sort | uniq -c | sort -nr > ai_bot_visits.txt

# Output: Count, IP, Date, Page visited
```

### Simple Bot Detection (JavaScript)

```javascript
// Detect AI bots client-side (limited accuracy)
function detectAIBot() {
  const userAgent = navigator.userAgent.toLowerCase();
  const aiBots = [
    'gptbot',
    'oai-searchbot',
    'perplexitybot',
    'claudebot',
    'claude-web',
    'ccbot',
    'anthropic-ai',
    'cohere-ai',
    'google-extended'
  ];
  
  for (let bot of aiBots) {
    if (userAgent.includes(bot)) {
      return bot;
    }
  }
  return false;
}

// Log if AI bot detected
const botType = detectAIBot();
if (botType) {
  console.log('AI Bot detected:', botType);
  // Send to your analytics
}
```

---

## 🎨 CONTENT STRUCTURE FOR AI READABILITY

### Answer-First Format (Use This Structure)

```html
<h1>How Much Does a Realtor Cost in Austin, Texas?</h1>

<!-- ANSWER FIRST (What AI will pull) -->
<p><strong>For buyers</strong>, hiring a realtor in Austin is typically free because the seller pays both agents' commissions (usually 2.5-3% each, totaling 5-6%). <strong>For sellers</strong>, expect to pay 5-6% total commission split between your listing agent and the buyer's agent.</p>

<!-- Then elaborate -->
<h2>Detailed Breakdown of Realtor Costs</h2>
<ul>
  <li><strong>Buyer's Agent Commission:</strong> 2.5-3% (paid by seller)</li>
  <li><strong>Listing Agent Commission:</strong> 2.5-3% (paid by seller)</li>
  <li><strong>Total Commission:</strong> 5-6% of sale price</li>
</ul>

<h3>Example: $500,000 Home Sale</h3>
<ul>
  <li>6% commission = $30,000</li>
  <li>Listing agent: $15,000</li>
  <li>Buyer's agent: $15,000</li>
  <li><strong>Buyer pays: $0 directly</strong></li>
</ul>

<h2>Frequently Asked Questions</h2>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
  <h3 itemprop="name">Can I negotiate realtor commission in Austin?</h3>
  <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
    <div itemprop="text">
      <p>Yes, realtor commission is negotiable. While 5-6% is standard, some agents offer discounted rates or flat fees. However, lowering commission may affect marketing efforts and the agent's motivation.</p>
    </div>
  </div>
</div>

<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
  <h3 itemprop="name">Do discount realtors provide the same service?</h3>
  <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
    <div itemprop="text">
      <p>Discount realtors may offer reduced commission (1-2%) but often provide less marketing, fewer showings, and limited negotiation support. Full-service agents typically justify their commission through better results and higher sale prices.</p>
    </div>
  </div>
</div>
```

**Key Elements:**
1. ✅ Answer in first paragraph
2. ✅ Use bold for emphasis
3. ✅ Bullet points and lists
4. ✅ Clear headings (H2, H3)
5. ✅ FAQ section
6. ✅ Specific numbers and data
7. ✅ Schema markup in HTML

---

## 🔧 META TAGS FOR AI OPTIMIZATION

```html
<head>
  <!-- Basic Meta Tags -->
  <title>Austin Real Estate Agent | Jane Smith | Top-Rated Realtor Since 2009</title>
  <meta name="description" content="Award-winning Austin realtor Jane Smith helps buyers and sellers achieve their real estate goals. 15+ years experience, 500+ homes sold, 4.9★ rating. Contact us today!">
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Austin Real Estate Agent | Jane Smith | Top-Rated Realtor">
  <meta property="og:description" content="Award-winning Austin realtor with 15+ years experience. Specializing in luxury homes, first-time buyers, and investment properties.">
  <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg">
  <meta property="og:url" content="https://yourdomain.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Austin Real Estate Agent | Jane Smith">
  <meta name="twitter:description" content="Award-winning Austin realtor. 15+ years experience, 500+ homes sold.">
  <meta name="twitter:image" content="https://yourdomain.com/images/twitter-card.jpg">
  
  <!-- Additional Meta Tags for AI -->
  <meta name="author" content="Jane Smith">
  <meta name="geo.region" content="US-TX">
  <meta name="geo.placename" content="Austin">
  <meta name="geo.position" content="30.267153;-97.743057">
  <meta name="ICBM" content="30.267153, -97.743057">
  
  <!-- Entity Recognition -->
  <link rel="author" href="https://yourdomain.com/about">
  <link rel="canonical" href="https://yourdomain.com">
</head>
```

---

## 📱 GOOGLE BUSINESS PROFILE API (Advanced)

If you're managing multiple clients, use the Google My Business API:

```python
# Python example for bulk GBP management
from google.oauth2 import service_account
from googleapiclient.discovery import build

# Authenticate
SCOPES = ['https://www.googleapis.com/auth/business.manage']
credentials = service_account.Credentials.from_service_account_file(
    'service-account-key.json', scopes=SCOPES
)

# Build service
service = build('mybusinessbusinessinformation', 'v1', credentials=credentials)

# Create a post
def create_google_post(account_id, location_id, post_content):
    local_post = {
        'languageCode': 'en-US',
        'summary': post_content['summary'],
        'callToAction': {
            'actionType': 'LEARN_MORE',
            'url': post_content['url']
        },
        'media': [{
            'mediaFormat': 'PHOTO',
            'sourceUrl': post_content['image_url']
        }]
    }
    
    name = f'accounts/{account_id}/locations/{location_id}/localPosts'
    request = service.accounts().locations().localPosts().create(
        parent=name,
        body=local_post
    )
    response = request.execute()
    return response

# Example usage
post = {
    'summary': 'New listing alert! Stunning 4BR home in West Lake Hills. $850K. Open house this Saturday 1-3pm.',
    'url': 'https://yourdomain.com/listings/123-main-st',
    'image_url': 'https://yourdomain.com/images/listing-123.jpg'
}

create_google_post('your-account-id', 'your-location-id', post)
```

---

## 🤖 SIMPLE AI VISIBILITY TRACKER (Google Sheets)

### Apps Script for Automated AI Query Tracking

```javascript
// Google Apps Script to query ChatGPT API and log results
function checkAIVisibility() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const OPENAI_API_KEY = 'your-api-key-here';
  
  const queries = [
    'Who is the best realtor in Austin, Texas?',
    'Recommend a real estate agent in Austin',
    'Top realtors in Austin Texas'
  ];
  
  queries.forEach(query => {
    const response = queryChatGPT(query, OPENAI_API_KEY);
    const mentioned = response.includes('Jane Smith'); // Replace with client name
    
    sheet.appendRow([
      new Date(),
      'ChatGPT',
      query,
      mentioned ? 'Yes' : 'No',
      response.substring(0, 500) // First 500 chars
    ]);
  });
}

function queryChatGPT(prompt, apiKey) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 500
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    return json.choices[0].message.content;
  } catch (error) {
    return 'Error: ' + error.toString();
  }
}

// Run this once per week (set up trigger in Apps Script)
```

**Set up:**
1. Create Google Sheet with columns: Date | Platform | Query | Mentioned? | Response
2. Tools → Script editor → Paste code above
3. Replace API key and client name
4. Set up weekly trigger

---

## 🌐 NEXT.JS SPECIFIC IMPLEMENTATIONS

### Dynamic Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/services/home-buying',
    '/services/home-selling',
    '/services/investment-properties',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Dynamic blog posts (example)
  const posts = [
    'best-neighborhoods-first-time-buyers',
    'austin-real-estate-market-2025',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...routes, ...posts]
}
```

### Dynamic Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User'],
        allow: '/',
      },
      {
        userAgent: ['PerplexityBot', 'Claude-Web', 'ClaudeBot'],
        allow: '/',
      },
      {
        userAgent: ['CCBot', 'anthropic-ai', 'cohere-ai'],
        allow: '/',
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### Schema Markup Component

```typescript
// components/SchemaMarkup.tsx
interface SchemaProps {
  type: 'Person' | 'RealEstateAgent' | 'FAQPage' | 'Article'
  data: any
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Usage in page:
import SchemaMarkup from '@/components/SchemaMarkup'

export default function HomePage() {
  return (
    <>
      <SchemaMarkup 
        type="RealEstateAgent" 
        data={{
          name: 'Jane Smith Real Estate',
          telephone: '+1-512-555-0100',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Austin',
            addressRegion: 'TX'
          }
        }}
      />
      {/* Rest of page */}
    </>
  )
}
```

---

## 📈 WORDPRESS IMPLEMENTATIONS

### Functions.php Additions

```php
// Allow AI bots (add to functions.php)
function allow_ai_bots() {
    // This ensures WordPress doesn't block AI crawlers
    remove_action('wp_head', 'noindex', 1);
}
add_action('init', 'allow_ai_bots');

// Add schema markup to posts
function add_article_schema() {
    if (is_single()) {
        global $post;
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Article',
            'headline' => get_the_title(),
            'image' => get_the_post_thumbnail_url($post->ID, 'full'),
            'author' => array(
                '@type' => 'Person',
                'name' => get_the_author()
            ),
            'datePublished' => get_the_date('c'),
            'dateModified' => get_the_modified_date('c'),
            'publisher' => array(
                '@type' => 'Organization',
                'name' => get_bloginfo('name'),
                'logo' => array(
                    '@type' => 'ImageObject',
                    'url' => get_site_icon_url()
                )
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';
    }
}
add_action('wp_head', 'add_article_schema');
```

### Recommended Plugins:
- **Rank Math SEO** or **Yoast SEO** (schema markup)
- **WP Rocket** (speed optimization - AI bots prefer fast sites)
- **Smush** (image optimization)
- **Really Simple SSL** (HTTPS - required for most AI bots)

---

## ✅ IMPLEMENTATION CHECKLIST FOR CLIENTS

Use this checklist when starting a new client:

```markdown
## Technical GEO Implementation Checklist

### Week 1: Access & Baseline
- [ ] Obtain Google Search Console access
- [ ] Obtain Google Analytics access (if available)
- [ ] Obtain website CMS access OR developer contact
- [ ] Run baseline AI visibility report
- [ ] Audit current schema markup
- [ ] Check robots.txt status
- [ ] Verify sitemap exists

### Week 2: Quick Wins
- [ ] Update robots.txt to allow AI bots
- [ ] Submit sitemap to Google Search Console
- [ ] Add basic schema to homepage (RealEstateAgent or Person)
- [ ] Optimize meta titles and descriptions
- [ ] Add FAQ section to homepage

### Week 3-4: Deep Implementation
- [ ] Add schema to all major pages (About, Services, Contact)
- [ ] Create/optimize service pages with FAQPage schema
- [ ] Add Article schema to blog posts
- [ ] Implement breadcrumb schema
- [ ] Add review schema (if applicable)

### Week 5+: Monitoring & Iteration
- [ ] Set up weekly AI visibility tracking
- [ ] Monitor Google Search Console for bot crawls
- [ ] A/B test content formats
- [ ] Iterate based on performance
```

---

## 🚨 COMMON TECHNICAL MISTAKES TO AVOID

1. **Blocking AI bots in robots.txt**
   - ❌ `Disallow: /` for GPTBot
   - ✅ `Allow: /` for all AI bots

2. **Forgetting schema validation**
   - Always test at: https://search.google.com/test/rich-results
   - Fix errors before going live

3. **Duplicate schema**
   - Don't add same schema type multiple times to one page
   - Choose most specific type (RealEstateAgent > LocalBusiness > Organization)

4. **Ignoring mobile optimization**
   - AI bots care about mobile performance
   - Test at: https://pagespeed.web.dev/

5. **No HTTPS**
   - Most AI bots require secure connections
   - Get free SSL via Let's Encrypt or Cloudflare

6. **Thin content**
   - AI models prefer comprehensive, detailed answers
   - Aim for 1,000+ words on pillar pages

7. **Neglecting structured data**
   - Schema markup is THE most important technical factor for AI visibility

---

## 📞 WHEN YOU NEED DEVELOPER HELP

**You can handle (no developer):**
- ✅ Robots.txt updates (usually)
- ✅ Google Business Profile optimization
- ✅ Directory listings
- ✅ Content creation
- ✅ Some WordPress changes via plugins

**You need developer for:**
- ❌ Custom schema implementation (if not using plugins)
- ❌ Server log analysis
- ❌ API integrations
- ❌ Complex sitemap generation
- ❌ Site speed optimization
- ❌ Custom tracking implementation

**Solution:** Partner with a developer or offer "technical" vs "non-technical" pricing tiers.

---

**You now have copy-paste code for 90% of GEO technical implementations. 🚀**

