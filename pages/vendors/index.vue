<template>
    <div>
        <NuxtLayout name="website">
            <section class="vendors-section">
                <div class="container-fluid">
                    <div class="vendors-text">Spare parts vendors</div>
                    <div class="vendors-accounts-wrap">
                        <div class="vendors-accounts-content" v-for="vendor in 8">
                            <NuxtLink to="/vendors/id">
                                <div class="vendor-account" >
                                    <UserImage class="vendor-img"/>
                                    <div class="vendor-title">Car parts vendor</div>
                                    <div class="vendor-location-content">
                                        <LocationIcon class="vendor-location-icon{"/>
                                        <span class="vendor-location">Baghdad</span>
                                    </div>
                                    <div class="vendor-icons">
                                        <a href="#"><FacebookIcon class="vendor-icon"/></a>
                                        <a href="#"><InstagramIcon class="vendor-icon"/></a>
                                        <a href="tel:+964999xxxxxx"><WatsAppIcon class="vendor-icon"/></a>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.vendors-section{
    margin-top:40px;
    margin-bottom:40px;
}
.vendors-text{
    color:#F47D21;
    font-size: 32px;
    font-weight: 700;
    margin-bottom:20px;
    padding-inline: 16px;
}
.vendors-accounts-wrap{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    padding-inline: 16px;
}
.vendors-accounts-content{
    flex:0 0 23%;
}
.vendor-account{
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    /* padding: 16px 74px 16px 75px; */
    padding:16px;
    /* flex:0 0 23%; */
}
.vendor-img{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display:block;
    margin:auto;
}
.vendor-title{
    font-size: 16px;
    font-weight:500;
    color:var(--primary-color);
    text-align: center;
    margin-top:8px;
}
.vendor-location-content{
    display:flex;
    align-items: center;
    justify-content: center;
    gap:3px;
    margin:3px 0 8px;
}
.vendor-location-icon{
    width: 16px;
    height: 16px;
}
.vendor-location{
    font-size: 14px;
    font-weight:400;
    color:#828282;
}
.vendor-icons{
    display:flex;
    gap:24px;
    justify-content: center;
}
.vendor-icon :deep() path{
    fill:#91AFC8;
}
.vendor-icon:hover :deep() path{
    fill:#F47D21;
}
@media (max-width:991px) {
    .vendors-accounts-content{
        flex: 0 0 31%;
    }
}
@media (max-width:767px){
    .vendors-accounts-content{
        flex: 0 0 47%;
    }
}
@media (max-width:576px) {
    .vendors-section{
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .vendors-accounts-content{
        flex:0 0 47%;
    }
}
@media (max-width:460px) {
    .vendors-text{
        font-size:25px;
        padding-inline: unset;
    }
    .vendors-accounts-wrap{
        padding-inline: unset;
    }
    .vendors-accounts-content{
        flex:0 0 90%;
        margin: auto;
    }
}
</style>