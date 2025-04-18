<template>
    <div>
        <NuxtLayout name="website">
            <section class="our-services">
                <div class="services-text">Our services</div>
                <div class="services-para">We offer you our various free and paid services to help you get everything you need with Kutahya in the world of cars and real estate.</div>
                <div class="search-btn-content">
                    <SearchIcon class="search-icon"/>
                    <input class="search-btn" type="text" placeholder="Search in our services..">
                </div>
            </section>
            <section class="services-cards" v-if="true">
                <div class="container">
                    <div class="services-card-wrap">
                        <div class="card service-card" style="width: 18rem;">
                            <NuxtLink to="/services/id"><img class="service-card-img" src="/img/service-card-img2.png" alt="..."></NuxtLink>
                            <div class="card-body">
                                <NuxtLink to="/services/id">
                                    <div class="service-card-info">
                                        <CarServiceIcon class="service-card-icon"/>
                                        <div>
                                            <div class="service-card-name">Washing cars</div>
                                            <span class="service-card-price">Free</span>
                                        </div>
                                    </div>
                                </NuxtLink>
                                <p class="service-card-text">Lorem ipsum dolor sit amet consectetur. Diam a in feugiat pellentesque integer eget in. Non sit cum integer dignissim morbi amet. At mattis ullamcorper neque lacinia cum.</p>
                            </div>
                        </div>
                        <div class="card service-card" style="width: 18rem;">
                            <NuxtLink to="/services/id"><img class="service-card-img" src="/img/service-card-img.png" alt="..."></NuxtLink>
                            <div class="card-body">
                                <NuxtLink to="/services/id">
                                    <div class="service-card-info">
                                        <FurnitureServiceIcon class="service-card-icon"/>
                                        <div>
                                            <div class="service-card-name">Furniture delivery service</div>
                                            <span class="service-card-price">1000 IQD</span>
                                        </div>
                                    </div>
                                </NuxtLink>
                                <p class="service-card-text">Lorem ipsum dolor sit amet consectetur. Diam a in feugiat pellentesque integer eget in. Non sit cum integer dignissim morbi amet. At mattis ullamcorper neque lacinia cum.</p>
                            </div>
                        </div>
                        <div class="card service-card" style="width: 18rem;">
                            <NuxtLink to="/services/id"><img class="service-card-img" src="/img/service-card-img2.png" alt="..."></NuxtLink>
                            <div class="card-body">
                                <NuxtLink to="/services/id">
                                    <div class="service-card-info">
                                        <CarServiceIcon class="service-card-icon"/>
                                        <div>
                                            <div class="service-card-name">Washing cars</div>
                                            <span class="service-card-price">Free</span>
                                        </div>
                                    </div>
                                </NuxtLink>
                                <p class="service-card-text">Lorem ipsum dolor sit amet consectetur. Diam a in feugiat pellentesque integer eget in. Non sit cum integer dignissim morbi amet. At mattis ullamcorper neque lacinia cum.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-pagination-wrap">
                        <div class="pagination-box-arrow">
                            <ArrowIcon class="arrow-pagination"/>
                        </div>
                        <div class="pagination-box-active">1</div>
                        <div class="pagination-box">2</div>
                        <div class="pagination-box-arrow">
                            <ArrowIcon class="arrow-pagination" style="transform: rotateY(178deg);"/>
                        </div>
                    </div>
                </div>
            </section>
            <section class="search-result-wrap" v-else>
                <div class="container">
                    <SearchResult class="search-result"/>
                    <div class="service-empty-text">No results found</div>
                    <div class="service-empty-para">There are no results for” Lorem ipsum”, If you have any suggestions you can always send it to us.</div>
                    <!-- <NuxtLink to="/contact"><button class="service-contact-btn">Contact us</button></NuxtLink> -->
                    <NuxtLink to="/contact" class="service-contact-btn">contact us</NuxtLink>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
/* ---start first section--- */
.our-services{
    border-radius: 0px 0px 20px 20px;
    background:#F47D21;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
    position:relative;
}
.our-services:before{
    content: "";
    position:absolute;
    background-image: url('/img/services-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    top:0px;
    left:0px;
    width:110px;
    height: 100%;
    /* border: 1px solid green; */
}
.our-services:after{
    content: "";
    position: absolute;
    background-image: url('/img/services-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    top: 0;
    right: 0px;
    width: 110px;
    height: 100%;
    /* border: 1px solid red; */
}
.services-text{
    font-size:32px;
    font-weight: 600;
    color:#fff;
    text-align:center;
    padding-top:50px;
    padding-bottom: 16px;
}
.services-para{
    font-size:18px;
    font-weight: 400;
    color:#fff;
    text-align:center;
    padding-bottom: 24px;
    padding-inline:30px;
}
.search-btn-content{
    max-width: 600px;
    width:90%;
    margin:auto;
    padding-bottom: 24px;
    position:relative;
}
.search-icon{
    width:24px;
    height: 24px;
    position: absolute;
    top: 10px;
    left: 10px;
}
.search-icon :deep() path{
    stroke: #BDBDBD;
}
.search-btn{
    border-radius: 20px;
    background: var(--White, #FFF);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
    width:100%;
    border: 1px solid #fff;
    padding: 10px 10px 10px 50px;
    outline:none;
    font-size: 16px;
    font-weight: 400;
}
.search-btn::placeholder{
    color:#BDBDBD;
}
/* ---end first section--- */
/* ---start second section--- */
.services-cards{
    margin-top:40px;
    margin-bottom:40px;
}
.services-card-wrap{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}
.service-card{
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    flex:0 0 32%;
}
.service-card:hover .service-card-info{
    background-color: #F47D21;
}
.service-card-img{
    padding: 16px 16px 0 16px;
    border-radius: 5px;
    width:100%;
    aspect-ratio: 4/2;
}
.service-card-info{
    border-radius: 16px;
    background: var(--primary-color);
    padding:8px 10px;
    display:flex;
    gap:10px;
    margin-bottom:16px;
}
.service-card-icon{
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}
.service-card-name{
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
}
.service-card-price{
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
}
.service-card-text{
    color: #6A7380;
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
    text-align: justify;
}
.service-pagination-wrap{
    display:flex;
    gap:30px;
    align-items: center;
    justify-content: center;
}
.pagination-box-active{
    border-radius: 8px;
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
    /* padding: 10px 17px; */
    padding:10px;
    font-size: 13px;
    font-weight: 600;
    color:#fff;
    width: 40px;
    height: 40px;
    text-align: center;
}
.pagination-box{
    border-radius: 8px;
    border: 1px solid #f1f1f1;
    background: #fff;
    /* padding: 10px 17px; */
    padding:10px;
    font-size: 13px;
    font-weight: 600;
    color:var(--primary-color);
    width: 40px;
    height: 40px;
    text-align: center;
}
.pagination-box:hover{
    background:#f1f1f1;
}
.pagination-box-arrow{
    /* padding: 10px 11px; */
    padding:10px;
    border-radius: 8px;
    border: 1px solid #f1f1f1;
    background: #fff;
    font-size: 13px;
    font-weight: 600;
    color:var(--primary-color);
    cursor: pointer;
    width: 40px;
    height: 40px;
    text-align: center;
}
.pagination-box-arrow:hover{
    background: #F47D21;
}
.arrow-pagination{
    width: 16px;
    height: 16px;
}
.arrow-pagination :deep() path{
    stroke: #F47D21;
    fill:#F47D21;
    width:16px;
    height: 16px;
}
.pagination-box-arrow:hover .arrow-pagination :deep() path{
    fill:#FFF;
    stroke:#fff;
}
.search-result-wrap{
    margin: 16px 0 50px;
}
.search-result{
    display: block;
    margin: auto;
}
.service-empty-text{
    color: #4A4A4A;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}
.service-empty-para{
    color: #4A4A4A;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    max-width:500px;
    text-align:center;
    display: block;
    margin: 0 auto 20px;
}
.service-contact-btn{
    border-radius: 10px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    font-size: 14px;
    font-weight: 600;
    color:#FFF;
    padding:10px 45px;
    display:block;
    margin: auto;
    width:fit-content;
}
.service-contact-btn:hover{
    background: #F47D21;
    border:1px solid #F47D21;
}
/* ---end second section--- */
/* ---start media --- */
@media (max-width:1199px) {
    .our-services:after{
        background-size: cover;
        background-position: right;
    }
    .our-services::before{
        /* width:130px; */
        background-size: cover;
        background-position: left;
    }
    .services-card-wrap{
        gap:15px;
    }
}
@media (max-width:991px) {
    .service-card{
        flex:0 0 48%;
    }
}
@media (max-width:767px) {
    .services-para{
        text-align: justify;
    }
}
@media (max-width:576px){
    .services-text{
        font-size: 25px;
        padding-top: 24px;
        padding-bottom: 8px;
    }
    .services-para{
        font-size:16px;
        padding-inline:15px;
        /* text-align: justify; */
        padding-bottom: 16px;
    }
    .service-card{
        flex:0 0 80%;
        margin:auto;
    }
}
@media (max-width:490px){
    .service-card{
        flex:0 0 100%;
    }
    .service-empty-para{
        font-size: 15px;
    }
}
</style>