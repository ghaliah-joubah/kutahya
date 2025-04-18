<template>
    <div>
        <div class="container-fluid" >
            <div class="row">
                <div class="col-md-6 p-0 col-auth-img">
                    <div class="auth-col-img-wrap">                      
                        <Carousel :autoplay="1500" :transition="1500" :wrap-around="true" class="carousel-auth">
                            <Slide v-for="slide in 2" :key="slide">
                                <div class="auth-item">
                                    <img class="auth-img" src="/img/login-img.png" alt="">
                                    <div class="carousel-auth-para">{{ $t('Find your dream house & take the best price') }}..</div>
                                </div>
                            </Slide>
                            <template #addons>
                                <!-- <navigation />  -->
                                <!-- <pagination /> -->
                            </template>
                        </Carousel>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="container">
                        <div class="col-auth-content d-flex flex-column">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup(){
        const localPath = useLocalePath();
        const i18nHead = useLocaleHead({
            addSeoAttributes: {
                canonicalQueries: ['']
            }
        })
        useHead({
            htmlAttrs: {
                lang: i18nHead.value.htmlAttrs.lang
            },
        })
        return {
            localPath
        }
    }
}
</script>
<style scoped>
@font-face{
    font-family: 'Capsmall_clean';
    src:url('/Capsmall_clean.ttf')

}
.auth-col-img-wrap{
    height: 100vh;
}
.carousel-auth{
    height: 100vh;
}
.carousel-auth :deep() .carousel__viewport {
    position: relative;
}
.auth-item {
    position: relative;
    width: 100%;
}
.auth-img{
    width:100%;
    height:100vh;
    /* object-fit: cover; */
}
.carousel-auth-para{
    max-width: 456px;
    color: #fff;
    text-align: left;
    font-size: 26px;
    font-weight: 600;
    position: absolute;
    bottom: 64px;
    left: 50px;
}
.carousel-auth :deep() .carousel__track{
    margin:0px !important;
}
.col-auth-content{
    height: 100vh;
}
@media (max-width:767px) {
    .col-auth-img{
        display: none;
    }
}
/* ---rtl--- */
[data-direction= rtl] .carousel-auth-para{
    left:unset;
    right:50px;
    text-align: right;
    direction:rtl;
}
[data-direction= rtl] .carousel-auth-para{
    font-family: 'tajawal-bold';
}


</style>