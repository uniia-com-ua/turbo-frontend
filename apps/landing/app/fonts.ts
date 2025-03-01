import localFont from 'next/font/local';

export const eUkraine = localFont({
  src: [
    {
      path: '../../../packages/ui/src/fonts/e-ukraine/e-Ukraine-Thin.otf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../../../packages/ui/src/fonts/e-ukraine/e-Ukraine-UltraLight.otf',
      weight: '200',
      style: 'ultra-light',
    },
    {
      path: '../../../packages/ui/src/fonts/e-ukraine/e-Ukraine-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../../packages/ui/src/fonts/e-ukraine/e-Ukraine-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../packages/ui/src/fonts/e-ukraine/e-Ukraine-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../../packages/ui/src/fonts/e-ukraine/e-Ukraine-Bold.otf',
      weight: '600',
      style: 'bold',
    },
  ],
  display: 'swap',
  fallback: ['Tahoma'],
  variable: '--font-e-ukraine',
  preload: true,
});

// Експортуємо загальний об'єкт шрифтів
export const fonts = {
  eUkraine,
};