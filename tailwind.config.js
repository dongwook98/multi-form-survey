/** @type {import('tailwindcss').Config} */
import colors from './tailwind/colors';

// fontSize, spacing px 확장
const px0_200 = Array.from({ length: 201 }, (_, i) => `${i}px`);
// borderWidth, borderRadius px 확장
const px0_20 = Array.from({ length: 21 }, (_, i) => `${i}px`);

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        ...px0_200,
      },
      borderWidth: {
        ...px0_20,
      },
      borderRadius: {
        ...px0_20,
      },
      fontSize: {
        ...px0_200,
      },
      colors,
    },
  },
};
