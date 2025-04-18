<template>
    <div>
        <NuxtLayout name="website">
            <section class="terms-section">
                <div class="container">
                    <div class="terms-title">Terms of use</div>
                    <div class="terms-text mt-3">Welcome to Kutahya! By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions:</div>
                    <div class="terms-text-bold mt-3">1. Use of Services</div>
                    <div class="terms-text">1.1 You agree to use our rental car services for lawful purposes only and in accordance with these terms.</div>
                    <div class="terms-text">1.2 You must be of legal age to rent a car and possess a valid driver's license.</div>
                    <div class="terms-text-bold mt-3">2. Reservations and Payments</div>
                    <div class="terms-text">2.1 Reservations are subject to availability and confirmation.</div>
                    <div class="terms-text">2.2 Payment is required in advance, and you agree to provide accurate and complete payment information.</div>
                    <div class="terms-text-bold mt-3">3. Cancellation and Refund Policy</div>
                    <div class="terms-text">3.1 Our cancellation and refund policy is outlined on our website. Please review it before making a reservation.</div>
                    <div class="terms-text">3.2 Fees may apply for cancellations made after a specified period</div>
                    <div class="terms-text-bold mt-3">4. Vehicle Use and Return</div>
                    <div class="terms-text">4.1 You agree to use the rented vehicle in compliance with traffic laws and for the intended purpose.</div>
                    <div class="terms-text">4.2 Vehicles must be returned on time and in the same condition as when rented.</div>
                    <div class="terms-text-bold mt-3">5. User Account</div>
                    <div class="terms-text">5.1 If you create an account, you are responsible for maintaining its confidentiality and security.</div>
                    <div class="terms-text">5.2 Notify us immediately of any unauthorized use of your account.</div>
                    <div class="terms-text-bold mt-3">6. Limitation of Liability</div>
                    <div class="terms-text">6.1 We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</div>
                    <div class="terms-text">6.2 We reserve the right to modify, suspend, or terminate services without notice.</div>
                    <div class="terms-text-bold mt-3">7.Privacy</div>
                    <div class="terms-text">Our Privacy Policy governs the collection and use of your personal information. Please review it on our website.</div>
                    <div class="terms-text-bold mt-3"> 8.Governing Law</div>
                    <div class="terms-text">These terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the appropriate courts of [Your Jurisdiction].</div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.terms-section{
    margin:40px 0px;
}
.terms-title{
    font-size: 32px;
    font-weight: 700;
    color:#F47D21;
    margin-bottom: 16px;
}
ol {
  counter-reset: item
}
li {
  display: block
}
li:before {
  content: counters(item, ".") " .";
  counter-increment: item;
}
.terms-text{
    font-size: 14px;
    font-weight: 400;
    color:var(--primary-color);
    text-align: justify;
}
.terms-text-bold{
    font-size: 14px;
    font-weight: 500;
    color:var(--primary-color);
}

@media (max-width:576px) {
    .terms-section{
        margin:25px 0px;
    }
}
</style>