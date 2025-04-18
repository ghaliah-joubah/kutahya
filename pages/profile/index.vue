<template>
    <div>
        <NuxtLayout name="website">
            <section class="mb-5">
                <div class="profile-main-img">
                    <img :src="myProfile?.cover_image ? myProfile?.cover_image : '/img/profile-cover.png'" class="cover-img" >
                    <img class="white-cover-img" src="/img/profile-white-cover.png">
                    <img class="white-cover-mobile-img" src="/img/white-cover-mobile.png">
                    <div class="user-img-wrap">
                        <UserImage :image="myProfile?.profile_image ? myProfile?.profile_image : null" class="user-img"/>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xxl-3 col-md-4">
                            <div class="col1">
                                <!-- in business account -->
                                <div class="ad-show-name">{{myProfile?.full_name}}</div>
                                <!-- in business account only -->
                                <div class="balance-wrap" v-if="business_account">
                                    <div class="d-flex align-items-center">
                                        <BalanceIcon />
                                        <div class="balance-text">{{$t('My Balance')}}</div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="balance-type">{{ myProfile?.vip_ads }} {{$t('VIP Ads')}}</div>
                                        <div class="balance-line"></div>
                                        <div class="balance-type">{{ myProfile?.normal_ads }} {{ $t('Normal Ads') }}</div>
                                    </div>
                                </div>
                                <!-- in business and normal account -->
                                <NuxtLink :to="localPath('/profile/edit')" style="display: block;width: fit-content;margin: auto;"><div class="edit-profile">{{ $t('Edit profile') }}</div></NuxtLink>                            
                                <div class="line"></div>
                                <!-- business account -->
                                <div class="personal-info-wrap" v-if="business_account">
                                    <div v-if="myProfile?.bio != null">
                                        <div class="bio-title">{{$t('Bio')}}</div>
                                        <div class="bio-text">{{ myProfile?.bio }}</div>
                                    </div>
                                    <div class="personal-info">
                                        <div>
                                            <LocationColorIcon />
                                            <span class="info-text">{{myProfile?.city?.translations?.name[locale]}}</span>
                                        </div>
                                        <div v-if="myProfile?.email != null">
                                            <MessageIcon />
                                            <a class="info-email" :href="`mailto:${myProfile?.email}`">{{ myProfile?.email }}</a>
                                        </div>
                                    </div>
                                    <div class="location-title">{{$t('Location')}}</div>
                                    <iframe class="profile-private-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103031.41483533254!2d44.091365303448654!3d36.19740609671596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhCwgS3VyZGlzdGFuIFJlZ2lvbtiMINin2YTYudix2KfZgg!5e0!3m2!1sar!2snl!4v1704373261047!5m2!1sar!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <div class="media-wrap">
                                        <a v-if="myProfile?.facebook_url != null" :href="myProfile?.facebook_url"><FacebookIcon class="media-icon"/></a>
                                        <a v-if="myProfile?.instagram_url != null" :href="myProfile?.instagram_url"><InstagramIcon class="media-icon"/></a>
                                        <a :href="`tel:${myProfile?.phone}`"><WatsAppIcon class="media-icon"/></a>
                                    </div>
                                </div>
                                <!-- normal user profile -->
                                <div class="normal-user-info-wrap" v-if="!business_account">
                                    <a :href="`tel:${myProfile?.phone}`" class="normal-user-info-link" v-if="myProfile?.phone != null">
                                        <div class="d-flex align-items-center gap-1 mb-3">
                                            <WatsAppIcon class="normal-info-icon"/>
                                            <div class="normal-user-info-text">{{ myProfile?.phone }}</div>
                                        </div>
                                    </a>
                                    <a href="#" class="normal-user-info-link" v-if="myProfile?.city != null">                                     
                                        <div class="d-flex align-items-center gap-1 mb-3">
                                            <LocationColorIcon />
                                            <div class="normal-user-info-text">{{myProfile?.city?.translations?.name[locale]}}</div>
                                        </div>
                                    </a>
                                    <a :href="`mailto:${myProfile?.email}`" class="normal-user-info-link" v-if="myProfile?.email != null">                                      
                                        <div class="d-flex align-items-center gap-1">
                                            <MessageIcon />
                                            <div class="normal-user-info-text">{{ myProfile?.email }}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-9 col-md-8">
                            <div class="col2">
                                <div class="tabs-wrap">
                                    <ul class="nav nav-pills profile-ul" id="pills-tab" role="tablist">
                                        <li class="nav-item profile-nav-item" role="presentation">
                                            <button class="nav-link profile-nav-link profile-nav-link-mobile" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab" aria-controls="pills-info" aria-selected="true">{{ $t('Info') }}</button>
                                        </li>
                                        <li class="nav-item profile-nav-item" role="presentation">
                                            <button @click="show_gallery_btn = false" class="nav-link profile-nav-link active" id="pills-ads-tab" data-bs-toggle="pill" data-bs-target="#pills-ads" type="button" role="tab" aria-controls="pills-ads" aria-selected="true">{{ $t('My Ads') }}</button>
                                        </li>
                                        <li class="nav-item profile-nav-item" role="presentation">
                                            <button @click="show_gallery_btn = false" class="nav-link profile-nav-link" id="pills-favorite-tab" data-bs-toggle="pill" data-bs-target="#pills-favorite" type="button" role="tab" aria-controls="pills-favorite" aria-selected="false">{{$t('Favorites')}}</button>
                                        </li>
                                        <li class="nav-item profile-nav-item" role="presentation">
                                            <button @click="show_gallery_btn = true" class="nav-link profile-nav-link" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery" type="button" role="tab" aria-controls="pills-gallery" aria-selected="false">{{ $t('Gallery') }}</button>
                                        </li>
                                    </ul>
                                    <div class="show-style-wrap" v-if="!show_gallery_btn">
                                        <div @click="view_as= 'list'" :class="{active_style : view_as=='list'}" style="cursor: pointer;">
                                            <ListIcon class="list-icon"/>
                                            <span class="show-style" >{{$t('List')}}</span>
                                        </div>
                                        <div class="show-style-line"></div>
                                        <div @click="view_as= 'grid'" :class="{active_style : view_as=='grid'}" style="cursor: pointer;">
                                            <GridIcon class="grid-icon"/>
                                            <span class="show-style">{{ $t('Grid') }}</span>
                                        </div>
                                    </div>
                                    <!-- in gallery only -->
                                    <label for="show_gallery" v-if="show_gallery_btn">
                                        <div class="upload-media-wrap" :class="{'disabled_gallery_btn' : loading_media}" >
                                            <PlusIcon class="upload-media-icon mx-1"/>
                                            <span class="upload-media-text" >{{$t('Upload media')}}
                                                <input type="file" class="d-none" id="show_gallery" :disabled="loading_media" @change="postMedia($event)"/>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <div class="tab-content profile-tap-content" id="pills-tabContent" @scroll="handleScroll">
                                    <div class="tab-pane fade" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">
                                        <!-- in business account -->
                                        <div v-if="business_account">
                                            <div v-if="myProfile?.bio">
                                                <div class="bio-title">{{ $t('Bio') }}</div>
                                                <div class="bio-text">{{ myProfile?.bio }}</div>
                                            </div>
                                            <div class="personal-info">
                                                <div>
                                                    <LocationColorIcon />
                                                    <span class="info-text">{{myProfile?.city?.translations?.name[locale]}}</span>
                                                </div>
                                                <div v-if="myProfile?.email">
                                                    <MessageIcon />
                                                    <a class="info-email" :href="`mailto:${myProfile?.email}`">{{ myProfile?.email }}</a>
                                                </div>
                                            </div>
                                            <div class="location-title">{{ $t('Location') }}</div>
                                            <iframe class="profile-private-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103031.41483533254!2d44.091365303448654!3d36.19740609671596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhCwgS3VyZGlzdGFuIFJlZ2lvbtiMINin2YTYudix2KfZgg!5e0!3m2!1sar!2snl!4v1704373261047!5m2!1sar!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            <div class="media-wrap">
                                                <a v-if="myProfile?.facebook_url != null" :href="myProfile?.facebook_url"><FacebookIcon class="media-icon"/></a>
                                                <a v-if="myProfile?.instagram_url != null" :href="myProfile?.instagram_url"><InstagramIcon class="media-icon"/></a>
                                                <a :href="`tel:${myProfile?.phone}`"><WatsAppIcon class="media-icon"/></a>
                                            </div>
                                        </div>
                                        <!-- in normal account -->
                                        <div class="normal-user-info-wrap-mobile" v-if="!business_account">
                                            <a :href="`tel:${myProfile?.phone}`" class="normal-user-info-link">
                                                <div class="d-flex align-items-center gap-1 mb-3">
                                                    <WatsAppIcon class="normal-info-icon"/>
                                                    <div class="normal-user-info-text">{{ myProfile?.phone }}</div>
                                                </div>
                                            </a>
                                            <a href="#" class="normal-user-info-link" v-if="myProfile?.city">                                     
                                                <div class="d-flex align-items-center gap-1 mb-3">
                                                    <LocationColorIcon />
                                                    <div class="normal-user-info-text">{{myProfile?.city?.translations?.name[locale]}}</div>
                                                </div>
                                            </a>
                                            <a :href="`mailto:${myProfile?.email}`" class="normal-user-info-link" v-if="myProfile?.email">                                      
                                                <div class="d-flex align-items-center gap-1">
                                                    <MessageIcon />
                                                    <div class="normal-user-info-text">{{ myProfile?.email }}</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade show active" id="pills-ads" role="tabpanel" aria-labelledby="pills-ads-tab">
                                        <div class="profile-card-wrap" :class="{'list': view_as == 'list', 'grid': view_as == 'grid'}" v-if="true">
                                            <div class="profile-card-content" v-for="card in 5" :key="card">
                                                <FeaturedCarsCard class="profile-card" :view_as="view_as" />
                                            </div>
                                        </div>
                                        <!-- in empty state -->
                                        <div v-if="false">
                                            <img class="profile-empty-img" src="/img/profile-empty.png">
                                            <div class="profile-empty-title">{{ $t('NO Ads Yet') }}</div>
                                            <div class="profile-empty-text">{{ $t('Share your offers with community') }}</div>
                                            <NuxtLink :to="localPath('/')"><div class="profile-empty-publish">{{ $t('Publish your Ad') }}</div></NuxtLink>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-favorite" role="tabpanel" aria-labelledby="pills-favorite-tab">
                                        <div class="profile-card-wrap" :class="{'list': view_as == 'list', 'grid': view_as == 'grid'}" v-if="true">
                                            <div class="profile-card-content" v-for="card in 5" :key="card">
                                                <FeaturedCarsCard class="profile-card" :view_as="view_as" />
                                            </div>
                                        </div>
                                        <!-- in empty state -->
                                        <div v-if="false">
                                            <img class="profile-empty-img" src="/img/profile-empty.png">
                                            <div class="profile-empty-title">{{$t('No favorites yet')}}</div>
                                            <div class="profile-empty-text">{{$t('You will find your favorite Ads here,Browse to find the best Ads')}}</div>
                                            <NuxtLink :to="localPath('/')"><div class="profile-empty-publish">{{ $t('Browse our Ads') }}</div></NuxtLink>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab" >
                                        <!-- in business account only -->
                                        <div class="gallery-media-wrap" v-if="business_account && gallery.length > 0"> 
                                            <!-- upload media button in mobile only -->
                                            <div class="add-media-btn" >
                                                <label for="show_gallery" v-if="show_gallery_btn">
                                                    <AddMedia class="add-media-img"/>
                                                    <div class="add-media-text">{{$t('Add photos / videos')}}</div>
                                                    <input type="file" class="d-none" id="show_gallery" :disabled="loading_media" @change="postMedia($event)"/>
                                                </label>
                                            </div>
                                            <div class="gallery-media-content" v-for="media in gallery" :key="media?.id">
                                                <DeleteIcon class="delete-icon" @click="deleteMedia(media?.id)"/>                                      
                                                <img class="gallery-media" :src="`${storage_url}`+'/'+media?.file" v-if="media?.media_property == 'image'">
                                                <video class="gallery-media" autoplay controls v-if="media?.media_property == 'video'">
                                                    <source :src="`${storage_url}`+'/'+media?.file" type="video/mp4">
                                                </video>
                                            </div>
                                            <div :class="{'gallery-media-empty' : loading_media }" >
                                                <div class="lds-dual-ring position-absolute" v-if="loading_media" style="top:50%; right:40%; transform:translate(-50%, -50%)"></div>
                                            </div>
                                        </div>
                                        <div class="lds-dual-ring d-block m-auto" v-if="get_gallery_loader"></div>
                                        <!-- in business account but not found gallery -->
                                        <div v-if="business_account && gallery.length == 0">
                                            <img class="gallery-empty-img" src="/img/profile-gallery-empty.png">
                                            <div class="gallery-empty-title">{{$t('No items yet')}}</div>
                                            <div class="gallery-empty-text">{{ $t('Share your business photos and videos with community') }}</div>
                                        </div>
                                        <!-- in normal account only -->
                                        <div v-if="!business_account">
                                            <img class="normal-gallery-img" src="/img/normal-user-gallery.png">
                                            <div class="normal-gallery-text">{{$t('This feature is only for car shows and real estates offices,If you are one of them send us a conversion request.')}}</div>
                                            <!-- Button send request modal -->
                                            <button type="button" class="btn-request" data-bs-toggle="modal" data-bs-target="#SendRequestModal" v-if="true">
                                                {{ $t('Send request') }}
                                            </button> 
                                            <BuyModal />
                                            <!-- in case cancel request only-->
                                            <div v-if="false">
                                                <button class="btn-requested-disabled">{{$t('Requested')}}</button>
                                                <button type="button" class="btn-cancel-request" data-bs-toggle="modal" data-bs-target="#RequestedModal">
                                                    {{$t('Cancel the request')}}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { useAuthStore } from '~/store/auth';
import axios from 'axios';
import authHeader from '~/services/auth-header';
export default{
    setup(){
        definePageMeta({
            middleware: 'auth'
        });
        const localPath = useLocalePath();
        var storage_url = useRuntimeConfig().public.STORAGE_URL;

        const { locale } = useI18n();
        return { localPath, locale, storage_url }
    },
    data(){
        return{
            view_as:'grid',
            business_account:false,
            myProfile:{},
            show_gallery_btn:false,
            gallery:[],
            media:'',
            swal : inject("$swal"),
            loading_media: false,
            current_page:1,
            lock:true,
            get_gallery_loader: false,
            dd:false,
            last_page:100

        }
    },
    mounted(){
        this.business_account = this.user?.type !== 'individual' ? true : false;
        this.getUserInfo();
        this.$watch('user', (newVal) => {
            if (newVal) {
                if(this.business_account == true ){
                    this.getGallery()
                }
            }
        });
    },
    methods:{
        getUserInfo(){
            const authStore = useAuthStore();
            authStore.getUser().then((res) => {
                this.myProfile = {...res.data}
            })
        },
        getGallery(){
            var api_url = useRuntimeConfig().public.API_URL;
            this.current_page = 1;
            axios.get(`${api_url}/media?per_page=9`, {headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
            }).then(res=>{
                this.gallery = res?.data?.data;
                this.last_page = res?.data?.meta?.last_page;
            });
        },
        postMedia(event){
            this.loading_media=true;
            var api_url = useRuntimeConfig().public.API_URL;
            this.media = event.target.files[0];
            var mimeType = this.media?.type;
            if (mimeType && mimeType.startsWith('image/')) {
                var data = { 
                    'media_images[0]' : this.media,
                };
            } else if (mimeType && mimeType.startsWith('video/')) {
                var data = { 
                    'media_videos[0]': this.media
                };
            }
            
            var formData = new FormData();
            Object.keys(data).forEach((key) => {
                if((!['media_images[0]', 'video_images[0]'].includes(key)) || (data[key] != null && data[key] != "")){
                    formData.append(key, data[key]);
                }
            }); 

            axios.post(`${api_url}/media`, formData, {headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
            }).then((res) => {
                this.loading_media=false;
                // this.gallery = res?.data?.media;
                this.getGallery();
            },error=>{
                this.loading_media=false;
            });
        },
        deleteMedia(id){
            var api_url = useRuntimeConfig().public.API_URL;

            this.swal.fire({
                title: 'Are you sure?' ,
                confirmButtonText: 'yes',
                showCancelButton: true,
                cancelButtonText: 'cancel',
                showCloseButton: true,
                customClass:{
                    title: "customTitle",
                    confirmButton: 'customDennyButton',
                    cancelButton: 'customConfirmButton',
                    popup: "customPopup",
                    closeButton:'customCloseButton'
                }
                }).then((result) => {
                if (result.isConfirmed){
                    axios.delete(`${api_url}/media/${id}`, {headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
                    }).then(res=>{
                        this.current_page = 1
                        this.getGallery();
                        this.swal.fire({
                            ...Toast,
                            iconHtml: '<img src="/img/toast-success.svg"/>',
                            title: 'deleted successfully',
                            timerProgressBar: true,
                            customClass: {
                                popup: 'toastContainerCustom',
                                icon:'toastCustomIcon',
                                title:'toastCustomText',
                                timerProgressBar:'toastCustomIProgressBarSuccess'
                            },
                        });
                    });
                }
            },error=>{

            });
        },
        handleScroll: function(el) {
            if((el?.srcElement?.offsetHeight + el?.srcElement?.scrollTop) >= el?.srcElement?.scrollHeight) {
                if(this.last_page > this.current_page){
                    this.getMoreMedia();
                }
            }
        },
        getMoreMedia(){
            var api_url = useRuntimeConfig().public.API_URL;
            if(this.lock==true){
                this.lock=false;
                this.get_gallery_loader = true;
                this.current_page = this.current_page + 1;
                axios.get(`${api_url}/media?page=${this.current_page}&per_page=9`, {headers: {...authHeader(),'Content-Type': 'multipart/form-data'}
                }).then(res=>{
                    // if(this.current_page == 1){
                    //     this.gallery = res?.data?.data;
                    // }
                    // if(this.current_page > 1){
                        var next_page = res?.data?.data;
                        this.gallery.push( ...next_page);
                    // }
                    this.lock=true;
                    this.last_page = res?.data?.meta?.last_page;
                    this.get_gallery_loader = false;
                });
            }
        }
    },
    computed:{
        ...mapState(useAuthStore, ['user', 'loggedIn']),
    },
    watch:{
        user(_new, _old){
            this.business_account = this.user?.type !== 'individual' ? true : false;
        },
        // media(_new, _old){
        //     this.dd = true;
        // }
    }
}
</script>
<style scoped>
/* .white-cover-img{
    z-index:-1;
} */
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
.edit-icon-wrap:hover .edit-icon :deep() path{
    stroke: #F47D21;
    fill:#F47D21;
}
.user-edit-icon-wrap:hover .user-edit-icon :deep() path{
    stroke: #F47D21;
    fill:#F47D21;
}
.col1{
    margin-top:94px;
    padding-left:55px
}
.ad-show-name{
    color:var(--primary-color);
    text-align: center;
    font-weight: 600;
    font-size: 18px;
}
.balance-wrap{
    border-radius: 5px;
    background: #FFF8E8;
    padding:4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:16px auto;
    max-width: 315px;
    flex-wrap: wrap;
}
.balance-text{
    font-weight: 600;
    font-size: 14px;
    color:#F47D21;
    margin-left:4px;
}
/* .vip-wrap{
    border-right: 1px solid #F9BB8D;
    padding-right: 12px;
    margin-right: 12px;
}
.balance-number{
    font-weight: 400;
    font-size: 14px;
    color:var(--primary-color)
} */
.balance-type{
    font-weight: 400;
    font-size: 14px;
    color:var(--primary-color);
}
.balance-line{
    margin-inline: 8px;
    width: 1px;
    height: 19px;
    background: #F9BB8D;
}
.edit-profile{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color:#F47D21;
    margin-bottom:16px;
    text-decoration-line: underline;
}
.line{
    width: 187px;
    /* border-bottom: 1px solid red; */
    height: 1px;
    margin: auto;
    margin-bottom: 16px;
    background: linear-gradient(90deg, rgba(224, 224, 224, 0.20) 0.14%, #E0E0E0 47.92%, rgba(224, 224, 224, 0.20) 99.86%);
}
.bio-title{
    font-size: 16px;
    font-weight: 600;
    color:#F47D21;
    text-align:center;
}
.bio-text{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    text-align: center;
    margin-bottom:16px;
}
.personal-info{
    display:flex ;
    align-items:center; 
    justify-content:space-around;
    flex-wrap: wrap;
}
.info-text{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    margin-left:4px 
}
.info-email{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    margin-left:4px 
}
.info-email:hover{
    color:#F47D21;
}

.location-title{
    font-size: 16px;
    font-weight: 600;
    color:#F47D21;
    text-align:center;
    margin-top:16px;
    margin-bottom: 8px;
}
.profile-private-map{
    width:100%;
    height: 178px;
}
.media-wrap{
    display:flex;
    align-items:center;
    justify-content: center;
    gap:32px;
    margin-top:16px;
}
.media-icon :deep() path{
    fill:#91AFC8;
}
.media-icon:hover :deep() path{
    fill:#F47D21;
}
.normal-user-info-wrap{
    padding-left: 73px;
}
.normal-user-info-wrap-mobile{
    display:none
}
.normal-user-info-link{
    display: block;
    width:fit-content
}
.normal-info-icon :deep() path{
    fill:#F47D21;
    stroke:#F47D21
}
.normal-user-info-text{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    direction: ltr;
}

.col2{
    margin-top:20px;
}
.tabs-wrap{
    display:flex;
    align-items:center; 
    justify-content:space-between; 
    margin-bottom: 16px;
    padding-right:40px;
    z-index: 2;
    position:relative;
}
/* .profile-nav-item{
    padding-inline:8px;
} */
.profile-nav-link{
    font-size: 16px;
    font-weight: 400;
    background: #FFF;
    color:#bdbdbd;
    padding: 8px 16px 8px 8px;
    border:none;
    border-radius: 0;
    margin-right:20px
}
.profile-nav-link-mobile{
    display:none;
}
.profile-nav-link.active{
    font-size: 16px;
    font-weight: 600;
    background: #FFF !important;
    color:var(--primary-color) !important;
    padding:8px;
    border:none;
    border-left:1px solid #F47D21 !important;
}
.show-style-wrap{
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
    padding:8px;
}
.show-style{
    font-size: 14px;
    font-weight: 400;
    color:#828282;
    padding-left:8px;
    cursor:pointer;
}
.active_style .show-style{
    color:#f47d21;
}
.show-style-icon{
    cursor:pointer;
}
.active_style .grid-icon :deep() path{
    fill:#f47d21;
}
.active_style .list-icon :deep() path{
    fill:#f47d21;
    stroke: #f47d21;
}
.show-style-line{
    background: linear-gradient(90deg, rgba(224, 224, 224, 0.20) 0.14%, #E0E0E0 47.92%, rgba(224, 224, 224, 0.20) 99.86%);
    width: 1px;
    height: 28px;
    margin-inline:12px;
}
.upload-media-wrap{
    border-radius: 5px;
    background: var(--primary-color);
    padding:9px 16px;
    display:flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
}
.upload-media-wrap:hover{
    background: #F47D21;
}

.upload-media-icon :deep() path{
    stroke: #fff;
}
.upload-media-text{
    font-size: 14px;
    font-weight: 600;
    color:#fff;
}
.profile-tap-content{
    overflow-y: auto;
    height: 500px;
    padding-right:4px;
}
.profile-card-wrap.grid{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
}
.profile-card-wrap.list{
    display:block;
    margin-bottom:16px;
    padding-right:33px;
}
/*.profile-card-wrap.grid .profile-card-content{
    flex:0 0 47%;
}*/
.profile-card-wrap.list .profile-card-content{
    display:block;
    width: 100%;
}
.profile-card-wrap.grid .profile-card{
    width:270px;
    overflow: hidden;
}
.gallery-media-wrap{
    display:flex;
    gap:16px;
    align-items: center;
    flex-wrap: wrap;
}
.gallery-media-content{
    position:relative;
    flex:0 0 30%;
}
.delete-icon{
    position:absolute;
    top:7px;
    right:8px;
    z-index:2;
    cursor: pointer;
}
.delete-icon:hover :deep() path{
    stroke:#F47D21;
}
.gallery-media{
    width: 270px;
    aspect-ratio: 3/3;
    object-fit: cover;
    position:relative
}
.gallery-media-empty{
    width: 270px;
    aspect-ratio: 3/3;
    border: 1px solid #e9e5e5ba;
    box-shadow: inset 0px 0px 10px 2px #e9e5e5ba;
    position: relative;
}
.add-media-btn{
    display:none;
    border: 1px solid #F2F2F2;
    background: #FCFCFC;
    padding:7px;
    flex:0 0 30%;
    aspect-ratio:3/3;
}
.add-media-img{
    display:block;
    margin:auto;
}
.add-media-text{
    color: var(--primary-color);
    font-size: 12px;
    font-weight: 500;
    margin-top:16px;
    text-align: center;
}
.normal-gallery-img{
    display:block;
    margin:50px auto 0;
    width: 322px;
    aspect-ratio: 5/2;
    object-fit: contain;
}
.normal-gallery-text{
    font-size:16px;
    font-weight: 400;
    color:var(--primary-color);
    text-align:center;
    margin:16px auto;
    max-width:457px;
    width:100%;
}
.gallery-empty-img{
    width:200px;
    aspect-ratio:3/3;
    display:block;
    margin:40px auto 0;
}
.gallery-empty-title{
    font-size:24px;
    font-weight:600;
    color:#F47D21;
    text-align:center;
    margin:16px auto 8px;
}
.gallery-empty-text{
    font-size:16px;
    font-weight:400;
    color:#828282;
    text-align:center;
    margin: auto;
    max-width: 323px;
    width: 100%;
}
.btn-request{
    border-radius: 5px;
    background: var(--primary-color);
    color:#fff;
    font-size:14px;
    font-weight: 600;
    padding:8px 16px;
    border:1px solid var(--primary-color);
    margin:auto;
    display:block;
}
.btn-request:hover{
    background:#F47D21;
    border:1px solid #F47D21;
}
.btn-requested-disabled{
    border-radius: 5px;
    background:  #BDBDBD;
    border:1px solid #BDBDBD;
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    padding:9px 16px;
    display: block;
    margin: 0 auto 16px;
}
.btn-cancel-request{
    font-size:14px;
    font-weight:600;
    margin:auto;
    display:block;
    text-decoration-line: underline;
    color:var(--primary-color);
    border: none;
    background: #fff;
    padding: 0;
}
.btn-cancel-request:hover{
    color:#F47D21;
}
.profile-empty-img{
    width:300px;
    display:block;
    margin:40px auto 0;
    object-fit: contain;
    aspect-ratio: 3/2;
}
.profile-empty-title{
    color:#F47D21;
    font-size:24px;
    font-weight: 600;
    margin:16px auto 8px;
    text-align:center;
}
.profile-empty-text{
    font-size:16px;
    font-weight: 400;
    color:#828282;
    margin:0 auto 16px;
    text-align:center;
    max-width:340px;
    width:100%;

}
.profile-empty-publish{
    border:1px solid var(--primary-color);
    background: var(--primary-color);
    color:#fff;
    font-size:14px;
    font-weight: 600;
    padding:12px 16px;
    cursor: pointer;
    margin:auto;
    width: 165px;
    text-align: center;
    border-radius: 5px;
}
.profile-empty-publish:hover{
    border:1px solid #F47D21;
    background: #F47D21;
}

/* --start media-- */
@media(min-width:1400px){
    .col1{
        padding-left:0px;
        padding-inline:unset;
    }
    .user-img-wrap :deep() .user-img{
        left:263px;
    }
}
/* @media (max-width:1440px){
    .user-img-wrap :deep() .user-img{
        left:18.3%;
    }
} */
@media(min-width:2000px){
    .col1{
        padding-inline:35px;
    }
}
@media(max-width:1200px){
    .user-img-wrap :deep() .user-img{
        width: 128px !important;
        height: 126px !important;
        bottom: -123px;
    }
    .user-img-wrap :deep() .user-img svg{
        width: 128px !important;
        height: 126px !important;
    }
    .balance-type{
        font-size:13px;
    }
    .col1{
        padding-left:20px
    }
}
@media(max-width:991px){
    .col1{
        margin-top: 60px;
        padding-left:unset;
    }
    .personal-info{
        justify-content: space-between;
        gap:5px;
    }
    /* .profile-card-wrap.grid .profile-card :deep() .ad-card-top{
        padding:10px 16px;
    } */
    
    .tabs-wrap{
        padding-right:19px;
    }
    .profile-card-wrap.list{
        padding-right:11px
    }
    .normal-user-info-wrap{
        padding-left: 42px;
    }
    .user-img-wrap :deep() .user-img{
        width: 95px !important;
        height: 95px !important;
        bottom: -90px;
    }
    .user-img-wrap :deep() .user-img svg{
        width: 95px !important;
        height: 95px !important;
    }
    .profile-nav-link{
        margin-right:5px;
    }
}
@media(max-width:920px){
    .balance-text{
        font-size:13px;
        margin-left:0px;
    }
    .balance-line{
        margin-inline: 5px;
    }
}
@media(max-width:876px){
    .profile-card-wrap.grid .profile-card{
        width: 230px;
    }
}
@media(max-width:870px){
    .balance-wrap{
        padding:4px 2px;
    }
    .balance-line {
        margin-inline: 2px;
    }
    .balance-text{
        font-size:12px;
    }
    .balance-type{
        font-size:11px;
    }
    .normal-user-info-wrap{
        padding-left: 5px;
    }
}
@media(max-width:767px){
    .col1{
        margin-top: 73px;
    }
    .personal-info-wrap{
        display:none;
    }
    .profile-nav-link-mobile{
        display:block;
    }
    .normal-user-info-wrap{
        display:none;
    }
    .normal-user-info-wrap-mobile{
        display:block;
        margin-top: 20px;
    }
    .personal-info{
        justify-content: space-around;
    }
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
    /* .personal-info-wrap{
        display:none;
    }
    .profile-nav-link-mobile{
        display:block;
    } */
    /* .profile-card-wrap.grid .profile-card-content{
        flex: 0 0 90%;
        margin: auto;
    } */
    .profile-card-wrap.grid .profile-card{
        width: 215px;
    }
    .show-style-wrap{
        display:none;
    }
    .upload-media-wrap{
        display:none;
    }
    .tabs-wrap{
        padding-right:unset;
    }
    .profile-nav-item{
        padding-inline: unset;
    }
    .profile-ul{
        width:100%;
        display:flex;
        justify-content: space-around;
    }
    .add-media-btn{
        display:block;
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
    .balance-wrap{
        padding:4px 8px;
    }
    .balance-text{
        font-size:13px;
    }
    .balance-type{
        font-size:13px;
    }
    .balance-line {
        margin-inline: 5px;
    }
    
}
@media(max-width:480px){
    .gallery-media-content{
        position: relative;
        flex: 0 0 47%;
    }
    .add-media-btn{
        flex:0 0 47%;
    }
    .profile-card-wrap.grid .profile-card-content{
        margin:auto;
    }
    .profile-card-wrap.grid .profile-card{
        width: 288px;
    }
}
@media(max-width:430px){
    /* .profile-card-wrap.grid .profile-card-content{
        flex: 0 0 100%;
        margin: unset;
        padding-right:5px;
    } */
    .gallery-media-wrap{
        gap:14px;
    }
    .gallery-media-content{
        position: relative;
        flex: 0 0 47%;
    }
    .add-media-btn{
        flex:0 0 47%;
    }
    .profile-nav-link{
        margin-right:0px;
        padding:8px
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
    right:unset
}
[data-direction= rtl] .balance-text{
    margin-right: 4px;
    margin-left:unset;
    font-family: 'tajawal-bold';
}
/* [data-direction= rtl] .balance-type{
    margin-left: unset;
    margin-right:4px
} */
[data-direction= rtl] .vip-wrap{
    border-left: 1px solid #F9BB8D !important;
    border-right:none !important;
    margin-right:unset;
    padding-right:unset;
    margin-left: 12px;
    padding-left: 12px;
}
[data-direction= rtl] .col1{
    padding-right: 55px;
    padding-left:unset;
}
[data-direction= rtl] .normal-user-info-wrap{
    padding-right: 73px;
    margin-left:unset;
}
[data-direction= rtl] .info-text{
    margin-right: 4px;
    margin-left:unset;
    font-family: 'tajawal-regular';

}
[data-direction= rtl] .info-email{
    margin-right: 4px;
    margin-left:unset;
    font-family: 'tajawal-regular';

}
[data-direction= rtl] .show-style{
    padding-right: 8px;
    padding-left:unset;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .profile-nav-link{
    margin-left: 20px;
    margin-right:unset;
    padding:8px 8px 8px 16px;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .profile-nav-link.active{
    border-right: 1px solid #F47D21 !important;
    border-left:unset !important;
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .profile-ul{
    padding-right: 0 !important;
}
[data-direction= rtl] .tabs-wrap{
    padding-left:40px;
    padding-right:unset;
}
[data-direction= rtl] .delete-icon{
    left: 8px;
    right: unset;
}
[data-direction= rtl] .profile-tap-content{
    padding-left: 4px;
    padding-right: unset;
}
[data-direction= rtl] .request-modal-close-btn{
    left: 10px;
    right:unset;
}
[data-direction= rtl] .label-radio{
    margin-left:unset;
    margin-right: 8px;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .modal-label{
    font-size:15px;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-show-name{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .balance-type{
    font-family: 'tajawal-regular';

}
[data-direction= rtl] .bio-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .bio-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .location-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .normal-user-info-text{
    font-family: 'tajawal-regular';

}
[data-direction= rtl] .upload-media-text{
    font-family: 'tajawal-bold';

}
[data-direction= rtl] .add-media-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .normal-gallery-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .gallery-empty-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .gallery-empty-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .btn-request{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .btn-requested-disabled{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .btn-cancel-request{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .profile-empty-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .profile-empty-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .profile-empty-publish{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .modal-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .upload-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .modal-requested-title{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .btn-cancel-request-light{
    font-family: 'tajawal-bold';
}

@media(min-width:1400px){
    [data-direction= rtl] .col1{
        padding-right:0px;
        padding-left:unset;
    }
    [data-direction= rtl] .gallery-media-content{
        position: relative;
        flex: 0 0 19%;
    }
    [data-direction= rtl] .gallery-media{
        width: 100%;
    }
}
@media (min-width:1440px){
    [data-direction= rtl] .user-img-wrap :deep() .user-img{
        /* right:263px; */
        right:120px;
        left:unset;
    }
}
@media(min-width:2000px){
    [data-direction= rtl] .col1{
        padding-inline:35px;
    }
}
@media(max-width:1200px){
    [data-direction= rtl] .col1{
        padding-right:20px
    }
    [data-direction= rtl] .balance-text{
        font-size:13px;
    }
    [data-direction= rtl] .balance-type{
        font-size:13px;
    }
    [data-direction= rtl] .balance-line{
        margin-inline:6px
    }
}
@media(max-width:991px){
    [data-direction= rtl] .col1{
        padding-right:unset;
    }
    [data-direction= rtl] .normal-user-info-wrap{
        padding-right: 42px;
        padding-left:unset;
    }
    [data-direction= rtl] .tabs-wrap {
        padding-left: 19px;
    }
    [data-direction= rtl] .profile-nav-link{
        margin-left:18px;
    }
    [data-direction= rtl] .delete-icon{
        width: 42px;
        height: 42px;
    }
}
@media(max-width:870px){
    [data-direction= rtl] .normal-user-info-wrap{
        padding-right: 5px;
        padding-left:unset
    }
}
@media(max-width:780px){
    [data-direction= rtl] .tabs-wrap{
        padding-left:10px;
    }
    [data-direction= rtl] .profile-nav-link{
        margin-left:10px;
        padding:8px 8px 8px 8px;
    }
}
@media(max-width:767px){
    [data-direction= rtl] .user-img-wrap :deep() .user-img{
        left: 50%;
        right:unset
    }
} 
@media (max-width: 600px){
    [data-direction= rtl] .profile-nav-link{
        margin-left: 10px;
        padding: 8px 8px 8px 2px;
    }  
}
@media (max-width:576px){
    [data-direction= rtl] .user-img-wrap .user-img {
        left:50%;
        right:unset
    }
    [data-direction= rtl] .profile-ul{
        flex-wrap:nowrap;
        overflow-x:auto;
        width:100%;
    }
    [data-direction= rtl] .profile-ul::-webkit-scrollbar{
        display:none;
    }
    [data-direction= rtl] .profile-nav-link{
        text-wrap: nowrap;
    }    
}

@media (max-width:420px){
    [data-direction= rtl] .tabs-wrap{
        padding-left:0px;
    }


    [data-direction= rtl] .profile-nav-link{
        margin-left: 6px;
        padding: 8px 2px 8px 2px;
    } 
    [data-direction= rtl] .profile-ul{
        justify-content: space-between;
    } 
}
/* @media (max-width: 402px){
    [data-direction= rtl] .profile-nav-link{
        font-size:14px;
        padding: 8px 1px 8px 2px;
        margin-left: 5px;
    }
} */
@media(max-width:380px){
    [data-direction= rtl] .profile-nav-link{
        font-size: 13px;
    }
    [data-direction= rtl] .profile-nav-link.active{
        font-size: 13px;
    }
}
@media (max-width:372px){
    [data-direction= rtl] .add-media-text{
        font-size:10px;
    }
}
.disabled_gallery_btn {
  background: #ccc;
  cursor: not-allowed;
}   

</style>