// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = process.env.SITE_TITLE ?? import.meta.env.SITE_TITLE;
export const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION ?? import.meta.env.SITE_DESCRIPTION;
export const BASE_URL = new URL(process.env.SITE_URL ?? import.meta.env.SITE_URL ?? 'http://localhost:4321');
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID ?? import.meta.env.GA_TRACKING_ID;
export const SITE_AUTHOR = process.env.SITE_AUTHOR ?? import.meta.env.SITE_AUTHOR;
export const SITE_GENERATOR = process.env.SITE_GENERATOR ?? import.meta.env.SITE_GENERATOR;
