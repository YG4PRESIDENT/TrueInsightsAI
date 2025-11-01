# Team Page Design Guide - Peekaboo AI Style

## Overview
The team page has been redesigned to match the clean, minimal Peekaboo AI style with open layouts and prominent call-to-action buttons.

---

## Key Design Changes Implemented

### 1. **Layout Structure**
- **Removed:** Card borders, shadows, and colored backgrounds
- **Changed:** From boxed cards to open, flowing layout
- **Alignment:** All text is now left-aligned (previously centered)
- **Spacing:** Increased gap between team members from 12 to 20 units for more breathing room

### 2. **Profile Images**
- **Size:** 160px × 160px (w-40 h-40)
- **Shape:** Circular (rounded-full)
- **Style:** Gradient from purple-600 to pink-600
- **Positioning:** Standalone circles with shadow, no background container
- **Initials:** Two letters displayed in white, size 5xl

### 3. **Typography Hierarchy**

#### Name (H2)
- **Size:** text-4xl (previously 3xl)
- **Weight:** font-bold
- **Color:** Black
- **Margin:** 2 units below

#### Role/Title
- **Size:** text-sm (smaller than before)
- **Weight:** font-medium
- **Color:** Gray-500
- **Style:** UPPERCASE with tracking-wide
- **Margin:** 6 units below

#### Bio/Description
- **Size:** text-base
- **Color:** Gray-700
- **Line height:** leading-relaxed
- **Margin:** 8 units below

### 4. **Connect Button**
- **Text:** "Connect with [FirstName]"
- **Style:** Blue to purple gradient (from-blue-600 to-purple-600)
- **Size:** px-8 py-3
- **Shape:** rounded-lg
- **Text:** font-semibold, text-base
- **Effects:** 
  - Hover darkens gradient
  - Scale on hover (105%)
  - Shadow that increases on hover

### 5. **Grid Layout**
- **Columns:** 1 on mobile, 2 on desktop (md:grid-cols-2)
- **Gap:** 20 units (increased from 12)
- **Max width:** 6xl (increased from 5xl for more width)

---

## Updated Team Member Content

### Yahir (J) Gonzalez
**Role:** Co-Founder & CTO

**Bio:** AI search optimization expert specializing in helping businesses dominate AI-driven search results. Passionate about bridging the gap between traditional SEO and the emerging world of Generative Engine Optimization.

---

### Elijah Leach
**Role:** Co-Founder & Sales

**Bio:** Experienced in sales and digital marketing, Elijah has helped real estate brands and other ventures succeed. Now he's bringing that expertise to AI Search visibility.

---

## File Changed
- `app/team/page.tsx` - Complete redesign of team member cards

---

## Design Principles Applied

1. **Minimalism:** Removed unnecessary borders, shadows, and background colors
2. **White Space:** Increased spacing between elements for better readability
3. **Hierarchy:** Clear visual hierarchy through size and weight variations
4. **Consistency:** Maintained your brand's purple-pink gradient theme
5. **Call-to-Action:** Single, prominent connect button per team member
6. **Professionalism:** Clean, modern look suitable for B2B SaaS

---

## If You Need to Make Further Adjustments

### To change button colors:
Look for the "Connect Button" section in `app/team/page.tsx` (around line 89-96) and modify:
```
from-blue-600 to-purple-600
```

### To adjust spacing:
- Between team members: Change `gap-20` in line 57
- Below profile image: Change `mb-8` in line 67
- Below name: Change `mb-2` in line 77
- Below role: Change `mb-6` in line 80
- Below bio: Change `mb-8` in line 83

### To change profile image size:
Look for line 68 and change `w-40 h-40` to your desired size (e.g., `w-48 h-48` for larger)

### To add actual profile photos:
Replace the gradient circle with an `<img>` tag:
```tsx
<img 
  src={member.image} 
  alt={member.name}
  className="w-40 h-40 rounded-full object-cover shadow-lg"
/>
```

---

## Before & After Summary

| Element | Before | After |
|---------|--------|-------|
| Card style | Bordered with shadow | Borderless, open layout |
| Text alignment | Centered | Left-aligned |
| Profile image | In colored container | Standalone circle |
| Contact options | 2 text links (LinkedIn + Email) | 1 button ("Connect with...") |
| Spacing | Compact (gap-12) | Spacious (gap-20) |
| Role display | Large purple text | Small gray uppercase |
| Name size | text-3xl | text-4xl |

---

## Questions or Adjustments?
If you want to tweak any colors, spacing, or text, just let Yahir know which specific element you'd like changed!

