import axios from 'axios';
import authHeader from '~/services/auth-header'
import { useAuthStore } from '~/store/auth';
import { useGeneralStore } from '~/store/general';

export default function (to, from) {
	if(process.client) {
		var api_url = useRuntimeConfig().public.API_URL;
		var has_token = localStorage.getItem('token') != null;
		const authStore = useAuthStore();
		const generalStore = useGeneralStore();
		generalStore.middleware = 'public';
		if(has_token && !authStore.user) {
			axios.get(`${api_url}/user`,{ headers: {...authHeader()} })
			.then((response) => {
				if(response){
					authStore.user = response.data;
					authStore.loggedIn=true;
				}
			}).catch((error) => {
				if(error?.response && error?.response?.status != 401){
					localStorage.removeItem('token');
					localStorage.removeItem('remember_token')
					localStorage.removeItem('user')
				}
			});
		}
		else{
		}
	}
}