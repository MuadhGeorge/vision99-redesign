/**
 * Application configuration
 * 
 * Environment variables can be used to override these defaults.
 * For email, set CONTACT_EMAIL in your .env.local file.
 */

export const config = {
  // Contact form destination email
  // Override with CONTACT_EMAIL env variable
  contactEmail: process.env.CONTACT_EMAIL || 'muadh308@gmail.com',
  
  // Organization info
  organization: {
    name: 'Roswell Community Masjid',
    shortName: 'RCM',
    email: 'info@roswellmasjid.org',
    phone: '(770) 817-8677',
    location: 'Roswell, Georgia',
  },
}

