import type {Config} from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // TODO: Remove legacy colors
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
      // TODO: Remove legacy colors

      'cinder': '#14131F',
      'charade': '#22212B',
      'gun-powder': '#444256',

      'persian-pink': '#F472B6',
      'magic-mint': '#86EFAC',
      'dolly': '#FEF08A',
      'navajo-white': '#FED7AA',

      'alabaster': '#FAFAFA',
      'alto': '#D4D4D4',
      'silver-chalice': '#A3A3A3',
    },
  },
  plugins: [],
}
export default config