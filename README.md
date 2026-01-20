# Gadget Hunter - Frontend

Gadget Hunter is a modern e-commerce web application designed for browsing and managing the latest gadgets. This repository contains the frontend usage, built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Built with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for a sleek, responsive design.
- **Product Browsing**: View a list of available gadgets with details.
- **Product Details**: Dedicated pages for each product with in-depth information.
- **Dashboard**: Admin-like dashboard for managing products (e.g., Adding new products).
- **Toast Notifications**: Interactive user feedback using [React Toastify](https://fkhadra.github.io/react-toastify/).
- **Carousels**: Product showcases using [Swiper](https://swiperjs.com/).

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS v4, DaisyUI v5
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Language**: JavaScript

## 📂 Project Structure

```bash
src/
├── app/                # App Router pages (Home, Products, Dashboard, etc.)
├── components/         # Reusable UI components (Navbar, Footer, ProductCards, etc.)
└── utils/              # Utility functions and helpers
```

## ⚙️ Installation & Setup

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/fhpantho/Gadget-hunter-frontend.git
    cd gadget-hunter-frontend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env.local` file in the root directory and add the following:

    ```env
    NEXT_PUBLIC_API_URL=https://gadgethunter.vercel.app
    # Or for local development
    # NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4.  **Run the development server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
