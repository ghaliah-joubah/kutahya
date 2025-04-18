<template>
    <div :class="{'card':true, 'ad-card':true, 'list':view_as=='list', 'grid':view_as=='grid'}">
        <div class="ad-card-top">
            <!-- <VipIcon class="vip-img"/> -->
            <div class="vip">
                <span>{{$t('vip')}}</span>
            </div>
            <div class="favorite-list-wrap">
                <div class="favorite-background">
                    <HeartIcon class="heart-icon" v-if="false"/>
                    <!-- in tab favorite -->
                    <HeartFillIcon class="heart-icon" v-if="true"/>
                </div>
                <!-- in the case of the grid only and in tab ads only -->
                <div class="dropdown" v-if="view_as =='grid'">
                    <button class="btn dropdown-toggle card-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <PointsIcon class="points-icon"/>
                    </button>
                    <ul class="dropdown-menu card-menu" aria-labelledby="dropdownMenuButton1">
                        <li><NuxtLink :to="localPath('/profile/edit')" class="dropdown-item card-menu-item">{{ $t('Edit') }}</NuxtLink></li>
                        <li class="dropdown-item card-menu-item">{{ $t('Convert to VIP') }}</li>
                        <li class="dropdown-item card-menu-item" data-bs-toggle="modal" data-bs-target="#historyModal">{{ $t('History') }}</li>
                        <li class="dropdown-item card-menu-item">{{ $t('Hide') }}</li>
                        <li class="dropdown-item card-menu-item">{{ $t('Delete') }}</li>
                    </ul>
                </div>
            </div>
            <NuxtLink :to="localPath('/ads/type/id')"><img src="https://placehold.co/300x200" class="card-img-top ad-card-img"></NuxtLink>
            <!-- <img src="/img/service-card-img2.png" class="card-img-top ad-card-img"> -->
            <VideoIcon class="video-icon" v-if="false"/>
            <div class="rate-sale-wrap">
                <span class="ad-card-span" v-if="false">{{ $t('sell') }}</span>
                <div class="rent-sale-wrap" v-if="true">
                    <span class="rent-sale-span">{{$t('direct sale')}}</span>
                    <span class="rent-sale-span" style="padding:6px 8px">{{$t('rent')}}</span>
                </div>
                <div class="ad-card-rating-wrap">
                    <span class="ad-card-rating">4.0</span>
                    <StarIcon class="star-icon"/>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="type-ad-card">
                <div class="ad-card-title">Mercedes</div>
                <!--in the case of the list only and in tab ads only and not show in public profile and not show in home page-->
                <div class="dropdown" style="top: -4px;" v-if="view_as=='list'">
                    <button class="btn dropdown-toggle card-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <PointsIcon class="points-icon"/>
                    </button>
                    <ul class="dropdown-menu card-menu" aria-labelledby="dropdownMenuButton1">
                        <li><NuxtLink :to="localPath('/profile/edit')" class="dropdown-item card-menu-item">{{ $t('Edit') }}</NuxtLink></li>
                        <li class="dropdown-item card-menu-item">{{ $t('Convert to VIP') }}</li>
                        <li class="dropdown-item card-menu-item" data-bs-toggle="modal" data-bs-target="#historyModal">{{ $t('History') }}</li>
                        <li class="dropdown-item card-menu-item">{{ $t('Hide') }}</li>
                        <li class="dropdown-item card-menu-item">{{ $t('Delete') }}</li>
                    </ul>
                </div>
            </div>
            <NuxtLink :to="localPath('/ads/type/id')"><p class="ad-card-text">GLS 550 4MATIC SUV</p></NuxtLink>
            <div class="ad-card-title">$ 110.000</div>
            <div class="ad-card-location-wrap">
                <div class="ad-card-location-content">
                    <LocationIcon class="card-location"/>
                    <span class="ad-card-text-small">Baghdad</span>
                </div>
                <!-- in home page and public profile -->
                <NuxtLink :to="localPath('/profile/id')" class="ad-card-location-link" v-if="true">
                    <div class="ad-card-location-content">
                        <img class="car-logo" src="https://placehold.co/20x20">
                        <!-- <img class="car-logo" src="/img/car-logo.png" alt=""> -->
                        <span class="ad-card-text-small-car">Car show name</span>                  
                    </div>
                </NuxtLink>
                <!-- in private profile -->
                <div class="ad-state" v-if="false">
                    <div class="unpublished-card-icon"></div>
                    <span class="ad-card-text-small">{{ $t('Unpublished') }} </span>
                </div>
                <div class="ad-state" v-if="false">
                    <div class="rejected-card-icon"></div>
                    <span class="ad-card-text-small">{{ $t('Rejected') }}</span>
                </div>
                <div class="ad-state" v-if="false">
                    <div class="pending-card-icon"></div>
                    <span class="ad-card-text-small">{{ $t('Pending') }}</span>
                </div>
                <div class="ad-state" v-if="false">
                    <div class="draft-card-icon"></div>
                    <span class="ad-card-text-small">{{ $t('Draft') }}</span>
                </div>
                <div class="ad-state" v-if="false">
                    <div class="published-card-icon"></div>
                    <span class="ad-card-text-small">{{ $t('Published') }}</span>
                </div>
            </div>
            
        </div>
        <!-- History Modal -->
        <div class="modal fade history-modal" id="historyModal" tabindex="-1" aria-labelledby="historyModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content history-modal-content">
                    <div class="modal-header history-modal-header">
                        <h5 class="modal-title history-modal-title" id="historyModalLabel">{{ $t('Ad Log') }}</h5>
                        <button type="button" class="history-close-btn" data-bs-dismiss="modal" aria-label="Close">
                            <CloseModalIcon />
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="history-body-wrap">
                            <!-- user cases -->
                            <div v-if="true">
                                <div class="name-date-wrap">
                                    <div class="d-flex align-items-center">
                                        <UserImage class="history-user-img"/>
                                        <span class="history-modal-name">You</span>
                                    </div>
                                    <div class="history-modal-date">12:14  05 / 01 / 2024</div>
                                </div>
                                <div class="modal-info">
                                    <div class="modal-box-pending">
                                        <!-- send request and waiting admin to accept or reject it -->
                                        <div class="history-modal-text" v-if="true">{{ $t('You have sent a request to publish an Ad') }}</div>
                                        <!-- status modifying service after publishing it and waiting for admin to accept it -->
                                        <div class="history-modal-text" v-if="false">{{$t('You have sent a request to edit your Ad')}}</div>
                                        <div class="modal-status-wrap">
                                            <div class="history-modal-status">{{ $t('Status:') }}</div>
                                            <div class="status-content">
                                                <div class="pending-circle"></div>
                                                <span class="history-modal-para">{{ $t('Pending, Waiting for admin approval') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- status modifying service after publishing it and waiting for admin to accept it -->
                                    <div class="discard-wrap" v-if="true">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.94141 15.2591H12.6081C14.9081 15.2591 16.7747 13.3924 16.7747 11.0924C16.7747 8.79245 14.9081 6.92578 12.6081 6.92578H3.44141" stroke="#F47D21" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.35794 9.00885L3.22461 6.87552L5.35794 4.74219" stroke="#F47D21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span class="discard-text">{{ $t('Discard') }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- admin cases -->
                            <div v-if="true">
                                <div class="name-date-wrap">
                                    <div class="d-flex align-items-center">
                                        <LogoHistory class="history-logo"/>
                                        <span class="history-modal-name">Admin</span>
                                    </div>
                                    <div class="history-modal-date">12:14  06 / 01 / 2024</div>
                                </div>
                                <!-- in status:accept publishing service -->
                                <div class="modal-box-accepted" v-if="false">
                                    <!-- in status:accept publishing the service -->
                                    <div class="history-modal-text" v-if="true">{{ $t('You have sent a request to publish an Ad') }}</div>
                                    <!-- in status:accept the modification -->
                                    <div class="history-modal-text" v-if="false">{{$t('You have sent a request to edit your Ad')}}</div>
                                    <div class="modal-status-wrap">
                                        <div class="history-modal-status">{{ $t('Status:') }}</div>
                                        <div class="status-content">
                                            <div class="accepted-circle"></div>
                                            <span class="history-modal-para">{{ $t('Accepted') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- in status:modification rejected -->
                                <div class="modal-box-rejected" v-if="true">
                                    <!-- in status:reject edit -->
                                    <div class="history-modal-text" v-if="true">{{$t('You have sent a request to edit your Ad')}}</div>
                                    <!-- in status:reject publish service -->
                                    <div class="history-modal-text" v-if="false">{{ $t('You have sent a request to publish an Ad') }}</div>
                                    <div class="modal-status-wrap">
                                        <div class="history-modal-status">{{ $t('Status:') }}</div>
                                        <div class="status-content">
                                            <div class="rejected-circle"></div>
                                            <div class="history-modal-para">{{ $t('Rejected,') }} <span class="reject-question" @click="reject_reason=!reject_reason">{{ $t('why?') }}</span></div>
                                        </div>
                                    </div>
                                    <div class="reject-reason" v-if="reject_reason==true">Lorem ipsum dolor sit amet consectetur.</div>
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default{
    props:['view_as'],
    setup(){
        const localPath = useLocalePath();
        return { localPath }
    },
    data(){
        return{
            reject_reason:false
        }
    }
}
</script>

<style scoped>
.ad-card.list {
    display:flex;
    flex-direction: row;
    margin-bottom:16px;
    height:180px;
}
.ad-card.list .ad-body{
    padding-top:11px;
    padding-bottom:11px;
}

.ad-card.grid {
    display:flex;
    flex-direction: column;
    /* overflow: hidden; */
}

.ad-card{
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

.ad-card.grid .ad-card-top{
    position:relative;
    /* overflow: hidden; */
}

.ad-card.list .ad-card-top{
    position:relative;
    /* aspect-ratio:8/3; */
    flex:0 0 285px;
    overflow: hidden;
}
.vip{
    position: absolute;
    left: -34px;
    top: 26px;
    background: #F47D21;
    color: #fff;
    width: 155px;
    padding: 4px 0;
    text-align: center;
    transform: rotate(316deg);
    clip-path: polygon(20% 0%, 79% 0%, 100% 100%, 0% 100%);
}
/* .vip-img{
    position: absolute;
    left:0;
    top:0;
    width:94px;
    height: 94px;
} */
.ad-card.grid .favorite-list-wrap{
    position:absolute;
    top:9px;
    right:9px;
    display: flex;
    align-items: center;
    gap:16px;
}
.ad-card.list .favorite-list-wrap{
    position:absolute;
    top: 8px;
    right:8px;
    display: flex;
    align-items: center;
    gap:16px;
}
.favorite-background{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.70);
    display: flex;
    align-items: center;
    justify-content: center;
}
.heart-icon{
    /* position: absolute;
    right: 24px;
    top: 24px; */
    width: 20px;
    height: 20px;

}
.card-dropdown{
    border:none;
    padding: 0px;
    width:26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.70);
}
.card-dropdown:after{
    display:none;
}
.card-menu{
    position:absolute;
    left: -134px !important;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(141, 195, 240, 0.30);
}
.card-menu-item{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    background: #FFF;
    cursor: pointer;
}
.card-menu-item:hover{
    background: rgba(200, 219, 236, 0.40);
}
.points-icon:hover :deep() path{
    stroke: #F47D21;
    fill:#F47D21
}
.ad-card.list .ad-card-img{
    width:100%;
    object-fit: cover;
    height:100%;
    border-radius: 10px 0px 0px 10px;
    background: #FFF;
}
.ad-card.grid .ad-card-img{
    width:100%;
    aspect-ratio:8/5;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
    background: #FFF;
}
.ad-card-year-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ad-card-span{
    color: #F47D21;
    font-size: 10px;
    font-weight: 400;
    /* position:absolute;
    bottom: 18px;
    right: 24px; */
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.70);
    padding:6px 8px;
    text-transform: capitalize;
}
.ad-card.grid .rent-sale-wrap{
    display:flex;
    align-items: center;
    gap: 8px;
    /* position: absolute;
    right: 24px;
    bottom:24px; */

}
.ad-card.list .rent-sale-wrap{
    display:flex;
    align-items: center;
    gap: 8px;
    /* position: absolute;
    right: 8px;
    bottom:8px; */
}

.rent-sale-span{
    color: #F47D21;
    font-size: 10px;
    font-weight: 500;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.70);
    padding:6px 4px;
    text-transform: capitalize;
}

.video-icon{
    position:absolute;
    bottom: 18px;
    left:24px;
}
.rate-sale-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:absolute;
    bottom:9px;
    padding-inline: 9px;
    width:100%;
}
.ad-card.list .card-body{
    /* padding:11px 16px; */
    padding:10px 24px;
    /* flex:0 0 60%; */
    max-height:180px;
    height: 100%;
    width:calc(100% - 285px)

}
.ad-card.grid .type-ad-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    flex-wrap:nowrap;
    gap:4px;
    /* margin-top: 12px;*/
}
.ad-card.list .type-ad-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    flex-wrap:nowrap;
}
.type-ad-logo{
    display: flex;
    align-items: center;
    gap: 8px;
}
.logo-ad{
    width: 24px;
    height: 24px;
}
.star-icon{
    width: 16px;
    height: 16px;
}
.ad-card.list .ad-card-title{
    color: #F47D21;
    font-size: 16px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 330px;
}
.ad-card.grid .ad-card-title{
    color: #F47D21;
    font-size: 16px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    /* max-width:143px; */
    /* flex-grow:1; */
    width:100%;
}
.ad-card-rating-wrap{
    display:flex;
    align-items: center;
    gap:5px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.70);
    padding:4px 4px;
}
.ad-card-rating{
    color:#828282;
    font-size: 12px;
    font-weight: 400;
}
.ad-card.grid .ad-card-text{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:100%;
    /* width:193px;
    max-width:300px; */
}
.ad-card.list .ad-card-text{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 425px;
    width:100%;
}
.ad-card.list .ad-card-text:hover,
.ad-card.grid .ad-card-text:hover{
    color:#F47D21
}
.ad-card.grid  .ad-card-location-wrap{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0 8px;
    flex-wrap: nowrap;
    gap: 5px;
    
}
.ad-card.list .ad-card-location-wrap{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0 8px;
    flex-wrap: nowrap;
    gap: 5px;
    
}
.ad-card.grid .ad-card-location-link{
    width:50%;
}
.ad-card.grid .ad-card-location-content{
    display:flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex:0 0 50%;
}
.ad-card.list .ad-card-location-content{
    display:flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 173px;
}
.car-logo{
    width:20px;
    height:20px;
    margin-right: 3px;
    flex-shrink: 0;
    border-radius: 50%;
}
.ad-card.list .ad-card-text-small{
    color:#828282;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ad-card.grid .ad-card-text-small{
    color:#828282;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ad-card.list .ad-card-text-small-car{
    color:#828282;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ad-card.list .ad-card-text-small-car:hover{
    color:#F47D21;
}
.ad-card.grid .ad-card-text-small-car{
    color:#828282;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ad-card.grid .ad-card-text-small-car:hover{
    color:#F47D21;
}
.ad-card.grid .ad-state{
    display: flex;
    align-items: center;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ad-card.list .ad-state{
    /* padding-right:47px; */
    display:flex;
    align-items: center;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.published-card-icon{
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right:4px;
    background:#27ae60;
}
.draft-card-icon{
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right:4px;
    background:#828282
}
.pending-card-icon{
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right:4px;
    background:#f2c94c;
}
.rejected-card-icon{
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right:4px;
    background:#eb5757;
}
.unpublished-card-icon{
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right:4px;
    background:#828282
}
.card-location{
    width:16px;
    height: 16px;
    margin-right: 3px;
    flex-shrink: 0;
}
/* --- start History Modal --- */
.history-modal{
    --bs-modal-width: 624px;
}
.history-modal-header{
    border-bottom:0px !important;
}
.history-body-wrap{
    display:flex;
    flex-direction:column;
    gap:24px;
}
.history-close-btn{
    position: absolute;
    right: 10px;
    top: 13px;
    border: none;
    background-color: transparent;
}
.history-modal-title{
    font-size: 16px;
    font-weight: 600;
    color:var(--primary-color);
    margin: auto;
}
.history-modal-content{
    border-radius: 10px;
    height: 466px;
}
.name-date-wrap{
    display:flex;
    align-items:center;
    gap:50px;
    margin-left:24px;
}
.history-user-img :deep() svg{
    width:35px;
    height:35px;
    margin-right:16px;
}
.history-logo{
    width:35px;
    height:35px;
    margin-right:16px;
}
.history-modal-name{
    font-size: 16px;
    font-weight: 500;
    color:var(--primary-color);
    text-transform: capitalize;
    Line-height:24px
}
.history-modal-date{
    font-size: 12px;
    font-weight: 400;
    color:#BDBDBD;
}
.modal-info{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:8px;
}
.modal-box-pending{
    margin-left:42px;
    margin-top:16px;
    padding:8px 8px 8px 35px;
    border-left:1px solid #F2C94C;
    background:#fcfcfd;
    width:420px;
}
.history-modal-text{
    font-size: 14px;
    font-weight: 600;
    color:var(--primary-color);
    line-height:22px
}
.modal-status-wrap{
    display:flex;
    align-items:flex-start;
}
.history-modal-status{
    font-size: 14px;
    font-weight: 400;
    color:#F47D21;
    text-transform: capitalize;
    line-height:22px
}
.status-content{
    margin-left:8px;
    display: flex;
    align-items: baseline;
}
.pending-circle{
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-radius: 50%;
    background:#F2C94C;
    flex-shrink:0;
}
.history-modal-para{
    font-size: 14px;
    font-weight: 400;
    color:#828282;
    line-height:22px
}
.accepted-circle{
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-radius: 50%;
    background:#2D9CDB;
}
.modal-box-accepted{
    margin-left:42px;
    margin-top:16px;
    padding:8px 8px 8px 35px;
    border-left:1px solid #2D9CDB;
    background:#fcfcfd;
    width:420px;
}
.rejected-circle{
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-radius: 50%;
    background:#EB5757;
}
.modal-box-rejected{
    margin-left:42px;
    margin-top:16px;
    padding:8px 8px 8px 35px;
    border-left:1px solid #EB5757;
    background:#fcfcfd;
    width:420px;
}
.reject-question{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    cursor:pointer;
}
.reject-reason{
    font-size: 12px;
    font-weight: 400;
    color:#828282;
    text-align: justify;
}
.discard-wrap{
    cursor:pointer;
    display:flex;
    align-items:center;
    margin-left:auto;
}
.discard-text{
    font-size: 14px;
    font-weight: 600;
    color:#F47D21;
}

/* --start media-- */
@media(min-width:2300px){
    .ad-card.grid .ad-card-img{
        aspect-ratio:8/4;
    }
    .vip{
        left: -35px;
        top: 25px;
    }
}
@media(max-width:991px){
    .ad-card.grid .favorite-list-wrap{
        right:8px;
        top:8px;
    }
    .ad-card.grid .rent-sale-wrap{
        /* bottom:8px; */
        /* right:8px; */
        gap:4px
    }
    .rate-sale-wrap{
        bottom: 8px;
        padding-inline: 8px;
    }
   .ad-card.grid .card-body{
        padding: 10px;
    }
    .ad-card.list .card-body{
        padding:10px;
    }
}
@media(max-width:890px){
    .vip{
        padding:2px 0;
        clip-path: polygon(19% 0%, 80% 0%, 98% 100%, 0% 100%);
    }
}
@media (max-width: 576px){
    .ad-card.grid .rent-sale-wrap{
        gap: 8px;
    }
    .vip{
        left: -44px;
        top: 18px;
        padding:4px 0;
        clip-path: polygon(28% 0%, 72% 0%, 94% 100%, 9% 100%);
    }
    .modal-box-pending{
        margin-left:18px;
        width:unset;
    }
    .modal-box-accepted{
        margin-left:18px;
        width:unset;
    }
    .modal-box-rejected{
        margin-left:18px;
        width:unset;
    }
    .name-date-wrap{
        margin-left:0px;
    }
    .modal-info{
        flex-direction:column;
        align-items: unset;
    }
    .discard-wrap{
        margin-top:8px;
    }
}
@media(max-width:470px){
    .modal-box-pending{
        padding:8px;
    }
    .modal-box-accepted{
        padding:8px;
    }
    .modal-box-rejected{
        padding:8px;
    }
    .history-modal-text{
        font-size:13px;
    }
    .history-modal-status{
        font-size:13px;
    }
}
/* ---rtl--- */
[data-direction= rtl] .ad-card.grid .favorite-list-wrap{
    left:9px;
    right:unset
}
/* [data-direction= rtl] .vip-img{
    left:unset;
    right: 0;
    transform: rotate(90deg);
} */
[data-direction= rtl] .card-menu-item{
    text-align: right;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .card-menu{
    right: -134px !important;
    left:unset !important;
}
[data-direction= rtl] .car-logo{
    margin-left: 3px;
    margin-right:unset

}
[data-direction= rtl] .card-location{
    margin-left: 3px;
    margin-right:unset
}
[data-direction= rtl] .ad-card.list .favorite-list-wrap{
    left:8px;
    right:unset;
}
[data-direction= rtl] .published-card-icon{
    margin-left:4px;
    margin-right:unset;
}
[data-direction= rtl] .draft-card-icon{
    margin-left:4px;
    margin-right:unset;
}
[data-direction= rtl] .pending-card-icon{
    margin-left:4px;
    margin-right:unset;
}
[data-direction= rtl] .rejected-card-icon{
    margin-left:4px;
    margin-right:unset;
}
[data-direction= rtl] .unpublished-card-icon{
    margin-left:4px;
    margin-right:unset;
}
[data-direction= rtl] .ad-card-span{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .rent-sale-span{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .ad-card.list .ad-card-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .ad-card.grid .ad-card-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .ad-card-rating{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-card.grid .ad-card-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .ad-card.list .ad-card-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .ad-card.grid .ad-card-text-small{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-card.list .ad-card-text-small{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .vip{
    right: -34px;
    transform: rotate(45deg);
}
[data-direction= rtl] .history-close-btn{
    left:10px;
    right:unset;
}
[data-direction= rtl] .history-modal-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .name-date-wrap{
    margin-right:24px;
    margin-left:unset;
}
[data-direction= rtl] .history-user-img :deep() svg{
    margin-left:16px;
    margin-right:unset;
}
[data-direction= rtl] .history-logo{
    margin-left:16px;
    margin-right:unset;
}
[data-direction= rtl] .history-modal-name{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .history-modal-date{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .modal-box-pending{
    margin-right:42px;
    margin-left:unset;
    border-right:1px solid #F2C94C;
    border-left:none;
}
[data-direction= rtl] .history-modal-text{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .history-modal-status{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .pending-circle{
    margin-left:8px;
    margin-right:unset;
}
[data-direction= rtl] .history-modal-para{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .accepted-circle{
    margin-left:8px;
    margin-right:unset;
}
[data-direction= rtl] .modal-box-accepted{
    margin-right:42px;
    margin-left:unset;
    border-right:1px solid #2D9CDB;
    border-left:none;
}
[data-direction= rtl] .rejected-circle{
    margin-left: 8px;
    margin-right:unset;
}
[data-direction= rtl] .modal-box-rejected{
    margin-right:42px;
    margin-left:unset;
    border-right:1px solid #EB5757;
    border-left:none;
}
[data-direction= rtl] .reject-question{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .reject-reason{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .discard-text{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .status-content{
    margin-right:8px;
    margin-left:unset;
}
.discard-wrap{
    margin-left:unset;
    margin-right:auto;
}

@media(min-width:2300px){
    [data-direction= rtl] .vip{
        right: -44px;
        left:unset;
        top: 18px;
    }
}
@media(max-width:991px){
    [data-direction= rtl] .ad-card.grid .favorite-list-wrap{
        left:8px;
        right:unset
    }
}
@media(max-width:576px){
    [data-direction= rtl] .vip{
        right: -44px;
        left:unset;
    }
    [data-direction= rtl] .name-date-wrap{
        margin-right:0px;
    }
    [data-direction= rtl] .modal-box-pending{
        margin-right:18px;
    }
    [data-direction= rtl] .modal-box-accepted{
        margin-right:18px;
    }
    [data-direction= rtl] .modal-box-accepted{
        margin-right:18px;
    }
}
@media(max-width:270px){
    [data-direction= rtl] .modal-box-pending{
        padding:8px;
    }
    [data-direction= rtl] .modal-box-rejected{
        padding:8px;
    }
    [data-direction= rtl] .modal-box-rejected{
        padding:8px;
    }
}
</style>