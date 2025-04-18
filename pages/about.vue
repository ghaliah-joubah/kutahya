<template>
    <div>
        <NuxtLayout name="website">
            <section class="about-main-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="about-content">
                                <div class="about-title">Kutahya</div> 
                                <div class="about-text">
                                    Lorem ipsum dolor sit amet consectetur. Tincidunt ornare ut viverra aliquam luctus mattis morbi sit. Velit lorem ipsum nulla sollicitudin pharetra posuere. Ut sit viverra sapien sagittis convallis egestas odio diam. Amet felis at placerat augue.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about-img-content">
                                <img class="about-img" src="/img/about-img.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class=about-service-wrap>
                <CircleIcon class="circle-style-1"/>
                <CircleIcon class="circle-style-2"/>
                <CircleIcon class="circle-style-3"/>
                <CircleIcon class="circle-style-4"/>
                <div class="container">
                    <div class="about-service-title">Services we provide</div>
                    <div class="about-service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</div>
                    <div class="about-services-boxes">
                        <div class="about-service-box-wrap">
                            <div class="about-service-order">
                                <div class="about-service-box-title">Spare parts for your car</div>
                                <div class="about-service-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</div>
                            </div>
                            <div class="about-box-img-wrap about-box-img-order">
                                <img class="about-service-box-img" src="/img/about-services1.png" alt="">
                            </div>
                        </div>
                        <div class="about-service-box-wrap">
                            <div class="about-service-order">
                                <div class="about-service-box-title"> You can share your own ad to sell or rent your car</div>
                                <div class="about-service-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div class="about-box-img-wrap about-box-img-order">
                                <img class="about-service-box-img" src="/img/about-services2.png" alt="">
                            </div>
                        </div>
                        <div class="about-service-box-wrap">
                            <div class="about-service-order">
                                <div class="about-service-box-title">Let people know about your car showroom</div>
                                <div class="about-service-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div class="about-box-img-wrap about-box-img-order">
                                <img class="about-service-box-img" src="/img/about-services3.png" alt="">
                            </div>
                        </div>
                        <div class="about-service-box-wrap">
                            <div class="about-service-order">
                                <div class="about-service-box-title">Find the best offers and specifications</div>
                                <div class="about-service-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div class="about-box-img-wrap about-box-img-order">
                                <img class="about-service-box-img box-img" src="/img/about-services4.png" alt="">
                            </div>
                        </div>                      
                    </div>
                </div>
            </section>
            <section class="about-map-wrap">
                <div class="container-fluid">
                    <div class="row row-map">
                        <div class="col-md-6 col-map-text">
                            <div class="about-map-content">
                                <div class="about-map-title">Where are we?</div>
                                <div class="about-map-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</div>
                                <div class="about-map-text mt-4 mb-3">you can always send your questions and contact us</div>
                                <NuxtLink :to="localPath('/contact')"><button type="button" class="about-contact-btn">Contact us</button></NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-6 col-map">
                            <iframe class="about-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103031.41483533254!2d44.091365303448654!3d36.19740609671596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhCwgS3VyZGlzdGFuIFJlZ2lvbtiMINin2YTYudix2KfZgg!5e0!3m2!1sar!2snl!4v1704373261047!5m2!1sar!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<script>
export default {
    setup(){
        const localPath = useLocalePath();
        return { localPath }
    }
}
</script>
<style scoped>
/* ---start about section--- */
.about-main-section{
    margin-top: 25px;
}
.about-content{
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding-inline: 40px;
    height: 100%;
}
.about-title {
    font-size: 60px;
    font-weight: 700;
    color: var(--primary-color);
}
.about-text {
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 400;
    max-width: 540px;
    width: 100%;
    text-align: justify;
}
.about-img-content{
    display:flex;
    height: 100%;
}
.about-img{
    max-width: 600px;
    width:85%;
    margin: auto;
    aspect-ratio: 5/3;
    object-fit: cover;
}
/* ---end about section--- */
/* ---start service section--- */
.about-service-wrap{
    position: relative;
    margin-top: 40px;
}
.about-service-title {
    color: var(--primary-color);
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 24px;
}
.about-service-text {
    color:rgba(51, 51, 51, 0.80);
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 24px;
    text-align: center;
}
.about-services-boxes{
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
}
.about-service-box-wrap{
    border-radius: 9px;
    background: #F4F6FA;
    padding:24px 0 24px 24px;
    /* height: 100%; */
    display:flex;
    gap:12px;
    flex:0 0 49%;
}
.about-service-order{
    order:1
}
.about-service-box-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 16px;
}
.about-service-box-content{
    display: flex;
    align-items: center;
    gap: 15px;
}
.about-service-box-text{
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
    text-align:justify;
}
.about-box-img-wrap{
    flex-shrink: 0;
    align-items: center;
    display: flex;
}
.about-service-box-img{
    width: 125px;
    aspect-ratio: 3/3;
    object-fit: contain;
}
.box-img{
    margin-right: 10px;
}
.about-box-img-order{
    order:2;
}
.circle-style-1 {
    position: absolute;
    left: 40px;
    top: 0px;
    z-index: -1;
}
.circle-style-2 {
    position: absolute;
    right: 98px;
    top: 0px;
    z-index: -1;
}
.circle-style-3 {
    position: absolute;
    bottom: 0px;
    z-index: -1;
}
.circle-style-4 {
    position: absolute;
    right: 0px;
    bottom: 95px;
    z-index: -1;
}

/* ---end service section--- */
/* ---start map section--- */
.row-map{
    height: 443px;
}
.about-map-wrap{
    background: #F4F6FA;
    margin-top: 50px;
    margin-bottom: 20px;
}
.col-map-text{
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-map-content{
    max-width: 500px;
    padding:12px;
}
.about-map-title{
    font-size: 40px;
    font-weight: 700;
    color:var(--primary-color);
}
.about-map-text{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
}
.col-map{
    padding-right: 0 !important;
}
.about-map{
    width:100%;
    height: 443px;
}
.about-contact-btn{
    background-color: var(--primary-color);
    box-shadow: 0px 4px 4px 0px rgba(26, 52, 77, 0.25);
    border:1px solid var(--primary-color);
    color: white;
    border-radius: 10px;
    padding: 10px 35px;
    font-size: 12px;
    font-weight: 600;
}
.about-contact-btn:hover{
    background-color: #F47D21;
    border:1px solid #F47D21;
    color: white;
}
/* ---end map section--- */
@media (max-width:1199px) {
    .about-services-boxes{
        gap: 12px 15px;
    }
}
@media (max-width: 992px) {
    .about-content{
        padding-inline:20px;
    }
    .about-service-box-wrap{
        flex:0 0 100%;
    }
}
@media(max-width:768px) {
    .about-content{
        margin-bottom: 8px;
    }
    .about-text{
        max-width:100%;
    }
    .circle-style-1,.circle-style-2,.circle-style-3,.circle-style-4{
        display: none;
    }
    .col-map{
        padding-inline: 0 !important;
    }
    .row-map{
        height: unset;
    }
    .about-map-text{
        text-align: justify;
    }
    .col-map-text{
        justify-content: flex-start;
    }
    .about-map-content{
        max-width: 100%;
    }
}
@media (max-width: 576px) {
    .about-main-section{
        margin-top: 25px;
    }
    .about-content{
        padding-inline: 5px;
    }
    .about-title{
        font-size: 40px;
    }
    .about-text{
        font-size: 16px;
    }
    .about-service-title{
        font-size: 26px;
        margin-bottom: 12px;
        text-align: start;
    }
    .about-service-text{
        font-size: 16px;
        text-align: justify;
    }
    .about-service-box-wrap{
        flex-direction:column;
        padding: 8px 0 12px 12px;
    }
    .about-service-box-title{
        font-size: 20px;
        margin-bottom: 6px;
    }
    .about-box-img-order{
        order:1;
    }
    .about-service-order{
        order:2;
        padding-right: 12px;
    }
    .about-service-box-img{
        display: block;
        margin: auto;
    }
    .about-map-title{
        font-size:34px;
    }
}
</style>