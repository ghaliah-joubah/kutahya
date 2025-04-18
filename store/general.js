import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import authHeader from '~/services/auth-header';
import axios from 'axios';

export const useGeneralStore = defineStore('general', {
    state: () => {
        return {
            loaded: false,
            middleware: '',
            notifications:[],
            current_page_notification:1,
            last_page_notification:null,
            unRead:null, 
            locale: 'en',
        };
    },
    actions:{
        loadNotifications(value){
            if(useAuthStore().loggedIn){
                console.log('inside store');
                var api_url = useRuntimeConfig().public.API_URL;
                if(value && value<=this.last_page_notification){
                        var page = `page=${value}`
                }else if (value && value>this.last_page_notification){
                    return Promise.resolve(true);
                }else{
                    this.notifications=[];
                    var page =`page=1`
                }
               return axios.get(`${api_url}/notifications?${page}`,{headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
                }).then((response) => {
                    response.data.data.forEach(e => {
                        this.notifications.push(e);
                    });                
                    this.current_page_notification=response.data.meta.current_page;
                    this.last_page_notification=response.data.meta.last_page;
                    this.unRead=response.data.meta.unread_notifications_count
                    return Promise.resolve(true)
                },error=>{
                    console.log(error);
                    return Promise.reject(false)

                })
            }
        }
    },
})
