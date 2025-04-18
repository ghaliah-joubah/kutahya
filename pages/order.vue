<template>
    <div>
        <NuxtLayout name="website">
            <div class="container-fluid">
                <section class="order-content">
                    <div class="order-title">{{ $t('My orders') }}</div>
                    <div class="order-table-wrap">
                        <table class="main-table">
                            <thead>
                                <tr class="main-tr">
                                    <th class="order-table-th">{{ $t('Order ID') }}</th>
                                    <th class="order-table-th">{{ $t('Operation') }}</th>
                                    <th class="order-table-th">{{ $t('Amount') }}</th>
                                    <th class="order-table-th">{{ $t('Payment method') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="order-table-td">1111111</td>
                                    <td class="order-table-td-operation">{{ $t('Adding a') }} <span class="order-table-td-span" style="text-transform: lowercase;">{{ $t('normal') }}</span> {{ $t('ad:') }} <span class="order-table-td-span">Audi - e-tron Premium</span></td>
                                    <td class="order-table-td">1 Normal Ad</td>
                                    <td class="order-table-td"><BalancePaymentIcon class="payment-icon" /> {{ $t('Balance') }}</td>
                                </tr>
                                <tr>
                                    <td class="order-table-td">122113</td>
                                    <td class="order-table-td-operation">{{ $t('Adding a') }} <span class="order-table-td-span">{{ $t('VIP') }}</span> {{ $t('ad:') }} <span class="order-table-td-span">Audi - e-tron Premium</span></td>
                                    <td class="order-table-td">$1500</td>
                                    <td class="order-table-td"><StripeIcon class="payment-icon"/> {{ $t('Stripe') }}</td>
                                </tr>
                                <tr>
                                    <td class="order-table-td">122144</td>
                                    <td class="order-table-td-operation">{{ $t('Purchasing a package:') }} <span class="order-table-td-span">Package name</span></td>
                                    <td class="order-table-td">$1500</td>
                                    <td class="order-table-td"><CashIcon class="payment-icon"/> {{ $t('Cash') }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </section>
            </div>
        </NuxtLayout>
    </div>
</template>
<style scoped>
.order-content{
    padding-inline: 40px;
    margin:40px 0;
}
.order-title{
    color: #F47D21;
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    margin-bottom:40px;
}
.order-table-wrap{
    min-height: 360px; 
    height: 360px;
    width:100%;
    overflow-x: auto; 
    overflow-y:auto;
}
.main-table{
    width:100%;
    background: #FFF;
    box-shadow: 0px 0px 8px 0px rgba(237, 237, 237, 0.40);
}
.main-tr{
    border-top: 1px solid #F2F2F2;
    border-bottom: 1px solid #F2F2F2;
    background: rgba(157, 178, 206, 0.20);
}
.order-table-th{
    color:  #333;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px; /* 125% */
    letter-spacing: 0.1px;
    padding:10px 16px;
    /* text-wrap:nowrap; */
    white-space: nowrap;
}
.order-table-td{
    color: var(--primary-color);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.1px;
    padding:15px 8px;
    border-bottom: 1px solid  #F2F2F2;
}
.order-table-td-operation{
    color: var(--primary-color);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.1px;
    padding:15px 8px;
    border-bottom: 1px solid  #F2F2F2;
    min-width:200px;
    max-width:300px;
}
.order-table-td-span{
    font-weight: 600;
}
.payment-icon{
    margin-right:8px;
}

@media(max-width:991px){
    .order-content{
        padding-inline: 16px;
    }
}
@media(max-width:576px){
    .order-content{
        margin:20px 0;
        padding-inline: 0;
    }
    .order-title{
        margin-bottom:20px;
    }
    .order-table-td{
        padding:15px 4px;
        font-size:12px;
    }
}
/* ---rtl--- */
[data-direction= rtl] .payment-icon{
    margin-left: 8px;
    margin-right:unset
}
[data-direction= rtl] .order-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .order-table-th{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .order-table-td{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .order-table-td-operation{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .order-table-td-span{
    font-family: 'tajawal-bold';
}
</style>