# Vision99 - Roswell Community Masjid Campus

A modern, immersive 3D website experience for the Vision99 project - Roswell Community Masjid's new campus development.

## 🌟 Features

- **Immersive 3D Experience**: Interactive 3D visualization of the masjid campus built with Three.js
- **Scroll-Based Timeline**: Watch the campus "build" as you scroll through construction phases
- **Modern Design**: Clean, spiritual aesthetic with emerald green and warm sand color palette
- **Responsive**: Fully responsive design optimized for desktop, tablet, and mobile
- **Performance Optimized**: Lazy loading, optimized 3D rendering, and WebGL fallbacks
- **Accessible**: ARIA labels, good color contrast, and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js via React Three Fiber + Drei
- **Animations**: Framer Motion
- **Fonts**: Cormorant Garamond (display) + Source Sans 3 (body)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vision99-redesign/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── 3d/
│   │   ├── MasjidModel.tsx  # Procedural 3D masjid model
│   │   ├── SceneDirector.tsx # Camera & lighting control
│   │   ├── Hero3DScene.tsx  # Hero section 3D canvas
│   │   └── Timeline3D.tsx   # Scroll-synced timeline
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── VisionSection.tsx
│   │   ├── LivingBuildingSection.tsx
│   │   ├── CommunitySection.tsx
│   │   └── GetInvolvedSection.tsx
│   └── layout/
│       ├── SiteHeader.tsx
│       └── SiteFooter.tsx
├── public/
│   ├── models/              # Place GLB models here
│   └── images/              # Place images here
└── ...config files
```

## 🎨 Customization

### Adding the Real 3D Model

1. Export your masjid model as a `.glb` file
2. Place it at `public/models/vision99-campus.glb`
3. Update `MasjidModel.tsx` to use `useGLTF` from `@react-three/drei`:

```tsx
import { useGLTF } from '@react-three/drei'

export default function MasjidModel({ phase }) {
  const { scene } = useGLTF('/models/vision99-campus.glb')
  // ... rest of implementation
}
```

### Updating Content

Look for `TODO` comments throughout the codebase marking where to:
- Replace placeholder text with final Vision99 copy
- Add actual images
- Connect donation buttons to payment system
- Update contact information

### Color Palette

The color palette is defined in `tailwind.config.ts`:
- **Primary**: Emerald green (`emerald-700`: #047857)
- **Background**: Sand/beige tones (`sand-50`: #fdfcfa)
- **Accent**: Warm wood brown (`wood-brown`: #8b5a2b)

## 📱 Responsive Behavior

- **Desktop**: Full 3D experience with orbit controls and auto-rotation
- **Tablet**: Simplified 3D with limited controls
- **Mobile**: Static or minimal 3D movement, optimized performance

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- WebGL fallback for unsupported browsers
- Reduced motion support via CSS `prefers-reduced-motion`

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
# Example: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Example: Donation API
NEXT_PUBLIC_DONATION_API_URL=https://your-donation-api.com
```

## 📄 License

This project is proprietary to Roswell Community Masjid.

## 🤝 Contributing

For contributions or questions, contact the RCM development team.

---

Built with ❤️ for the North Fulton Muslim Community

