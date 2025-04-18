import { useGeneralStore } from "~/store/general";

export default function (to, from) {
	// const localPath = useLocalePath();
	const nuxt = useNuxtApp()

	if(process.client) {
		var has_token = localStorage.getItem('token') != null;
		const generalStore = useGeneralStore();
		generalStore.middleware = 'guest';
		if(has_token)
		// return navigateTo(localPath('/'))
		return navigateTo(nuxt.$localePath('/'))
	}
}