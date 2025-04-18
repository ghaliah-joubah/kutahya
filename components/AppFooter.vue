<template>
    <div>
        <footer class="kutahya-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-4 mb-3">
                        <NuxtLink :to="localPath('/')"><LogoIcon class="footer-logo-img"/></NuxtLink>
                        <div class="footer-para">Lorem ipsum dolor sit amet consectetur. Diam felis consectetur congue id justo feugiat cursus velit habitant.</div> 
                    </div>
                    <div class="col-6 col-lg-2 col-md-4 mb-3">  
                        <div class="footer-title">{{ $t('Services')}}</div>                
                        <ul class="px-0">
                            <li class="mb-2"> <NuxtLink :to="localPath('/')" class="footer-li">{{ $t('Compare') }}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/')" class="footer-li">{{ $t('Add your ad') }}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/')" class="footer-li">{{ $t('Subscribe') }}</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 col-md-4 mb-3">  
                        <div class="footer-title">{{ $t('About') }}</div>                 
                        <ul class="px-0">
                            <li class="mb-2"><NuxtLink :to="localPath('/about')" class="footer-li">{{$t('About us')}}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/contact')" class="footer-li">{{ $t('Contact us') }}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/articles')" class="footer-li">{{$t('Blog')}}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/faq')" class="footer-li">{{ $t('FAQ') }}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/privacy')" class="footer-li">{{ $t('Privacy policy') }}</NuxtLink></li>
                            <li class="mb-2"><NuxtLink :to="localPath('/terms')" class="footer-li">{{ $t('Terms of use') }}</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 col-md-4 mb-3">
                        <div class="footer-title">{{ $t('Languages') }}</div>
                        <ul class="px-0">
                            <li v-for="lang in locales" :key="lang.code" class="mb-2">
                                <a href="#"  @click.prevent="changeLng(lang)" class="footer-li">{{ lang.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 col-md-4 mb-3">
                        <div class="footer-title">{{ $t('Social') }}</div>
                        <div class="footer-icon-wrap">
                            <a href="#"><FacebookIcon class="footer-icon"/></a>
                            <a href="#"><InstagramIcon class="footer-icon"/></a>
                            <a href="#"><TwitterIcon class="footer-icon"/></a>
                            <a href="#"><YouTubeIcon class="footer-icon"/></a>  
                        </div>                       
                    </div>
                </div>
            </div>
        </footer>
    </div> 
</template>
<script>
    export default{
    setup(){
        const { locales, locale, setLocale } = useI18n();
        const localPath = useLocalePath();

        return {
            locale,locales,setLocale,localPath
        }
    },
    methods:{
        changeLng(lang){
            this.setLocale(lang.code)
        }
    }
}
</script>
<style scoped>
.kutahya-footer{
    padding: 50px 0px;
}
.footer-logo-img{
    width: 180px;
    height: 40px;
    object-fit: cover;
    margin-left: 6%;
}
.footer-para{
    text-align: justify;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 400;
    max-width:200px;
    margin-top: 24px;
    margin-left: 6%;
}
.footer-title{
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
}
.footer-li{
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 400;
}
.footer-li:hover{
    color:#F47D21;
}
.footer-icon-wrap{
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 27px;
}
.footer-icon:hover :deep() path{
    fill:#F47D21;
}
@media (max-width:991px){
    .footer-para{
        max-width:unset;
        margin-left:unset;
    }
    .footer-logo-img{
        margin-left:unset
    }   
}
@media (max-width:576px){
    .footer-icon-wrap{
        gap:20px;
    }
}
/* ---rtl--- */
[data-direction= rtl] .footer-logo-img{
    margin-left: unset;
    margin-right:6%;
}
[data-direction= rtl] .footer-para{
    margin-right: 6%;
    margin-left:unset;
}
[data-direction= rtl] .footer-para{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .footer-li{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .footer-title{
    font-family: 'tajawal-bold';
}
@media (max-width:991px){
    [data-direction= rtl] .footer-logo-img{
        margin-right:unset;
    }  
    [data-direction= rtl] .footer-para{
        margin-right:unset;
    }
}
</style>