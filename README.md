# Beyond Walls / Vision99 - RCM Website Redesign

A modern, responsive website for the Religious Community Center (RCM) project, showcasing the vision, campus plans, and community impact of the Beyond Walls initiative.

![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC)

## 🌟 Features

- **Fully Responsive Design**: Mobile-first approach with support for all screen sizes (360px - 1536px+)
- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations
- **Interactive Components**: 3D visualizations, image galleries, and dynamic sections
- **Accessibility**: Meets WCAG standards with 44px minimum tap targets
- **Performance Optimized**: Static site generation with Next.js for fast loading times

## 📋 Sections

- **Hero Section**: Eye-catching introduction with campus imagery
- **Vision Section**: Mission and values of the project
- **Campus Section**: Detailed overview of the facility
- **Features Section**: Highlighting youth spaces, community gathering areas, and multi-purpose facilities
- **Gallery Section**: 28 professional photos (10 exterior + 18 interior renders)
- **Impact Section**: Statistics and community impact metrics
- **Timeline Section**: Project phases and milestones
- **FAQ Section**: Common questions and answers
- **Donate Section**: Contribution tiers and donation information
- **Footer**: Contact information and partner logos

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vision99-redesign
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14.0.4** - React framework with SSR/SSG capabilities
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type-safe JavaScript

### Styling & Animation
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Animation library for React
- **Lucide React 0.294.0** - Icon library

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting

## 📱 Mobile Responsiveness

The website is fully optimized for mobile devices with:

- **Breakpoints**: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px)
- **No Horizontal Scroll**: Tested across all major devices
- **Touch-Friendly**: All interactive elements meet 44px minimum height
- **Adaptive Layouts**: Components stack vertically on mobile, expand on larger screens
- **Typography Scaling**: Text sizes adjust appropriately across breakpoints

Devices tested:
- Galaxy S24+
- iPhone 14/15 series
- iPad/Tablet devices
- Desktop screens (up to 4K)

## 📂 Project Structure

```
vision99-redesign/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/
│   ├── 3d/                  # 3D visualization components
│   ├── layout/              # Layout components
│   ├── sections/            # Page sections
│   ├── Navigation.tsx       # Main navigation
│   ├── HeroSection.tsx      # Hero section
│   ├── VisionSection.tsx    # Vision section
│   ├── CampusSection.tsx    # Campus overview
│   ├── FeaturesSection.tsx  # Features section
│   ├── GallerySection.tsx   # Photo gallery
│   ├── ImpactSection.tsx    # Impact metrics
│   ├── TimelineSection.tsx  # Project timeline
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── DonateSection.tsx    # Donation tiers
│   └── Footer.tsx           # Footer component
├── lib/
│   └── imageMap.ts          # Image management utility
├── public/
│   ├── images/              # Static images
│   ├── models/              # 3D model files
│   └── Photos/              # Campus renders (28 images)
├── out/                     # Static export output
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

To export as static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 🎨 Image Assets

The project includes 28 professional architectural renders:

### Exterior Views (10 images)
- Building exteriors from multiple angles
- Campus landscaping
- Architectural highlights

### Interior Views (18 images)
- Prayer Hall
- Event Hall
- Gymnasium
- Youth Center
- Café/Community Space
- Main Hall
- Office Spaces
- Wudu Area
- Toddler/Family Spaces

All images are located in `/public/Photos/` and managed through `/lib/imageMap.ts`.

## 🤝 Partners

The project features partner organizations including:
- IRUSA (Islamic Relief USA)
- CAIR Georgia
- ICNA
- ISNA
- Living Future

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For contribution inquiries, please contact the project maintainers.

## 📞 Support

For questions or support, please reach out through the contact form on the website.

---

**Note**: This website showcases the architectural vision and community impact of the Beyond Walls / Vision99 Religious Community Center project.

