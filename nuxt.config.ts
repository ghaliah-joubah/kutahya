import { promises as fs } from 'fs';

console.log("generate sw file");
fs.readFile('firebase-messaging-sw.js.stub').then((file_data) => {
  var file_text = file_data.toString().replaceAll('firebase.initializeApp({});', 'firebase.initializeApp('+process.env.FIREBASE_CREDENTIALS+');');
  fs.writeFile('public/firebase-messaging-sw.js', file_text);
  console.log("sw file done");
}).catch((err) => {
  console.error('Failed to read file', err)
});
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				// bootstrap
				{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' },
				// google font
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' },
				// fontawesom
				{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
				// custom
				{ rel: 'stylesheet', href: '/css/main.css' },
			],
			script: [
				{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' , body: true},
				{ src: '/js/main.js', body: true},
			]
		}
	},
	modules: [
		'vue3-carousel-nuxt',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
	],
	css: [
		'vue-select/dist/vue-select.css',
	  ],
	runtimeConfig: {
		public:   {
			API_URL: process.env.API_URL,
			STORAGE_URL: process.env.STORAGE_URL,
			FIREBASE_CREDENTIALS:process.env.FIREBASE_CREDENTIALS,
			GOOGLE_MAPS_API_KEY:process.env.GOOGLE_MAPS_API_KEY
		},
	},
	i18n: {
		seo: true,
		lazy: true,
		langDir: "locales",
		locales: [
		  {
			code: 'en',
			iso: 'en',
			name: 'English',
			file: 'en-US.json'
		  },
		  {
			code: 'ar',
			iso: 'ar',
			name: 'العربية',
			file: 'ar-AR.json'
		  },
		  {
			code: 'ku',
			iso: 'ku',
			name: 'كوردي',
			file: 'ku-KU.json'
		  }
		],
		strategy: 'prefix_except_default',
		defaultLocale: 'en'
	  }
})
