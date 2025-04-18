<template>
    <div>
        <NuxtLayout name="website">
            <section class="blog-inner-wrap">
                <div class="container">
                    <div class="blog-inner">Blog</div>
                    <div class="blog-inner-title">Article Title</div>
                    <span class="blog-inner-date">24/12/2023</span>
                    <img class="blog-inner-img" src="/img/blog-img.png" alt="">
                    <div class="blog-inner-para">Lorem ipsum dolor sit amet consectetur. Turpis vestibulum fermentum risus fermentum lorem. Congue ultrices dignissim iaculis feugiat nulla at. At viverra posuere nunc in. Cum ullamcorper non aliquam fringilla tellus semper suscipit. Imperdiet arcu massa hac lacus. Gravida bibendum ullamcorper condimentum est. Suspendisse mauris dictumst facilisi vel in ultricies nec. Id facilisi egestas odio egestas. Mauris diam lectus adipiscing egestas ut tellus in. Dui platea egestas malesuada suspendisse. Rutrum ac nulla pulvinar amet placerat dapibus ac velit. Nunc morbi pretium sociis ipsum dolor. Nunc orci etiam eget enim felis tristique. Purus vitae lobortis arcu id sed nibh leo nibh.<br>
                        Sit nullam augue vitae quam tempor mi est. Justo odio urna euismod orci lobortis morbi. Pharetra fames malesuada amet gravida pretium lectus vitae est eget. Purus tellus id placerat massa pellentesque pharetra ac cum nullam. Suspendisse metus mi adipiscing mattis tortor in eleifend. Odio ut risus id velit cras. Arcu at morbi faucibus eget lobortis et cras. Tortor nullam blandit ac massa sit consectetur aliquet aliquam. Convallis id dignissim consectetur mauris facilisis odio habitant nec et. Egestas nisl iaculis sit vel egestas. Quis pharetra et bibendum nunc potenti ac habitant ipsum. In mauris volutpat consequat aenean netus. Quam sed tortor tortor elementum lectus felis. Mattis eget blandit senectus in consectetur. Diam senectus sed vel commodo ut et suspendisse semper sed. Sit nullam augue vitae quam tempor mi est. Justo odio urna euismod orci lobortis morbi. Pharetra fames malesuada amet gravida pretium lectus vitae est eget. Purus tellus id placerat massa pellentesque pharetra ac cum nullam. Suspendisse metus mi adipiscing mattis tortor in eleifend. Odio ut risus id velit cras. Arcu at morbi faucibus eget lobortis et cras. Tortor nullam blandit ac massa sit consectetur aliquet aliquam. Convallis id dignissim consectetur mauris facilisis odio habitant nec et. Egestas nisl iaculis sit vel egestas. Quis pharetra et bibendum nunc potenti ac habitant ipsum. In mauris volutpat consequat aenean netus. Quam sed tortor tortor elementum lectus felis. Mattis eget blandit senectus in consectetur. Diam senectus sed vel commodo ut et suspendisse semper sed.
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.blog-inner-wrap{
    margin:40px 0 40px;
}
.blog-inner{
    color: #F47D21;
    font-size: 24px;
    font-weight: 600;
}
.blog-inner-title{
    color: var(--primary-color);
    font-size: 32px;
    font-weight: 600;
}
.blog-inner-date{
    color:#BDBDBD;
    font-size: 16px;
    font-weight: 400;
}
.blog-inner-img{
    max-width: 800px;
    width: 100%;
    aspect-ratio: 5/2;
    object-fit: cover;
    border-radius: 8px;
    margin-top:24px;
}
.blog-inner-para{
    margin-top: 24px;
    color: var(--primary-color);
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
}
@media (max-width:576px) {
    .blog-inner-wrap{
        margin:25px 0 25px;
    }
}

</style>