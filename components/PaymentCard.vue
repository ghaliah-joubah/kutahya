<template>
    <div class="payment_card">
        <div class="inner_container">
            <div class="package_name"> package name</div>
            <div class="package_cost"> $100</div>
            <button type="button" class="buy_btn" data-bs-toggle="modal" data-bs-target="#BuyModal">
                {{$t('Buy')}}
            </button>
        </div>
        <div class="line_between"></div>
        <div class="package_contents">
            <div> {{ $t('This package includes:') }} </div>
            <ul>
                <li> <PaymentCheckIcon class="margin_svg"/> 5 Normal ads </li>
                <li> <PaymentCheckIcon class="margin_svg"/> 3 VIP ads </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.payment_card {
    background-color: #fff;
    box-shadow: 0px 0px 16px -4px rgba(16, 24, 40, 0.08);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
.payment_card .inner_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    padding: 24px 24px 16px;
}
.payment_card .line_between {
    background-color: #F0F4F8;
    height: 1px;
    width: 100%;
}
.payment_card .package_name {
    padding: 4px 12px;
    border-radius: 24px;
    background-color: #FFEEE1;
    font-size: 10px;
    font-weight: 600;
    text-align: start;
    color: #F47D21; 
}
.payment_card .package_cost {
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    text-align: start;
    color: var(--primary-color);
}
.payment_card .buy_btn {
    padding: 8px 0px;
    border-radius: 10px;
    background: var(--Primary-1, #092042);
    box-shadow: 0px 4px 4px 0px rgba(26, 52, 77, 0.10);
    color: #fff;
    background-color: var(--primary-color);
    border: none;
    outline: none;
    width: 100%;
    display: block;
    margin: auto;
}
.payment_card .package_contents {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 24px 8px;
    width: 100%;
}
.payment_card .package_contents div {
    margin-bottom: 16px;
    font-size: 10px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: start;
    color: #486581;
}
.payment_card .package_contents ul {
    padding: 0;
}
.payment_card .package_contents ul li {
    text-align: start;
    margin-bottom: 16px;
    font-size: 10px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: #486581;
}
.payment_card .package_contents .margin_svg {
    margin-right: 8px;
}
/* ---RTL--- */
[data-direction= rtl] .payment_card .package_name{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .payment_card .package_cost {
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .payment_card .package_contents div{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .payment_card .package_contents ul li {
    font-family: 'tajawal-regular';
}
.payment_card .package_contents .margin_svg {
    margin-left: 8px;
    margin-right: unset;
}

</style>