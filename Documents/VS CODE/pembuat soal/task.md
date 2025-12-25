# Task Checklist - Domcy Coffee Revamp

## ✅ Phase 1: Foundation (COMPLETED)
- [x] **Design Tokens**: Update `tailwind.config.js` with new colors (Amber, Toffee).
- [x] **Pre-Order Data**: Create `MenuItemRow` with status badges.
- [x] **Cart Logic**: Implement `CartContext` with localStorage.
- [x] **Checkout UI**: create `PreOrderModal` matched to design.
- [x] **Events Data**: Separate `events.ts`.
- [x] **Events UI**: Create `LiveMusicSection` with glassmorphism.
- [x] **Reservation**: Create `ReservationModal` with form.

---

## ✅ Phase 2: Trust & Social Proof (COMPLETED)

### 1. Google Reviews Showcase
- [x] **Setup**: Create folder `src/components/features/SocialProof`.
- [x] **Data**: Create `src/data/mock-reviews.ts` with interface and 6 dummy reviews.
- [x] **Component**: Create `ReviewCard.tsx` (Single card UI).
    - [x] *Check*: Display avatar, name, stars, date?
- [x] **Component**: Create `ReviewsSection.tsx` (Container).
    - [x] *Check*: Is the "Stats Banner" (4.8 Stars) visible?
    - [x] *Check*: Do cards display in a grid/masonry?
- [x] **Integration**: Import and add `ReviewsSection` to `App.tsx`.

### 2. Instagram Feed Integration
- [x] **Data**: Create `src/data/mock-instagram.ts` with 6 dummy posts.
- [x] **Component**: Create `InstagramCard.tsx`.
    - [x] *Check*: Does it look like a Polaroid?
    - [x] *Check*: Does hover show the heart icon?
- [x] **Component**: Create `InstagramSection.tsx`.
    - [x] *Check*: Logic for 3 columns on desktop / 2 on mobile.
    - [x] *Check*: Is the "Follow" button using the Amber color?
- [x] **Integration**: Add `InstagramSection` to `App.tsx`.

### 3. "Why Domcy?" Section
- [x] **Data**: Create `src/data/features-data.ts` (Pre-order, Wifi, etc.).
- [x] **Component**: Create `FeatureCard.tsx`.
    - [x] *Check*: Neumorphism style (soft shadows).
- [x] **Component**: Create `WhyDomcySection.tsx`.
- [x] **Integration**: Add `WhyDomcySection` to `App.tsx`.

---

## 💎 Phase 3: Polish & Delight (NEXT)

### Mobile Optimizations
- [ ] **Menu Categories**: Refactor `MenuSection` to have horizontal scrollable pills.
- [ ] **Floating Nav**: Create `MobileFloatingNav` sticky component.
- [ ] **Lazy Loading**: Update all images to use `loading="lazy"`.

### Micro-interactions
- [ ] **Loading**: Create `LoadingSkeleton` component.
- [ ] **Badges**: Add "Spicy" or "Vegan" badges to `MenuItemRow`.
- [ ] **Animations**: Add framer-motion stagger effects to lists.

### SEO & Launch
- [ ] **SEO**: Create `SEOHead` component.
- [ ] **Meta**: Add open-graph tags to `index.html`.
- [ ] **Final QA**: Run Lighthouse audit.
