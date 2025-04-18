import axios from "axios";
import authHeader from '~/services/auth-header';

export const Toast = {
    toast: true,
    position: 'bottom-right',
    // iconColor: '#fbb03b',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    customClass: {
        popup: 'toastContainerCustom',
        icon:'toastCustomIcon',
        title:'toastCustomText',
        timerProgressBar:'toastCustomIProgressBarSuccess'
    },
};

function random_string(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function register_fcm_token(loggedIn, fcm_language, fcm_token){
    var local_device_token = localStorage.getItem('device_token');
    var local_fcm_token = localStorage.getItem('fcm_token');
    var local_fcm_language = localStorage.getItem('fcm_language');

    if(!local_device_token) {
        local_device_token = random_string(25);
        local_fcm_token = "";
        local_fcm_language = "";
        localStorage.setItem('device_token', local_device_token);
        localStorage.setItem('fcm_token', '');
        localStorage.setItem('fcm_language', '');
    }

    if(loggedIn && (local_fcm_token != fcm_token || local_fcm_language != fcm_language)){
        localStorage.setItem('fcm_token', fcm_token);
        localStorage.setItem('fcm_language', fcm_language);
        
        var api_url = useRuntimeConfig().public.API_URL;
        axios.post(`${api_url}/fcm_token`,{
            device_token: local_device_token,
            fcm_token: fcm_token,
            language: fcm_language,
        },{
            headers: {...authHeader()},
        }).then((res) => {
            
        },error =>{
            
        });
    }
}