# Test Plan: Domcy Coffee App (Agentic QA)

## 1. Overview

Target Application: Domcy Coffee (Local)
Objective: Ensure critical user flows, UI aesthetics, and edge cases function correctly using Antigravity's Agentic Testing.

## 2. Test Scenarios

### A. Core Ordering Flow (The "Hungry User") - _Covered in `order.spec.ts`_

- **Goal:** Verify a user can complete a standard order.
- **Steps:**
  1. Landing Page -> Scroll to Menu.
  2. Add item to cart.
  3. Open Cart -> Adjust Quantity (optional).
  4. Checkout -> Fill details (Name, Table, etc.).
  5. Confirm via WhatsApp.
- **Expected Result:** WhatsApp link is generated with correct order details.

### B. Cart Management (The "Indecisive User") - _New Target_

- **Goal:** Verify cart logic handles additions, removals, and empty states gracefully.
- **Steps:**
  1. Add item -> Verify Badge Count (1).
  2. Add same item again -> Verify Badge Count (1) but Qty (2) inside.
  3. Remove item from Cart Modal.
  4. Verify "Cart is Empty" UI triggers.
- **Expected Result:** Cart badge updates accurately; Empty state is visually pleasing.

### C. Mobile Responsiveness (The "On-the-Go User") - _New Target_

- **Goal:** Ensure mobile-specific features work.
- **Steps:**
  1. Simulate Mobile Viewport (iPhone 12/13).
  2. Scroll down -> Verify `FloatingOrderButton` appears.
  3. Verify standard Navbar pills are hidden.
  4. Open Hamburger Menu.
- **Expected Result:** Mobile elements appear/disappear based on scroll/viewport.

### D. Visual Regression (The "Vibe Check")

- **Goal:** Maintain design consistency (Soft Corners).
- **Checks:**
  - Navbar Border Radius.
  - Modal Border Radius.
  - Button Consistency.

## 3. Automation Strategy

- **Tools:** Playwright (E2E), Vitest (Unit), Antigravity Browser Agent (Visual).
- **Execution:** Auto-run on code changes.
