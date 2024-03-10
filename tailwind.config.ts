import type { Config } from 'tailwindcss';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fbf3ff',
          '100': '#f4e3ff',
          '200': '#ebccff',
          '300': '#dca4ff',
          '400': '#c769ff',
          '500': '#b231ff',
          '600': '#a00aff',
          '700': '#8c00f4',
          '800': '#7303c0',
          '900': '#62049f',
          '950': '#420079',
        },
        secondary: {
          '50': '#fdf2fb',
          '100': '#fce7f8',
          '200': '#fbcff3',
          '300': '#faa7e8',
          '400': '#f571d6',
          '500': '#ec38bc',
          '600': '#dd25a3',
          '700': '#bf1785',
          '800': '#9e166e',
          '900': '#84175d',
          '950': '#510636',
        },

        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
} satisfies Config;
