// Photo editing prompts data structure
export interface Prompt {
  id: string;
  text: string;
  category: string;
}

export interface PromptCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  count: number;
  prompts: Prompt[];
}

export const promptCategories: PromptCategory[] = [
  {
    id: 'beauty',
    title: 'Skin & Beauty',
    emoji: '🍑',
    description: '5 ChatGPT Photo Editing Prompts for Skin & Beauty',
    count: 5,
    prompts: [
      { id: 'beauty-1', text: 'Remove blemishes, smooth skin tone, preserve natural pores', category: 'beauty' },
      { id: 'beauty-2', text: 'Brighten portrait lighting with soft studio glow', category: 'beauty' },
      { id: 'beauty-3', text: 'Reduce dark circles, keep eye texture realistic', category: 'beauty' },
      { id: 'beauty-4', text: 'Whiten teeth naturally, avoid over-saturation', category: 'beauty' },
      { id: 'beauty-5', text: 'Add subtle freckles, sun-kissed look', category: 'beauty' }
    ]
  },
  {
    id: 'removal',
    title: 'Object Removal',
    emoji: '🚫',
    description: '5 ChatGPT Photo Editing Prompts for Object Removal',
    count: 5,
    prompts: [
      { id: 'removal-1', text: 'Remove background tourists, reconstruct cobblestone street', category: 'removal' },
      { id: 'removal-2', text: 'Erase overhead power lines, fill with clear blue sky', category: 'removal' },
      { id: 'removal-3', text: 'Delete watermark, rebuild matching sand texture', category: 'removal' },
      { id: 'removal-4', text: 'Replace plastic bag with blooming wildflowers', category: 'removal' },
      { id: 'removal-5', text: 'Swap broken traffic light for modern LED signal', category: 'removal' }
    ]
  },
  {
    id: 'backgrounds',
    title: 'Backgrounds',
    emoji: '🏞️',
    description: '5 ChatGPT Photo Editing Prompts for Backgrounds',
    count: 5,
    prompts: [
      { id: 'bg-1', text: 'Replace background with golden-hour beach, warm pastel tones', category: 'backgrounds' },
      { id: 'bg-2', text: 'Swap backdrop to neon cyberpunk alley, magenta-cyan lights', category: 'backgrounds' },
      { id: 'bg-3', text: 'Flat pastel beige studio background, soft 45° shadow', category: 'backgrounds' },
      { id: 'bg-4', text: 'Place subject inside minimalist Japanese tatami room', category: 'backgrounds' },
      { id: 'bg-5', text: 'Move subject to misty pine forest with back-lit fog', category: 'backgrounds' }
    ]
  },
  {
    id: 'filters',
    title: 'Stylized Filters',
    emoji: '🎨',
    description: '10 ChatGPT Photo Editing Prompts for Stylized Filters',
    count: 10,
    prompts: [
      { id: 'filter-1', text: 'Convert to watercolor painting, soft washes', category: 'filters' },
      { id: 'filter-2', text: 'Apply cyberpunk neon grade, strong magenta-teal glow', category: 'filters' },
      { id: 'filter-3', text: 'Turn into oil-painting texture, visible brush strokes', category: 'filters' },
      { id: 'filter-4', text: 'Transform into 8-bit pixel-art, 64×64 vibe', category: 'filters' },
      { id: 'filter-5', text: 'Render in Pixar-style illustration, glossy eyes', category: 'filters' },
      { id: 'filter-6', text: 'High-contrast black-and-white darkroom look', category: 'filters' },
      { id: 'filter-7', text: 'Apply vintage film grain, light leaks & warm fade', category: 'filters' },
      { id: 'filter-8', text: 'Claymation stop-motion style, visible sculpt marks', category: 'filters' },
      { id: 'filter-9', text: 'Origami folded-paper aesthetic, minimalist shadows', category: 'filters' },
      { id: 'filter-10', text: 'Lego mini-figure world, colorful plastic bricks', category: 'filters' }
    ]
  },
  {
    id: 'extension',
    title: 'Canvas Extension',
    emoji: '↔️',
    description: '5 ChatGPT Photo Editing Prompts for Canvas Extension',
    count: 5,
    prompts: [
      { id: 'ext-1', text: 'Extend canvas left & right, continue cliff-side coastline', category: 'extension' },
      { id: 'ext-2', text: 'Outpaint upper area with dramatic sunset clouds', category: 'extension' },
      { id: 'ext-3', text: 'Add more foreground path, match perspective & texture', category: 'extension' },
      { id: 'ext-4', text: 'Expand background into bustling city skyline at dusk', category: 'extension' },
      { id: 'ext-5', text: 'Widen frame with blurred motion cyclists to left', category: 'extension' }
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    emoji: '🏢',
    description: '5 ChatGPT Photo Editing Prompts for Branding',
    count: 5,
    prompts: [
      { id: 'brand-1', text: 'Insert semi-transparent white logo bottom-right', category: 'branding' },
      { id: 'brand-2', text: 'Embed diagonal watermark "SAMPLE" at 20 % opacity', category: 'branding' },
      { id: 'brand-3', text: 'Add Instagram handle in clean sans-serif overlay', category: 'branding' },
      { id: 'brand-4', text: 'Mock up product box with on-brand colors & tagline', category: 'branding' },
      { id: 'brand-5', text: 'Generate square social-media post frame, matching palette', category: 'branding' }
    ]
  },
  {
    id: 'trending',
    title: 'Trending',
    emoji: '🔥',
    description: '5 Trending ChatGPT Photo Editing Prompts',
    count: 5,
    prompts: [
      { id: 'trend-1', text: '"Pet-to-Human" portrait, studio lighting, 4 K', category: 'trending' },
      { id: 'trend-2', text: '90s CRT-TV shot of Sonic playing on a PS 1', category: 'trending' },
      { id: 'trend-3', text: 'Stylized action figure sealed in blister pack', category: 'trending' },
      { id: 'trend-4', text: '3D fluffy icon of a coffee cup, floating on gray', category: 'trending' },
      { id: 'trend-5', text: 'Vaporwave album-cover aesthetic, neon grid & palm trees', category: 'trending' }
    ]
  },
  {
    id: 'style-transfer',
    title: 'Character Styles',
    emoji: '🎭',
    description: '5 ChatGPT Photo Editing Prompts for Character Styles',
    count: 5,
    prompts: [
      { id: 'style-1', text: 'Transform into formal corporate headshot, neutral gray bg', category: 'style-transfer' },
      { id: 'style-2', text: 'Convert selfie into cinematic movie poster, teal-orange grade', category: 'style-transfer' },
      { id: 'style-3', text: 'Turn portrait into classic Bollywood film still, 1970s', category: 'style-transfer' },
      { id: 'style-4', text: 'Create manga character version, sparkling eyes & cel shading', category: 'style-transfer' },
      { id: 'style-5', text: 'Generate LEGO mini-figure avatar with matching outfit', category: 'style-transfer' }
    ]
  },
  {
    id: 'compositing',
    title: 'Adding Elements',
    emoji: '✨',
    description: '5 ChatGPT Photo Editing Prompts for Adding Elements',
    count: 5,
    prompts: [
      { id: 'comp-1', text: 'Add neon halo around subject, soft outer glow', category: 'compositing' },
      { id: 'comp-2', text: 'Place golden retriever beside child, realistic scale', category: 'compositing' },
      { id: 'comp-3', text: 'Insert dramatic lightning bolt in background sky', category: 'compositing' },
      { id: 'comp-4', text: 'Blend Mount Fuji & Tokyo Tower into panoramic scene', category: 'compositing' },
      { id: 'comp-5', text: 'Overlay magical fireflies, warm bioluminescent trails', category: 'compositing' }
    ]
  }
];