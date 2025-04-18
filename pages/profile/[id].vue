<template>
    <div>
        <NuxtLayout name="website">
            <section class="mb-5">
                <div class="profile-main-img">
                    <img class="cover-img" src="/img/profile-cover.png">
                    <div class="edit-icon-wrap">
                        <EditIcon class="edit-icon"/>
                    </div>
                    <img class="white-cover-img" src="/img/profile-white-cover.png">
                    <img class="white-cover-mobile-img" src="/img/white-cover-mobile.png">
                    <div class="user-img-wrap">
                        <UserImage class="user-img"/>
                        <div class="user-edit-icon-wrap">
                            <EditIcon class="user-edit-icon"/>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xxl-3 col-md-4">
                            <div class="col1">
                                <div class="ad-show-name">Carshow name</div>
                                <div class="line" style="margin-top:16px"></div>                               
                                <div class="personal-info-wrap">
                                    <div>
                                        <div class="bio-title">{{$t('Bio')}}</div>
                                        <div class="bio-text">Lorem ipsum dolor sit amet consectetur. Purus aliquet tempor vehicula cras a sit orci. Ornare dui lectus eget in mi lectus.</div>
                                    </div>
                                    <div class="personal-info">
                                        <div>
                                            <LocationColorIcon />
                                            <span class="info-text">Baghdad</span>
                                        </div>
                                        <div>
                                            <MessageIcon />
                                            <a class="info-email" href="mailto:example@gmail.com">example@gmail.com</a>
                                            <!-- <span class="info-text">example@gmail.com</span> -->
                                        </div>
                                    </div>
                                    <div class="location-title">{{$t('Location')}}</div>
                                    <iframe class="profile-private-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103031.41483533254!2d44.091365303448654!3d36.19740609671596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhCwgS3VyZGlzdGFuIFJlZ2lvbtiMINin2YTYudix2KfZgg!5e0!3m2!1sar!2snl!4v1704373261047!5m2!1sar!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <div class="media-wrap">
                                        <a href="#"><FacebookIcon class="media-icon"/></a>
                                        <a href="#"><InstagramIcon class="media-icon"/></a>
                                        <a href="tel:+964999xxxxxx"><WatsAppIcon class="media-icon"/></a>
                                    </div>
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
                                            <button class="nav-link profile-nav-link active" id="pills-ads-tab" data-bs-toggle="pill" data-bs-target="#pills-ads" type="button" role="tab" aria-controls="pills-ads" aria-selected="true">{{$t('My Ads')}}</button>
                                        </li>
                                        <li class="nav-item profile-nav-item" role="presentation">
                                            <button class="nav-link profile-nav-link" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery" type="button" role="tab" aria-controls="pills-gallery" aria-selected="false">{{ $t('Gallery') }}</button>
                                        </li>
                                    </ul>
                                    <div class="show-style-wrap">
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
                                </div>
                                <div class="tab-content profile-tap-content" id="pills-tabContent">
                                    <div class="tab-pane fade" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">
                                        <div>
                                            <div>
                                                <div class="bio-title">{{$t('Bio')}}</div>
                                                <div class="bio-text">Lorem ipsum dolor sit amet consectetur. Purus aliquet tempor vehicula cras a sit orci. Ornare dui lectus eget in mi lectus.</div>
                                            </div>
                                            <div class="personal-info">
                                                <div>
                                                    <LocationColorIcon />
                                                    <span class="info-text">Baghdad</span>
                                                </div>
                                                <div>
                                                    <MessageIcon />
                                                    <a class="info-email" href="mailto:example@gmail.com">example@gmail.com</a>
                                                    <!-- <span class="info-text">example@gmail.com</span> -->
                                                </div>
                                            </div>
                                            <div class="location-title">{{ $t('Location') }}</div>
                                            <iframe class="profile-private-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103031.41483533254!2d44.091365303448654!3d36.19740609671596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhCwgS3VyZGlzdGFuIFJlZ2lvbtiMINin2YTYudix2KfZgg!5e0!3m2!1sar!2snl!4v1704373261047!5m2!1sar!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            <div class="media-wrap">
                                                <a href="#"><FacebookIcon class="media-icon"/></a>
                                                <a href="#"><InstagramIcon class="media-icon"/></a>
                                                <a href="tel:+964999xxxxxx"><WatsAppIcon class="media-icon"/></a>
                                            </div>
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
                                            <div class="profile-empty-title">{{$t('NO Ads Yet')}}</div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
                                        <div class="gallery-media-wrap" v-if="true"> 
                                            <div class="gallery-media-content" v-for="gallery in 6"  :key="gallery">
                                                <DeleteIcon class="delete-icon"/>                                         
                                                <img class="gallery-media" src="https://placehold.co/100x100">
                                            </div>
                                        </div>
                                        <!-- in business account but not found gallery -->
                                        <div v-if="false">
                                            <img class="gallery-empty-img" src="/img/profile-gallery-empty.png">
                                            <div class="gallery-empty-title">{{$t('No items yet')}}</div>
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
export default{
    data(){
        return{
            view_as:'grid',
        }
    }
}
</script>
<style scoped>
.edit-icon-wrap:hover .edit-icon :deep() path{
    stroke: #F47D21;
    fill:#F47D21;
}
.user-edit-icon-wrap:hover .user-edit-icon :deep() path{
    stroke: #F47D21;
    fill:#F47D21;
}
.profile-nav-link.active{
    font-size: 16px;
    font-weight: 600;
    background: #FFF !important;
    color:var(--primary-color) !important;
    padding:8px;
    border:none;
    border-left:1px solid #F47D21 !important;
    border-radius: 0;
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
.line{
    width: 187px;
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
.profile-tap-content{
    overflow-y: auto;
    height: 500px;
    padding-right:4px;
}
.profile-card-wrap.grid{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    /* gap:16px; */
    /* justify-content:space-evenly */
}
.profile-card-wrap.list{
    display:block;
    margin-bottom:16px;
    padding-right:33px;
}
/* .profile-card-wrap.grid .profile-card-content{
    flex:0 0 47%;
    flex: 0 0 270px;
} */
.profile-card-wrap.list .profile-card-content{
    display:block;
    width: 100%;
}
.profile-card-wrap.grid .profile-card{
    width:270px
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
    width:48px;
    height:48px;
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


/* --start media-- */

@media(min-width:1400px){
    .col1{
        padding-left:0px;
        padding-inline:unset;
    }
    .user-img-wrap :deep() .user-img{
        left:263px;
    }
    .gallery-media{
        width:100%;
    }
    .gallery-media-content{
        position: relative;
        flex: 0 0 19%;
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
    .tabs-wrap{
        padding-right:19px;
    }
    .profile-card-wrap.list{
        padding-right:11px
    }
    .profile-nav-link{
        margin-right:5px;
    }
    .profile-card-wrap.grid{
        gap:15px;
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
    .delete-icon{
        width:42px;
        height:42px;
    }
}
@media(max-width:876px){
    .profile-card-wrap.grid .profile-card{
        width: 230px;
    }
}
@media(max-width:870px){
    .balance-wrap{
        padding:4px 10px;
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
    .profile-card-wrap.grid .profile-card{
        width: 215px;
    }
    .show-style-wrap{
        display:none;
    }
    .tabs-wrap{
        padding-right:unset;
    }
    /* .profile-nav-item{
        padding-inline: unset;
    } */
    .profile-ul{
        width:100%;
        display:flex;
        gap: 20px;
        padding-left:20px;
    }
    .col2{
        margin-top:unset;
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
@media(max-width:480px){
    .gallery-media-content{
        position: relative;
        flex: 0 0 47%;
    }
    .profile-card-wrap.grid .profile-card{
        width: 288px;
    }
    .profile-card-wrap.grid .profile-card-content{
        margin:auto;
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
    .profile-nav-link{
        margin-right:0px;
        padding:8px
    }
    .profile-ul{
        padding-left:unset;
    }
    .delete-icon{
        top:3px;
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
[data-direction= rtl] .col1{
    padding-right: 55px;
    padding-left:unset
}
[data-direction= rtl] .profile-nav-link.active{
    border-right:1px solid #F47D21 !important;
    border-left:unset !important;
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .info-text{
    margin-right:4px ;
    margin-left:unset;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .info-email{
    margin-right:4px ;
    margin-left:unset;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .tabs-wrap{
    padding-left:40px;
    padding-right:unset
}
[data-direction= rtl] .profile-nav-link{
    margin-left:20px;
    margin-right:unset;
    padding: 8px 8px 8px 16px;
    font-family: 'tajawal-regular';

}
[data-direction= rtl] .show-style{
    padding-right: 8px;
    padding-left:unset;
    font-family: 'tajawal-regular';

}
[data-direction= rtl] .profile-tap-content{
    padding-left: 4px;
    padding-right:unset;
}
[data-direction= rtl] .profile-ul{
    padding-right:0px;
}
[data-direction= rtl] .delete-icon{
    left:8px;
    right:unset;
}
[data-direction= rtl] .ad-show-name{
    font-family: 'tajawal-bold';
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
[data-direction= rtl] .gallery-empty-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .profile-empty-title{
    font-family: 'tajawal-bold';
}

@media(min-width:1400px){
    [data-direction= rtl] .col1{
        padding-right:0px;
        padding-left:unset;
    }
}
@media (min-width:1440px){
    [data-direction= rtl] .user-img-wrap :deep() .user-img{
        /* right:263px; */
        right:120px;
        left:unset;
    }
}
@media (min-width: 2000px){
    [data-direction= rtl] .col1 {
        padding-inline: 35px;
    }
}
@media(max-width:991px){
    [data-direction= rtl] .col1{
        padding-right:unset;
    }
    [data-direction= rtl] .tabs-wrap{
        padding-left:19px;
        padding-right:unset;
    }
    [data-direction= rtl] .profile-nav-link{
        margin-left:5px;
        margin-right:unset;
    }
}
@media(max-width:767px){
    [data-direction= rtl] .user-img-wrap :deep() .user-img{
        left: 50%;
        right:unset
    }
    [data-direction= rtl] .tabs-wrap{
        padding-left:unset;
    }
}   
@media (max-width:576px){
    [data-direction= rtl] .user-img-wrap .user-img {
        left:50%;
        right:unset
    }
    [data-direction= rtl] .profile-ul{
        padding-right:20px;
        padding-left:unset;
        gap: 8px;
    }
}
@media(max-width:430px){
    [data-direction= rtl] .profile-nav-link{
        margin-left:0px;
    }
    [data-direction= rtl] .profile-ul{
        padding-right:unset;
    }
}
@media(max-width:378px){
    [data-direction= rtl] .profile-nav-link{
        padding: 8px 4px 8px 8px;
    }
}
</style>