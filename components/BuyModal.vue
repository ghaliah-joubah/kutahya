<template>

    <!-- Buy Modal in normal account -->
    <div class="modal fade" id="BuyModal" tabindex="-1" aria-labelledby="BuyModalLabel" aria-hidden="true" style="z-index:55555">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="buy-close-btn" data-bs-dismiss="modal" aria-label="Close">
                        <CloseModalIcon />
                    </button>            
                </div>
                <div class="modal-body">
                    <img class="buy-modal-img" src="/img/normal-user-gallery.png">
                    <!-- only for Car -->
                    <div class="buy-modal-text" v-if="true">{{$t('These packages are only for Car showrooms accounts,If you are one send us a verification request.')}}</div>
                    <!-- only for Real estates -->
                    <div class="buy-modal-text" v-if="false">{{ $t('These packages are only for Real estates offices accounts,If you are one send us a verification request.') }}</div>
                </div>
                <div class="modal-footer">
                    <!-- before send request -->
                    <button type="button" class="btn-send-request-modal" data-bs-toggle="modal" data-bs-target="#SendRequestModal" v-if="true">{{ $t('Send request') }}</button>
                    <!-- after send request -->
                    <div style="width:100%" v-if="false">
                        <button class="btn-requested-disabled">{{ $t('Requested') }}</button>
                        <button type="button" class="btn-cancel-request" data-bs-toggle="modal" data-bs-target="#RequestedModal">
                            {{ $t('Cancel the request') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- send request modal in normal account -->
    <div class="modal fade" id="SendRequestModal" tabindex="-1" aria-labelledby="SendRequestLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header request-modal-header">
                    <h5 class="modal-title" id="SendRequestLabel">{{$t('Verification request')}}</h5>
                    <button type="button" class="request-modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                        <CloseModalIcon />
                    </button>
                </div>
                <div class="modal-body send-request-body">
                    <div class="mb-3">
                        <label class="modal-label">{{$t('Are you a car show or real estate office?')}} <span style="color: #F47D21;">*</span></label>
                        <div class="input-radio-wrap">
                            <div class="d-flex align-items-center">
                                <input class="input-radio" type="radio" id="manual" name="transmission">
                                <label class="label-radio" for="manual">{{$t('Car show')}}</label>
                            </div>
                            <div class="d-flex align-items-center">
                                <input class="input-radio" type="radio" id="auto" name="transmission">
                                <label class="label-radio" for="auto">{{ $t('Real estate office') }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="modal-label">{{$t('Message to the admin')}} <span style="color: #F47D21;">*</span></label>
                        <textarea class="textarea-request-modal" :placeholder="$t('Write about your business..')" rows="3" style="resize: none;"></textarea>   
                    </div>
                    <div>
                        <div class="modal-label">{{$t('upload proof to confirm the conversion to a business account')}} <span style="color: #F47D21;">*</span> </div>
                        <div class="upload-wrap">
                            <div class="upload-icon">
                                <UploadIcon />
                            </div>
                            <div class="upload-text"><span style="color: #F47D21;cursor:pointer;">{{$t('Click here')}}</span> {{ $t('to upload or drop media here') }}</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-send-request-modal">{{ $t('Send request') }}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- cancel the request modal -->
    <div class="modal fade" id="RequestedModal" tabindex="-1" aria-labelledby="RequestedModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-requested-title" id="exampleModalLabel">{{$t('Are you sure you want to cancel the request?')}}</h5>
                </div>
                
                <div class="modal-footer">
                    <div class="btn-cancel-request-wrap">
                        <button type="button" class="btn-cancel-request-color">{{ $t('yes') }}</button>
                        <button type="button" class="btn-cancel-request-light">{{ $t('cancel') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* buy modal */
.modal-header{
    border-bottom:none;
    padding:30px 16px;
}
.modal-footer{
    border-top:none;
    padding-bottom:32px;
}
.buy-close-btn{
    position: absolute;
    right: 10px;
    top: 15px;
    border: none;
    background-color: transparent;
}
.buy-modal-img{
    display:block;
    margin:auto;
    width: 322px;
    object-fit: cover;
}
.buy-modal-text{
    font-size:16px;
    font-weight: 400;
    color:var(--primary-color);
    text-align: center;
    margin:16px 0px 0px;
}
.btn-send-request-modal{
    border-radius: 5px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    color:#fff;
    font-size:14px;
    font-weight: 600;
    padding: 9px 20px;
    display: block;
    margin: auto;
    max-width: 297px;
    width:80%;
}
.btn-send-request-modal:hover{
    background: #F47D21;
    border:1px solid #F47D21;
}
.btn-requested-disabled{
    border-radius: 5px;
    background:  #BDBDBD;
    border:1px solid #BDBDBD;
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    padding:8px 22px;
    display: block;
    margin: 0 auto 16px;
    max-width:297px;
    width:80%;
}
.btn-cancel-request{
    font-size:14px;
    font-weight:600;
    margin:auto;
    display:block;
    text-decoration-line: underline;
    color:var(--primary-color);
    border: none;
    background: #fff;
    padding: 0;
}
.btn-cancel-request:hover{
    color:#F47D21;
}
/* send request modal */
.request-modal-header{
    padding: 18px 0 24px;
}
.modal-title{
    font-size: 16px;
    font-weight: 600;
    color:var(--primary-color);
    margin:auto;
}
.send-request-body{
    overflow-y: auto;
    height: 392px;
}
.request-modal-close-btn{
    position: absolute;
    right: 10px;
    top: 15px;
    border: none;
    background-color: transparent;
}
.input-radio-wrap{
    display: flex;
    gap: 10px 24px;
    align-items: center;
    flex-wrap: wrap;
}
.input-radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 4px;
    background-clip: content-box;
    border: 1px solid #D1D1D6;
    background-color: transparent;
    border-radius: 50%;
}
.input-radio:checked {
    background-color:#F47D21;
    background-clip: #F47D21;
    width: 20px;
    height: 20px;
    padding: 4px;
    background-clip: content-box;
    border: 1px solid #F47D21;
}
.label-radio{
    font-size:14px;
    font-weight: 400;
    color:var(--primary-color);
    margin-left:8px;
}
.modal-label{
    font-size:16px;
    font-weight: 400;
    color:var(--primary-color);
    margin-bottom:8px;
}
.textarea-request-modal{
    width:100%;
    border-radius: 5px;
    border: 1px solid rgba(12, 34, 67, 0.20);
    background: #FFF;
    font-weight: 400;
    font-size: 14px;
    color:var(--primary-color);
    padding:15px 24px;
    outline:none;
}
.textarea-request-modal:placeholder{
    color:#E0E0E0;
}
.upload-wrap{
    border-radius: 8.66px;
    border: 1px dashed  #9E9E9E;
    background: rgba(250, 250, 250, 0.70);
    padding:24px;
    
}
.upload-text{
    font-size:14px;
    font-weight:400;
    text-align: center;
    color:var(--primary-color);
    margin-top:10px;    
}
.upload-icon{
    border-radius: 50px;
    background: rgba(0, 35, 52, 0.10);
    padding:16px 36px;
    width: 92px;
    margin: auto;
    cursor:pointer;
}
/* -- cancel request modal-- */
.modal-requested-title{
    font-size:16px;
    font-weight:400;
    color:var(--primary-color);
    display:block;
    margin:auto;
}
.btn-cancel-request-wrap{
    display:flex;
    align-items:center;
    gap:16px;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
}
.btn-cancel-request-color{
    border-radius: 5px;
    background: var(--primary-color);
    border:1px solid var(--primary-color);
    color:#fff;
    font-size:14px;
    font-weight: 600;
    padding: 9px 12px;
    max-width:189px;
    width:45%
}
.btn-cancel-request-color:hover{
    background: #F47D21;
    border:1px solid #F47D21;
}
.btn-cancel-request-light{
    border-radius: 5px;
    background: #fff;
    border:1px solid var(--primary-color);
    color:var(--primary-color);
    font-size:14px;
    font-weight: 600;
    padding: 9px 12px;
    max-width:189px;
    width:45%
}
.btn-cancel-request-light:hover{
    background: #F47D21;
    border:1px solid #F47D21;
    color:#fff;
}
@media (max-width:450px){
    .modal-label{
        font-size:15px;
    }
}
/* ---rtl--- */
[data-direction= rtl] .buy-close-btn{
    left:10px;
    right:unset;
}
[data-direction= rtl] .request-modal-close-btn{
    left: 10px;
    right:unset;
}
[data-direction= rtl] .label-radio{
    margin-left:unset;
    margin-right: 8px;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .modal-label{
    font-size:15px;
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .modal-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .modal-requested-title{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .btn-cancel-request-light{
    font-family: 'tajawal-bold';
}
</style>