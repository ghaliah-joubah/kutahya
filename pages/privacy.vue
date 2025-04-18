<template>
    <div>
        <NuxtLayout name="website">
            <section class="privacy-section">
                <div class="container">
                    <div class="privacy-title">Privacy policy</div>
                    <div class="privacy-text">Kutahya is committed to protecting the privacy of its users. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to ensure its security.</div>
                    <div class="privacy-text-bold">Information We Collect</div>
                    <div class="privacy-text">1. Personal Information: We may collect personal information, such as your name, contact details, and payment information, when you rent a car from us.</div>
                    <div class="privacy-text">2. Usage Information: We collect information about how you use our website or mobile app, including your IP address, browser type, and the pages you visit.</div>
                    <div class="privacy-text-bold mt-3">How We Use Your Information</div>
                    <div class="privacy-text">1. Reservation and Rental Services: We use your personal information to process reservations, complete transactions, and provide you with rental services.</div>
                    <div class="privacy-text">2. Communication: We may use your contact information to communicate with you about reservations, promotions, and important updates.</div>
                    <div class="privacy-text">3. Improving Our Services: We analyze user behavior and feedback to enhance our services, website, and user experience.</div>
                    <div class="privacy-text-bold mt-3">Information Sharing</div>
                    <div class="privacy-text"> We do not sell or rent your personal information to third parties. However, we may share information with service providers and business partners involved in providing our services. Security Measures <br>We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Your Choices <br>You have the right to review, correct, or delete your personal information. You can opt-out of marketing communications at any time. Updates to this Privacy Policy<br> We may update this Privacy Policy to reflect changes in our practices. Check this page regularly for the latest information.</div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.privacy-section{
    margin:40px 0px;
}
.privacy-title{
    color: #F47D21;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
}
.privacy-text{
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-color);
    text-align: justify;
}
.privacy-text-bold{
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
}
@media (max-width:576px) {
    .privacy-section{
        margin:25px 0px;
    }
}
</style>