import { useAuthStore } from '~/store/auth';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useGeneralStore } from '~/store/general';

export default function (to, from) {
	if(process.client) {
		const locale =("to: ",to?.name?.split('___')?.[1])??'en';
		var store = useGeneralStore();
		store.locale = locale;
		document.documentElement.dataset.direction = ['en'].includes(locale)? 'ltr':'rtl';

		var FIREBASE_CREDENTIALS = useRuntimeConfig().public.FIREBASE_CREDENTIALS;
		var FIREBASE_VAPID_KEY = useRuntimeConfig().public.FIREBASE_VAPID_KEY;
		if(FIREBASE_CREDENTIALS){
			const app = initializeApp(JSON.parse(FIREBASE_CREDENTIALS));
			const messaging = getMessaging(app);

			getToken(messaging, { vapidKey:FIREBASE_VAPID_KEY })
			.then((currentToken) => {
				if (currentToken) {
					// TODO: handle token registration
					register_fcm_token(useAuthStore().loggedIn, locale, currentToken);
				} else {
					console.log("fb No registration token available. Request permission to generate one.");
				}
			})
			.catch((err) => {
				console.log("fb An error occurred while retrieving token. ", err);
			});

			onMessage(messaging, (payload) => {
				const nuxtApp = useNuxtApp()
				var storage_url = useRuntimeConfig().public.STORAGE_URL;
				nuxtApp.vueApp._context.provides.$swal.fire({
					...Toast,
					title: payload?.data?.body,
					iconHtml:'<img class="notification_image" src="'+payload?.data?.icon+'"/>',
					customClass:{
						icon:'toastCustomIcon'
					},
				});
				useGeneralStore().loadNotifications();
				
				// TODO: handle notification
			});
		}
		
	}
}