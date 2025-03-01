import { generateFontFaces } from './typography';

export const getGlobalStyles = () => {
  const fontFaces = generateFontFaces();
  
  return `
    ${fontFaces.map(font => `
      @font-face {
        font-family: ${font.fontFamily};
        src: ${font.src};
        font-weight: ${font.fontWeight};
        font-style: ${font.fontStyle};
        font-display: ${font.fontDisplay};
      }
    `).join('\n')}
  `;
}; 