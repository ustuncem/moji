/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {  DEFAULT: '#86A3B5',  50: '#F8FAFB',  100: '#EBF0F3',  200: '#D2DDE3',  300: '#B9C9D4',  400: '#9FB6C4',  500: '#86A3B5',  600: '#6389A0',  700: '#4D6B7E',  800: '#384D5B',  900: '#223038',  950: '#182127'},
				'secondary': {  DEFAULT: '#FFE8D8',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFFFF',  500: '#FFE8D8',  600: '#FFC7A0',  700: '#FFA668',  800: '#FF8530',  900: '#F76500',  950: '#DB5A00'},
				'complementary': {  DEFAULT: '#F0B439',  50: '#FDF5E4',  100: '#FBEDD1',  200: '#F9DFAB',  300: '#F6D185',  400: '#F3C25F',  500: '#F0B439',  600: '#E09C11',  700: '#AC780D',  800: '#785309',  900: '#432F05',  950: '#291D03'},
			}
		},
	},
	plugins: [],
}
