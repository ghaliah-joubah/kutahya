<template>
    <div>
        <NuxtLayout name="website">
            <section class="mb-5">
                <div class="profile-main-img">
                    <!-- <img :src="cover_image??`${storage_url}/${user?.cover_image}`??'/img/profile-cover.png'" class="cover-img"> -->
                    <img :src="cover_image ? cover_image : (user?.cover_image ? `${storage_url}/${user?.cover_image}` : '/img/profile-cover.png')" class="cover-img" >
                    <!-- <img v-if="cover_image !=null && cover_image !=''" :src="`${cover_image}`" class="cover-img" a>
                    <img v-if="user?.cover_image" :src="`${storage_url}/${user?.cover_image}`" class="cover-img" j>
                    <img v-else :src="'/img/profile-cover.png'" class="cover-img" h> -->
                    <input type="file" id="file_cover" ref="file_cover" hidden @change="editCoverImage"/>
                    <div class="edit-icon-wrap" @click="this.$refs.file_cover.click()">
                        <EditIcon class="edit-icon"/>
                    </div>
                    <img src="/img/profile-white-cover.png" class="white-cover-img">
                    <img src="/img/white-cover-mobile.png" class="white-cover-mobile-img">
                    <div class="user-img-wrap">
                        <UserImage :image="profile_image ? profile_image : (user?.profile_image ? `${storage_url}/${user?.profile_image}` : null)" class="user-img"/>
                        <input type="file" id="file_profile" ref="file_profile" hidden @change="editProfileImage"/>
                        <div class="user-edit-icon-wrap" @click="this.$refs.file_profile.click()">
                            <EditIcon class="user-edit-icon"/>
                        </div>
                    </div>
                    <button class="save-change-btn" @click="saveChanges()">
                        <div class="lds-dual-ring" v-if="loading_loader"></div>
                        <template v-if="!loading_loader" >{{$t('Save changes')}}</template>
                    </button>
                </div>
                <div class="container" style="margin-top:110px">
                    <div class="info-title">{{ $t('Basic Info') }}</div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="edit-label" >{{$t('Full Name')}} <span style="color: #F47D21;">*</span></label>
                            <input class="edit-input" type="text" :placeholder="$t('Enter your name')" v-model="full_name" :class="{'border-error': v$?.full_name?.$errors.length > 0}" >
                            <div v-for="(item, index) in v$?.full_name?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="edit-label">{{$t('city')}} <span style="color: #F47D21;">*</span></label>
                           
                            <v-select class="custom_v_select" :options="cities" @search="searchCities" v-model="city_id" :loading="searchCitiesLoading" :class="{'border-error': v$?.city_id?.$errors.length > 0}" :placeholder="$t('Choose your city..')"></v-select>
                            <div v-for="(item, index) in v$?.city_id?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="edit-label">{{$t('WhatsApp number')}} <span style="color: #F47D21;">*</span></label>
                            <vue-tel-input v-if="user?.phone_country?.country_code && allCountries.length > 0" v-model="phone" :autoFormat="false" :defaultCountry="user?.phone_country?.country_code" mode="international" :dropdownOptions="dropdownOptions" :inputOptions="inputOptions" v-on:country-changed="change_phone" :allCountries="allCountries" type="number" :class="{'border-error': v$?.phone?.$errors.length > 0}" @keypress="(e)=>isNumber(e)"></vue-tel-input>

                            <div v-for="(item, index) in v$?.phone?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="edit-label">{{$t('Email')}}</label>
                            <input class="edit-input" type="email" :placeholder="$t('Enter your email')" v-model="email" :class="{'border-error': v$?.email?.$errors.length > 0}" >
                            <div v-for="(item, index) in v$?.email?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3" v-if="business_account">
                            <label class="edit-label">{{ $t('Bio') }}</label>
                            <textarea class="edit-input" rows="6" style="resize: none;" v-model="bio"></textarea>
                            <div v-for="(item, index) in v$?.bio?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3" v-if="business_account">
                            <div class="d-flex justify-content-between align-items-center">
                                <label class="edit-label">{{ $t('Location') }}</label>
                                <!-- Button trigger modal after entering the location-->
                                <button type="button" class="btn modal-map-btn  mb-0" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="selectedPos.lat && selectedPos.lng || user?.location_lat && user?.location_lng" @click="openMap()">
                                    {{ $t('Edit on map') }}
                                </button>
                            </div>
                            <!-- map library after entering the location-->
                            <div v-if="has_map" id="map">
                                <div ref="map_iframe" class="i-frame" style="width:100%;height:146px">
                                </div>
                            </div>
                            <!-- map image before entering the location-->
                            <div class="pick-location-wrap" v-if="!has_map">
                                <img class="map-img" src="/img/profile-map-img.png">
                                <div class="map-text" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openMap()">{{ $t('Pick your location on map') }}</div>
                            </div>
                            <div v-for="(item, index) in v$?.location_lat?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                            <div v-for="(item, index) in v$?.location_lng?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="info-title" v-if="business_account">{{ $t('Social Media') }}</div>
                    <div class="row mb-4" v-if="business_account">
                        <div class="col-md-6 mb-3">
                            <label class="edit-label" >{{ $t('Facebook URL') }}</label>
                            <input class="edit-input" type="url" v-model="facebook" :class="{'border-error': v$?.facebook?.$errors.length > 0}" >
                            <div v-for="(item, index) in v$?.facebook?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="edit-label" >{{ $t('Instagram URL') }}</label>
                            <input class="edit-input" type="url" v-model="instagram" :class="{'border-error': v$?.instagram?.$errors.length > 0}" >
                            <div v-for="(item, index) in v$?.instagram?.$errors" :key="index" class="error-box">
                                <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                            </div>
                        </div>
                    </div>
                    <button class="save-change-btn-mobile">{{$t('Save changes')}}</button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <h5 class="modal-title modal-map-title" id="addReviewLabel">{{$t('Location')}}</h5>
                            <button ref="close_btn1"  type="button" class=" map-modal-close-btn" data-bs-dismiss="modal" aria-label="Close" @click="has_map = false">
                                <CloseModalIcon/>
                            </button>
                        
                        <div class="modal-body map-modal-body" id="map">
                            <div ref="map_div" class="i-frame" style="height: 400px">
                            </div>
                        </div>
                        <div class="modal-footer footer-modal">
                            <button type="button" class="btn save-map-btn" data-bs-dismiss="modal" @click="saveLocation()">{{ $t('Save') }}</button>
                            <button type="button" class="btn delete-map-btn" @click="deleteLocation()">{{ $t('Delete') }}</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useAuthStore } from '~/store/auth'
import axios from 'axios'
import authHeader from '~/services/auth-header'
import { Loader } from "@googlemaps/js-api-loader";
import {useVuelidate} from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import { _t } from '~/helpers.js'

export default{
    setup(){
        definePageMeta({
            middleware: 'auth'
        });
        function createDebounce() {
            let timeout = null;
            return function (fnc, delayMs) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    fnc();
                }, delayMs || 500);
            };
        }
        var storage_url = useRuntimeConfig().public.STORAGE_URL;
        const { isNumber } = useVerificationCode();
        return{ debounce: createDebounce(), isNumber, storage_url, v$: useVuelidate() }
    },
    data(){
        return{
            business_account:false,

            full_name:'',
            email:'',
            bio:'',
            facebook:'',
            instagram:'',
            phone:'',
            phone_country_id:'',
            allCountries:[],
            inputOptions: {
                placeholder: this.$t('Enter your mobile number'),
                showDialCodeInList:true,
                showDialCodeInSelection:true,
                disabled:false,
                showSearchBox:true,
                tabindex:0,
                showDialCode:true,
                styleClasses:'country_code_input'
            },
            dropdownOptions:{
                showDialCodeInSelection:true,
                showDialCodeInList:true,
                showSearchBox:true,
                showFlags:true,
            },
            defaultCountry:'',
            city_id:'',
            searchCitiesLoading:false,
            cities:[],
            loading_loader:false,
            swal : inject("$swal"),
            file_cover:null,
            cover_image:'',
            profile_image:'',
            file_profile:null,
            map:null,
            userPos:{
                lat:null,
                lng:null
            },
            selectedPos:{
                lat:null,
                lng:null
            },
            marker:'',
            clickListener:null,
            has_map:false, //to show map outside
            watch_change:false, //watch: when change marker the map outside change  
            vuelidateExternalResults: {
                phone:[],
                phone_country_id:[],
                email:[],
                bio:[],
                instagram:[],
                facebook:[],
                selectedPos:[],
                full_name:[],
                city_id:[]
            },
        }
    },
    validations() {
        var optional = (v) => true;
        return {
            full_name: { required: helpers.withMessage('_.required.full_name', required) },
            city_id: { required: helpers.withMessage('_.required.city', required) },
            phone: { required: helpers.withMessage('_.required.phone', required) },
            email: { email: helpers.withMessage('_.email_field.email', email),optional },
            bio: { optional },
            facebook: { optional  },
            instagram: { optional },
        }
    },
    computed:{
        ...mapState(useAuthStore, ['user', 'loggedIn']),
        ...mapActions(useAuthStore, ['getUser'])
    },
    async mounted(){
        var api_url = useRuntimeConfig().public.API_URL;
        this.business_account = this.user?.type !== 'individual' ? true : false;

        await this.getUserInfo();

        axios.get(`${api_url}/countries`).then(res=>{
            var countriesInfo = res.data.data;
            this.allCountries = [];
            countriesInfo.forEach(element => {
                this.allCountries.push({
                    id:element.id,
                    name:element.name,
                    iso2:element.country_code,
                    dialCode:element.phone_code
                });
            });
            this.sortNumbers(this.allCountries);
        });
        this.searchCities('',null,true);

        // if (navigator.geolocation) {
        //     navigator.geolocation.watchPosition(
        //     (position) => {
        //         const { latitude, longitude } = position.coords;
        //         this.userPos.lat = position?.coords?.latitude
        //         this.userPos.lng = position?.coords?.longitude
        //         console.log("Latitude:", latitude);
        //         console.log("Longitude:", longitude);
        //     },(error) => {
        //         console.error("Error getting current position:", error);
        //     });
        // }else {
        //     console.error("Geolocation is not supported in this browser.");
        // }
        // console.log('userPos mounted',this.userPos);
        // this.userPos ={
        //     lat:32.10241628016204,
        //     lng:44.31159734430494
        // }
        if(this.user?.location_lat && this.user?.location_lng){
            this.getMapInfo();
            this.has_map = true;
        }
           
    },
    methods:{
        _t(message){return _t(message, this.$t);},

        change_phone(e){
            this.phone_country_id = e.id;
        },
        sortNumbers(array) {
            return array.sort((a, b) => (a.name > b.name) ? 1 : -1)
        },
        editCoverImage(e){
            this.file_cover=e.target.files[0];
            this.cover_image = URL.createObjectURL(this.file_cover);
        },
        editProfileImage(e){
            this.file_profile=e.target.files[0];
            this.profile_image = URL.createObjectURL(this.file_profile);
        },
        async getUserInfo(){
            const authStore = useAuthStore();
            
            await authStore.getUser().then((res) => {
                this.full_name = res?.data?.full_name != null ? res?.data?.full_name : '';
                this.email = res?.data?.email != null ? res?.data?.email : '';
                this.bio = res?.data?.bio != null ? res?.data?.bio : '';
                this.phone = res?.data?.phone != null ? res?.data?.phone : '';
                this.phone_country_id = res?.data?.phone_country?.id;
                this.defaultCountry = res?.data?.phone_country?.country_code;
                this.facebook = res?.data?.facebook_url != null ? res?.data?.facebook_url : '';
                this.instagram = res?.data?.instagram_url != null ? res?.data?.instagram_url : '';
                this.user.city.label = res?.data?.city?.name != null ? res?.data?.city?.name : '';
                this.city_id = res?.data?.city != null ? res?.data?.city : '';
                this.selectedPos.lat = res?.data?.location_lat
                this.selectedPos.lng = res?.data?.location_lng
            })
        },
        saveChanges(){
            var api_url = useRuntimeConfig().public.API_URL;
            const authStore = useAuthStore();
            this.vuelidateExternalResults.phone = [];
            this.vuelidateExternalResults.phone_country_id = [];
            this.vuelidateExternalResults.full_name = [];
            this.vuelidateExternalResults.city_id = [];
            this.vuelidateExternalResults.email = [];
            this.vuelidateExternalResults.bio = [];
            this.vuelidateExternalResults.instagram = [];
            this.vuelidateExternalResults.facebook = [];
            this.vuelidateExternalResults.selectedPos = [];

            var data = { 
                full_name : this.full_name,
                email: this.email,
                bio: this.bio,
                phone:this.phone,
                instagram_url:this.instagram,
                facebook_url:this.facebook,
                phone_country_id:this.phone_country_id,
                city_id:this.city_id?.id,
                cover_image:this.file_cover,
                profile_image:this.file_profile,
                location_lat:this.selectedPos.lat,
                location_lng:this.selectedPos.lng,
                _method: 'PUT'
            };
            
            var formData = new FormData();
            Object.keys(data).forEach((key) => {
                if((!['email', 'bio','facebook_url','instagram_url', 'cover_image', 'profile_image', 'location_lat', 'location_lng'].includes(key)) || (data[key] != null && data[key] != "")){
                    formData.append(key, data[key]);
                }
            }); 
            
            this.v$.$touch();
            if (this.v$.$invalid) {
                return;
            }
            this.loading_loader = true;
            
            return axios.post(`${api_url}/user/update`, formData ,{ headers: {...authHeader()} })
            .then(response => {
                this.loading_loader = false;
                localStorage.setItem('user', JSON.stringify(response.data));
                authStore.user = response.data;
                this.swal.fire({
                    ...Toast,
                    iconHtml: '<img src="/img/toast-success.svg"/>',
                    title: 'The user has been saved successfully',
                    timerProgressBar: true,
                    customClass: {
                        popup: 'toastContainerCustom',
                        icon:'toastCustomIcon',
                        title:'toastCustomText',
						timerProgressBar:'toastCustomIProgressBarSuccess'
					},
                });
                authStore.cover_image = response?.data?.cover_image
                authStore.profile_image = response?.data?.profile_image
            },(error) =>{
                this.loading_loader = false;
                if(error.response.status==422){
                    var errors = error.response.data.errors;
                    this.vuelidateExternalResults.full_name = errors.full_name??[];
                    this.vuelidateExternalResults.city_id = errors.city_id??[];
                    this.vuelidateExternalResults.phone = errors.phone??[];
                    this.vuelidateExternalResults.email = errors.email??[];
                    this.vuelidateExternalResults.phone_country_id = errors.phone_country_id??[];
                    this.vuelidateExternalResults.bio = errors.bio??[];
                    this.vuelidateExternalResults.facebook = errors.facebook_url??[];
                    this.vuelidateExternalResults.instagram = errors.instagram_url??[];
                }
            });
        },
        searchCities(q = '', loading = null, force = false) {
            var api_url = useRuntimeConfig().public.API_URL;

            if(q.length==0 && ! force)
                return;
            this.cities = [];
            if(loading !== null)
                loading(true);
            else
                this.searchCitiesLoading = true;
            var _this = this;
            this.debounce(() => {
                if(q.length > 0)
                    q = "?q=" + q;

                axios.get(`${api_url}/cities${q}`).then((response) => {
                    _this.cities = response.data.data;
                    _this.cities.forEach(el => {
                        el.label = el.name;
                     });
                    if(loading !== null)
                        loading(false);
                    else
                        this.searchCitiesLoading = false;
                });
            }, 1000);
        },
        async openMap(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position?.coords;
                    this.userPos.lat = position?.coords?.latitude
                    this.userPos.lng = position?.coords?.longitude
                },(error) => {
                    console.error("Error getting current position:", error);
                });
            }else {
                console.error("Geolocation is not supported in this browser.");
            }
            var google_maps_api_key = useRuntimeConfig().public.GOOGLE_MAPS_API_KEY;
            // let center=null
            const loader = new Loader({ apiKey: google_maps_api_key })
            let loaded = await loader.load();
            // this.userPos.lat && this.userPos.lng?this.userPos :{
            //     lat:32.10241628016204,
            //     lng:44.31159734430494
            // }
            var center = (this.selectedPos.lat && this.selectedPos.lng) ? this.selectedPos : this.userPos

            this.map = new google.maps.Map(this.$refs.map_div, {
                center: { lat: center?.lat, lng: center?.lng },
                zoom: 7
            });
            if(this.selectedPos.lat &&this.selectedPos.lng){
                this.addMarker(this.selectedPos)
            }
            this.clickListener = this.map.addListener('click',({ latLng: { lat, lng } }) =>{
                if(this.marker){
                    toRaw(this.marker).setMap(null)
                }
                this.addMarker({lat:lat(),lng:lng()});
                this.selectedPos.lat=lat()
                this.selectedPos.lng=lng()
            }) 
        },
        addMarker(position) {
            this.marker = new google.maps.Marker({
                icon:'/img/map-pin.svg',
                position,
                map:this.map,
            }) 
            this.marker.setMap(this.map)
        },
        saveLocation(){
            // if(this.selectedPos){
                
            // }
            var google_maps_api_key = useRuntimeConfig().public.GOOGLE_MAPS_API_KEY;
            var latlng = `${this.selectedPos.lat},${this.selectedPos.lng}`
            axios.get("https://maps.googleapis.com/maps/api/geocode/json",
                {params: {
                    'latlng': latlng,
                    'key': google_maps_api_key
                }}
                ).then(res=>{
                    this.has_map=true;
                    this.watch_change=!this.watch_change
                })
        },
        deleteLocation(){
            this.selectedPos.lat = null; 
            this.selectedPos.lng = null;
            useAuthStore().user.location_lng = ''; 
            useAuthStore().user.location_lat = '';
            this.has_map = false;
            this.$refs.close_btn1.click() 
        },
        async getMapInfo(){
            this.map= null;
            if( this.selectedPos?.lng && this.selectedPos?.lat ){
                var google_maps_api_key = useRuntimeConfig().public.GOOGLE_MAPS_API_KEY;
                const loader = new Loader({ apiKey: google_maps_api_key })
                let loaded = await loader.load();
                this.map = new google.maps.Map(this.$refs.map_iframe, {
                    center: { lat: this.selectedPos.lat, lng: this.selectedPos.lng },
                    zoom: 10
                });
                this.addMarker(this.selectedPos)
            }
        }
    },
    watch:{
        user(_new, _old){
            this.business_account = this.user?.type !== 'individual' ? true : false;
        },
        // selectedPos:{
        //     handler(_new, _old){
        //         this.getMapInfo()
        //     },deep: true
        // }
        watch_change(_new,_old){
            this.getMapInfo()
        }
    }
}
</script>
<style scoped>
.user-img-wrap :deep() .user-img{
    position: absolute;
    /* border-radius:50%; */
    width: 145px !important;
    height: 145px !important;
    transform: translate(-50%, -50%);
    bottom: -144px;
    left: 18.3%;
    /* filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25)); */
    /* border: 2px solid #fff; */
}
.user-img-wrap :deep() .user-img svg{
    width: 145px !important;
    height: 145px !important;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    border: 2px solid #fff;
    border-radius:50%;
}
.save-change-btn{
    border-radius: 5px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    padding:9px 16px;
    color:#fff;
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    right: 30px;
    margin-top: 16px;  
    min-width: 133px;
    height:41px
}
.save-change-btn:hover{
    background:#F47D21;
    border:1px solid #F47D21;
}
.save-change-btn-mobile{
    display:none;
    border-radius: 5px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    padding:9px 16px;
    color:#fff;
    font-size: 14px;
    font-weight: 600;
    max-width: 220px;
    margin: auto;
    width: 100%;
}

.info-title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom:24px;
    color:#F47D21;
}
.edit-label{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    margin-bottom:8px;
}
.edit-input{
    border-radius: 5px;
    border: 1px solid rgba(12, 34, 67, 0.20);
    background: #FFF;
    padding:9px 8px 9px 16px;
    color:#BDBDBD;
    font-weight: 500;
    font-size:14px;
    outline: none;
    text-overflow: ellipsis;
    width:100%;
    color:var(--primary-color)
}
.edit-input::placeholder{
    color:#E0E0E0;
}

.edit-input:focus{
    border:1px solid var(--primary-color)
}
.city-dropdown{
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(12, 34, 67, 0.20);
    background: #FFF;
    display: flex;
    justify-content: space-between;
    padding:9px 8px 9px 16px;
    /* color:#BDBDBD; */
    color:#E0E0E0;
    font-weight: 500;
    font-size:14px;
    outline: none;
    text-overflow: ellipsis;
}
.city-dropdown-item{
    width:100%;
}
.input-number{
    width: 100%;
    border: none;
    border-left: 1px solid #E0E0E0;
    padding: 0px 10px 0px 16px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #828282;
    text-overflow: ellipsis;
}
.input-number::placeholder{
    color:#E0E0E0;
}
.country-phone-wrap:focus{
    border:1px solid var(--primary-color)
}
.profile-map{
    width:100%;
    height:140px;
 
}
.pick-location-wrap{
    position:relative;
}
.map-img{
    width:100%;
    height: 146px;
    object-fit: cover;
}
.map-text{
    text-decoration-line: underline;
    font-size: 18px;
    font-weight: 600;
    color:#F47D21;
    position: absolute;
    transform:translate(-50% , -50%);
    top: 50%;
    left: 50%;
    cursor: pointer;
    max-width: 243px;
    width:100%;
}
/* --start modal-- */
.modal-map-btn{
    text-decoration-line: underline;
    font-size:16px;
    font-weight: 500;
    color:#F47D21;
    border:none;
    background: transparent;
    padding: 0px;
}
.modal-map-btn:active{
    color:#F47D21;
}
.map-modal-body{
    padding-top: 0;
    padding-bottom: 0;
}
.modal-img{
    width:100%;
    aspect-ratio: 4/2;
}
.save-map-btn{
    border-radius: 5px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    color:#fff;
    font-size:14px;
    font-weight: 600;
    max-width:220px;
    width:100%;
    padding:9px;
}
.save-map-btn:hover{
    background: #F47D21;
    border:1px solid #F47D21;
}
.delete-map-btn{
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    color:var(--primary-color);
    font-size:14px;
    font-weight: 600;
    max-width:220px;
    width:100%;
    padding:9px;
}
.delete-map-btn:hover{
    background: #F47D21;
    border:1px solid #F47D21;
    color:#fff;
}
.modal-map-title{
    text-align:center;
    color:var(--primary-color);
    font-weight: 600;
    font-size:16px;
    margin-top: 16px;
    margin-bottom: 18px;
}
.footer-modal{
    justify-content: space-around;
    display:flex;
    border-top:none;
    flex-wrap: nowrap;
}
.map-modal-close-btn{
    position:absolute;
    right:10px;
    top:14px;
    border:none;
    background-color:transparent;
}

@media (min-width:1440px){
    .user-img-wrap :deep() .user-img{
        left:263px;
    }
}
/* @media (max-width:1440px){
    .user-img-wrap :deep() .user-img{
        left:18.3%;
    }
} */

@media(max-width:1200px){
    .user-img-wrap :deep() .user-img{
        width: 128px !important;
        height: 126px !important;
        bottom: -123px;
    }
    .user-img-wrap :deep() .user-img svg{
        width: 125px !important;
        height: 125px !important;
    }
}
@media (max-width:991px){
    .user-img-wrap :deep() .user-img{
        width: 96px !important;
        height: 95px !important;
        bottom: -90px;
    }
    .user-img-wrap :deep() .user-img svg{
        width: 96px !important;
        height: 95px !important;
    }
}
@media(max-width:767px){
    .user-img-wrap :deep() .user-img{
        left: 50%;
        width: 135px !important;
        height: 135px !important;
        bottom: -138px;
    }
    .user-img-wrap :deep() .user-img svg{
        width: 135px !important;
        height: 135px !important;
    }
}
@media(max-width:576px){
    .save-change-btn{
        /* right:12px; */
        display:none;
    }
    .save-change-btn-mobile{
        display: block;
    }
   
    .map-text{
        font-size:16px;
    }
    .user-img-wrap :deep() .user-img{
        width: 125px !important;
        height: 125px !important;
        bottom: -124px;
        left: 50%;
    }   
    .user-img-wrap :deep() .user-img svg{
        width: 125px !important;
        height: 125px !important;
    }
}
@media(max-width:360px){
    .user-img-wrap :deep() .user-img{
        width: 115px !important;
        height: 115px !important;
        bottom: -118px;
        left: 50%;
    }
    .user-img-wrap :deep() .user-img svg{
        width: 115px !important;
        height: 115px !important;
    }
}
/* ---rtl--- */
[data-direction= rtl] .user-img-wrap :deep() .user-img{
    right:unset;
    left:81.6%
}
[data-direction= rtl] .save-change-btn{
    left:30px;
    right:unset;
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .map-modal-close-btn{
    left:10px;
    right:unset;
}
[data-direction= rtl] .save-change-btn-mobile{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .info-title{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .edit-label{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .edit-input{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .city-dropdown{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .input-number{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .map-text{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .modal-map-btn{
    font-family: 'tajawal-medium';

}
[data-direction= rtl] .save-map-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .delete-map-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .modal-map-title{
    font-family: 'tajawal-bold';
}
@media (min-width:1440px){
    [data-direction= rtl] .user-img-wrap :deep() .user-img{
        /* right:263px; */
        right:120px;
        left:unset;
    }
}
@media(max-width:767px){
    [data-direction= rtl] .user-img-wrap :deep() .user-img{
        left: 50%;
        right:unset
    }
}   
@media (max-width:576px){
    [data-direction= rtl] .user-img-wrap .user-img {
        left:50%;
        right:unset
    }
}
.country_code_input{
    font-size: 1em;
    color: #092042;
    padding:7px;
}
.vue-tel-input:focus-within {
    box-shadow: none;
    border-color: var(--primary-color);
}
.country_code_input::placeholder{
    color:#E0E0E0;
    font-size:13px
}
.vti__dropdown-list{
    width: 430px;
}
</style>