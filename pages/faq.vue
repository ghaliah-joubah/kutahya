<template>
    <div>
        <NuxtLayout name="website">
            <section class="faq-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="faq-title">Frequently asked questions</div>
                            <div class="question-answer-box" @click="$event?.target?.closest('.question-answer-box')?.classList.toggle('show')" v-for="box in 4">
                                <div class="question-text">Lorem ipsum dolor sit amet consectetur ?</div>
                                <div class="answer-text">Lorem ipsum dolor sit amet consectetur. Porta amet id nisl in id eget id aliquam dui. Cursus ullamcorper egestas nunc purus  ultricies. Augue pellentesque nibh nunc sit tempus bibendum egestas magnis pretium. In ac ultrices purus nunc et ante amet blandit sed.ff purus nunc et ante amet blandit sed.1 purus nunc et ante amet blandit sed.2 purus nunc et ante amet blandit sed. 3 purus nunc et ante amet blandit sed.4 v5 purus nunc et ante amet blandit sed.6</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="faq-help">How can we help you today <span style="color:#F47D21">?</span></div>
                            <div class="faq-contact-content">
                                <div class="faq-contact-text">If you have any question you can contact us on:</div>
                                <a href="tel:+964999xxxxxx" class="faq-contact-link">
                                    <div class=" mb-2">
                                        <WatsAppIcon class="faq-contact-icon"/>
                                        <span class="faq-contact-number">+964999xxxxxx</span>
                                    </div>
                                </a>
                                <a href="tel:+964999xxxxxx" class="faq-contact-link">
                                    <div>
                                        <PhoneIcon class="faq-contact-icon"/>
                                        <span class="faq-contact-number">+964999xxxxxx</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.faq-section{
    margin:40px 0px;
    padding-inline:16px;
}
/* ---first col--- */
.faq-title{
    font-size: 32px;
    font-weight: 700;
    color:var(--primary-color);
    margin-bottom:16px;
}
.question-answer-box{
    border-top:5px solid var(--primary-color);
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding:8px 16px 12px;
    margin-bottom:16px;
    cursor:pointer;
    max-height: 42px;
    overflow-y: hidden;
    transition: max-height .5s linear;
    
}
.question-text{
    font-weight: 500;
    font-size:15px;
    color:var(--primary-color); 
    padding-bottom:8px;
}
.answer-text{
    color:#425466;
    font-weight: 400;
    font-size:13px;
    overflow-y: auto;
    text-align: justify;
    padding-right: 5px;
}
.show.question-answer-box{
    max-height: 120px;
    border-top:5px solid #f47d21;
}
.show > .answer-text{
    max-height: 60px;
}
/* ---second col--- */
.faq-help{
    font-size: 24px;
    font-weight: 700;
    color:var(--primary-color);
    margin-bottom:16px;
    padding-top:11px;
}
.faq-contact-content{
    border-radius: 5px;
    border: 1px solid rgba(9, 32, 66, 0.10);
    background: rgba(9, 32, 66, 0.02);
    padding:16px;
}
.faq-contact-text{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    margin-bottom:16px;
    text-align: justify;
}
.faq-contact-link{
    width: fit-content;
    display: block;
    margin: auto;
}
.faq-contact-number{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    margin-left:5px;
}
.faq-contact-icon{
    width: 20px;
    height: 20px;
}
.faq-contact-icon :deep() path{
    fill:#f47d21;
}
/* ---start media--- */
@media (max-width:991px){
    .faq-section{
        padding-inline:8px;
    }
    .faq-title{
        font-size: 30px;
    }
    .faq-help{
        margin-bottom:10px;
        padding-top:unset;
        font-size: 20px;
    }
    .faq-contact-text{
        font-size:15px;
    }
    .faq-contact-content{
        margin-bottom: 10px;
        padding:12px;
    }

}
@media (max-width:767px) {
    .faq-help{
        margin-top:10px;
    }
}
@media (max-width:576px){
    .faq-section{
        margin:24px 0;
        padding-inline: unset;
    }
    .faq-title{
        font-size: 20px;
    }
    .faq-help{
        font-size:19px;
    }
    .faq-contact-text{
        font-size: 14px;
    }
}
@media (max-width:374px) {
    .question-answer-box{
        max-height:66px;
    }
    .show.question-answer-box{
        max-height:130px;
    }
}
</style>