import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
      },
      borderRadius: {
        DEFAULT: '3rem',
        md: '2rem',
        sm: '1.3rem',
      },
      colors: {
        'iwp-red': '#E20000',
        'iwp-blue': '#153655',
        'iwp-gray-dark': '#808080',
        'iwp-gray-light': '#C0C0C0',
        'iwp-gray-ultra-light': '#F1F1F1',
      },
      fontFamily: {
        sans: ['Arimo', 'sans-serif'],
        serif: ['Baskerville', 'serif'],
      },
      fontSize: {
        body: 'var(--font-size-body)',
        lead: 'var(--font-size-lead)',
        caption: 'var(--font-size-caption)',
        xs: '1.2rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2rem',
        // '2xl': ['1.5rem', {
        //   lineHeight: '2rem',
        //   letterSpacing: '-0.01em',
        //   fontWeight: '500',
        // }],
      },
      maxWidth: {
        default: '106.8rem',
      },
    },
  },
};
