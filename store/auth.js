import { defineStore } from 'pinia'
import authService from '~/services/auth-service';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null,
            loggedIn: false,
        };
    },
    actions: {
        register(user) {
            return authService.register(user).then(
                (response) => {
                    this.loggedIn = true;
                    this.user = response;
                    return Promise.resolve(user);
                },
                error => {
                    this.user = null;
                    this.loggedIn = false;
                    return Promise.reject(error);
                }
            );
        },
        logout(all) {
            authService.logout(all);
            this.loggedIn = false;
            this.user = null;
        },
        getUser() {
            return authService.getUser().then(
                (response) => {
                    this.user = response.data;
                    this.loggedIn = true;
                    return Promise.resolve(response);
                },
                (error) =>{
                    return Promise.reject(error);
                }
            );
        },
    },
})
