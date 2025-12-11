/**
 * Curated Image Map for Beyond Walls Site
 * 
 * This module defines the canonical images and their descriptive text
 * for use across all sections of the homepage.
 */

export type Photo = {
  src: string;
  name: string;
  category: 'exterior' | 'sanctuary' | 'youth-community' | 'support';
  title: string;
  alt: string;
};

/**
 * CURATED IMAGE SET
 * Organized by theme with canonical titles and alt text
 */

// EXTERIOR & CAMPUS
export const exteriorPhotos: Photo[] = [
  {
    src: "/Photos/Copy of P2874-RCC-EXT-01_05.png",
    name: "EXT-01",
    category: "exterior",
    title: "Campus Aerial & Entry Plaza",
    alt: "Aerial view of the new Roswell Community Masjid campus showing entry plaza and landscaping",
  },
  {
    src: "/Photos/Copy of P2874-RCC-EXT-02_05.png",
    name: "EXT-02",
    category: "exterior",
    title: "Exterior view of the sanctuary building with central courtyard",
    alt: "Exterior view of the sanctuary building with central courtyard",
  },
  {
    src: "/Photos/Copy of P2874-RCC-EXT-07_05.png",
    name: "EXT-07",
    category: "exterior",
    title: "Sanctuary & Courtyard",
    alt: "Sanctuary building exterior showing courtyard and architectural details",
  },
  {
    src: "/Photos/Copy of P2874-RCC-EXT-09_05.png",
    name: "EXT-09",
    category: "exterior",
    title: "Campus from Street Approach",
    alt: "Street-level view of the new RCM campus as visitors approach",
  },
  {
    src: "/Photos/Copy of P2874-RCC-EXT-12_05.png",
    name: "EXT-12",
    category: "exterior",
    title: "Evening View of Full Campus",
    alt: "Evening rendering showing the full campus with warm lighting",
  },
];

// SANCTUARY & PRAYER
export const sanctuaryPhotos: Photo[] = [
  {
    src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-05_03.png",
    name: "INT-PRAYER-HALL-05",
    category: "sanctuary",
    title: "Main Prayer Hall – Daylight",
    alt: "Prayer hall sanctuary flooded with natural daylight through geometric windows",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-13_03.png",
    name: "INT-PRAYER-HALL-13",
    category: "sanctuary",
    title: "Prayer Hall – View from Rear",
    alt: "Prayer hall sanctuary viewed from the rear showing full space and mihrab",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-06_03.png",
    name: "INT-PRAYER-HALL-06",
    category: "sanctuary",
    title: "Prayer Hall – Side View",
    alt: "Prayer hall sanctuary side perspective with natural lighting",
  },
];

// YOUTH & COMMUNITY
export const youthCommunityPhotos: Photo[] = [
  {
    src: "/Photos/Copy of P2874-RCC-INT-YOUTH CENTER-19_03.png",
    name: "INT-YOUTH-CENTER-19",
    category: "youth-community",
    title: "Youth Center & Lounge",
    alt: "Modern youth center lounge designed for teens and young adults",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-CAFE-07_02.png",
    name: "INT-CAFE-07",
    category: "youth-community",
    title: "Community Cafe & Social Space",
    alt: "Community cafe with comfortable seating for gathering and conversation",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-EVENT HALL-10_03.png",
    name: "INT-EVENT-HALL-10",
    category: "youth-community",
    title: "Multi-Purpose Hall & Events",
    alt: "Flexible multi-purpose event hall for community gatherings and celebrations",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-GYM-01_03.png",
    name: "INT-GYM-01",
    category: "youth-community",
    title: "Recreation & Gymnasium",
    alt: "Full-size gymnasium for basketball, sports, and recreational activities",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-TODDLER MOMMY-20_03.png",
    name: "INT-TODDLER-MOMMY-20",
    category: "youth-community",
    title: "Family & Toddler Lounge",
    alt: "Welcoming space designed for mothers and young children",
  },
];

// SUPPORT SPACES
export const supportPhotos: Photo[] = [
  {
    src: "/Photos/Copy of P2874-RCC-INT-MAIN HALL-02_03.png",
    name: "INT-MAIN-HALL-02",
    category: "support",
    title: "Entry & Welcome Hall",
    alt: "Grand entrance hall welcoming visitors to the new campus",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-WADU-11_03.png",
    name: "INT-WADU-11",
    category: "support",
    title: "Wudu & Preparation Area",
    alt: "Modern wudu facilities with natural materials and good lighting",
  },
  {
    src: "/Photos/Copy of P2874-RCC-INT-OFFICE-16_03.png",
    name: "INT-OFFICE-16",
    category: "support",
    title: "Administrative Offices",
    alt: "Professional administrative offices for campus management",
  },
];

// All photos combined
export const allPhotos: Photo[] = [
  ...exteriorPhotos,
  ...sanctuaryPhotos,
  ...youthCommunityPhotos,
  ...supportPhotos,
];

/**
 * Section-specific image assignments
 * These define which images to use for each section of the homepage
 */
export const sectionImages = {
  // Hero: Campus aerial for impactful first impression
  hero: exteriorPhotos[0], // Campus Aerial & Entry Plaza
  heroSecondary: exteriorPhotos[1], // Sanctuary exterior
  
  // Campus section: Different exterior angles
  campus: {
    main: exteriorPhotos[1], // Sanctuary exterior
    secondary: exteriorPhotos[2], // Sanctuary & Courtyard
  },
  
  // "More Than a Mosque" / Campus Life cards
  campusLife: {
    sanctuary: sanctuaryPhotos[0], // Main Prayer Hall - Daylight
    youth: youthCommunityPhotos[0], // Youth Center & Lounge
    family: youthCommunityPhotos[4], // Family & Toddler Lounge
    community: youthCommunityPhotos[1], // Community Cafe
    multipurpose: youthCommunityPhotos[2], // Multi-Purpose Hall
    gym: youthCommunityPhotos[3], // Recreation & Gymnasium
  },
  
  // Building cards (if used separately)
  buildings: {
    masjid: sanctuaryPhotos[0], // Main Prayer Hall
    youthCenter: youthCommunityPhotos[0], // Youth Center
    familyHub: youthCommunityPhotos[4], // Family & Toddler Lounge
  },
  
  // Support spaces
  support: {
    entry: supportPhotos[0], // Entry & Welcome Hall
    wudu: supportPhotos[1], // Wudu & Preparation Area
    offices: supportPhotos[2], // Administrative Offices
  },
};

/**
 * Gallery images for the Ramp-style slider
 * Mixed selection from all categories for a complete campus story
 */
export const galleryImages: Photo[] = [
  // Exterior (3 images)
  exteriorPhotos[0], // Campus Aerial
  exteriorPhotos[3], // Campus from Street
  exteriorPhotos[4], // Evening View
  
  // Sanctuary (2 images)
  sanctuaryPhotos[0], // Main Prayer Hall - Daylight
  sanctuaryPhotos[1], // Prayer Hall - View from Rear
  
  // Youth & Community (4 images)
  youthCommunityPhotos[0], // Youth Center & Lounge
  youthCommunityPhotos[1], // Community Cafe
  youthCommunityPhotos[2], // Multi-Purpose Hall
  youthCommunityPhotos[3], // Recreation & Gymnasium
  
  // Support (2 images)
  supportPhotos[0], // Entry & Welcome Hall
  supportPhotos[1], // Wudu & Preparation Area
];
