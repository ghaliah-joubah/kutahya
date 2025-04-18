import axios from "axios";
import authHeader from '~/services/auth-header'

    const  AuthService={
        sendCode(payload){
            var api_url = useRuntimeConfig().public.API_URL;
            
            return axios.post(`${api_url}/whatsapp/send`,{ country_id  : payload.country_id, phone:payload.phone})
            .then((response) => {
                return Promise.resolve(response);
            },
            (error) =>{
                return Promise.reject(error);
            });
        },
        verify(payload){
            var api_url = useRuntimeConfig().public.API_URL;
            
            return axios.post(`${api_url}/whatsapp/verify`,{ country_id  : payload.country_id, phone:payload.phone, code:payload.code})
            .then((response) => {
                return Promise.resolve(response);
            },
            (error) =>{
                return Promise.reject(error);
            });
        },
        register(user) {
            var api_url = useRuntimeConfig().public.API_URL;
            var data = { 
                full_name: user.full_name,
                email: user.email,
                city_id:user.city_id,
                phone_country_id:user.phone_country_id,
                phone:user.phone,
                _method: 'PUT'
            };

            var formData = new FormData();
            Object.keys(data).forEach((key) => {
                if((!['email'].includes(key)) || (data[key] != null && data[key] != "")){
                    formData.append(key, data[key]);
                }
            });
            return axios.post(`${api_url}/user/update`, 
                formData
                // full_name: user.full_name,
                // email: user.email,
                // city_id:user.city_id,
                // phone_country_id:user.phone_country_id,
                // phone:user.phone,
                // email:formData,
                // _method: 'PUT'
            ,{ headers: {...authHeader(true)} }).then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
                return Promise.resolve(response.data);
            },(error) =>{
                return Promise.reject(error);
            });
        },
        logout(all) {
            var api_url = useRuntimeConfig().public.API_URL;
            var data = { 
                device_token: localStorage.getItem('device_token') ? localStorage.getItem('device_token') : ''
            };
            var formData = new FormData();
            Object.keys(data).forEach((key) => {
                if((!['device_token'].includes(key)) || (data[key] != null && data[key] != "")){
                    formData.append(key, data[key]);
                }
            });
    
            axios.post(`${api_url}/logout`, { formData, all }, {headers: {...authHeader()}});
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('remember_token');
            localStorage.removeItem('go-to');
        },
        getUser(){
            var api_url = useRuntimeConfig().public.API_URL;

            return axios.get(`${api_url}/user`,{ headers: {...authHeader()} }).then((response) => {
                return Promise.resolve(response);
            },(error) =>{
                return Promise.reject(error);
            });
        },
    }
export default  AuthService;