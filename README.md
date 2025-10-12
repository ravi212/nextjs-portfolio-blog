# Next.js Portfolio & Blog

A modern portfolio and blog application built with Next.js 14, TypeScript, Tailwind CSS, MongoDB, and featuring a full admin panel.

## Features

- 🎨 Modern UI/UX with Tailwind CSS and Framer Motion animations
- 🌗 Light/Dark mode support 
- 📱 Fully responsive design
- 🔐 Admin panel with authentication
- 📝 Project/Blog management system
- 💾 MongoDB integration
- 📧 Contact form with reCAPTCHA
- 📊 Google Analytics integration
- 🚀 SEO optimized
- 🖼️ Image upload functionality
- 🎯 Server-side rendering and API routes

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Ant Design, Material UI
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js
- **Forms:** Formik with Yup validation
- **Analytics:** Google Analytics
- **Animations:** Framer Motion
- **Icons:** Material Icons, React Icons

## Prerequisites

- Node.js 18+ 
- MongoDB database
- Google reCAPTCHA keys
- Google Analytics ID (optional)

## Environment Variables

Create `.env` file in root directory:

```env
MONGODB_URI=
NEXT_AUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_MEASUREMENT_ID=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
CAPTCHA_SECRET_KEY=
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ravi212/nextjs-portfolio-blog.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── app/         # App router pages
│   ├── components/  # React components
│   ├── config/      # Configuration files
│   ├── constants/   # Constants and static data
│   ├── context/     # React context
│   ├── enum/        # TypeScript enums
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Server actions
│   ├── models/      # MongoDB models
│   ├── types/       # TypeScript types
│   └── utils/       # Utility functions
```

## Features in Detail

### Admin Panel
- Protected routes with NextAuth.js
- Project management (CRUD operations)
- Message management
- Category management
- Image upload functionality

### Portfolio
- Responsive layout
- Theme switching
- Animated page transitions
- Project showcase
- Skills section
- Contact form with validation

### Blog (Coming Soon)
- Category-based organization
- Rich text editor
- Featured posts
- Tag system

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Ravi Raina