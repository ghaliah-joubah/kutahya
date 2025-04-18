<template>
    <div>
        <NuxtLayout name="website">
            <section class="blog-section">
                <div class="container">
                    <div class="blog-title">Blog</div>
                    <div class="blog-text">Here you can stay up to date with the latest articles and news that interest you about real estate and cars.</div>
                    <div class="blog-card-wrap">
                        <div class="card blog-card" style="width: 18rem;" v-for="blog in 6">
                            <img src="/img/blog-img.png" class="blog-cars-img" alt="...">
                            <div class="card-body">
                                <div class="blog-card-title">Article title</div>
                                <p class="blog-card-text">Lorem ipsum dolor sit amet consectetur. Pretium est integer laoreet magna.</p>
                                <NuxtLink to="/articles/id"><button class="blog-card-btn">Read more</button></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </NuxtLayout>
    </div>
</template>
<style scoped>
    .blog-section{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .blog-title{
        color:#F47D21;
        font-size:32px;
        font-weight: 600;
        margin-bottom: 16px;
    }
    .blog-text{
        color:var(--primary-color);
        font-size:18px;
        font-weight: 400;
        margin-bottom: 32px;
    }
    .blog-card-wrap{
        display: flex;
        gap: 15px;
        flex-wrap:wrap;
    }
    .blog-card{
        /* padding:16px; */
        border-radius: 16px;
        background: #FFF;
        box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
        flex:0 0 32%;
    }
    .blog-cars-img{
        width: 100%;
        border-radius: 10px;
        aspect-ratio: 4/2;
        padding:16px 16px 0 16px;
    }
    .blog-card-title{
        color:var(--primary-color);
        font-size:16px;
        font-weight: 600;
    }
    .blog-card-text{
        font-size:12px;
        font-weight: 400;
        color:var(--primary-color);
        margin: 8px 0 16px;
    }
    .blog-card-btn{
        background: var(--primary-color);
        border:1px solid var(--primary-color);
        color:#fff;
        font-size:12px;
        font-weight: 600;
        padding:11px 28px;
        box-shadow: 0px 4px 4px 0px rgba(26, 52, 77, 0.25);
        border-radius: 10px;
    }
    .blog-card-btn:hover{
        background: #F47D21;
        border:1px solid #F47D21;
    }
    @media (max-width:991px){
        .blog-card{
            flex:0 0 48%;
        }
    }
    @media (max-width:767px){
        .blog-card-btn{
            padding:7px 25px;
        }
        .blog-text{
            text-align: justify;
        }
    }
    @media (max-width:576px) {
        .blog-section{
            margin-top: 25px;
            margin-bottom: 25px;
        }
        .blog-card{
            flex:0 0 80%;
            margin:auto;
        }
        .blog-title{
            margin-bottom: 8px;
        }
        .blog-text{
            font-size: 17px;
            margin-bottom: 20px;
        }
    }
    @media (max-width:490px){
       .blog-card{
            flex:0 0 100%;
       }
    }
</style>