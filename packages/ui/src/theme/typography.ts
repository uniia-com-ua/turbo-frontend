import { fontPaths, fontWeights, fontStyles, fontFamilyFallback } from './fonts';

// Функція для генерації @font-face правил
export const generateFontFaces = () => {
  return Object.entries(fontPaths).map(([key, path]) => ({
    fontFamily: 'e-Ukraine',
    src: `url(${path}) format('opentype')`,
    fontWeight: fontWeights[key as keyof typeof fontWeights],
    fontStyle: fontStyles[key as keyof typeof fontStyles],
    fontDisplay: 'block',
  }));
};

// Базова конфігурація типографіки для Material UI
export const typography = {
  fontFamily: `var(--font-e-ukraine), ${fontFamilyFallback.join(', ')}`,
};