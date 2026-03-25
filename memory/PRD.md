# Thalassery Restaurant Website - Product Requirements Document

## Project Overview
**Project Name:** Thalassery Restaurant Website  
**Type:** Restaurant Website with Online Ordering  
**Tech Stack:** React, FastAPI, MongoDB  
**Started:** January 2, 2025  
**Status:** Frontend MVP Complete

## Original Problem Statement
Build a modern, responsive restaurant website for Thalassery Restaurant / Thalassery Kitchen, a family-friendly Malabar cuisine restaurant chain based in Bangalore (Kothanur & Yelahanka) and Bilikere, Karnataka.

### Brand Details
- **Name:** Thalassery Restaurant / Thalassery Kitchen
- **Cuisine:** Authentic Russian and Kerala cuisine (Updated from Malabar)
- **Established:** November 2022
- **Price Range:** ₹30–₹400 per person
- **Type:** Family-friendly, dine-in & takeaway
- **Tagline:** "Embark on a flavourful journey through authentic Russian cuisine"

## Design Guidelines Applied
- **Color Palette:** Lime-yellow (#ECEC75) primary with black (#0f172a) for text and buttons
- **Typography:** Crimson Text (serif) for headings, sans-serif for body
- **Style:** Clean, modern with generous spacing, elegant cards, smooth transitions

## Implemented Features (Frontend with Mock Data)

### Pages Completed
1. **Home Page** ✅
   - Hero section with Russian flavors tagline
   - Feature cards (Authentic Taste, Value for Money, Open Daily, Family Friendly)
   - About section with story
   - Popular dishes showcase (3 items)
   - Customer reviews section (3 reviews)
   - Locations preview
   - CTA section

2. **Menu Page** ✅
   - Search functionality
   - Category filters (All, Biryani, Grilled, Seafood, Curry, Rice, Meals, Bread, Beverages, South Indian)
   - 12 menu items with images, descriptions, prices
   - Add to cart functionality
   - "Most Ordered" and "Chef's Special" badges
   - Empty state handling

3. **Locations Page** ✅
   - 3 location cards (Kothanur, Yelahanka, Bilikere)
   - Google Maps integration
   - Click to select location
   - Get directions buttons
   - Table reservation form (Name, Phone, Date, Time, Guests, Location, Special Requests)
   - Address and contact details

4. **Gallery Page** ✅
   - Filter options (All, Food, Restaurant)
   - 6+ high-quality images
   - Lightbox/modal view for full-size images
   - Hover effects with image titles
   - CTA section

5. **Order Online Page** ✅
   - Shopping cart with localStorage
   - Add/remove items, quantity management
   - Delivery/Pickup toggle
   - Location selector for pickup
   - Price breakdown (Subtotal, Delivery Fee, Tax)
   - Checkout modal with form
   - Empty cart state
   - Order summary sticky sidebar

6. **Contact Us Page** ✅
   - Contact information cards (Phone, Email, Location, Hours)
   - Contact form (Name, Email, Phone, Subject, Message)
   - Location selector with map integration
   - FAQ section (4 common questions)
   - CTA section with Call and WhatsApp buttons

### Components Created
- **Header.jsx** - Fixed header with navigation, cart counter, mobile menu
- **Footer.jsx** - Multi-column footer with links, newsletter, social media
- **mock.js** - Mock data for menu items, locations, reviews, gallery

### Features Implemented
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Shopping cart with localStorage
- ✅ Toast notifications (sonner)
- ✅ Smooth scrolling and transitions
- ✅ Image optimization
- ✅ Form validation
- ✅ Category filtering
- ✅ Search functionality
- ✅ Google Maps integration
- ✅ Mobile-friendly navigation
- ✅ Hover effects and micro-animations

## Mock Data Structure

### Menu Items (12 dishes)
- Chicken Biryani, Peri Peri Alfham, Kada Fry
- Pomfret Curry, Anjali Curry, Pepper Chicken
- Jeera Rice, Kerala Meals, Fish Moilee
- Malabar Parotta, Sulaimani Tea, Masala Dosa

### Locations (3 branches)
- Kothanur, Bangalore
- Yelahanka, Bangalore
- Bilikere, Karnataka

### Reviews (6 customer reviews)
- Average rating: 3.8 stars

### Gallery (6 images)
- Food photography and restaurant ambiance

## User Personas

### Primary Users
1. **Local Families** - Looking for authentic Russian/Kerala cuisine in Bangalore
2. **Food Enthusiasts** - Seeking traditional flavors and authentic recipes
3. **Office Workers** - Need quick online ordering for lunch/dinner
4. **Event Organizers** - Looking for catering services

## Technical Architecture

### Frontend (Completed)
- React 19.0.0
- React Router v7 for navigation
- Shadcn UI components
- Tailwind CSS for styling
- Axios for API calls (prepared)
- localStorage for cart persistence

### Backend (To Be Implemented)
- FastAPI with Python
- MongoDB with Motor (async driver)
- RESTful API design

### Environment
- Frontend: localhost:3000 (development)
- Backend: localhost:8001 (via supervisor)
- Database: MongoDB via MONGO_URL env variable

## API Contracts (To Be Implemented)

### Menu APIs
```
GET /api/menu - Get all menu items
GET /api/menu/:id - Get single menu item
POST /api/menu - Create menu item (admin)
PUT /api/menu/:id - Update menu item (admin)
DELETE /api/menu/:id - Delete menu item (admin)
```

### Order APIs
```
POST /api/orders - Create new order
GET /api/orders/:id - Get order details
GET /api/orders/user/:userId - Get user orders
PUT /api/orders/:id/status - Update order status (admin)
```

### Reservation APIs
```
POST /api/reservations - Create table reservation
GET /api/reservations/:id - Get reservation details
PUT /api/reservations/:id - Update reservation
DELETE /api/reservations/:id - Cancel reservation
```

### Contact APIs
```
POST /api/contact - Submit contact form
GET /api/contact - Get all contact submissions (admin)
```

### Review APIs
```
GET /api/reviews - Get all reviews
POST /api/reviews - Submit new review
GET /api/reviews/location/:locationId - Get reviews by location
```

## Database Schema (To Be Implemented)

### Collections
1. **menu_items** - Menu items with categories, prices, images
2. **orders** - Customer orders with items, totals, status
3. **reservations** - Table reservations with customer details
4. **reviews** - Customer reviews and ratings
5. **locations** - Restaurant locations (if dynamic)
6. **contact_submissions** - Contact form submissions

## Prioritized Backlog

### P0 (Critical - Next Phase)
- [ ] Backend API development
- [ ] MongoDB schema implementation
- [ ] Frontend-backend integration
- [ ] Remove mock data, connect to real APIs
- [ ] Order management system
- [ ] Admin authentication

### P1 (High Priority)
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Email notifications for orders/reservations
- [ ] SMS notifications
- [ ] Admin dashboard for orders/reservations
- [ ] Real-time order tracking
- [ ] Image upload for menu items (admin)

### P2 (Medium Priority)
- [ ] User authentication and accounts
- [ ] Order history for users
- [ ] Loyalty rewards program
- [ ] Promo codes and discounts
- [ ] WhatsApp integration for orders
- [ ] Social media feed integration
- [ ] Review moderation system

### P3 (Nice to Have)
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced analytics dashboard
- [ ] Inventory management
- [ ] Staff management system
- [ ] Customer feedback surveys

## Next Action Items

### Immediate Next Steps
1. **Backend Development**
   - Set up MongoDB models
   - Create API endpoints for menu, orders, reservations, contact
   - Implement CRUD operations
   - Add authentication middleware

2. **Frontend Integration**
   - Replace mock.js with API calls
   - Add loading states
   - Implement error handling
   - Add retry logic for failed requests

3. **Testing**
   - Call testing_agent_v3 for backend testing
   - End-to-end testing of order flow
   - Form validation testing
   - Mobile responsiveness testing

4. **Enhancements**
   - Real-time order tracking
   - Payment integration
   - Email/SMS notifications

## Change Log

### January 2, 2025
- ✅ Created initial frontend with 5 pages
- ✅ Implemented shopping cart with localStorage
- ✅ Added mock data for menu, locations, reviews
- ✅ Applied design guidelines (lime-yellow theme)
- ✅ Updated hero text from "Malabar" to "Russian"
- ✅ Added Contact Us page with form and FAQ
- ✅ Mobile-responsive design completed

## Success Metrics (To Be Tracked)

### User Engagement
- Page views per session
- Time spent on site
- Bounce rate
- Cart abandonment rate

### Business Metrics
- Online orders per day
- Average order value
- Reservation conversion rate
- Contact form submissions
- Customer satisfaction ratings

## Notes
- All frontend features currently use mock data stored in localStorage
- Backend integration required for production deployment
- Payment gateway integration pending user selection
- Email/SMS service integration pending
