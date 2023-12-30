import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'old-lace': '#FDF6E3',
      'aths-special': '#EEE8D5',
      'pewter': '#93A1A1',
      'granny-smith': '#839496',
      'tiber': '#073642',
      'daintree': '#002B36',
      'pale-sky': '#657B83',
      'cutty-sark': '#586E75',
      'limeade': '#859900',
      'jungle-green': '#2AA198',
      'curious-blue': '#268BD2',
      'amethyst': '#6C71C4',
      'cerise': '#D33682',
      'punch': '#DC322F',
      'orange-roughy': '#CB4B16',
      'pirate-gold': '#B58900',
    },
    fontFamily: {
      mono: ['IBM Plex Mono', 'mono'],
    },
  },
  plugins: [],
}
export default config