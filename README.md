# Pet Palace - Professional Pet Hotel & Boarding Website

A modern, professional pet hotel and boarding website built with Next.js 15, TypeScript, and Tailwind CSS. This is a complete frontend application showcasing a luxury pet accommodation business.

## 🐕 Features

### Core Functionality
- **Homepage**: Modern hero section with services overview and testimonials
- **Services**: Detailed accommodation options with pricing and features
- **Gallery**: Interactive photo gallery with category filtering and lightbox
- **About**: Company story, team, values, and achievements
- **Contact**: Contact form with business information and FAQ
- **Booking System**: Multi-step booking form with pet details and accommodation selection

### Design & UI/UX
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Interface**: Clean, professional design with smooth animations
- **Accessibility**: WCAG compliant design principles
- **Interactive Elements**: Hover effects, transitions, and user feedback
- **Professional Photography**: High-quality Pexels images throughout

### Technical Features
- **Next.js 15**: Latest Next.js with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Mobile-First**: Responsive design approach
- **Performance Optimized**: Image optimization and fast loading
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pet-hotel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── booking/           # Booking system
│   ├── contact/           # Contact page
│   ├── gallery/           # Photo gallery
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── layout/           # Header, Footer
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── types/                # TypeScript types
└── data/                 # Static data
```

## 🎨 Pages Overview

### Homepage (/)
- Hero section with compelling CTA
- Why choose us features
- Services preview cards  
- Customer testimonials
- Call-to-action section

### Services (/services)
- Accommodation options with detailed features
- Pricing information
- Additional services
- Service comparison

### Gallery (/gallery)
- Interactive photo gallery
- Category filtering
- Lightbox modal for full-size images
- Facility statistics

### About (/about)
- Company story and mission
- Core values and principles
- Team member profiles
- Company timeline/milestones
- Awards and recognition
- Company statistics

### Contact (/contact)
- Contact information (phone, email, address)
- Interactive contact form
- Business hours
- Emergency contact info
- FAQ section
- Map placeholder

### Booking (/booking)
- Multi-step booking process
- Pet information form
- Accommodation selection with dates
- Owner contact details
- Booking summary and confirmation
- Price calculation

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with Pexels
- **Forms**: React Hook Form with Zod validation (ready to implement)
- **Utilities**: clsx, tailwind-merge
- **Development**: ESLint, TypeScript

## 🎯 Design Principles

- **Professional**: Clean, trustworthy design suitable for pet services
- **User-Centric**: Intuitive navigation and user experience
- **Mobile-First**: Responsive design for all devices
- **Performance**: Optimized images and fast loading times
- **Accessibility**: Semantic HTML and ARIA compliance
- **Brand Consistency**: Consistent color scheme and typography

## 🌈 Color Palette

- **Primary**: Blue-600 (#2563eb) - Trust and reliability
- **Secondary**: Purple-700 (#7c3aed) - Premium feeling
- **Success**: Green-600 (#16a34a) - Positive actions
- **Warning**: Yellow-500 (#eab308) - Important notices
- **Error**: Red-600 (#dc2626) - Error states
- **Gray Scale**: Various shades for text and backgrounds

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Development with Turbopack (faster)
npm run build --turbo
```

## 🚀 Deployment

This project can be deployed on various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Other Platforms
The app can be deployed on any platform that supports Next.js applications.

## 📧 Business Features

### Target Audience
- Pet owners who travel for business/vacation
- Professional working couples
- Families seeking premium pet care
- Pet owners wanting luxury accommodations

### Service Categories
- **VIP Suite**: Ultimate luxury experience ($250/night)
- **Luxury Suite**: Premium accommodations ($150/night)  
- **Standard Room**: Comfortable essential care ($80/night)
- **Shared Accommodation**: Social environment ($50/night)
- **Daycare**: Full day activities ($40/day)
- **Extended Stay**: Discounted longer stays ($120/night)

### Additional Services
- Professional grooming
- Veterinary care
- Pet transportation
- 24/7 webcam access
- Special diet plans
- Extra playtime

## 🔮 Future Enhancements

- Backend integration with database
- User authentication system
- Online payment processing
- Real-time availability calendar
- Email notifications
- Admin dashboard
- Review system integration
- Multi-language support
- PWA capabilities

## 📞 Contact Information

**Pet Palace**
- Phone: +1 (555) 123-4567
- Email: info@petpalace.com
- Address: 123 Pet Palace Drive, Beverly Hills, CA 90210, United States
- Hours: Mon-Fri 7AM-8PM, Sat-Sun 8AM-6PM

## 📄 License

This project is created for demonstration purposes. All images are from Pexels and are free to use.

---

**Built with ❤️ for pet lovers everywhere**