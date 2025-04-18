<template>
    <div>
        <NuxtLayout name="website">
            <section class="contact-us">
                <div class="container-fluid">
                    <div class="contact-border"></div>
                    <div class="row">
                        <div class="col-md-6"> 
                            <div class="contact-wrap">
                                <div class="contact-title">Contact us</div>
                                <div class="contact-form-content">
                                    <div class="contact-form">
                                        <label class="kutahya-label" for="name">Name</label>
                                        <input class="kutahya-input border-error" type="text" id="name" name="name" placeholder="Write your full name..">
                                    </div>
                                    <div class="error-box">
                                        <AlertIcon/><div class="wrong-message">Your mobile number is not valid.</div>
                                    </div>
                                </div>
                                <div class="contact-form-content">
                                    <div class="contact-form">
                                        <label class="kutahya-label" for="email">Email</label>
                                        <input class="kutahya-input" type="email" id="email" name="email" placeholder="Write your email..">
                                    </div>
                                    <div class="error-box">
                                        <AlertIcon/><div class="wrong-message">Your mobile number is not valid.</div>
                                    </div>

                                </div>
                                <div class="contact-form" style="margin-bottom:16px;">
                                    <label class="kutahya-label" for="subject">Subject</label>
                                    <input class="kutahya-input" type="subject" id="subject" name="subject" placeholder="Write your email subject..">
                                </div>
                                <div class="contact-form-content">
                                    <div class="contact-form">
                                        <label class="kutahya-label" for="subject">Message</label>
                                        <textarea class="contact-textarea" placeholder="Write your message.." rows="6" style="resize: none;"></textarea>
                                    </div>
                                    <div class="error-box">
                                        <AlertIcon/><div class="wrong-message">Your mobile number is not valid.</div>
                                    </div>
                                </div>
                                <button class="contact-btn" type="button">send message</button>
                            </div>
                        </div>
                        <div class="col-md-6 pe-0 contact-col-img">
                            <div class="contact-img-wrap">
                                <img class="contact-img1" src="/img/login-img.png" alt="">
                                <img class="contact-img2"  src="/img/contact-img.png" alt="">
                                <div class="contact-info">
                                    <div class="mb-2">
                                        <div class="contact-info-title">Address</div>
                                        <div class="contact-info-para">Iraq - Baghdad - street</div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="contact-info-title">Email</div>
                                        <div class="contact-info-para">Example@gmail.com</div>
                                    </div>
                                    <div class="mb-1">
                                        <div class="contact-info-title">Social media</div>
                                        <div class="contact-icons">
                                            <a href="#"><FacebookIcon class="contact-icon"/></a>
                                            <a href="#"><InstagramIcon class="contact-icon"/></a>
                                            <a href="#"><TwitterIcon class="contact-icon"/></a>
                                            <a href="#"><YouTubeIcon class="contact-icon"/></a>  
                                        </div>                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.contact-border{
    border: 1px solid #F47D21;
    position: absolute;
    background-color: transparent;
    height: 92%;
    width: 94%;
    top: 51px;
    z-index: 2;
}
.contact-us{
    position:relative;
}
/* --start first col--- */

.contact-wrap{
    width:80%;
    margin:auto;
}

.contact-title {
    color: var(--primary-color);
    font-size: 40px;
    font-weight: 700;
    width: fit-content;
    background-color: white;
    z-index: 3;
    position: relative;
    padding: 0px 15px;
    margin-top:20px;
}
.contact-form-content{
    margin-bottom:16px;
}
.contact-form{
    width: 100%;
}
.kutahya-input{
    z-index:3;
    position: relative;
}
.contact-textarea{
    border-radius: 10px;
    /* border: 1px solid rgba(12, 34, 67, 0.20); */
    border:1px solid #E0E0E0;
    background: #FFF;
    padding:15px;
    font-weight: 500;
    font-size: 14px;
    display: block;
    width: 100%;
    outline:none;
    z-index:3;
    position: relative;
}
.contact-textarea::placeholder{
    /* color:#BDBDBD; */
    color:#E0E0E0;
}
.contact-btn{
    border-radius: 10px;
    border:1px solid var(--primary-color);
    background: var(--primary-color);
    font-weight: 600;
    font-size: 16px;
    color:#fff;
    padding:8px;
    max-width: 230px;
    width:100%;
    z-index:3;
    position: relative;
}
.contact-btn:hover{
    border:1px solid #F47D21;
    background-color: #F47D21;
}

/* --end first col--- */
/* ---start second col--- */
.contact-img-wrap{
    position: relative;
    height: 100%;
}
.contact-img1{
    width: 100%;
    height: 100%;
    opacity:0;
    animation:fade-contact 4s;
    animation-iteration-count: infinite;
    animation-delay:2s;
    z-index: 1;
    position:relative;
    object-fit: cover;
}
.contact-img2{
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    object-fit: cover;
}
@keyframes fade-contact {
    0%{
        opacity:0;
    }
    50%{
        opacity:1;
    }
    100%{
        opacity:0;
    }
}
.contact-info {
    background-color: #F47D21;
    position: absolute;
    right: 0px;
    bottom: 0px;
    padding:24px 43px 24px 32px;
    z-index: 2;
}
.contact-info-title {
    font-size: 18px;
    font-weight: 700;
    color: white;
}
.contact-info-para {
    font-size: 18px;
    font-weight: 400;
    color: white;
}
.contact-icons{
    display:flex;
    gap:20px;
}
.contact-icon :deep() path{
    fill:#fff;
}
/* ---end second col--- */
@media (max-width:1213px){
    .contact-border{
        height: 93%;
    }
}
@media (max-width:991px){
    .contact-info{
        padding:18px;
    }
}
@media (max-width:767px) {
    .contact-border {
        display: none;
    }
    .contact-title {
        padding: 0px;
        font-size: 35px;
        margin-left:0px;
    }  
    .contact-col-img{
        padding-left:0px;
    }
    .contact-img-wrap{
        margin-top: 15px;
    }
}
@media (max-width:576px){
    .contact-info{
        padding:10px;
    }
    .contact-info-title{
        font-size:16px;
    }
    .contact-info-para{
        font-size:15px;
    }
    .contact-wrap{
        width:95%;
    }
}
</style>