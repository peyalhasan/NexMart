# 🛒 NexMart

A modern e-commerce product listing app built with **Next.js 14**, featuring intercepting routes, modal product previews, category filtering, search, and pagination.


🔗 **Live Demo:** [nex-mart-7u42.vercel.app](https://nex-mart-7u42.vercel.app)  
📁 **GitHub:** [github.com/peyalhasan/NexMart](https://github.com/peyalhasan/NexMart)

---

## ✨ Features

- 🔍 Product search and category filtering
- 🗂️ Pagination
- 🪟 Modal product preview using Next.js Intercepting Routes
- 📄 Full product detail page
- ⚡ Static data from local JSON (no external API dependency)
- 💅 Styled with Tailwind CSS

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- React Context API


## 📁 Project Structure

```
nexmart/
│
├── app/
│   ├── (.)product/[id]/        # Intercepting route — opens product in modal
│   │   ├── page.js             # Modal page
│   │   ├── default.js          # Default UI when not intercepted
│   │   └── not-found.js        # 404 inside modal
│   │
│   ├── product/[id]/           # Full product detail page
│   │   ├── page.jsx
│   │   ├── loading.js          # Loading skeleton
│   │   └── error.js            # Error boundary
│   │
│   ├── layout.js               # Root layout with Navbar, Footer, FilterProvider
│   ├── page.js                 # Home page — product listing
│   ├── loading.js              # Global loading state
│   ├── error.js                # Global error boundary
│   └── not-found.js            # Global 404 page
│
├── components/
│   ├── Navbar.jsx              # Top navigation bar
│   ├── Footer.jsx              # Footer
│   ├── Hero.jsx                # Hero banner
│   ├── Modal.jsx               # Modal wrapper (used by intercepting route)
│   ├── ProductList.jsx         # Grid of product cards
│   ├── ProductCard.jsx         # Single product card
│   ├── ProductDetails.jsx      # Full product detail view
│   ├── FilterBar.jsx           # Category filter buttons
│   ├── Search.jsx              # Search input
│   ├── Pagination.jsx          # Page navigation
│   ├── ProductSkeleton.jsx     # Loading skeleton for cards
│   ├── NotFount.jsx            # Custom not found UI
│   ├── Error.jsx               # Custom error UI
│   └── productDetails/
│       ├── ProductImage.jsx    # Product image section
│       ├── ProductInfo.jsx     # Title, price, rating
│       ├── Order.jsx           # Add to cart / delivery info
│       └── InfoBar.jsx         # Extra product info bar
│
├── Providers/
│   └── FilterProvider.jsx      # Wraps app with filter context
│
├── context/
│   └── index.js                # React Context definition
│
├── hooks/
│   ├── useFilter.js            # Hook for category/search filtering
│   └── useProducts.js          # Hook for accessing products
│
├── lib/
│   └── index.js                # Data helpers (reads from products.json)
│
└── public/
    └── products.json           # Static product data (20 products)
```


---


## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/peyalhasan/NexMart.git
cd NexMart

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment.
