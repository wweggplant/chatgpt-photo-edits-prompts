import type { APIRoute } from 'astro';
import { SITE_URL } from '@/consts';
export const GET: APIRoute = () => {
  const siteUrl = SITE_URL;
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap-index.xml

# Specific crawl delays for different bots
User-agent: Googlebot
Crawl-delay: 1

User-agent: Bingbot
Crawl-delay: 2

User-agent: Slurp
Crawl-delay: 3

# Allow all search engines to crawl the site
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /*.tmp$
Disallow: /*.log$
Disallow: /*.apk$

# Allow social media crawlers
User-agent: facebookexternalhit
User-agent: Twitterbot
User-agent: LinkedInBot
User-agent: WhatsApp
Allow: /

# Prevent crawling of dynamic parameters
Disallow: /*?*
Allow: /*?utm_*
Allow: /*?fbclid=*
Allow: /*?gclid=*`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}; 