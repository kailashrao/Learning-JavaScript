/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				deepBlue: "rgb(53, 115, 166)",
				lightGray: "rgb(208, 204, 211)",
				softBlue: "rgb(154, 189, 221)"
			},
			fontFamily: {
				os: ["Open Sans", "sans-serif"]
			}
		},
	},
	plugins: [],
}
