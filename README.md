# Miles With Nature - Modern Trekking Website

A production-ready Next.js 14 (App Router) trekking application with a clean architecture, server-side logic, and responsive design.

## Features

- **Next.js 14+ App Router**: Modern routing with server components and layouts.
- **Server Actions**: Clean form handling and administration logic without client-side API calls.
- **Zod Validation**: Robust schema-based validation for all forms.
- **Admin Dashboard**: Secure area for managing treks, blogs, and inquiries (Protected by Server Actions).
- **Responsive Design**: Mobile-first approach using Tailwind CSS and Radix UI.
- **Dynamic Content**: Trek and blog detail pages generated dynamically from mock data.
- **Performance Optimized**: Using `next/image` for image optimization and optimized fonts.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui (Radix UI + Lucide)
- **Validation**: Zod
- **Auth**: Custom logic with Server Actions and Cookies (No database required)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env` file and configure your admin credentials (see `.env.example`).

3. Run the development server:
   ```bash
   npm run dev
   ```

### Admin Access

- **URL**: `/admin`
- **Default Credentials**: admin@mileswithnature.com / admin123 (if using default .env)

## Architecture

The project follows a clean layered structure:

1. **Presentation Layer**: UI components, pages, and global layouts in `app/` and `components/`.
2. **Application Layer**: Server Actions (`lib/actions`) for handling business logic and form submissions.
3. **Infrastructure**: Environment variables and site configuration.

## Deployment

This project is optimized for deployment on **Vercel**.

---

Built with ?? for mountain lovers.
