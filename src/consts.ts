// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = process.env.PUBLIC_SITE_TITLE ?? import.meta.env.PUBLIC_SITE_TITLE;
export const SITE_DESCRIPTION = process.env.PUBLIC_SITE_DESCRIPTION ?? import.meta.env.PUBLIC_SITE_DESCRIPTION;
export const BASE_URL = new URL(process.env.PUBLIC_SITE_URL ?? import.meta.env.PUBLIC_SITE_URL ?? 'http://localhost:4321');
export const GA_TRACKING_ID = process.env.PUBLIC_GA_TRACKING_ID ?? import.meta.env.PUBLIC_GA_TRACKING_ID;
export const SITE_AUTHOR = process.env.PUBLIC_SITE_AUTHOR ?? import.meta.env.PUBLIC_SITE_AUTHOR;
export const SITE_GENERATOR = process.env.PUBLIC_SITE_GENERATOR ?? import.meta.env.PUBLIC_SITE_GENERATOR;
