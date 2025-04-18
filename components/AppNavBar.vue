<template>
    <div>
        <div class="container-fluid p-0 my-navbar home-navbar" id="home-navbar">
            <nav class="kutahya-navbar">
                <div class="container-fluid kutahya-container">
                    <NuxtLink :to="localPath('/')">
                        <LogoIcon class="logo-img" />
                        <LogoSmallIcon class="logo-small-img"/>
                    </NuxtLink>
                    <div class="switch-content">
                        <span class="switch-selected-text">{{ $t('Cars') }}</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="switch-circle"></span>
                        </label>
                        <span class="switch-unselected-text">{{ $t('Real estates') }}</span>
                    </div>
                    <ul class="kutahya-nav-list">
                        <NuxtLink :to="localPath('/')">
                            <li class="kutahya-nav-li kutahya-nav-li-active">{{ $t('Home') }}</li>
                        </NuxtLink>
                        <NuxtLink :to="localPath('/')">
                            <li class="kutahya-nav-li">{{ $t('Compare') }}</li>
                        </NuxtLink>
                        <NuxtLink :to="localPath('/services')">
                            <li class="kutahya-nav-li">{{ $t('Services')}}</li>
                        </NuxtLink>
                        <NuxtLink :to="localPath('/about')">
                            <li class="kutahya-nav-li">{{$t('About us')}}</li>
                        </NuxtLink>
                        <NuxtLink :to="localPath('/contact')">
                            <li class="kutahya-nav-li">{{$t('Contact us')}}</li>
                        </NuxtLink>
                    </ul>
                    <div class="navbar-wrap"> 
                        <NuxtLink :to="localPath('/login')" v-if="!loggedIn">
                            <button class="kutahya-btn-light">{{ $t('Log in') }}</button>
                        </NuxtLink>
                        
                        <div class="dropdown notification-dropdown-wrap" v-if="loggedIn">
                            <button class="btn dropdown-toggle notification-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <NotificationIcon class="notification-icon"/>
                                <span v-if="unRead != 0" class="button__badge">{{unRead}}</span>
                            </button>
                            <ul class="dropdown-menu notification-ul" aria-labelledby="dropdownMenuButton1">
                                <div class="notification-wrap">
                                    <span class="notification-title">{{ $t('Notifications') }}</span>
                                    <a href="#">
                                        <div class="notification-read">
                                            <TrueIcon class="true-icon"/>
                                            <span class="notification-span" @click="readAllNotifications()">{{$t('Mark all as read')}}</span>
                                        </div>
                                    </a>
                                </div>
                                <div v-if="notifications?.length == 0" style="display: flex;justify-content: center;align-items: center;height: 227px;">
                                    <EmptyNotifications/>
                                </div>
                                <div class="notification-li-content" @scroll="handleScroll" v-if="notifications?.length > 0">
                                    <li class="dropdown-item notification-li" v-for="notification in notifications" :key="notification?.id">
                                        <a @click="readNotification(notification)" href="#">
                                            <LightCircleIcon v-if="notification?.read != 1" class="light-circle"/>
                                            <div class="d-flex gap-2" style="border-bottom:1px solid #f2f2f2;padding-top: 12px;">
                                                <img v-if="notification?.icon" :src="`${notification?.icon}`" style="flex-shrink: 0;border-radius: 50%;" height="24" width="24">
                                                <LogoCarIcon v-if="notification?.icon == null" style="flex-shrink: 0;"/>
                                                <div class="notification-text-content">
                                                    <div class="notification-text">{{ notification?.message }}</div>
                                                    <div class="notification-date">{{notification?.date}}</div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li  style="display:flex;justify-content:center"><div class="lds-dual-ring" v-if="loading_loader"></div></li>    
                                </div>  
                            </ul>
                        </div>
                        <div class="navbar-user-wrap" v-if="loggedIn">
                            <div class="navbar-user">
                                <UserImage :image="user?.profile_image ? `${storage_url}/${user?.profile_image}` : null" class="user-img-nav"/>
                                <div class="dropdown kutahya-dropdown-wrap">
                                    <button class="btn dropdown-toggle kutahya-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {{user?.full_name}}
                                    </button>
                                    <ul class="dropdown-menu user-dropdown" aria-labelledby="dropdownMenuButton1">
                                        <li><NuxtLink :to="localPath('/profile')" class="dropdown-item user-item">{{ $t('My profile') }}</NuxtLink></li>
                                        <li><NuxtLink :to="localPath('/')" class="dropdown-item user-item">{{ $t('My orders') }}</NuxtLink></li>
                                        <li><NuxtLink :to="localPath('/')" class="dropdown-item user-item" @click="logout()">{{ $t('Logout') }}</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                            <NuxtLink to="/">
                                <button class="kutahya-btn-color">{{ $t('Publish your Ad') }}</button>
                            </NuxtLink>
                        </div>
                        <button  @click="openNav()" class="navbar-menu-btn" type="button">
                            <MenuIcon class="menu-icon"></MenuIcon>
                        </button>
                        <div class="sidenav" id="mySidenav">
                            <div class="mt-3 mb-4">
                                <a href="#" class="nav-close-link" @click="closeNav()"> 
                                    <CloseIcon class="nav-close-icon"/>
                                </a>
                                <div class="sidenav-title">{{$t('Menu')}}</div>
                            </div>
                           <div class="sidenav-content">
                                <ul class="sidenav-list">
                                    <NuxtLink :to="localPath('/')">
                                        <li class="sidenav-li sidenav-li-active">{{ $t('Home') }}</li>
                                    </NuxtLink>
                                    <NuxtLink :to="localPath('/')">
                                        <li class="sidenav-li">{{ $t('Compare') }}</li>
                                    </NuxtLink>
                                    <NuxtLink :to="localPath('/services')">
                                        <li class="sidenav-li">{{ $t('Services')}}</li>
                                    </NuxtLink>
                                    <NuxtLink :to="localPath('/about')">
                                        <li class="sidenav-li">{{$t('About us')}}</li>
                                    </NuxtLink>
                                    <NuxtLink :to="localPath('/contact')">
                                        <li class="sidenav-li">{{ $t('Contact us') }}</li>
                                    </NuxtLink>                                 
                                </ul>
                                                              
                                <div class="sidenav-user" v-if="loggedIn">
                                    <UserImage :image="user?.profile_image ? `${storage_url}/${user?.profile_image}` : null" class="user-img-nav"/>
                                    <div class="dropdown kutahya-dropdown-wrap">
                                        <button class="btn dropdown-toggle kutahya-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {{user?.full_name}}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><NuxtLink :to="localPath('/profile')" class="dropdown-item user-item">{{ $t('My profile') }}</NuxtLink></li>
                                            <li><NuxtLink :to="localPath('/')" class="dropdown-item user-item">{{ $t('My orders') }}</NuxtLink></li>
                                            <li><NuxtLink :to="localPath('/')" class="dropdown-item user-item" @click="logout()">{{ $t('Logout') }}</NuxtLink></li>
                                        </ul>
                                    </div>                                   
                                </div>
                                <div class="sidenav-btn-wrap" v-if="!loggedIn">
                                    <NuxtLink :to="localPath('/login')">
                                        <button class="sidenav-btn-light">{{ $t('Log in') }}</button>
                                    </NuxtLink>  
                                </div>
                                <div class="sidenav-user-btn-wrap" v-if="loggedIn">
                                    <NuxtLink :to="localPath('/')">
                                        <button class="sidenav-btn-color">{{ $t('Publish your Ad') }}</button>
                                    </NuxtLink>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useGeneralStore } from '~/store/general';
import axios from 'axios';
import authHeader from '~/services/auth-header';
export default{
    setup(){
        definePageMeta({
            middleware: 'public'
        })
        var storage_url = useRuntimeConfig().public.STORAGE_URL;
        const localPath = useLocalePath();
        return { storage_url, localPath }
    },
    data(){
        return{
            lastPosition: 0,
            swal : inject("$swal"),
            current_page:1,
            lock:true,
            loading_loader:false,
        }
    },
    methods:{
        ...mapActions(useGeneralStore, ['loadNotifications']),

        openNav(){
            document.getElementById("mySidenav").style.height = "100%";
        },
        closeNav(){
            document.getElementById("mySidenav").style.height = "0"; 
        },
        onScroll(){
            const navbar = document.querySelector('#home-navbar')
            window.addEventListener('scroll', function(e) {
                this.lastPosition = window.scrollY;
                if (this.lastPosition > 50 ) {
                    navbar?.classList.add('nav-active');
                } 
                else if (navbar?.classList.contains('nav-active')) {
                    navbar?.classList.remove('nav-active');
                }
                else {
                    navbar?.classList.remove('nav-active');
                }
            })
        },
        logout(){
            const store = useAuthStore();

            this.swal.fire({
                title: 'Are you sure you want to logout?' ,
                showDenyButton: true,
                showCancelButton: false,
                denyButtonText: "Logout from all devices",
                confirmButtonText: `Logout only from this device`,
                showCloseButton: true,
                customClass:{
                    title: "customTitle",
                    denyButton:'customDennyButton',
                    confirmButton: 'customConfirmButton',
                    popup: "customPopup",
                    closeButton:'customCloseButton'
                }
                }).then((result) => {
                if (result.isConfirmed){
                    store.logout(0);
                }else if (result.isDenied) {
                    store.logout(1);
                }
            },error=>{

            });
        },
        readNotification(item){
            var data = {
                'notifications_ids[0]':item.id
            }
            var api_url = useRuntimeConfig().public.API_URL;
            axios.post(`${api_url}/notifications/read`,data, {headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                useGeneralStore().loadNotifications();
            },error=>{
                
            });
        },
        readAllNotifications(){
            var api_url = useRuntimeConfig().public.API_URL;
            axios.post(`${api_url}/notifications/read/all`,{}, {headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                useGeneralStore().loadNotifications();
            },error=>{
                
            });
        },
        handleScroll: function(el) {
            if((el?.srcElement?.offsetHeight + el?.srcElement?.scrollTop) >= el?.srcElement?.scrollHeight) {
                this.showMore();
            }
        },
        showMore(){
            this.loading_loader=true;
            const store = useGeneralStore();
            if(this.lock==true){
                this.lock=false;
                store.loadNotifications(
                    this?.current_page_notification+1
                ).then((res) => {
                    this.loading_loader = false;
                    this.lock=true;
                    console.log('kkkk2');
                },error => {
                    this.loading_loader = false;
                });
            }
        },
    },
    mounted(){
        this.onScroll()
        useGeneralStore().loadNotifications();
    },
    computed:{
        ...mapState(useAuthStore, ['user', 'loggedIn']),
        ...mapState(useGeneralStore, ['notifications', 'current_page_notification', 'unRead', 'last_page_notification']),
    },
}

</script>

<style scoped>
/* navbar in home page */
.home :deep() .my-navbar{
    position: fixed;
    background-color:transparent;
    top: 0px;
    z-index: 11;
    transition: .3s;
    box-shadow: none;
}
.home :deep() .nav-active{
    background:#FFF;
    transition: .5s;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25); 
}
/* navbar in all pages */
.my-navbar{
    position: fixed;
    top: 0px;
    z-index: 11;
    background-color: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);  
}
.kutahya-navbar{
    padding: 12px 0 12px;
}
.kutahya-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo-img{
    width: 160px;
    height: 40px;
    object-fit: cover;
    margin-left:16px;
}
.logo-small-img{
    display: none;
}
.switch-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    
}
.switch-selected-text{
    color: var(--primary-color);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
}
.switch-unselected-text{
    color: var(--primary-color);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
}
.navbar-wrap{
    display: flex;
    align-items: center;
    gap: 30px;
}
.kutahya-nav-list{
    display:flex;
    align-items: center;
    margin-bottom:0!important;
    gap:10px;
    padding-left:0px !important;
}
.kutahya-nav-li{
    color:var(--primary-color);
    font-size:16px;
    font-weight: 500;
    padding:12px;
}
.kutahya-nav-li:hover{
    color:#F47D21;
}
.kutahya-nav-li-active{
    border-bottom: 1px solid #F47D21;
    background: rgba(244, 125, 33, 0.05);
    color:#F47D21;
    font-size:16px;
    font-weight: 700;
}
.kutahya-btn-color{
    padding: 9px 16px;
    border-radius: 5px;
    background: var(--primary-color, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%));
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    border: 1px solid var(--primary-color);
}
.kutahya-btn-color:hover{
    color:#FFF;
    background: #F47D21;
    border:1px solid #F47D21;
}
.kutahya-btn-light{
    font-size: 14px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    background:transparent;
    margin-right: 16px;
}
.kutahya-btn-light:hover{
    color:#FFF;
    background: #F47D21;
    border:1px solid #F47D21;
}
.navbar-user-wrap{
    display:flex;
    align-items:center;
    gap: 30px;
}
.navbar-user{
    display:flex;
    align-items:center;
}
.user-img-nav{
    border-radius:50%;
    width: 24px;
    height: 24px;
    object-fit:cover;
}
.user-img-nav :deep() img{
    border-radius:50%;
    width: 24px;
    height: 24px;
    object-fit:cover;
}
.user-img-nav :deep() svg{
    border-radius:50%;
    width: 24px;
    height: 24px;
    object-fit:cover;
}
.notification-dropdown{
    border: none;
    padding: 0;
}
.notification-dropdown:after{
    display:none;
}
.notification-icon{
    width: 20px;
    height: 20px;
}
.notification-icon:hover :deep() path{
    fill:#F47D21;
    stroke: #F47D21;
}
.notification-ul{
    width:371px;
    max-width:371px;
    height:285px;
    max-height:285px;
    top: 16px !important;
    left:-147px !important;
    position:absolute;
}

.notification-wrap{
    border-bottom:1px solid #f2f2f2;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-inline:16px;
    padding-top:12px;
    padding-bottom:10px;
}
.notification-title{
    font-size: 14px;
    font-weight: 600;
    color:var(--primary-color)
}
.notification-read{
    display:flex;
    align-items: center;
}
.notification-read:hover .true-icon :deep() path{
    stroke: #F47D21;
}
.notification-span{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    padding-left:5px;
}
.notification-li:active{
    background-color: #e9ecef;
}
.button__badge {
    background-color: #fa3e3e;
    border-radius: 4px;
    color: white;
    padding: 0px 3px;
    font-size: 10px;
    position: absolute;
    top: -4px;
    right: 0px;
}
.notification-read:hover .notification-span{
    color:#F47D21
}
.notification-li-content{
    overflow-y:auto;
    height: calc(100% - 67px);
}
.notification-li{
    position:relative;
}
.light-circle{
    position: absolute;
    width: 9px;
    height: 9px;
    top: 4px;
    left: 9px 
}
.notification-text{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    white-space: pre-wrap;
    padding-bottom:5px;
}
.notification-date{
    font-size: 12px;
    font-weight: 400;
    color:#a5acb8;
    margin-bottom: 5px;
    white-space: pre-wrap;
}
.navbar-menu-btn{
    display:none;
    border: none;
    background-color: transparent;
    padding: 0px;
    margin-right: 6px;
}
.menu-icon :deep() path{
    stroke: var(--primary-color);
}
.sidenav{
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    overflow-y: hidden;
    transition: 0.5s;
    text-align: left;
    background-color: white;
}
.sidenav-title{
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}
.nav-close-link{
    right: 0;
    position: absolute;
    margin-right: 18px;
    /* margin-right: 6px; */
}
.nav-close-icon{
    width:24px;
    height: 24px;
}
.nav-close-icon :deep() path{
    stroke:var(--primary-color)
}
.sidenav-content{
    height: calc(100% - 50px);
    overflow-y: auto;
}
.sidenav-list{
    padding-left:0!important;
    margin-bottom:0px!important;
}
.sidenav-li{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #E0E0E0;
    padding:20px;
}
.sidenav-li-active{
    color:#F47D21;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #F47D21;
    background: rgba(244, 125, 33, 0.05);
}
.sidenav-btn-wrap{
    display:flex;
    flex-direction: column;
    gap:16px;
    max-width: 350px;
    width: 100%;
    margin: 25px auto 20px;
}
.sidenav-btn-light{
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    color:var(--primary-color);
    font-size: 14px;
    font-weight: 600;
    padding:12px;
    width:100%;
}
.sidenav-btn-color{
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    padding:9px;
    width:100%;
}
.sidenav-btn-light{
    font-size: 14px;
    font-weight: 600;
    color:var(--primary-color);
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    padding:12px;
    width:100%;
    background: transparent;
}
.sidenav-user-btn-wrap{
    max-width: 350px;
    width: 100%;
    margin: 20px auto;
    padding-bottom: 20px;
}
.sidenav-user{
    display:flex;
    align-items:center;
    padding: 7px 18px;
    border-bottom: 1px solid #E0E0E0;
}
.kutahya-dropdown{
    border: none !important;
    padding-inline: 4px
}
.kutahya-dropdown:after{
    display: inline-block;
    vertical-align: -1px;
    content: "\f078";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    pointer-events: none;
    border: none;
    color: var(--primary-color);
}
.user-dropdown{
    position:absolute;
    top: 10px !important;
    left: -33px !important;
}
.user-item{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    background: #fff;
    padding:10px;
}
.user-item:hover{
    background: rgba(200, 219, 236, 0.40);
}
.kutahya-dropdown:active{
    border-color:transparent;
}
/* start The switch */
.switch {
  position: relative;
  display: inline-block;
  width: 29px;
  height: 17px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch-circle {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #BDBDBD;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
}
.switch-circle:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 12px;
    background-color: #fff;
    transition: .4s;
    border-radius: 8px;
}
input:checked + .switch-circle {
  background-color:#BDBDBD;
}
input:focus + .switch-circle {
  box-shadow: 0 0 1px #BDBDBD;
}
input:checked + .switch-circle:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}
/* end the switch */
/* start media */
@media (max-width:1323px){
    .kutahya-btn-color{
        font-size:13px;
        padding:10px;
    }
    .logo-img{
        width:160px;
    }
    
    .user-img-nav{
        margin-right: 0px;
    }
    .kutahya-nav-li{
        font-size: 15px;
        padding:12px 3px;
    }
    .kutahya-dropdown{
        padding-left:3px;
    }
    .kutahya-nav-list{
        gap:7px;
    }
    .navbar-wrap{
        gap:30px
    }
}
@media (max-width:1185px){
    .logo-img{
        width:130px;
    }
    .navbar-wrap{
        gap:30px;
        margin-right:unset;
    }
    
    .kutahya-nav-li-active{
        font-size: 14px;
    }
    .kutahya-nav-li{
        font-size: 14px;
    }
    .switch-content{
        gap:10px
    }
    .switch-selected-text{
        font-size: 13px;
    }
    .switch-unselected-text{
        font-size: 13px;
    } 
    .navbar-wrap{
        gap:15px;
    }
}
@media (max-width:1070px){
    .navbar-user-wrap{
        gap:10px;
    }
    .kutahya-nav-list{
        gap:6px;
    }
    .logo-img{
        width:110px;
    }
    .navbar-wrap{
        gap:7px;
    }
    .switch-content{
        gap:4px;
    }
    .switch-selected-text,
    .switch-unselected-text{
        font-size: 12px;
    }
    .kutahya-nav-li{
        font-size:13px;
        padding:7px;
    }
    
    .kutahya-btn-color, 
    .kutahya-btn-light{
        font-size: 12px;
        padding: 7px;
    }
}
@media (max-width:991px){
    .navbar-menu-btn{
        display:block;
    }
    .kutahya-nav-list,
    .navbar-user-wrap{
        display:none;
    }
    .switch-content{
        gap:12px;
        flex-grow:1;
        justify-content: unset;
        margin-left:20px;
    }
    .switch-selected-text,
    .switch-unselected-text{
        font-size: 14px;
    }
    .kutahya-btn-light{
        display:none;
    }
    .navbar-wrap{
        gap:0px;
    }
    .notification-dropdown-wrap{
        margin-right:20px;
    }
    .notification-ul{
        left:-318px !important;
    }
    
}

@media (max-width:576px) {
    .home-navbar{
        background-color: #fff;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .switch{
        width:27px;
        height: 17px;
    }
    /* .switch-circle::before{
        height: 9px;
        width:9px;
        left:3px;
        bottom:3px;
    } */
    .navbar-menu-btn{
        margin-right: unset;
    }
    .logo-img{
        display:none;
    }
    .logo-small-img{
        display: block;
        object-fit: cover;
        margin-left:16px;
    } 
    .notification-ul{
        width:290px;
        left:-245px !important;
        top:9px !important;
    }
}
@media (max-width:450px){
    .sidenav-btn-wrap,
    .sidenav-user-btn-wrap{
        max-width:280px;
    }
}
@media (max-width:400px){
    
    .switch-content{
        gap:4px;
        margin-left:15px
    }
    .switch-selected-text,
    .switch-unselected-text{
        font-size: 12px;
    }
    .notification-dropdown-wrap{
        margin-right:10px;
    }
    .logo-small-img{
        margin-left:0px
    }
    /* .navbar-logo{
        gap: 15px;
    } */
}
@media (max-width:338px){
    .notification-ul{
        left:-29px !important;
    }
}

/* end media */
/* ---rtl--- */
[data-direction= rtl] .logo-img{
    margin-left:unset;
    margin-right:16px;
}
[data-direction= rtl] .kutahya-nav-list{
    padding-left:unset;
    padding-right:0px !important;
}
[data-direction= rtl] .kutahya-btn-light{
    margin-right:unset;
    margin-left:16px;
}
[data-direction= rtl] .notification-ul{
    left: unset !important;
    right: -147px !important;
}
[data-direction= rtl] .notification-span{
    padding-left:unset;
    padding-right:5px;
    text-align:right;
}
[data-direction= rtl] .light-circle{
    left:unset;
    right:9px;
}
[data-direction= rtl] .navbar-menu-btn{
    margin-right:unset;
    margin-left:6px;
}
[data-direction= rtl] .nav-close-link{
    margin-left: 18px;
    margin-right:unset;
    left:0px;
    right:unset;
}
[data-direction= rtl] .sidenav-list{
    padding-right:0px !important;
    padding-left:unset;
}
[data-direction= rtl] .user-dropdown{
    right: -33px !important;
    left:unset;
    text-align: right;
}
[data-direction= rtl] input:checked + .switch-circle:before {
  -webkit-transform: translateX(-15px);
  -ms-transform: translateX(-15px);
  transform: translateX(-15px);
}
[data-direction= rtl] .sidenav{
    text-align: right;
}
[data-direction= rtl] .sidenav-user ul{
    text-align:right;
}
[data-direction= rtl] .switch-selected-text{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .switch-unselected-text{
    font-family: 'tajawal-light';
}
[data-direction= rtl] .kutahya-nav-li{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .kutahya-nav-li-active{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .kutahya-btn-color{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .kutahya-btn-light{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .notification-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .notification-span{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .notification-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .notification-date{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .sidenav-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .sidenav-li{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .sidenav-li-active{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .user-item{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .sidenav-btn-color{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .sidenav-btn-light{
    font-family: 'tajawal-bold';
}
@media(max-width:991px){
    [data-direction= rtl] .notification-ul{
        right:-318px !important;
        left:unset;
    }
    [data-direction= rtl] .switch-content{
        margin-right:20px;
        margin-left:unset;
    }
    [data-direction= rtl] .notification-dropdown-wrap{
        margin-left: 20px;
        margin-right:unset;
    }
}
@media(max-width:567px){
    [data-direction= rtl] .navbar-menu-btn{
        margin-left: unset;
    }
    [data-direction= rtl] .notification-ul{
        right:-245px !important;
        left:unset !important;
    }
}
@media(max-width:400px){
    [data-direction= rtl] .switch-content{
        margin-right:15px;
        margin-left:unset;
    }
    [data-direction= rtl] .notification-dropdown-wrap{
        margin-left:unset;
        margin-right:10px;
    }
}
@media (max-width:338px){
    [data-direction= rtl] .notification-ul{
        right:-29px !important;
        left:unset !important;
    }
}

</style>