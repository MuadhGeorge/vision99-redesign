/**
 * Image Map for Beyond Walls / Vision99 Site
 * 
 * This module catalogs all photos in /public/Photos and categorizes them
 * by filename patterns for use across different sections of the site.
 * 
 * Categories:
 * - Exterior (EXT): Hero, Campus sections
 * - Interior (INT): Campus Life, Program cards
 * - Gallery: All images for the gallery section
 */

export type Photo = {
  src: string;
  name: string;
  category: 'exterior' | 'interior' | 'other';
  subCategory?: string;
};

// All photos from /public/Photos (auto-generated from folder scan)
export const allPhotos: Photo[] = [
  // Exterior Images (10 total)
  { src: "/Photos/Copy of P2874-RCC-EXT-01_05.png", name: "EXT-01", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-02_05.png", name: "EXT-02", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-04_05.png", name: "EXT-04", category: "exterior" },
  // Removed EXT-07 (26MB, exceeds Cloudflare Pages 25MB limit) - replaced with EXT-04 in components
  // { src: "/Photos/Copy of P2874-RCC-EXT-07_05.png", name: "EXT-07", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-08_05.png", name: "EXT-08", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-09_05.png", name: "EXT-09", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-10_05.png", name: "EXT-10", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-11_05.png", name: "EXT-11", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-12_05.png", name: "EXT-12", category: "exterior" },
  { src: "/Photos/Copy of P2874-RCC-EXT-14_05.png", name: "EXT-14", category: "exterior" },
  
  // Interior Images (18 total)
  { src: "/Photos/Copy of P2874-RCC-INT-CAFE-07_02.png", name: "INT-CAFE-07", category: "interior", subCategory: "cafe" },
  { src: "/Photos/Copy of P2874-RCC-INT-CAFE-08_02.png", name: "INT-CAFE-08", category: "interior", subCategory: "cafe" },
  { src: "/Photos/Copy of P2874-RCC-INT-EVENT HALL-10_03.png", name: "INT-EVENT-HALL-10", category: "interior", subCategory: "event-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-GYM-01_03.png", name: "INT-GYM-01", category: "interior", subCategory: "gym" },
  { src: "/Photos/Copy of P2874-RCC-INT-GYM-17_03.png", name: "INT-GYM-17", category: "interior", subCategory: "gym" },
  { src: "/Photos/Copy of P2874-RCC-INT-GYM-18_03.png", name: "INT-GYM-18", category: "interior", subCategory: "gym" },
  { src: "/Photos/Copy of P2874-RCC-INT-MAIN HALL-02_03.png", name: "INT-MAIN-HALL-02", category: "interior", subCategory: "main-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-OFFICE-16_03.png", name: "INT-OFFICE-16", category: "interior", subCategory: "office" },
  { src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-05_03.png", name: "INT-PRAYER-HALL-05", category: "interior", subCategory: "prayer-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-06_03.png", name: "INT-PRAYER-HALL-06", category: "interior", subCategory: "prayer-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-13_03.png", name: "INT-PRAYER-HALL-13", category: "interior", subCategory: "prayer-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-14_03.png", name: "INT-PRAYER-HALL-14", category: "interior", subCategory: "prayer-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-PRAYER HALL-15_03.png", name: "INT-PRAYER-HALL-15", category: "interior", subCategory: "prayer-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-SHOE HALL-03_03.png", name: "INT-SHOE-HALL-03", category: "interior", subCategory: "shoe-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-SHOE HALL-04_03.png", name: "INT-SHOE-HALL-04", category: "interior", subCategory: "shoe-hall" },
  { src: "/Photos/Copy of P2874-RCC-INT-TODDLER MOMMY-20_03.png", name: "INT-TODDLER-MOMMY-20", category: "interior", subCategory: "toddler" },
  { src: "/Photos/Copy of P2874-RCC-INT-WADU-11_03.png", name: "INT-WADU-11", category: "interior", subCategory: "wudu" },
  { src: "/Photos/Copy of P2874-RCC-INT-YOUTH CENTER-19_03.png", name: "INT-YOUTH-CENTER-19", category: "interior", subCategory: "youth" },
];

// Categorized arrays for easy access
export const exteriorPhotos = allPhotos.filter(p => p.category === 'exterior');
export const interiorPhotos = allPhotos.filter(p => p.category === 'interior');

// Hero candidates: Exterior shots work best for hero
export const heroCandidates = exteriorPhotos.length > 0 ? exteriorPhotos : allPhotos;

// Campus section candidates: Different exterior shots
export const campusCandidates = exteriorPhotos.length > 1 ? exteriorPhotos : allPhotos;

// Interior by sub-category for Campus Life cards
export const cafePhotos = allPhotos.filter(p => p.subCategory === 'cafe');
export const gymPhotos = allPhotos.filter(p => p.subCategory === 'gym');
export const prayerHallPhotos = allPhotos.filter(p => p.subCategory === 'prayer-hall');
export const youthPhotos = allPhotos.filter(p => p.subCategory === 'youth');
export const eventHallPhotos = allPhotos.filter(p => p.subCategory === 'event-hall');
export const toddlerPhotos = allPhotos.filter(p => p.subCategory === 'toddler');
export const mainHallPhotos = allPhotos.filter(p => p.subCategory === 'main-hall');

// Gallery: All photos for the gallery section
export const galleryPhotos = allPhotos;

/**
 * Specific image selections for each section
 * These are the recommended images based on filename analysis
 */
export const sectionImages = {
  // Hero: Main exterior shot
  hero: heroCandidates[0],
  
  // Campus section: Different exterior angle
  campus: {
    main: campusCandidates[1] ?? campusCandidates[0],
    secondary: campusCandidates[2] ?? campusCandidates[0],
  },
  
  // Campus Life / Features cards
  campusLife: {
    // Youth & Family: Use youth center or toddler image
    youth: youthPhotos[0] ?? toddlerPhotos[0] ?? interiorPhotos[0],
    // Community Gathering: Use cafe or event hall
    community: cafePhotos[0] ?? eventHallPhotos[0] ?? interiorPhotos[1],
    // Pavilion / Prayer: Use main hall or prayer hall
    pavilion: mainHallPhotos[0] ?? prayerHallPhotos[0] ?? interiorPhotos[2],
  },
  
  // Building cards in Campus section
  buildings: {
    // Masjid & Sanctuary: Prayer hall images
    masjid: prayerHallPhotos[0] ?? interiorPhotos[0],
    // Youth Center: Youth or gym images
    youthCenter: youthPhotos[0] ?? gymPhotos[0] ?? interiorPhotos[1],
    // Family Hub: Cafe, event hall, or toddler images
    familyHub: eventHallPhotos[0] ?? cafePhotos[0] ?? toddlerPhotos[0] ?? interiorPhotos[2],
  },
};

/**
 * Alt text generators for accessible image descriptions
 */
export const getAltText = {
  exterior: (name: string) => `Exterior rendering of the new Roswell Community Masjid campus - ${name}`,
  interior: (subCategory?: string) => {
    switch (subCategory) {
      case 'cafe': return 'Interior cafe and community gathering space in the new RCM campus';
      case 'gym': return 'Gymnasium and recreation facility in the new RCM campus';
      case 'prayer-hall': return 'Prayer hall sanctuary in the new RCM campus';
      case 'youth': return 'Youth center space designed for teens and young adults';
      case 'event-hall': return 'Multi-purpose event hall for community gatherings';
      case 'toddler': return 'Family-friendly space for mothers and toddlers';
      case 'main-hall': return 'Main entrance and gathering hall of the new campus';
      case 'wudu': return 'Wudu (ablution) facilities in the new campus';
      case 'shoe-hall': return 'Welcoming entrance area with shoe storage';
      case 'office': return 'Administrative offices in the new RCM campus';
      default: return 'Interior view of the new Roswell Community Masjid campus';
    }
  },
  gallery: (photo: Photo) => {
    if (photo.category === 'exterior') {
      return `Exterior rendering of the new RCM campus`;
    }
    return getAltText.interior(photo.subCategory);
  },
};

