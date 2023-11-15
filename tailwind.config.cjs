/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				surface: {
					light: '#353637',
					DEFAULT: '#17181d'
				},
				primary: '#f4ad44',
				secondary: '#699af8'
			},
			fontFamily: {
				head: ['Ibarra Real Nova Variable', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
