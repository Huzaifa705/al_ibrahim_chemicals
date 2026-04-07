import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*'], // Prevent Google from indexing your API routes
    },
    sitemap: 'https://alibrahimgroupofcompanies.com/sitemap.xml',
  }
}