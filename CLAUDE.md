# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern Astro-based landing page for ChatGPT Photo Editing Prompts. The site serves as a curated collection of 50+ free, copy-paste prompts for photo editing with ChatGPT/DALL-E, covering 9 categories from skin beauty to background replacement.

## Tech Stack

- **Framework**: Astro v5 with server-side rendering (SSR)
- **Deployment**: Cloudflare Pages with Workers
- **Styling**: Tailwind CSS + Astro components
- **Frontend**: React components for interactive features
- **Package Manager**: pnpm
- **TypeScript**: Strict mode with path aliases (`@/*` → `src/*`)

## Key Architecture

### Directory Structure
```
src/
├── components/          # Astro + React components
│   ├── react/          # Interactive React components
│   │   ├── PromptCard.tsx        # Reusable prompt card component
│   │   ├── CopyButton.tsx        # Copy-to-clipboard functionality
│   │   └── Faq.tsx               # FAQ component
│   └── *.astro         # Static Astro components
├── pages/              # File-based routing
│   ├── index.astro     # Main landing page
│   └── *.astro         # Additional pages
├── data/               # Static data files
│   └── prompts.ts      # 50+ categorized prompts
├── layouts/            # Page layouts
└── styles/             # Global styles
```

### Data Structure
- **Prompt Categories**: 9 categories with 50+ individual prompts
- **TypeScript interfaces**: Strongly typed prompt data
- **Reusable components**: PromptCard, CopyButton for maintainability

### Environment Variables
Required in `.env` or Cloudflare dashboard:
- `SITE_TITLE` - Site title for SEO (ChatGPT Photo Editing Prompts...)
- `SITE_DESCRIPTION` - Meta description
- `SITE_URL` - Production URL (https://promptedit.xyz)
- `SITE_AUTHOR` - Author name
- `GA_TRACKING_ID` - Google Analytics ID (G-V7ERK24WB7)

## Common Commands

### Development
```bash
pnpm dev          # Start dev server on localhost:4321
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm preview:cf   # Preview with Cloudflare Pages simulation
```

### Deployment
```bash
# Cloudflare Pages (automatic on push to main)
# Manual deploy with Wrangler:
pnpm wrangler pages deploy dist
```

### Testing & Quality
```bash
# Type checking
pnpm astro check

# Build verification
pnpm build && pnpm preview
```

## Key Features

1. **Prompt Library**: 50+ categorized prompts with copy functionality
2. **Responsive Design**: Mobile-first with Tailwind
3. **SEO Optimized**: Comprehensive meta tags, FAQ structured data
4. **Interactive Features**: Real-time copy-to-clipboard with feedback
5. **Navigation**: Quick jump links to prompt categories
6. **Analytics**: Google Analytics (G-V7ERK24WB7) tracking

## Development Notes

- **Cloudflare Adapter**: Uses `@astrojs/cloudflare` for edge deployment
- **SSR Enabled**: `output: 'server'` for dynamic features
- **Asset Optimization**: Images in `/public` with optimized loading
- **Path Aliases**: Use `@/*` for imports (configured in tsconfig.json)
- **Original HTML**: Successfully migrated from @public/index.html

## Production Considerations

- **SEO**: Comprehensive meta tags, structured FAQ data
- **Performance**: Static generation + selective hydration
- **Analytics**: Google Analytics tracking (G-V7ERK24WB7)
- **Build Output**: Static assets + edge functions in `dist/`