/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      body: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}
