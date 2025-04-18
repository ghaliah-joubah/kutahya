<template>
    <div>
        <NuxtLayout name="website">
            <section class="service-details-wrap">
                <div class="container-fluid">
                    <div class="row service-row">
                        <div class="col-md-8 service-details-col1">
                            <div class="service-details-col">
                                <div class="service-description">
                                    <div class="service-details-title">Service Name</div>
                                    <div class="service-available-content">
                                        <GreenLightIcon class="icon-light" v-if="true"/>
                                        <GrayLightIcon class="icon-light" v-else/>
                                        <div class="service-available" v-if="true">Available</div>
                                        <div class="service-available" v-else>Unavailable</div>
                                    </div>
                                </div>
                                <div class="service-details-price">Price: <span class="service-details-price-color">1000 IQD</span></div>
                                <div class="service-details-para">Lorem ipsum dolor sit amet consectetur. Sem lacus elementum in nam donec lacus. Feugiat id ut dui pulvinar posuere mi. Elementum ornare malesuada fames sit quis mattis lectus iaculis enim. Elementum nibh nam condimentum amet nibh posuere quam. Augue nunc malesuada cum tellus id eget. Enim senectus dolor a adipiscing sem etiam cursus id. Maecenas accumsan donec dolor imperdiet a eu. Fringilla facilisis faucibus at a ac. Egestas facilisi id elit leo eu nunc dui vel. Lorem ipsum dolor sit amet consectetur. Sem lacus elementum in nam donec lacus. Feugiat id ut dui pulvinar posuere mi. Elementum ornare malesuada fames sit quis mattis lectus iaculis enim. </div>
                                <a href="tel:+964-9962000000" style="width: fit-content;display: block;">
                                    <div class="service-details-link">
                                        <WatsAppIcon class="watsApp-icon"/>
                                        <span class="service-details-link-text">Contact us on WhatsApp</span>  
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 service-details-col2">
                            <img class="service-details-img" src="/img/service-details.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
    .service-row{
        padding-inline: 16px;
    }
    .service-details-wrap{
        margin:50px 0;
    }
    .service-details-col1{
        order:1;
    }
    .service-details-col{
        border-radius: 5px;
        background: rgba(9, 32, 66, 0.02);
        padding:16px;
    }
    .service-description{
        display: flex;
        align-items: center;
        gap: 5px 40px;
        margin-bottom: 16px;
        flex-wrap: wrap;
    }
    .service-details-title{
        color:  #F47D21;
        font-size: 32px;
        font-weight: 600;
    }
    .service-available-content{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .service-available{
        font-size: 18px;
        font-weight: 400;
        color:#828282;
    }
    .icon-light{
        width:8px;
        height: 8px;
    }
    .service-details-price{
        border-radius: 5px;
        background: rgba(9, 32, 66, 0.02);
        padding:16px;
        font-size:18px;
        font-weight: 600;
        color:var(--primary-color);
        width: fit-content;
    }
    .service-details-price-color{
        font-weight: 400;
        color:#F47D21;
    }
    .service-details-para{
        font-size: 16px;
        font-weight: 400;
        color:var(--primary-color);
        margin: 16px 0;
        text-align: justify;
    }
    .service-details-link{
        border-radius: 10px;
        background: #25D366;
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
        display:flex;
        align-items: center;
        gap:12px;
        padding:10px 16px;
    }
    .service-details-link-text{
        font-size: 12px;
        font-weight: 600;
        color:#fff;
    }
    .watsApp-icon{
        width:20px;
        height:20px;
    }
    .service-details-col2{
        order:2;
    }
    .service-details-img{
        max-width: 330px;
        width:90%;
        aspect-ratio: 3/3;
        border-radius: 50%;
        display: block;
        margin: auto;
        box-shadow: 0 0 0 20px rgba(244, 125, 33, 0.30), 0 0 0 15px rgba(244, 125, 33, 0.60), 0 0 0 9px #F47D21;
    }
    @media (max-width:767px) {
        .service-row{
            padding-inline: unset;
        }
        .service-details-col2{
            order:1;
        }
        .service-details-col1{
            order:2;
            margin-top: 30px;
        } 
    }
    @media (max-width:576px) {
        .service-details-title{
            font-size: 25px;
        }
        .service-details-price{
            padding:10px;
        }
    }
</style>