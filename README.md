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

## 📁 Project Structure

```
nexmart/
├── app/
│   ├── (.)product/[id]/   # Intercepting route (modal)
│   ├── product/[id]/      # Full product page
│   ├── layout.js
│   └── page.js
├── components/            # UI components
├── context/               # Global state
├── hooks/                 # Custom hooks
├── lib/                   # Data fetching helpers
├── Providers/             # Context providers
└── public/
    └── products.json      # Static product data
```

---

## 📦 Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment.
