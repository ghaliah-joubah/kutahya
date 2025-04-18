
import axios from "axios";
import { useAuthStore } from "~/store/auth";
import { useGeneralStore } from "~/store/general";

export default function () {
	if(process.client) {
		var api_url = useRuntimeConfig().public.API_URL;
		var remember_token = localStorage.getItem('remember_token');
		var has_remember_token = remember_token != null && remember_token != 'null';
		const localPath = useLocalePath();

		const authStore = useAuthStore();
		const generalStore = useGeneralStore();

		axios.interceptors.request.use((config) => {
			config.headers['Accept-Language'] = generalStore.locale;
			return config
		}, (error) => {
			return Promise.reject(error)
		})
		
		axios.interceptors.response.use((response) => {
			return response;
		}, (error) => {
			if(400 === error?.response?.status){
				const nuxtApp = useNuxtApp()
				nuxtApp.vueApp._context.provides.$swal.fire({
					...Toast,
					iconHtml: '<img src="/img/toast-error.svg"/>',
					customClass: {
						icon:'toastCustomIcon',
						timerProgressBar:'toastCustomIProgressBarError'
					},
					title: error.response.data.message,
				});
			}
			if (401 === error.response?.status) {
				if(has_remember_token){
					return axios.post(`${api_url}/remember`,{ remember_token })
					.then((res) => {
						authStore.user = res.data.user;
						authStore.loggedIn = true;
						localStorage.setItem('token',res.data.token)
						localStorage.setItem('remember_token',res.data.remember_token)
						localStorage.setItem('user',JSON.stringify(res.data.user))
					},error=>{
						localStorage.removeItem('remember_token');
						localStorage.removeItem('token');
						localStorage.removeItem('user');
						localStorage.removeItem('go-to');
						authStore.user = null;
						authStore.loggedIn = false;
						
						if (generalStore.middleware == 'auth')
							navigateTo(localPath('/login'))
					});
				} else {
					if(generalStore.middleware == 'auth')
						navigateTo(localPath('/login'))
					localStorage.removeItem('token');
					localStorage.removeItem('user');
					localStorage.removeItem('go-to');
				}
			}
			return Promise.reject(error)
		})
	}
}
