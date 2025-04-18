<template>
    <div>
        <NuxtLayout name="auth">
            <!-- start login page -->
            <div class="auth-col1-wrap d-flex flex-column justify-content-around" v-if="step==1">
                <NuxtLink :to="localPath('/')" class="auth-logo-link"><LogoIcon class="auth-logo-icon"/></NuxtLink>
                <div class="auth-title-wrap">
                    <div class="auth-title">{{$t('Welcome in Kutahya')}} <span class="auth-title-color">.</span></div>
                    <div class="auth-text">{{$t('Login with your whatsApp number')}}</div>
                </div>
                <div class="auth-form-wrap">
                    <label class="kutahya-label" for="phone">{{$t('WhatsApp number')}}</label>
                    <vue-tel-input v-model="phone" :autoFormat="false" :defaultCountry="'IQ'" mode="international" :dropdownOptions="dropdownOptions" :inputOptions="inputOptions" v-on:country-changed="change_phone" :allCountries="allCountries" type="number" :class="{'border-error': v$?.phone?.$errors.length > 0}" @keypress="(e)=>isNumber(e)"></vue-tel-input>
                    <div v-for="(item, index) in v$?.phone?.$errors" :key="index" class="error-box">
                        <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                    </div>
                </div>
                <button class="auth-btn" @click="sendCode()">
                    <div class="lds-dual-ring" v-if="loading_loader"></div>
                    <template v-if="!loading_loader">{{ $t('Send code') }}</template>
                </button>
            </div>
            <!--start verification page -->
            <div class="auth-col1-wrap d-flex flex-column justify-content-around" v-if="step==2">
                <div class="signup-header-wrap">
                    <div style="cursor:pointer" @click="step='1'">
                        <div class="arrow-back">
                            <ArrowIcon class="arrow-icon"/>
                            <span class="signup-header-info">{{ $t('Back') }}</span>
                        </div>
                    </div>
                    <NuxtLink :to="localPath('/')" class="auth-logo-link"><LogoIcon class="auth-logo-icon"/></NuxtLink>
                </div>
                <div class="auth-title-wrap">
                    <div class="auth-title">{{ $t('Number Verification') }} <span class="auth-title-color">.</span></div>
                    <div class="auth-text">{{$t('Enter the verification code we just sent to your WhatsApp')}}</div>
                </div>
                <div class="auth-code-wrap">
                    <div class="input-code-content">
                        <input class="input-code" v-for="(n, index) in code" :key="index" type="text" :class="{'border-error': v$?.verificationCode?.$errors.length > 0 || verificationCode_error == true, 'input-code-complete':  code[index] != null}"
                        pattern="\d*" :id="'input_' + index" maxlength="1" v-model="code[index]" 
                        @input="handleInput"
                        @keypress="(e)=>isNumber(e)"
                        @keydown.delete="(e)=>handleDelete(e)"
                        @paste="(e)=>onPaste(e)"
                        />
                    </div>
                </div>
                <div v-for="(item, index) in v$?.verificationCode?.$errors" :key="index" class="error-box justify-content-center">
                    <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                </div>
                <button class="auth-btn" @click="verify()">
                    <div class="lds-dual-ring" v-if="loading_loader_code"></div>
                    <template v-if="!loading_loader_code">{{ $t('Verify') }}</template>
                </button>
                <div class="auth-question">{{ $t('Didn’t received code?') }}<span class="auth-question-color" @click="reSendCode()"> {{ $t('Resend') }}</span></div>
            </div>
            <!-- start sign up page -->
            <div v-if="step==3">
                <div class="auth-header">
                    <NuxtLink :to="localPath('/')" class="auth-logo-link"><LogoIcon class="auth-logo-icon"/></NuxtLink>   
                </div>
                <div class=" auth-col-wrap-scroll d-flex flex-column">
                    <div class="auth-title-wrap mt-2">
                        <div class="auth-title">{{ $t('New account') }} <span class="auth-title-color">.</span></div>
                    </div>
                    <div class="auth-form-wrap mt-3">
                        <label class="kutahya-label d-block">{{ $t('Full Name') }} <span class="kutahya-label-color">*</span></label>
                        <input class="kutahya-input" type="text" :placeholder="$t('Enter your name')" v-model="full_name" :class="{'border-error': v$?.full_name?.$errors.length > 0}" >
                        <div v-for="(item, index) in v$?.full_name?.$errors" :key="index" class="error-box">
                            <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                        </div>
                    </div>
                    <div class="auth-form-wrap mt-3">
                        <label class="kutahya-label d-block">{{ $t('city') }} <span class="kutahya-label-color">*</span></label>
                        <v-select class="custom_v_select" :options="cities" @search="searchCities" v-model="city_id" :loading="searchCitiesLoading" :class="{'border-error': v$?.city_id?.$errors.length > 0}" :placeholder="$t('Choose your city..')"></v-select>

                        <div v-for="(item, index) in v$?.city_id?.$errors" :key="index" class="error-box">
                            <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                        </div>
                    </div>
                    <div class="auth-form-wrap mt-3">
                        <label class="kutahya-label d-block">{{ $t('Email') }} </label>
                        <input class="kutahya-input" type="email" :placeholder="$t('Enter your email')" v-model="email" :class="{'border-error': v$?.email?.$errors.length > 0}">
                        <div v-for="(item, index) in v$?.email?.$errors" :key="index" class="error-box">
                            <AlertIcon/><div class="wrong-message" v-if="item.$message">{{_t(item.$message)}}</div>
                        </div>
                    </div>
                    <button class="auth-btn mt-4 mb-4" @click="createAccount()">
                        <div class="lds-dual-ring" v-if="loading_loader_create_account"></div>
                        <template v-if="!loading_loader_create_account">{{$t('Create account')}}</template>
                    </button>
                    <!-- <NuxtLink class="auth-btn mt-4 mb-4" to="/" @click="createAccount()">Create account</NuxtLink>  -->
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>
<script>
import axios from 'axios';
import AuthService from '~/services/auth-service';
import {useVuelidate} from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import { useAuthStore } from '~/store/auth';
import { _t } from '../helpers.js'

export default{
    setup(){
        definePageMeta({
            middleware: 'guest'
        })
        function createDebounce() {
            let timeout = null;
            return function (fnc, delayMs) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    fnc();
                }, delayMs || 500);
            };
        }
        const { isNumber,handleDelete,onPaste,handleInputCustom,verificationCode} = useVerificationCode();
        const localPath = useLocalePath();
        return{
            isNumber,
            handleDelete,
            onPaste,
            handleInputCustom,
            verificationCode,
            v$: useVuelidate(),
            debounce: createDebounce(),
            localPath
        }
    },
    data(){
        return{
            step:'1',
            phone:'',
            phone_country_id:'',
            loading_loader:false,
            allCountries:[{ 
                id:107,
                name:'Iraq',
                iso2:'IQ',
                dialCode:'964'
            }],
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
                showFlags:true
            },
            code :Array(4),
            loading_loader_code:false,
            vuelidateExternalResults: {
                phone:[],
                phone_country_id:[],
                email:[]
            },
            loading_loader_create_account:false,
            city_id:'',
            full_name:'',
            email:'',
            searchCitiesLoading:false,
            cities:[],
            swal : inject("$swal"),
            verificationCode_error:false

        }
    },
    validations() {
        if(this.step == '1'){
            return {
                phone: { required: helpers.withMessage('_.required.mobile number', required) },
                phone_country_id: { required: helpers.withMessage('_.required.mobile number', required) },
            }
        }
        if(this.step == '2'){
            return {
                verificationCode: { required: helpers.withMessage('_.required.code', required) },
            }
        }
        if(this.step == '3'){
            return {
                verificationCode: { required: helpers.withMessage('_.required.code', required) },
                full_name: { required: helpers.withMessage('_.required.full_name', required) },
                email: { email: helpers.withMessage('_.required.email', email)  },
                city_id: { required: helpers.withMessage('_.required.city', required) },
            }
        }
    },
    mounted(){
        var api_url = useRuntimeConfig().public.API_URL;

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
    },
    methods:{
        _t(message){return _t(message, this.$t);},

        change_phone(e){
            this.phone_country_id = e.id;
        },
        sortNumbers(array) {
            return array.sort((a, b) => (a.name > b.name) ? 1 : -1)
        },
        handleInput(e) {
            this.handleInputCustom(e,this.code)
        },
        sendCode(){
            this.vuelidateExternalResults.phone = [];
            this.vuelidateExternalResults.phone_country_id = [];
            
            this.v$.$touch();
            if (this.v$.$invalid) {
                return;
            }
            this.loading_loader = true;

            AuthService.sendCode({country_id:this.phone_country_id, phone: this.phone}).then((res) => {
                this.step = '2'
                this.loading_loader = false;
            },error =>{
                this.loading_loader = false;
                if(error.response.status==422){
                    var errors = error.response.data.errors;
                    this.vuelidateExternalResults.phone = errors.phone??[];
                    this.vuelidateExternalResults.phone_country_id = errors.phone_country_id??[];
                }
            });
        },
        verify(){        
            this.vuelidateExternalResults.errors = [];
    
            this.v$.$touch();
            if (this.v$.$invalid) {
                return;
            }
            this.loading_loader_code=true;
            AuthService.verify({country_id:this.phone_country_id, phone: this.phone, code: this.verificationCode}).then((res) => {
                this.loading_loader_code=false;
                const store = useAuthStore();
                if(res?.data?.user != null){
                    store.loggedIn = true;
                    store.user = res?.data?.user;
                    var goto = localStorage.getItem('go-to');
                    localStorage.setItem('token',res.data.token)
                    localStorage.setItem('remember_token',res.data.remember_token)
                    localStorage.setItem('user',JSON.stringify(res.data.user))
                    this.$router.push(goto ?? '/');
                }else{
                    this.step = '3';
                    store.loggedIn = false;
                    localStorage.setItem('temp_token',res.data.token)
                    localStorage.setItem('temp_remember_token',res.data.remember_token)
                }
            },error =>{
                this.loading_loader_code=false;
                if(error.response.status==400){
                    var errors = error.response.data.errors;
                    this.verificationCode_error = true;
                }
            });
        },
        reSendCode(){
            AuthService.sendCode({country_id:this.phone_country_id, phone: this.phone}).then((res) => {
                this.swal.fire({
                    ...Toast,
                    iconHtml: '<img src="/img/toast-success.svg"/>',
                    title: 'The code has been send successfully',
                    timerProgressBar: true,
                    customClass: {
                        popup: 'toastContainerCustom',
                        icon:'toastCustomIcon',
                        title:'toastCustomText',
						timerProgressBar:'toastCustomIProgressBarSuccess'
					},
                });
            },error =>{
                
            });
        },
        createAccount() {
            this.vuelidateExternalResults.full_name = [];
            this.vuelidateExternalResults.city_id = [];
            this.vuelidateExternalResults.email = [];

            this.v$.$touch();
            if (this.v$.$invalid) {
                return;
            }
            this.loading_loader_create_account = true;
            const store = useAuthStore();
            store.register({
                full_name:this.full_name,
                email:this.email,
                city_id:this.city_id?.id,
                phone:this.phone,
                phone_country_id:this.phone_country_id,
            }).then((res) => {
                localStorage.setItem('token',localStorage.getItem('temp_token'))
                localStorage.setItem('remember_token',localStorage.getItem('temp_remember_token'))
                localStorage.removeItem('temp_token')
                localStorage.removeItem('temp_remember_token')
                this.$router.push(this.localPath('/'));
                this.loading_loader_create_account = false;
            },error => {
                this.loading_loader_create_account = false;
                if(error.response.status==422){
                    var errors = error.response.data.errors;
                    this.vuelidateExternalResults.full_name = errors.full_name??[];
                    this.vuelidateExternalResults.city_id = errors.city_id??[];
                    this.vuelidateExternalResults.phone = errors.phone??[];
                    this.vuelidateExternalResults.email = errors.email??[];
                    this.vuelidateExternalResults.phone_country_id = errors.phone_country_id??[];
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
        }
    },
}
</script>
<style>
/* start login page */
.auth-logo{
    text-align: center;
}
/* start verification page */
.signup-header-wrap{
    margin-top: 26px;
}
.auth-code-wrap{
    max-width: 430px;
    width: 100%;
    display: flex;
    margin-inline: auto;
    flex-direction: column;
    margin-top: 30px;
}
.input-code-content{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;
}
.input-code{
    border-radius: 8px;
    border: 1px solid  #E0E0E0;
    background: #F7F8F9;
    /* width: 88px; */
    width:20%;
    /* height: 75px; */
    aspect-ratio: 5/4;
    font-weight: 600;
    font-size: 24px;
    color: var(--primary-color);
    text-align: center;
    outline:none;
    margin-left:8px;
    padding: 8px;
}
.input-code:focus{
    border: 1px solid var(--primary-color);
    background: #FFF;
}
.input-code-complete{
    border: 1px solid var(--primary-color);
    background: #FFF;
}
.auth-question{
    color: var(--primary-color);
    text-align: center;
    font-size: 14px;
    font-weight: 500;
}
.auth-question-color{
    color:#F47D21;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
}
.auth-btn{
    height:50px
}
.auth-btn:hover{
    color:#fff;
}
.border-error{
    border: 1px solid  #EB5757;
}
@media (max-width:576px) {
    .input-code{
        width:23%;
        margin-left: 4px;
        font-size: 20px;
    }
    .auth-code-wrap{
        margin-top: 12px;
    }
    /* .auth-logo-link {
        margin-inline: unset;
    } */
    
}
/* start sign up page */
.auth-header{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 100px;
    margin-top: 50px;
    margin-bottom:25px;
}
.auth-step{
    color: #BDBDBD;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
}
.auth-person-info{
    color: #8692A6;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
}
.kutahya-label-color{
    color:#f47d21;
}

.type-account-wrap{
    display: flex;
    flex-direction: column;
    /* gap:24px; */
}
.type-text{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    margin-bottom:8px;
}
.type-account{
    border-radius: 6px;
    border: 1px solid  #E0E0E0;
    background: #FFF;
    padding:28px;
    display: flex;
    gap:20px;
}
.type-account-active{
    border-radius: 6px;
    border: 1px solid var(--primary-color);
    background: #F5F9FF;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
}
.type-account-title{
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;

}
.type-account-text{
    color: #8692A6;
    font-size: 14px;
    font-weight: 400;
}
.step-wrap-mobile{
    display:none;
}
.signup-icon{
    width: 52px;
    height: 52px;
    flex-shrink: 0;
}
.kutahya-input-dropdown{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid #E0E0E0 ;
    background: #FFF;
    padding:9px 13px 9px 24px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    width:100%;
    color:#E0E0E0 !important;
}
.kutahya-input-dropdown:focus{
    border: 1px solid var(--primary-color);
}
.main-dropdown::after{
    color: var(--primary-color);
}
.dropdown-list{
    width:100%;
}
.auth-col-wrap-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 120px);
    padding-right: 5px;
}
.auth-col-wrap-scroll::-webkit-scrollbar {
    width: 4px;
}
.auth-col-wrap-scroll::-webkit-scrollbar-track {
    background-color: #ccc;
}
.auth-col-wrap-scroll::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #8692A6;
}
.auth-col-wrap-scroll::-webkit-scrollbar-thumb:hover {
    background-color: #f47d21;
}

@media (max-width:991px){
    .auth-header{
        justify-content: space-between;
        gap:unset;
    }
     .step-wrap{
        display:none;
    }
    .step-wrap-mobile{
        display:block;
    }
    .auth-step{
        text-align: left;
    }
    .signup-header-info{
        text-align: left;
    }
}
@media (max-width:768px) {
     .step-wrap{
        display:block;
    }
    .step-wrap-mobile{
        display:none;
    }
    .auth-step{
        text-align: right;
    }
    .signup-header-info{
        text-align: right;
    }
}
@media (max-width:576px){
    .auth-header{
        justify-content: unset;
        align-items: unset;
        gap: 15px;
        flex-direction: column;
        margin-top: 35px;
    }
    .auth-step{
        text-align: left;
    }
    .auth-person-info{
        text-align: left;
    }
    .step-wrap{
        display:none;
    }
    .step-wrap-mobile{
        display:block;
    }
    .auth-step{
        text-align: left;
    }
    .signup-header-info{
        text-align: left;
    }
    .arrow-back{
        gap:3px;
    } 
}
@media (max-width:400px) {
    .type-account{
        padding:15px;
    }
}
/* ---rtl--- */
[data-direction= rtl] .input-code{
    margin-right:8px;
    margin-left:unset;
}
[data-direction= rtl] .auth-col-wrap-scroll{
    padding-left:5px;
    padding-right:unset;
}
[data-direction= rtl] .arrow-icon{
    transform: rotate(177deg);
}
[data-direction= rtl] .input-code{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .auth-question{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .auth-question-color{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .auth-step{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .auth-person-info{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .type-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .type-account-title{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .type-account-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .kutahya-input-dropdown{
    font-family: 'tajawal-regular';
}
@media(max-width:576px){
    [data-direction= rtl] .input-code{
        margin-right:4px;
    }
}
</style>