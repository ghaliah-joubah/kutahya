<template>
    <div>
        <NuxtLayout name="website">
            <section class="home-car-wrap">               
                <div class=text-car>
                    <span class="text-car-animate1">{{$t('Rent A Car')}} </span>
                    <span class="text-car-animate2">  {{ $t('&') }}</span>
                    <div class="text-car-animate3">{{$t('Travel')}} <span class="text-car-color">{{ $t('Endless') }}</span></div> 
                </div>              
                <div class="home-car-details">
                    <div class="dropdown home-car-dropdown">
                        <button class="btn dropdown-toggle home-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {{$t('All brands')}}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item car-details-item" href="#">Honda</a></li>
                            <li><a class="dropdown-item car-details-item" href="#">Jeep</a></li>
                        </ul>
                    </div>
                    <div class="dropdown home-car-dropdown">
                        <button class="btn dropdown-toggle home-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('All models') }}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item car-details-item" href="#">a</a></li>
                            <li><a class="dropdown-item car-details-item" href="#"> b</a></li>
                            <li><a class="dropdown-item car-details-item" href="#"> c</a></li>
                        </ul>
                    </div>
                    <div class="dropdown home-car-dropdown">
                        <button class="btn dropdown-toggle home-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('All years') }}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item car-details-item" href="#">2022</a></li>
                            <li><a class="dropdown-item car-details-item" href="#"> 2023</a></li>
                        </ul>
                    </div>
                    <div class="dropdown home-car-dropdown">
                        <button class="btn dropdown-toggle home-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('Any price') }}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <span>Minimum</span>
                                
                            </li>
                            <li>
                                <span>Maximum</span>
                                
                            </li>
                            <li>Apply</li>
                        </ul>
                    </div>
                    <NuxtLink class="home-search-btn" to="/">{{ $t('Search') }}</NuxtLink>
                </div>
                <div class="background-img"></div>
            </section>
            <section class="details-cars-wrap main_sections">
                <div class="container-fluid">
                    <div class="details-cars-text">{{ $t('Featured cars') }}</div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-3 align-items-stretch" v-for="card in 5" :key="card">
                            <FeaturedCarsCard :view_as="view_as"/>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main_sections">
                <div class="container-fluid">
                    <div class="explore-vendors-wrap">
                        <img class="spare-part-img" src="/img/about-services1.png" alt="">
                        <div class="explore-vendors-content">
                            <div class="explore-vendors-text">{{ $t('Here you can explore the best spare parts vendors and contact with them') }}</div>
                            <NuxtLink class="explore-vendors-btn" to="/vendors/index">{{ $t('Explore spare parts vendors') }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ad-home main_sections">
                <div class="container-fluid">
                    <Carousel class="ad-home-carousel" :autoplay="1500" :wrap-around="false">
                        <Slide v-for="slide in 2" :key="slide">
                            <div class="carousel__item ad-carousel-item">
                                <img class="carousel-img" src="/img/home-ad-img.png" alt="">
                                <!-- <img class="carousel-img" src="https://placehold.co/600x400"> -->
                            </div>
                        </Slide>
                        <template #addons>
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </section>
            <section class="packages">
                <div>
                    <div class="text"> {{ $t('Pick the price that’s') }}  
                        <div class="right_design"> <Circles class="circles"/>
                            <span>{{ $t('right') }}</span>
                        </div>
                          {{ $t('for you') }} 
                    </div>
                </div>
                <img class="package-img-left" src="/img/home-package2.png">
                <img class="package-img-right" src="/img/home-package1.png">
                <Carousel class="package-carousel" :wrap-around="true" :breakpoints="breakpointsPackage" >
                    <Slide v-for="slide in 5" :key="slide">
                        <PaymentCard class="payment_card"/> 
                    </Slide>
                    <template #addons>
                    <!-- <Navigation /> -->
                    <Pagination />
                    </template>
                </Carousel>
                <BuyModal />
            </section>
            <section class="details-cars-wrap mb-3 main_sections">
                <div class="container-fluid">
                    <div class="details-cars-text">{{ $t('Suggested for you') }}</div>
                    <div class="row" >
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-3 align-items-stretch" v-for="card in 5" :key="card">
                            <FeaturedCarsCard :view_as="view_as"/>
                        </div>
                    </div>
                    <div>
                       <button class="suggested-card-btn">{{ $t('Load more') }}</button>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<script>
import { useGeneralStore } from '~/store/general'
    export default{
        setup(){
            definePageMeta({
                middleware: 'public'
            })
        },
        data: () => ({
            view_as:'grid',
            breakpointsPackage: {
                0: {
                    itemsToShow: 1,
                    snapAlign:'start', 
                },
                450: {
                    itemsToShow: 2,
                    snapAlign:'start', 
                },
                730: {
                    itemsToShow: 3,
                    snapAlign:'start',
                },
                1024: {
                    itemsToShow: 4,
                    snapAlign:'start',
                }
            }
        })
    }
</script>
<style scoped>
.main_sections {
    padding-inline: 40px;
}
.home-car-wrap{
    min-height: 100vh;
    position:relative;
    z-index: 1;
    /* background-image: url("/img/car-background.png"); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;   */
}
.background-img{
    position:absolute;
    background-image: url("/img/car-background.png"); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width:100%;
    height:100%;
    z-index:-1;
}
.text-car{
    font-weight: 700;
    font-size: 55px;
    color:var(--primary-color);
    width: 500px;
    position: absolute;
    top: 32%;
    margin-left: 15px;
}
/* .text-car, .text-car *{
    border: 1px dotted black;
} */
.text-car-animate1{
    display:  inline-block;
    animation: text-car-animate1-02281a80 1s;
    animation-delay: 1s;
    animation-fill-mode: backwards;
}
@keyframes text-car-animate1{
    from {
        margin-left: -1000px;
    }
    to {
        margin-left: 0px;
    }
}
.text-car-animate2{
    animation:text-car-animate2 1s;
    animation-delay:2s;
    display: inline-block;
    animation-fill-mode: backwards;
}
@keyframes text-car-animate2{
    0%{
        margin-left:-1000px;   
    }
    100%{
        margin-left: 0px ;
    }
}
.text-car-animate3{
    animation:text-car-animate3 1s;
    animation-delay:3s;
    animation-fill-mode: backwards;
}
@keyframes text-car-animate3{
    0%{
        margin-left:-1000px; 
    }
    100%{
        margin-left:0px;       
    }
}
.text-car-color{
    color:#F47D21;
    position:relative;
}
.text-car-color:after{
    content: '';
    background: url("/img/arrow-text-car.png");
    background-repeat: no-repeat;
    width: 90px;
    height: 34px;
    position: absolute;
    top: 59px;
    left: 131px;
}
.home-car-details{
    max-width:1000px;
    width:97%;
    border-radius: 20px;
    border: 1px solid #FFF;
    background: rgba(217, 217, 217, 0.10);
    position: absolute;
    padding: 15px 16px;
    transform: translateX(-50%);
    bottom:50px;
    left: 50%;
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
}
.home-car-dropdown{
    flex:0 1 24%;
}
.home-select{
    padding: 17px 18px;
    width:100%;
    border-radius: 10px;
    border: 1px solid #FFF !important;
    background: rgba(255, 255, 255, 0.30) !important;
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    outline:none;
    display: flex;
    justify-content: space-between;
}
.home-select:after{
    display: inline-block;
    vertical-align: -1px;
    content: "\f078";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    pointer-events: none;
    border: none;
    color: var(--primary-color);
    margin-left: 20px;
}
.home-search-btn{
    flex:0 1 24%;
    padding:17px 18px;
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    cursor:pointer;
    text-align:center;
}
.home-search-btn:hover{
    background:#F47D21;
    border:1px solid #f47d21;
}
/* ---start section featured cars--- */
.details-cars-wrap{
    margin-top: 50px;
}
.details-cars-text{
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 600;
    /* margin-bottom: 20px; */
}
/* ---start explore vendors section--- */
.explore-vendors-wrap{
    border-radius: 10px;
    background: #91AFC8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    /* padding:15px 4px; */
    position:relative;
    gap:20px;  
    background-image: url("/img/vendors-home.png"); 
    background-repeat: no-repeat;
    background-size: contain;
    background-position:left bottom;
}
.explore-vendors-content{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:10px 60px;
}
.spare-part-img{
    width: 116px;
    aspect-ratio: 6/5;
    object-fit: cover;
    position: relative;
    bottom: -7px;
    left: -11px;
} 
.explore-vendors-text{
    font-size: 18px;
    font-weight: 500;
    color:var(--primary-color);
}
.explore-vendors-btn{
    font-size:12px;
    font-weight: 500;
    color:#FFF;
    padding:10px 16px;
    margin-right:56px;
    background:var(--primary-color);
    border:1px solid var(--primary-color);
    border-radius: 10px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
}
.explore-vendors-btn:hover{
    background-color: #F47D21;
    border:1px solid #F47D21;
}
/* ---start ad section--- */
.ad-home{
    margin-top: 50px;
}
.ad-home-carousel{
    position:relative;
}
.carousel-img{
    border-radius: 50px;
    width:100%;
    aspect-ratio: 8/2;
    object-fit: cover;
}
.ad-carousel-item{
    width:100%;
}
.ad-home-carousel :deep() .carousel__pagination {
    padding: 0;
    align-items: center;
}
.ad-home-carousel :deep() .carousel__pagination-button::after{
    border-radius: 50% !important;
    height: 10px !important;
    width: 10px !important;
    color:#e0e0e0;
}
.ad-home-carousel :deep() .carousel__pagination-button--active::after{
    color:var(--primary-color);
    border-radius: 50% !important;
    height: 12px !important;
    width: 12px !important;
}
.ad-home-carousel :deep() .carousel__pagination-button:hover::after{
    color:var(--primary-color);
}
/* ---start packages section--- */
.packages {
    margin-top: 40px;
    padding-bottom:32px;
    background-color: #FFFDFB;
    position: relative;
}
.package-img-right{
    position: absolute;
    right: 0;
    top: 0;
}
.package-img-left{
    position: absolute;
    bottom: 0;
    left:0px;
}
.packages .text {
    color: var(--primary-color);
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.64px;
    padding: 15px 10px 15px 10px;
    position: relative;
    z-index: 2;
}
.packages .right_design {
    display: inline-block;
    position: relative;
}
.packages .text span {
    color: #F47D21;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 32px;
}
.payment_card {
    margin-bottom: 5px;
    width:100%
}
.package-carousel{
    margin-inline: 60px;
}
.package-carousel :deep() .carousel__slide{
    padding-inline:12px;
}
.package-carousel :deep() .carousel__pagination {
    padding: 0;
    align-items: center;
}
.package-carousel :deep() .carousel__pagination-button::after{
    border-radius: 50% !important;
    height: 12px !important;
    width: 12px !important;
    color:#e0e0e0;
}
.package-carousel :deep() .carousel__pagination-button--active::after {
    color:var(--primary-color);
    border-radius: 50% !important;
    height: 15px !important;
    width: 15px !important;
}
.package-carousel :deep() .carousel__pagination-button:hover::after{
    color:var(--primary-color);
}
/* ---start suggested section--- */
.suggested-card-btn{
    border-radius: 10px;
    border: 1px solid var(--primary-color);
    color:var(--primary-color);
    font-size: 14px;
    font-weight: 600;
    padding: 15px 33px;
    background-color: transparent;
    margin: 40px auto 0px;
    display: block;
    
}
.suggested-card-btn:hover{
    background-color:#F47D21;
    border:1px solid #f47d21;
    color:#fff;
}

/* ---start media--- */
@media(max-width:1240px){
    .explore-vendors-btn{
        margin-right:25px;
    }
}
@media(max-width:1199px){
    .explore-vendors-wrap{
        align-items: flex-start;
        padding:10px 0px 10px 6px;
        gap:8px;
    }
}
@media(max-width: 1024px){
    .main_sections {
        padding-inline: 35px;
    }
}
@media (max-width:991px){
    .text-car{
        font-size:30px
    }
    .text-car-color:after{
        top: 33px;
        left: 37px;
    }
    .home-car-details{
        padding:15px 12px;
        gap:10px;
    }
    .home-car-dropdown{
        flex:0 1 26%;
    }
    .home-select{
        padding:14px 10px;
    }
    .home-select:after{
        margin-left:10px;
    }
    .home-search-btn{
        padding:14px 10px;
    }  
    .spare-part-img{
        bottom:0px;
    } 
    .package-carousel{
        margin-inline: 30px;
    }
}
@media (max-width:768px){
    .text-car{
        font-size:25px
    }
    .text-car-color:after {
        top: 29px;
        left: 21px;
    }
    .background-img{
        background-image: url('/img/car-background-mobile.png');
        background-position-x: right;
    }
    .home-car-details{
        padding:10px;
        width:80%;
        flex-wrap: wrap;
        gap:8px;
    }
    .home-car-dropdown{
        flex:0 1 49%;
    }
    .home-select{
        padding:8px 12px;
    }
    .car-details-item{
        font-size: 16px;
        font-weight: 400;
        color: var(--primary-color);
        background: #fff;
        padding: 10px;
    }
    .car-details-item:hover{
        background: rgba(200, 219, 236, 0.40);
    }
    .home-search-btn{
        padding: 9px 12px;
        flex: 0 0 100%;
    }
    .packages .text {
        padding-bottom: 15px;
    }
    .explore-vendors-wrap{
        align-items:flex-start
    }
}
@media (max-width:576px) {
    .main_sections {
        padding-inline: 25px;
    }
    .text-car{
        /* max-width:500px; */
        max-width:300px;
        width:100%;
    }
    .home-car-details{
        width:90%;
    }
    .explore-vendors-btn{
        /* margin:auto; */
    }
    .carousel-img{
        aspect-ratio: 8/4;
        border-radius:20px;
    }
    .package-carousel{
        margin-inline: 16px;
    }
    .packages .text {
        font-size:24px;
    }
    .packages .text span {
        font-size:24px;
    }
    .package-img-left{
        width:95px;
        height:130px;
    }
    .package-img-right{
        width:90px;
        height:90px;
    }
    .circles{
        width:80px;
        height: 60px;
    }
}
@media (max-width:520px) {
    .explore-vendors-wrap{
        /* padding: 10px 4px; */ 
        background-size: cover;
        gap:1px;
    }
    .explore-vendors-btn{
        padding:10px 7px;
        font-size: 10px;
        margin-right: unset;
    }
    .explore-vendors-text{
        font-size: 16px;
    }
    .spare-part-img{
        width:92px;
        aspect-ratio: 5/6;
    }
}
@media (max-width:470px){
    .home-select{
        padding: 8px 4px;
    }
    .home-car-details{
        padding: 8px;
        gap: 6px;
    }
    .home-car-dropdown{
        flex: 0 1 48%;
    }
    .home-select:after{
        margin-left:4px;
    }
    .packages .text {
        font-size:17px;
    }
    .packages .text span {
        font-size:17px;
    }
    .circles{
        width:70px;
        height: 50px;
    }
    
}
@media(max-width: 425px){
    .main_sections{
        padding-inline:unset;
    }
}
@media (max-width:400px) {
    .text-car{
        top:11%;
    }
    .home-select{
        font-size:15px;
    }
}
/* --RTL-- */
[data-direction= rtl] .text-car{
    font-family: 'tajawal-bold';
    margin-right: 15px;
    margin-left:unset
}
[data-direction= rtl] .text-car-color:after{
    right: 121px;
    left: unset;
    transform: rotate(197deg);
    top: 65px;
}
[data-direction= rtl] .home-select{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .home-select:after{
    margin-right:20px;
    margin-left:unset;
}
[data-direction= rtl] .home-search-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .details-cars-text{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .spare-part-img{
    right:0px;
    left:unset;
}
[data-direction= rtl] .explore-vendors-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .explore-vendors-btn{
    font-family: 'tajawal-medium';
    margin-left:56px;
    margin-right:unset
}
[data-direction= rtl] .packages .text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .suggested-card-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .payment_card{
    direction: rtl;
}
[data-direction= rtl] .packages .text span{
    font-size: 25px;
}
[data-direction= rtl] .background-img{
    transform: rotateY(180deg);
}
[data-direction= rtl] .explore-vendors-wrap{
    background-image: url("/img/vendors2-home.png");
    background-position: right;
}
[data-direction= rtl] .explore-vendors-content{
    justify-content: space-between;
    width: calc(100% - 285px);
}
@media(max-width:1307px){
    [data-direction= rtl] .explore-vendors-content{
        width:unset;
    }
}
@media(max-width:1240px){
    [data-direction= rtl] .explore-vendors-btn{
        margin-left:25px;
        margin-right:unset;
    }
}
@media(max-width:1199px){
    [data-direction= rtl] .explore-vendors-wrap{
        align-items:center;
    }
    [data-direction= rtl] .explore-vendors-content{
        gap:10px 32px;
    }
}
@media(max-width:991px){
    [data-direction= rtl] .text-car-color:after{
        right: 37px;
        left:unset;
        top: 33px;
    }
    [data-direction= rtl] .home-select:after{
        margin-right:10px;
        margin-left:unset;
    }
    [data-direction= rtl] .text-car{
        top:39%;
    }
}
@media(max-width:768px){
    [data-direction= rtl] .text-car-color:after {
        right: 21px;
        left:unset
    }
    [data-direction= rtl] .car-details-item{
        font-family: 'tajawal-regular';
    }
    [data-direction= rtl] .text-car{
        top: 32%;
    }
    [data-direction= rtl] .explore-vendors-wrap{
        align-items: center;
    }
}
@media(max-width:576px){
    [data-direction= rtl] .packages .text span{
        font-size: 20px;
    }
    [data-direction= rtl] .explore-vendors-wrap{
        background-position: bottom;
    }
}
@media(max-width:520px){
    [data-direction= rtl] .explore-vendors-btn{
        margin-left: unset;
    }
}
@media(max-width:470px){
    [data-direction= rtl] .home-select:after{
        margin-right:4px;
        margin-left:unset;
    }
    [data-direction= rtl] .packages .text span{
        font-size: 17px;
    }
}
@media(max-width:400px){
    [data-direction= rtl] .text-car{
        top: 11%;
    }
    [data-direction= rtl] .home-select{
        font-size:15px;
    }
}
</style>