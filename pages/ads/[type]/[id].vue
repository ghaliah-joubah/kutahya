<template>
    <div>
        <NuxtLayout name="website">
            <div class="ad-car-main">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <Carousel :wrap-around="true" class="ad-carousel" >
                                <Slide v-for="slide in 5" :key="slide">
                                    <div class="car-modal-btn" data-bs-toggle="modal" data-bs-target="#problemCar">
                                        <div class="carousel__item ad-item">
                                            <!-- image in my favorites -->
                                            <HeartFillIcon class="favorite-icon" v-if="true"/>
                                            <!-- image is not in my favorite -->
                                            <HeartIcon class="favorite-icon" v-if="false"/>
                                            <NuxtLink :to="localPath('/')">
                                                <div class="compare-wrap">
                                                    <CompareIcon class="compare-icon"/>
                                                    <span class="compare-text">{{$t('Compare') }}</span>
                                                </div>
                                            </NuxtLink>
                                            <img src="https://placehold.co/900x900" class="carousel-car-img">
                                        </div>
                                    </div>
                                </Slide>
                                <template #addons>
                                    <Navigation />
                                    <Pagination />
                                </template>
                            </Carousel>                         
                            <div class="ad-car-type-rating-wrap">
                                <div class="ad-car-type-wrap">
                                    <div class="ad-title" v-if="elementType== 'car'">Audi</div>
                                    <div class="d-flex align-items-center flex-wrap" v-if="elementType== 'real_estates'">
                                        <div class="d-flex align-items-center">
                                            <svg class="real-estate-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.66602 16.6654H3.33268M3.33268 16.6654H12.4993M3.33268 16.6654V11.9722C3.33268 11.5344 3.33268 11.3154 3.38518 11.1112C3.43171 10.9302 3.50829 10.7585 3.61182 10.603C3.72856 10.4276 3.89197 10.2807 4.21728 9.98845L6.13527 8.26534C6.76422 7.7003 7.07892 7.41756 7.43476 7.31031C7.74847 7.21574 8.08327 7.21574 8.39693 7.31031C8.7531 7.41766 9.06827 7.70053 9.69827 8.26652L11.6149 9.98845C11.9406 10.281 12.1031 10.4275 12.2199 10.603C12.3234 10.7585 12.3999 10.9302 12.4464 11.1112C12.4989 11.3154 12.4993 11.5344 12.4993 11.9722V16.6654M12.4993 16.6654H16.666M16.666 16.6654H18.3327M16.666 16.6654V5.99612C16.666 5.06452 16.666 4.59803 16.4845 4.24186C16.3248 3.92826 16.0691 3.67347 15.7555 3.51369C15.399 3.33203 14.9329 3.33203 13.9995 3.33203H8.49952C7.56609 3.33203 7.09903 3.33203 6.74252 3.51369C6.42891 3.67347 6.17412 3.92826 6.01434 4.24186C5.83268 4.59838 5.83268 5.06544 5.83268 5.99886V8.3322" stroke="#F47D21" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <span class="real-estate-title">Residential /</span>
                                        </div>
                                        <!-- in case of real estate an apartment -->
                                        <div class="d-flex align-items-center" v-if="false">
                                            <svg class="real-estate-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.2797 7.0989H15.5599H16.0558C16.059 7.0989 16.0634 7.0989 16.0677 7.09778L14.1602 3.9561C14.1461 3.93365 14.1287 3.9011 14.1124 3.86967L14.1081 3.8607C14.0983 3.84049 14.0918 3.82029 14.0885 3.79896H5.68576C5.66732 3.79896 5.68576 3.83263 5.66623 3.86967C5.65104 3.89774 5.63585 3.9258 5.6174 3.9561L3.71094 7.09778C3.71528 7.0989 3.71962 7.0989 3.72287 7.0989H4.21875H12.2797ZM9.05165 14.1118C9.14822 14.1118 9.22635 14.1927 9.22635 14.2925C9.22635 14.3924 9.14822 14.4733 9.05165 14.4733C8.95508 14.4733 8.87695 14.3924 8.87695 14.2925C8.87695 14.1927 8.95508 14.1118 9.05165 14.1118ZM9.08746 11.7794H10.6923C10.9592 11.7794 11.2023 11.8928 11.378 12.0746C11.5538 12.2565 11.6634 12.5079 11.6634 12.784V16.1984H15.3342V7.56583H4.44444V16.1984H8.11523V12.784C8.11523 12.5079 8.22483 12.2565 8.40061 12.0746C8.57639 11.8928 8.81944 11.7794 9.08746 11.7794ZM10.6912 12.2452H9.08746C8.94423 12.2452 8.81402 12.3058 8.71962 12.4035C8.62522 12.5012 8.56662 12.6358 8.56662 12.784V16.1984H11.212V12.784C11.212 12.6358 11.1534 12.5012 11.059 12.4035C10.9646 12.3058 10.8344 12.2452 10.6912 12.2452ZM12.7908 12.2733H14.3978C14.5226 12.2733 14.6235 12.3777 14.6235 12.5068V14.4284C14.6235 14.5574 14.5226 14.6618 14.3978 14.6618H12.7908C12.666 14.6618 12.5651 14.5574 12.5651 14.4284V12.5068C12.5651 12.3777 12.666 12.2733 12.7908 12.2733ZM14.1721 12.7402H13.0165V14.1949H14.1732V12.7402H14.1721ZM12.7908 8.80499H14.3978C14.5226 8.80499 14.6235 8.90938 14.6235 9.03846V10.9601C14.6235 11.0891 14.5226 11.1935 14.3978 11.1935H12.7908C12.666 11.1935 12.5651 11.0891 12.5651 10.9601V9.03734C12.5651 8.90938 12.666 8.80499 12.7908 8.80499ZM14.1721 9.2708H13.0165V10.7255H14.1732V9.2708H14.1721ZM5.38086 12.2733H6.98785C7.11263 12.2733 7.21354 12.3777 7.21354 12.5068V14.4284C7.21354 14.5574 7.11263 14.6618 6.98785 14.6618H5.38086C5.25608 14.6618 5.15516 14.5574 5.15516 14.4284V12.5068C5.15516 12.3777 5.25608 12.2733 5.38086 12.2733ZM6.76215 12.7402H5.60655V14.1949H6.76324V12.7402H6.76215ZM5.38086 8.80499H6.98785C7.11263 8.80499 7.21354 8.90938 7.21354 9.03846V10.9601C7.21354 11.0891 7.11263 11.1935 6.98785 11.1935H5.38086C5.25608 11.1935 5.15516 11.0891 5.15516 10.9601V9.03734C5.15516 8.90938 5.25608 8.80499 5.38086 8.80499ZM6.76215 9.2708H5.60655V10.7255H6.76324V9.2708H6.76215ZM15.7856 7.56583V16.4319C15.7856 16.561 15.6847 16.6654 15.5599 16.6654H11.4377H8.34093H4.21875C4.09397 16.6654 3.99306 16.561 3.99306 16.4319V7.56583H3.72287C3.6263 7.56583 3.51997 7.52991 3.43424 7.47492C3.38216 7.44124 3.33442 7.39747 3.29861 7.34808C3.25087 7.28186 3.22266 7.20553 3.22266 7.12472C3.22266 7.06298 3.23893 7.00125 3.27474 6.94176L5.23763 3.70804C5.24957 3.68896 5.2615 3.66539 5.27344 3.64294C5.36133 3.48019 5.44054 3.33203 5.68576 3.33203H14.0918C14.337 3.33203 14.4162 3.48019 14.5041 3.64407V3.64519C14.5139 3.66315 14.5237 3.68223 14.5399 3.70917L16.5028 6.94288C16.5386 7.00237 16.5549 7.06411 16.5549 7.12584C16.5549 7.20778 16.5267 7.28298 16.4789 7.3492C16.4475 7.39298 16.4052 7.43339 16.3585 7.46594L16.3433 7.47716C16.2576 7.53328 16.1513 7.56808 16.0547 7.56808H15.7856V7.56583Z" fill="#F47D21"/>
                                            </svg>
                                            <span class="real-estate-title">Apartment</span>
                                        </div>
                                        <!-- in case of real estate a house -->
                                        <div class="d-flex align-items-center" v-if="true">
                                            <HouseIcon class="real-estate-icon"/>
                                            <span class="real-estate-title">House</span>
                                        </div>                                                                                
                                    </div>
                                    <div class="ad-text">Audi e-tron Premium</div>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="ad-car-price" v-if="false">$ 15.000 ( {{$t('Negotiable')}} )</div>
                                            <OfferSmallIcon class="offer-small-icon" v-if="false"/>
                                            <div class="ad-car-price" v-if="true">$ 15.000</div>
                                        </div>
                                        <div class="ad-car-sell" v-if="elementType== 'car'">{{$t('sell')}}</div>
                                        <div class="ad-car-sell" v-if="elementType== 'real_estates'">{{$t('Rent')}} \ {{$t('Daily')}}</div>
                                    </div>
                                </div>
                                <div class="ad-car-rating-content">
                                    <div>
                                        <span class="ad-car-rating">4.0</span>
                                        <StarIcon class="rating-icon"/>
                                    </div>
                                    <div class="ad-car-rating" v-if="true">(2 {{$t('reviews')}})</div>
                                    <div class="ad-car-rating" v-if="false">({{ $t('No reviews') }})</div>
                                </div>
                            </div>
                            <!-- state trade-in only in car type-->
                            <div class="trade-in-wrap" v-if="elementType== 'car'">
                                <TradeInIcon class="trade-in-icon"/>
                                <div>
                                    <div class="trade-in-title">{{$t('Trade-in: The required vehicle')}}</div>
                                    <div class="trade-in-text">Lorem ipsum dolor sit amet purus.</div>
                                </div>
                            </div> 
                            <!-- only in offers state -->
                            <div class="ad-offers-wrap">
                                <OfferIcon class="offer-icon"/>
                                <div>
                                    <div class="ad-offer-text">5% {{$t('off for')}} 3 {{$t('days')}}</div>
                                    <div class="ad-offer-para">Lorem ipsum dolor sit amet purus.</div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="ad-title-color mb-0">{{$t('Description')}}</div>
                                <div class="ad-car-para">Lorem ipsum dolor sit amet consectetur. Porta amet ultricies lectus morbi ac cras nibh. Elit malesuada non posuere non dictumst varius duis. Sit elit tortor ut volutpat suspendisse in sit faucibus.</div>
                            </div>
                            <ul class="nav nav-pills mb-3 ad-tabs" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link ad-nav-link active" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab" aria-controls="pills-info" aria-selected="true">{{$t('Basic Info')}}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link ad-nav-link" id="pills-performance-tab" data-bs-toggle="pill" data-bs-target="#pills-performance" type="button" role="tab" aria-controls="pills-performance" aria-selected="false" v-if="elementType== 'car'">{{$t('Performance & Insurance details')}}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link ad-nav-link" id="pills-problem-tab" data-bs-toggle="pill" data-bs-target="#pills-problem" type="button" role="tab" aria-controls="pills-problem" aria-selected="false" v-if="elementType== 'car'">{{$t('Problem & Car engine')}}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link ad-nav-link" id="pills-property-tab" data-bs-toggle="pill" data-bs-target="#pills-property" type="button" role="tab" aria-controls="pills-property" aria-selected="false" v-if="elementType== 'real_estates'">{{$t('Property ownership and plan')}}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link ad-nav-link" id="pills-address-tab" data-bs-toggle="pill" data-bs-target="#pills-address" type="button" role="tab" aria-controls="pills-address" aria-selected="false">{{ $t('Address')}}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link ad-nav-link" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false">{{$t('reviews')}}</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <!-- basic info in case car -->
                                <div class="tab-pane fade show active" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab" v-if="elementType== 'car'">
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Vehicle Details')}}</div>
                                        <div class="basic-details-wrap">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <BrandIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Brand')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Audi</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <CountryOrigin class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Country of origin')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Japan</span>
                                                        </div>
                                                    </div>                                      
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <ModelIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Model')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">e-tron Premium</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <YearIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Year of manufacture')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">2020</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <CarTypeIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Car type')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Car</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <MileageIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Mileage')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">52,758 km</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <EngineSizeIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Engine Size')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">2.5 L</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <CylinderIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{ $t('Cylinders') }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">6</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <TransmissionIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Transmission')}} </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Automatic</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="row details-row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <CarColorIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Car color')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Black</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <FuelIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Fuel Type')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Petrol</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <PlateNumberIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Plate number details')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Baghdad (Private)</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <SeatCountIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Seats count')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">5</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <SeatMaterialIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Seat material')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Leather</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <CarDrivetrainIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Car drivetrain system')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Rear wheel</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <LocatedAtIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Located at')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Car Show</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <StateIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('State')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Extra features')}}</div>
                                        <div class="features-wrap">
                                            <div class="features-box">
                                                <img src="https://placehold.co/32x32" class="car-features-img">
                                                <!-- <NavigationSystemIcon /> -->
                                                <span class="features-text">Navigation system</span>
                                            </div>
                                            <div class="features-box">
                                                <!-- <LoudSoundSystemIcon /> -->
                                                <img src="https://placehold.co/32x32" class="car-features-img">
                                                <span class="features-text">Loud sound system</span>
                                            </div>
                                            <div class="features-box">
                                                <img src="https://placehold.co/32x32" class="car-features-img">
                                                <span class="features-text">Excellent rim</span>
                                            </div>
                                            <div class="features-box">
                                                <img src="https://placehold.co/32x32" class="car-features-img">
                                                <span class="features-text">Car camera</span>
                                            </div>
                                            <div class="features-box">
                                                <img src="https://placehold.co/32x32" class="car-features-img">
                                                <span class="features-text">Ambient lighting </span>
                                            </div>                                           
                                        </div>
                                    </div>
                                </div>
                                <!-- basic info in case real estate -->
                                <div class="tab-pane fade show active" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab" v-if="elementType== 'real_estates'">
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Property Details')}}</div>
                                        <div class="basic-details-wrap">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <RealEstateStatus class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Real estate status')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">contract</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <FloorIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Floor number')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">1</span>
                                                        </div>
                                                    </div>                                      
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <ArealIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Area')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">200 m2</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <FurnitureIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Furniture')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">2</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <BedroomIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Bedroom count')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">5</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <LivingroomIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Livingroom count')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">5</span>
                                                        </div>
                                                    </div>                                                   
                                                </div>
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="row details-row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <KitchenIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Kitchen count')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">1</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <BathroomIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Bathroom count')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">3</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <BalconyIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Balcony count')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">3</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <DirectionIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Direction')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">South</span>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2 mt-2">
                                                        <div class="col-md-7 col-sm-6 col-6">
                                                            <div class="d-flex align-items-center">
                                                                <DealIcon class="basic-info-icon"/>
                                                                <span class="basic-details-title">{{$t('Deal with')}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 col-sm-6 col-6">
                                                            <span class="basic-details-text">Owner</span>
                                                        </div>
                                                    </div>                                                                                                                                              
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Extra features')}}</div>
                                        <div class="features-wrap">
                                            <div class="features-box" style="gap:8px;">                                               
                                                <img src="https://placehold.co/32x32" class="real-estate-features-img">                                              
                                                <span class="features-text">Gym</span>
                                            </div>
                                            <div class="features-box" style="gap:8px;">
                                                <img src="https://placehold.co/32x32" class="real-estate-features-img">
                                                <span class="features-text">Pool</span>
                                            </div>
                                            <div class="features-box" style="gap:8px;">
                                                <img src="https://placehold.co/32x32" class="real-estate-features-img">
                                                <span class="features-text">Parking</span>
                                            </div>
                                            <div class="features-box" style="gap:8px;">                                              
                                                <img src="https://placehold.co/32x32" class="real-estate-features-img">
                                                <span class="features-text">Schools</span>
                                            </div>
                                            <div class="features-box" style="gap:8px;">                                       
                                                <img class="real-estate-features-img" src="https://placehold.co/32x32">
                                                <span class="features-text">Barber</span>
                                            </div>                  
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-performance" role="tabpanel" aria-labelledby="pills-performance-tab" v-if="elementType== 'car'">
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Insurance details')}}</div>
                                        <div class="ad-car-para">General insurance to date: 20 / 04 / 2024</div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{ $t('Performance reports') }}</div>
                                        <div class="ad-car-para">Lorem ipsum dolor sit amet consectetur. Porta amet ultricies lectus morbi ac cras nibh. Elit malesuada non posuere non dictumst varius duis. Sit elit tortor ut volutpat suspendisse in sit faucibus.</div>
                                        <div class="reports-img-wrap">
                                            <div class="report-img-box" v-for="report in 5" :key="report">
                                            <img class="report-img" src="https://placehold.co/150x200" data-bs-toggle="modal" data-bs-target="#report">
                                            </div> 
                                                              
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-problem" role="tabpanel" aria-labelledby="pills-problem-tab" v-if="elementType== 'car'">
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Problems and accidents')}} <span class="problem-car-span">({{$t('Click on the red parts to see the real situation')}}) </span></div>
                                        <!-- Button trigger modal -->
                                        <button type="button" class="car-modal-btn" data-bs-toggle="modal" data-bs-target="#problemCar">
                                            <ProblemCarImage class="problem-car-img"/>
                                        </button> 
                                    </div>
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Car engine')}}</div>
                                        <div class="engine-img-wrap">
                                            <div class="engine-img-box" v-for="engine in 6" :key="engine" data-bs-toggle="modal" data-bs-target="#engine">
                                            <img class="engine-img" src="https://placehold.co/100x100">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-property" role="tabpanel" aria-labelledby="pills-property-tab" v-if="elementType== 'real_estates'">
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Ownership certificate')}}</div>
                                        <img class="ownership-img" src="https://placehold.co/500x300" data-bs-toggle="modal" data-bs-target="#property-ownership">
                                    </div>
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Property plan')}}</div>
                                        <img class="property-img" src="https://placehold.co/500x300" data-bs-toggle="modal" data-bs-target="#property-ownership">
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
                                    <div class="mt-3">
                                        <div class="ad-title-color">{{$t('Address')}}</div>
                                        <iframe class="ad-car-address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103031.41483533254!2d44.091365303448654!3d36.19740609671596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhCwgS3VyZGlzdGFuIFJlZ2lvbtiMINin2YTYudix2KfZgg!5e0!3m2!1sar!2snl!4v1704373261047!5m2!1sar!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                                    <div class="mt-3">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <div class="ad-title-color mb-0" style="text-transform: capitalize;">{{$t('reviews')}}</div>
                                            <!-- Button trigger modal -->
                                            <button type="button" class="review-btn" data-bs-toggle="modal" data-bs-target="#addReview">
                                                <PlusIcon class="review-add-icon"/> {{ $t('Add review') }}
                                            </button>                              
                                        </div>
                                        <div class="all-reviews" v-if="true">
                                            <div class="reviews-wrap mb-3" v-for="review in 5" :key="review">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="review-user-img-content">
                                                        <UserImage class="review-user-img"/>
                                                        <div class="review-user-name">User name</div>
                                                    </div>
                                                    <div class="d-flex align-items-center" style="gap:2px">
                                                        <!-- with rating -->
                                                        <StarIcon class="review-rating-icon" v-for="rating in 5" :key="rating"/>
                                                        <!-- without rating -->
                                                        <!-- <StarGrayIcon class="review-rating-icon" v-for="rating in 5" :key="rating"/> -->
                                                    </div>
                                                </div>
                                                <div class="review-para">Lorem ipsum dolor sit amet consectetur. Blandit vulputate enim mauris lacus laoreet risus at. Viverra tortor eu nullam arcu amet condimentum id tellus.</div>
                                            </div>
                                            <NuxtLink :to="localPath('/')" class="review-more-btn">{{$t('See More')}}</NuxtLink>                         
                                        </div>
                                        <div class="reviews-empty-wrap" v-if="false">
                                            <img class="reviews-empty-img" src="/img/reviews-empty.png">
                                            <div class="reviews-empty-text">{{$t('There are no reviews yet')}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="col2-wrap">
                                <div class="seller-info-title">{{$t('Seller Info')}}</div>
                                <div class="seller-info-wrap">
                                    <div class="seller-info-content">
                                        <UserImage class="seller-img"/>
                                        <div class="seller-name">User Name</div>
                                        <div class="seller-phone">+964-99620xxxxx</div>
                                        <div class="seller-location-wrap">
                                            <LocationIcon />
                                            <span class="seller-location">Baghdad</span>
                                        </div>
                                    </div>
                                    <div class="seller-box-wrap">
                                        <a href="tel:+964-99620xxxxx" class="seller-box-phone">
                                            <PhoneIcon class="phone-icon"/>
                                            <span class="seller-box-text">{{$t('Call now')}}</span>
                                        </a>
                                        <a href="https://wa.me/964-99620xxxxx" class="seller-box-watsApp">
                                            <WatsAppIcon class="watsApp-icon"/>
                                            <span class="seller-box-text">{{$t('WatsApp')}}</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="transport-check-car-wrap" v-if="elementType== 'car'">
                                    <CarMoveIcon class="car-move-icon"/>
                                    <div class="transport-check-car">
                                        <div class="seller-ask-text">{{$t('Are you not in the same city and want to move the car to your location?')}}</div>
                                        <a href="https://wa.me/964-99620xxxxx"><button class="transport-check-btn">{{$t('Ask to move the car')}}</button></a>                                      
                                    </div>
                                </div>
                                <div class="transport-check-car-wrap" v-if="elementType== 'car'">
                                    <CheckCarIcon class="check-icon"/>
                                    <div class="transport-check-car">
                                        <div class="seller-ask-text">{{$t('Do you want to check the car before buying it?')}}</div>
                                        <a href="https://wa.me/964-99620xxxxx"><button class="transport-check-btn">{{$t('Test driving the car')}}</button></a>                                       
                                    </div>
                                </div>
                                <!-- in state real estates only -->
                                <div class="schedule-wrap" v-if="elementType== 'real_estates'">
                                    <svg class="schedule-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35 25L23.3333 26.6667L25 35H6.66667C6.22464 35 5.80072 34.8244 5.48816 34.5118C5.17559 34.1993 5 33.7754 5 33.3333V15H35V25Z" fill="#F47D21"/>
                                        <path d="M35 25L25 35M35 25L23.3333 26.6667L25 35M35 25V8.33333M25 35H6.66667C6.22464 35 5.80072 34.8244 5.48816 34.5118C5.17559 34.1993 5 33.7754 5 33.3333V8.33333M5 8.33333C5 7.89131 5.17559 7.46738 5.48816 7.15482C5.80072 6.84226 6.22464 6.66667 6.66667 6.66667H33.3333C33.7754 6.66667 34.1993 6.84226 34.5118 7.15482C34.8244 7.46738 35 7.89131 35 8.33333M5 8.33333V15H35V8.33333M28.3333 5V8.33333M20 5V8.33333M11.6667 5V8.33333" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <div>
                                        <div class="schedule-text">{{$t('Do you want to see the house to take the right decision ?')}}</div>
                                        <a href="https://wa.me/964-99620xxxxx"><button class="schedule-btn">{{$t('Schedule tour')}} </button></a>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Add Review Modal -->
                        <div class="modal fade modal-add-review" id="addReview" tabindex="-1" aria-labelledby="addReviewLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <h5 class="modal-title review-modal-title" id="addReviewLabel">{{ $t('Add review') }}</h5>
                                    <button ref="close_btn1"  type="button" class=" review-modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                                        <CloseModalIcon />
                                    </button> 
                                    <div class="rating-modal-box">
                                        <!-- Before Rating -->
                                        <StarGrayIcon class="rating-review-modal" v-for="rat in 5" :key="rat" />
                                        <!-- After Rating  -->
                                        <!-- <StarIcon class="rating-review-modal" v-for="rat in 5" :key="rat" /> -->
                                    </div>                                           
                                    <div class="modal-body">
                                        <textarea class="textarea-review-modal" :placeholder="$t('Add your review (optional)')" rows="6" style="resize: none;"></textarea>   
                                    </div>
                                    <div class="modal-footer review-modal-footer">
                                        <button type="button" class="review-modal-btn disabled-btn" >{{ $t('Add review') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Problem Car Modal -->
                        <div class="modal fade car-modal" id="problemCar" tabindex="-1" aria-labelledby="addReviewLabel" aria-hidden="true">
                            <button class="modal-close-btn"  ref="close_btn1"  type="button" data-bs-dismiss="modal" aria-label="Close">
                                <CloseIcon class="close-icon-color"/>
                            </button>                         
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-body">                                       
                                        <Carousel class="car-big-carousel" id="" :items-to-show="1" :wrap-around="true" v-model="currentSlide" ref="modal_carousel">
                                            <Slide v-for="slide in 10" :key="slide">
                                                <div class="carousel__item">                                             
                                                    <div class="car-img-number"> <span>1</span> {{$t('of')}} <span>20</span> </div>
                                                    <img class="car-big-img" src="https://placehold.co/1000x600">
                                                </div>
                                            </Slide>
                                            <template #addons>
                                                <Navigation />                                             
                                            </template>
                                        </Carousel>
                                        <Carousel class="car-small-carousel" id="thumbnails" :wrap-around="true" :breakpoints="breakpoints"  v-model="currentSlide" ref="modal_carousel_small" >
                                            <Slide v-for="slide in 10" :key="slide">
                                                <div class="carousel__item" @click="slideTo(slide - 1)" >
                                                    <!-- class(small-img-active) only when image in small slider it's the same as in big slider -->
                                                    <img class="car-small-img small-img-active" src="https://placehold.co/100x100">
                                                </div>
                                            </Slide>
                                        </Carousel>                                                                        
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                        <!-- Report modal  -->
                        <div class="modal fade report-modal" id="report" tabindex="-1" aria-labelledby="addReviewLabel" aria-hidden="true">
                            <button class="modal-close-btn"  ref="close_btn1"  type="button" data-bs-dismiss="modal" aria-label="Close">
                                <CloseIcon class="close-icon-color"/>
                            </button>
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-body">                                       
                                        <Carousel class="report-big-carousel" id="" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
                                            <Slide v-for="slide in 10" :key="slide">
                                                <div class="carousel__item carousel-item-big">                                             
                                                    <div class="report-img-number"> <span>1</span> {{$t('of')}} <span>20</span> </div>
                                                    <img class="report-big-img" src="https://placehold.co/600x600" alt="">
                                                </div>
                                            </Slide>
                                            <template #addons>
                                                <Navigation />                                             
                                            </template>
                                        </Carousel>
                                        <Carousel class="report-small-carousel" id="thumbnails" :wrap-around="true" v-model="currentSlide" :breakpoints="breakpointReport" ref="carousel" >
                                            <Slide v-for="slide in 10" :key="slide">
                                                <div class="carousel__item carousel-item-small" @click="slideTo(slide - 1)">
                                                    <img class="report-small-img small-img-active" src="https://placehold.co/100x100">
                                                </div>
                                            </Slide>
                                        </Carousel>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                        <!-- ownership and property modal  -->
                        <div class="modal fade sheet-modal" id="property-ownership" tabindex="-1" aria-labelledby="addReviewLabel" aria-hidden="true">
                            <button class="modal-close-btn"  ref="close_btn1"  type="button" data-bs-dismiss="modal" aria-label="Close">
                                <CloseIcon class="close-icon-color"/>
                            </button>
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-body">                                                                              
                                        <img class="sheet-img" src="https://placehold.co/800x800">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Engine modal -->
                        <div class="modal fade engine-modal" id="engine" tabindex="-1" aria-labelledby="addReviewLabel" aria-hidden="true">
                            <button class="modal-close-btn"  ref="close_btn1"  type="button" data-bs-dismiss="modal" aria-label="Close">
                                <CloseIcon class="close-icon-color"/>
                            </button>
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-body">                                       
                                        <Carousel class="engine-big-carousel" id="" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
                                            <Slide v-for="slide in 10" :key="slide">
                                                <div class="carousel__item engine-carousel-big-item">                                             
                                                    <div class="car-img-number"> <span>1</span> {{$t('of')}} <span>20</span> </div>
                                                    <img class="engine-big-img" src="https://placehold.co/700x400">
                                                </div>
                                            </Slide>
                                            <template #addons>
                                                <Navigation />                                             
                                            </template>
                                        </Carousel>
                                        <Carousel class="" id="thumbnails" :wrap-around="true" v-model="currentSlide" :breakpoints="breakpointEngine" ref="carousel" >
                                            <Slide v-for="slide in 10" :key="slide">
                                                <div class="carousel__item engine-carousel-small-item" @click="slideTo(slide - 1)">
                                                    <!-- <img class="engine-small-img small-img-active" src="/img/engine.png" alt=""> -->
                                                    <img class="engine-small-img small-img-active" src="https://placehold.co/100x100">
                                                </div>
                                            </Slide>
                                        </Carousel>
                                    </div>                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div> 
            </div>
        </NuxtLayout>
    </div>
</template>
<script>
    export default{
        setup(){
            const localPath = useLocalePath();
            return { localPath }
        },
        data: () => ({
            currentSlide: 0,
            elementType:'real_estates',
            breakpoints: {
                0: {
                    itemsToShow: 3,
                },
                768: {
                    itemsToShow: 4,
                }
            },
            breakpointReport: {
                0: {
                    itemsToShow: 2,
                },
                470: {
                    itemsToShow: 3,
                },
                768: {
                    itemsToShow: 4,
                }
            },
             breakpointEngine: {
                0: {
                    itemsToShow: 2,
                },
                450: {
                    itemsToShow: 3,
                },
                768: {
                    itemsToShow: 4,
                }
            },
        }),
        methods: {
            slideTo(val) {
                // this.currentSlide = val;
                // this.$refs.modal_carousel.restartCarousel();
                // this.$refs.modal_carousel_small.restartCarousel();                
            },
        },
    }
</script>
<style scoped>
.ad-car-main{
    margin-top:35px;
    padding-inline:20px;
}
.car-modal-btn{
    border: none;
    background-color: transparent;
    /* width:100%; */
}
.car-modal-btn:focus-visible{
    outline: none;
}
.carousel-car-img{
    width: 100%;
    aspect-ratio: 2/1;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
}
.ad-item{
    position:relative;
    /* width:100%; */
}
.favorite-icon{
    position:absolute;
    top:24px;
    right:16px;
    background: rgba(255, 255, 255, 0.70);
    border-radius: 50%;
    padding: 0px;
    width: 40px;
    height: 40px;
    padding: 7px;
}
.compare-wrap{
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.70);
    padding: 8px;
    position: absolute;
    left: 44%;
    top: 24px;
    display:flex;
    align-items: center;
}
.compare-icon{
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}
.compare-text{
    color:#F47D21;
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
}
.ad-carousel :deep() .carousel__pagination {
    position: absolute;
    left: 45%;
    bottom: 3%;
    padding-left: 0px !important;
}
.ad-carousel :deep() .carousel__pagination-button::after{
    background-color: rgba(255, 255, 255, 0.70);
    width: 11px;
    height: 11px;
    border-radius: 50%;
}
.ad-carousel :deep() .carousel__pagination-button--active::after {
    background-color: #F47D21 !important;
    width: 11px;
    height: 11px;
    border-radius: 50%;
}
.ad-carousel :deep() .carousel__prev{
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.70);
    left:16px;
    width: 40px;
    height: 40px;
}
.ad-carousel :deep() .carousel__next{
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.70);
    right:16px;
    width: 40px;
    height: 40px;
}
.ad-carousel :deep() .carousel__track{
    margin:0px;
}
.ad-car-type-rating-wrap{
    margin-top:16px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fafafb;
    padding: 16px 20px;
    flex-wrap: wrap;
}
.ad-car-type-wrap{
    width: 81%;
    border-right: 1px solid #E0E0E0;
    padding-right: 20px;
}
.ad-title{
    color:#F47D21;
    font-size: 16px;
    font-weight: 700;
}
.ad-text{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 500;
}
.ad-car-price{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 700; 
}
.offer-small-icon{
    margin-left:8px;
}
.ad-car-sell{
    border-radius: 10px;
    background: #F47D21;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    padding: 4px 6px;

}
.ad-car-rating-content{
    width:19%;
    text-align:center;
    padding-left:10px
}
.rating-icon{
    width: 16px;
    height: 16px;
    margin-left: 4px;
}
.ad-car-rating{
    color:#828282;
    font-size: 14px;
    font-weight: 400;
}
.trade-in-wrap{
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    background: #C8DBEC;
    padding:10px 16px;
    display:flex;
    align-items: flex-start;
    gap:16px;
    margin-top:16px;
}
.trade-in-icon{
    flex-shrink: 0;
}
.trade-in-title{
    font-size:18px;
    font-weight: 600;
    color:var(--primary-color);
}
.trade-in-text{
    font-size:16px;
    font-weight: 400;
    color:var(--primary-color);
}
.ad-offers-wrap{
    border-radius: 10px;
    border: 1px solid  #E0E0E0;
    background: rgba(244, 125, 33, 0.20);
    display: flex;
    padding: 10px 16px;
    gap: 16px;
    align-items: flex-start;
    margin-top:16px;
}
.offer-icon{
    width: 56px;
    height: 56px;
    flex-shrink: 0;
}
.ad-offer-text{
    color:var(--primary-color);
    font-size: 18px;
    font-weight: 600;
}
.ad-offer-para{
    color:var(--primary-color);
    font-size: 16px;
    font-weight: 400;
}
.ad-title-color{
    font-size:18px;
    font-weight: 600;
    color:#F47D21;
    margin-bottom: 8px;
}
.ownership-img{
    max-width:400px;
    width:100%;
    aspect-ratio:5/3;
    object-fit:contain;
    cursor: pointer;
}
.property-img{
    max-width:400px;
    width:100%;
    aspect-ratio:5/3;
    object-fit:contain;
    cursor: pointer;
}
.ad-car-para{
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
}
.ad-tabs{
    margin-top: 16px;
    border-bottom: 1px solid #f2f2f2;
    /* padding-bottom: 10px; */
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
}
.ad-tabs::-webkit-scrollbar{
    display:none;
}
.ad-nav-link{
    font-size: 18px;
    font-weight: 400;
    color:#828282;
    white-space: nowrap;
    padding:8px 12px;
    text-transform: capitalize;
}
.ad-nav-link.active{
    font-size: 18px;
    font-weight: 600;
    color:#f47d21;
    text-transform:capitalize;
    background:#fff;
    position:relative;
}
.ad-nav-link.active:after{
    content:"";
    position:absolute;
    width:40px;
    border-bottom: 4px solid #f47d21;
    bottom: 0;
    left: 34%;
    border-radius:8px 8px 0px 0px;
}
.basic-details-wrap{
    border-radius: 10px;
    background-color: #fafafb;
    padding:24px;
}
.basic-info-icon{
    flex-shrink:0;
}
.basic-details-title{
    font-size: 16px;
    font-weight: 500;
    color:#828282;
    margin-left:4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    display: block;
    /* margin: 12px 0; */
}
.basic-details-text{
    font-size: 16px;
    font-weight: 400;
    color:var(--primary-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    display: block;
    /* margin: 12px 0; */
}
.reports-img-wrap{
    display:flex;
    /* justify-content:center; */
    gap:16px;
    flex-wrap:wrap;
    margin-top: 8px;
    max-height: 350px;
    overflow-y: auto;
}
.report-img-box{
    width:166px;
    /* height:166px; */
    aspect-ratio:3/3;
    background:#bdbdbd;
}
.report-img{
    max-width:166px;
    max-height:166px;
    display: block;
    margin: auto;
    cursor:pointer;
    object-fit: contain;
}

.problem-car-span{
    color:#828282;
    font-size:16px;
    font-weight: 400;
}
.problem-car-img{
    max-width: 743px;
    width: 100%;
    height: 100%;
    max-height: 532px;
    margin-top:8px;
}
.engine-img-wrap{
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    margin-top:8px;
    max-height:320px;
    overflow-y:auto;
}
.engine-img-box{
    flex:0 0 19%;
    aspect-ratio: 3/2;
    cursor:pointer;
}
.engine-img{
    border-radius:5px;
    /* width:166px; */
    width:100%;
    /* height:128px; */
    /* aspect-ratio: 3/2; */
    height:100%;
    object-fit: cover;
}
.ad-car-address{
    border-radius: 10px;
    width: 100%;
    height: 219px;
}
.review-btn{
    border:none;
    background-color: transparent;
    font-size:14px;
    font-weight: 400;
    color:var(--primary-color);
}
.review-btn:hover{
    color:#f47d21;
}
.review-btn:hover .review-add-icon :deep() path{
    stroke:#f47d21;
}
.review-add-icon{
    width:16px;
    height:16px;
}
.review-rating-icon{
    width:13px;
    height:13px;
}
.all-reviews{
    max-height: 260px;
    overflow-y: auto;
    padding-inline: 5px;
    padding-top:5px;
}
.reviews-wrap{
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding:8px 16px;
}
.review-user-img-content{
    display:flex;
    align-items:center;
    gap:8px;
}
.review-user-img-content :deep() .review-user-img svg{
    width:32px !important;
    height: 32px !important;
}
.review-user-name{
    font-size:14px;
    font-weight: 500;
    color:var(--primary-color);
}
.review-para{
    font-size:12px;
    font-weight: 400;
    color:var(--primary-color);
    text-align: justify; 
    margin-top:8px;
}
.review-more-btn{
    border-radius: 10px;
    border: 1px solid var(--primary-color);
    background-color:transparent;
    color:var(--primary-color);
    font-size:16px;
    font-weight:600;
    padding:7px 20px;
    max-width: 200px;
    margin: auto;
    text-align: center;
    display:block;
}
.review-more-btn:hover{
    color:#FFF;
    background-color:#f47d21;
    border:1px solid #f47d21;
}
.reviews-empty-img{
    width: 207px;
    height: 161px;
    margin: 0px auto 16px;
}
.reviews-empty-text{
    font-size:15px;
    font-weight: 400;
    color:#BDBDBD;
    text-align: center;
}
.features-wrap{
    display:flex;
    gap: 10px 16px;
    flex-wrap: wrap;
    width: 100%;
    overflow-y: auto;
    max-height: 330px;
}
.features-box{
    border-radius: 5px;
    border: 1px solid #F2F2F2;
    background: #FFF;
    padding:9px 21px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    /* flex:0 0 18%; */
}
.car-features-img{
    width:32px;
    height:32px;
    border-radius: 50%;
    object-fit: cover;
}
.features-text{
    color:#828282;
    font-size:14px;
    font-weight: 400;
    text-align:center;
    width: 110px;
    /* overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap */
}
/* ---start reviews modal--- */
.review-modal-title{
    text-align:center;
    margin-top: 16px;
    margin-bottom: 18px;
    font-size:16px;
    font-weight:600;
    color:var(--primary-color);
}
.review-modal-close-btn{
    position:absolute;
    right:10px;
    top:18px;
    border:none;
    background-color:transparent;
}
.rating-modal-box{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    margin-bottom:16px;
}
.rating-review-modal{
    width:30px;
    height: 30px;
}
.textarea-review-modal{
    width:100%;
    padding:16px 24px;
    outline:none;
    font-size:14px;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    outline: none;
    color:var(--primary-color);
}
.textarea-review-modal:focus{
    border:1px solid var(--primary-color);
}
.textarea-review-modal:placeholder{
    color:#454545;
}
.review-modal-btn{
    background: var(--primary-color);
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(26, 52, 77, 0.25);
    padding:15px;
    font-size: 16px;
    font-weight: 600;
    color:#fff;
    max-width: 296px;
    width: 100%;
    margin: auto;
    border: none;
}
.disabled-btn{
    padding:15px;
    border-radius: 10px;
    background:#BDBDBD;
    box-shadow: 0px 4px 4px 0px rgba(26, 52, 77, 0.25);
    font-size: 16px;
    font-weight: 600;
    color:#fff;
    max-width: 296px;
    width: 100%;
    margin: auto;
    border: none;
}
.review-modal-footer{
    border-top:none !important;
}
/* ---end reviews modal--- */
/* ---start car modal--- */
.car-modal{
    background: rgba(0, 0, 0, 0.65) !important;
    --bs-modal-width: 750px !important;
}
.car-modal .modal-header{
    border-bottom:none;
    padding-bottom:0px !important;
}
.car-modal .modal-content{
    background-color: transparent !important;
    border:none;
}
.modal-close-btn{
    border:none;
    background-color:rgba(255, 255, 255, 0.70);
    border-radius: 50px;
    padding: 4px;
    position:absolute;
    z-index: 2;
    top: 33px;
    left: 33px;

}
.close-icon-color{
    width:24px;
    height: 24px;
}
.close-icon-color :deep() path{
    stroke:#F47D21;
}
.car-img-number{
    position:absolute;
    /* right: 9px;
    top: 23px; */
    right: 7px;
    top: 7px;
    font-size:14px;
    font-weight:600 ;
    color:#F47D21;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.70);
    padding: 8px;
}
.car-big-img{
    margin-bottom: 6px;
    width: 100%;
    aspect-ratio: 4/2;
    object-fit: contain;
}
.car-big-carousel :deep() .carousel__prev{
    background: rgba(255, 255, 255, 0.70) !important;
    border-radius: 50%;
}
.car-big-carousel :deep() .carousel__next{
    background: rgba(255, 255, 255, 0.70) !important;
    border-radius: 50%;
}
.car-big-carousel :deep() .carousel__item{
    /* position:relative; */
    width:100%
}
.car-small-carousel :deep() .carousel__item{
    width:95%;
}
/* .small-img-active{
    border: 2px solid var(--Primary-2, #F47D21);
} */
.car-small-img{
    width: 100%;
    aspect-ratio: 5/3;
    object-fit: cover;
}

/* ---end car modal--- */
/* ---start report modal--- */
.report-modal{
    background: rgba(0, 0, 0, 0.65) !important;
    --bs-modal-width: 750px !important;
}
.report-modal .modal-content{
    border: none !important;
    background: transparent !important;
    border-radius: 0px;
}
.report-img-number{
    position: absolute;
    right: 7px;
    top: 7px;
    font-size: 14px;
    font-weight: 600;
    color: #F47D21;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.70);
    padding: 8px;
}
.report-small-carousel .carousel-item-small{
    width:95% !important;
}
.carousel-item-big{
    width:100%;
}
.report-big-img{
    width:100%;
    margin-bottom:6px;
    /* height: 432px; */
    object-fit: contain;
    aspect-ratio:4/2;
}
.report-small-img{
    width:100%;
    aspect-ratio:5/3;
    object-fit: cover;
}
.report-big-carousel :deep() .carousel__next {
    border-radius: 50% !important;
    background: rgba(255, 255, 255, 0.70) !important;
}
.report-big-carousel :deep() .carousel__prev {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.70) !important;
}

/* ---end report modal--- */
/* ---start ownership modal--- */
.sheet-modal{
    background: rgba(0, 0, 0, 0.65) !important;
    --bs-modal-width: 750px !important;
}
.sheet-modal .modal-content{
    border: none !important;
    background: transparent !important;
    border-radius: 0px;
}
.sheet-img{
    width: 100%;
    object-fit: contain;
    aspect-ratio: 5/3;
    /* aspect-ratio:7/5; */
}
/* ---end ownership modal--- */
/* ---start engine modal--- */
.engine-modal{
    background: rgba(0, 0, 0, 0.65) !important;
    --bs-modal-width: 750px !important;
}
.engine-modal .modal-content{
    background: transparent;
    border: none;
    border-radius: 0px;
}
.engine-carousel-big-item{
    width:100%
}
.engine-carousel-small-item{
    width:95%
}
.engine-big-carousel :deep() .carousel__next {
    border-radius: 50% !important;
    background: rgba(255, 255, 255, 0.70) !important;
}
.engine-big-carousel :deep() .carousel__prev {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.70) !important;
}
.engine-big-img{
    width:100%;
    aspect-ratio:4/2;
    object-fit:contain;
    margin-bottom:6px;
}
.engine-small-img{
    width:100%;
    aspect-ratio:5/3;
    object-fit:cover;
}
/* ---end engine modal--- */
/* ---start seconde column--- */
.col2-wrap{
    position: sticky;
    right: 0;
    top: 98px;
    padding-left:26px;
}
.seller-info-title{
    color:  #F47D21;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
}
.seller-info-wrap{
    border-radius: 10px;
    border: 1px solid  #E0E0E0;
    padding:10px 16px;   
}
.seller-info-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
}
.seller-info-content :deep() .seller-img svg{
    width:65px;
    height:65px;
    border-radius: 50%;
    margin-bottom: 8px;
}
.seller-name{
    font-size: 14px;
    font-weight: 600;
    color:var(--primary-color);
    margin-bottom: 3px;
}
.seller-phone{
    color: #6A7380;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 3px;
    direction: ltr;
}
.seller-location-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
}
.seller-location{
    color:#828282;
    font-size: 12px;
    font-weight: 400;
}
.seller-box-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
    margin: auto;
}
.seller-box-phone{
    border-radius: 10px;
    background:  #EB5757;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    padding: 8px 13px;
    text-align:center;
    flex:0 0 49%;
}
.seller-box-phone:hover{
    background:#ed3535;
}
.seller-box-watsApp{
    border-radius: 10px;
    background: #25D366;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    padding: 8px 13px;
    text-align: center;
    flex:0 0 49%;
}
.seller-box-watsApp:hover{
    background:#35c169;
}
.phone-icon{
    width:20px;
    height: 20px;
}
.watsApp-icon{
    width:20px;
    height: 20px;
}
.seller-box-text{
    color:#fff;
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
}
.transport-check-car-wrap{
    border-radius: 10px;
    border: 1px solid  #E0E0E0;
    padding: 10px 16px;
    display: flex;
    gap:16px;
    margin-top:16px;
}
/* .transport-check-car{
    display: flex;
    flex-direction: column;
    gap: 16px;
} */
.seller-ask-text{
    font-size: 14px;
    font-weight: 500;
    color:var(--primary-color) ;
    margin-bottom:16px; 
}
.car-move-icon{
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}
.check-icon{
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}
.transport-check-btn{
    border-radius: 10px;
    border:1px solid var(--primary-color);
    background: var(--primary-color, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%));
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    color:#fff;
    font-weight: 600;
    font-size:12px;
    padding:10px 16px;
}
.transport-check-btn:hover{
    border:1px solid #F47D21;
    background:#F47D21;
}
/* ---end seconde column--- */
/* start real estates */
.schedule-wrap{
    border-radius: 10px;
    border: 1px solid  #E0E0E0;
    padding: 10px 16px;
    display: flex;
    gap:16px;
    margin-top:16px;
}
.schedule-icon{
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}
.schedule-text{
    font-size:14px;
    font-weight:500;
    color:var(--primary-color);
    margin-bottom:16px;
}
.schedule-btn{
    border-radius: 10px;
    border:1px solid var(--primary-color);
    background: var(--primary-color, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%));
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    color:#fff;
    font-weight: 600;
    font-size:12px;
    padding:10px 30px;
}
.schedule-btn:hover{
    border:1px solid #F47D21;
    background:#F47D21;
}
.real-estate-title{
    color:#F47D21;
    font-size: 16px;
    font-weight: 700;
    margin-left:4px;
}
.real-estate-icon{
    margin-left:2px;
    flex-shrink:0;
    width:22px;
    height:22px;
}
/* .real-estate-features-img-box{
    width:32px;
    height:32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:5px;
} */
.real-estate-features-img{
    /* width:100%;
    height:100%; */
    width:32px;
    height:32px;
    /* border-radius: 50%; */
}
/* ---start media--- */
@media(max-width:1200px){
    .col2-wrap{
        padding-inline:0px;
    }
    .seller-box-text{
        margin-left:2px;
    }
    .seller-box-phone{
        padding:8px 6px;
    }
    .seller-box-watsApp{
        padding:8px 6px;
    }
    .ad-car-type-rating-wrap{
        padding:16px 12px;
    }
    .ad-car-rating{
        font-size:13px;
    }
    .ad-car-type-wrap{
        width:70%;
        padding-right:12px;
    }
    .ad-car-rating-content{
        width:30%;
        padding-left:8px;
    }
    /* real estates */
    .schedule-text{
        font-size:13px
    }
}
@media (max-width:991px) {
    .ad-car-main{
        padding-inline:0px
    }
    .seller-box-wrap{
        gap:8px;
        justify-content: center;
    }
    .seller-box-phone{
        padding: 5px 8px;
        flex:0 0 73%;
    }
    .seller-box-watsApp{
        padding: 5px 8px;
        flex:0 0 73%;
    }
    .seller-info-wrap{
        padding:10px;
    }
    .transport-check-car-wrap{
        padding:10px;
        gap:8px;
    }
    .seller-ask-text{
        font-size:12px;
        margin-bottom: 10px;
    }
    .transport-check-btn{
        font-size:10px;
        padding:10px 5px;
        width:149px;
    }
    .favorite-icon{
        top:16px;
    }
    .compare-wrap{
        top:16px;
    }
    .seller-info-content{
        margin-bottom:4px;
    }
    .seller-info-content :deep() .seller-img svg{
        margin-bottom:4px;
    }
    .modal-close-btn{
        left:7px;
        top:7px;
    }
    /* .ad-car-type-rating-wrap{
        padding:16px;
    } */
    .basic-details-wrap{
        padding:16px 10px;
    }
    .basic-details-text{
        font-size:15px;
    }
    .basic-details-title{
        font-size:15px;
    }
    .ad-car-para{
        font-size:16px;
    }
    .ad-nav-link.active{
        font-size:17px;
    }
    .ad-nav-link{
        font-size:17px;
    }
    .ad-title-color{
        font-size:17px;
    }
    .features-wrap{
        gap:10px;
    }
    .features-box{
        padding:9px 16px;
    }
    .engine-img-box{
        flex:0 0 21%;
    }
    .ad-car-rating{
        font-size:13px;
    }
    /* real estates */
    .schedule-wrap{
        padding:10px;
        gap:8px;
    }
    .schedule-text{
        font-size:12px;
        margin-bottom: 10px;
    }
    .schedule-btn{
        font-size:11px;
        padding:7px 5px;
        width:149px;
    }
}
@media (max-width:767px) {
    .favorite-icon{
        top:10px;
    }
    .compare-wrap{
        top:10px;
    }
    .transport-check-car-wrap{
        padding: 10px 16px;
        gap: 16px;
    }
    .seller-ask-text{
        font-size: 13px;
    }
    .col2-wrap{
        margin-top: 24px;
    }
    .seller-box-wrap{
        width:80%;
    }
    .seller-info-content{
        margin-bottom:16px;
    }
    .seller-info-content :deep() .seller-img svg{
        margin-bottom:8px;
    }
    .seller-box-wrap{
        /* gap: 16px; */
        justify-content:space-evenly;
    }
    .seller-box-phone{
        flex:0 0 35%;
        padding:8px;
    }
    .seller-box-watsApp{
        flex:0 0 35%;
        padding:8px;
    }
    .features-text{
        font-size:13px;
    }
    .ad-car-rating-content{
        width:25%;
    }
    .ad-car-type-wrap{
        width:75%;
    }
    .transport-check-btn{
        font-size:11px;
        padding:10px;
        width:unset;
    }
    .details-row{
        margin-top: 0px !important;
    }
    /* real estates */
    .schedule-wrap{
        padding: 10px 16px;
        gap: 16px;
    }
    .schedule-text{
        font-size: 13px;
    }
    .schedule-btn{
        font-size:11px;
        padding:10px 25px;
        width:unset;
    }
}
@media (max-width:576px) {
    .compare-wrap{
        left: 5px;
        padding: 4px;
        top: 7px;
    }
    .compare-text{
        margin-left:4px;
        font-size:10px;
    }
    .compare-icon{
        width:18px;
        height:18px;
    }
    .favorite-icon {
        right: 5px;
        top:7px;
        width: 25px;
        height: 25px;
        padding: 4px;
    }
    .ad-car-main{
        margin-top:20px;
    }
    .car-img-number{
        top:10px;
        padding:6px;
    }
    .ad-carousel :deep() .carousel__prev{
        left:0px;
        width: 25px;
        height: 25px;
    }
    .ad-carousel :deep() .carousel__next{
        right:0px;
        width: 25px;
        height: 25px;
    }
    .car-modal .modal-body{
        padding:2px
    }
    .car-modal .modal-content{
        border-radius:0px;
    }
    .features-box{
        padding:9px 12px;
    }
    .basic-details-text{
        font-size:15px;
    }
    .basic-details-title{
        font-size:15px;
    }
    .ad-car-para{
        font-size:15px;
    }
    .engine-img-box{
        flex:0 0 27%;
    }
    .ad-nav-link.active{
        font-size:16px;
    }
    .ad-nav-link{
        font-size:16px;
    }
    .ad-title-color{
        font-size:16px;
    }
    /* .report-big-img{
        height: 332px;
    } */
    .report-img-number{
        /* right:106px; */
        padding:6px;
        top:10px;
    }
    .ad-car-rating{
        font-size:13px;
    }
    .ad-car-type-rating-wrap{
        flex-direction:column;
        padding:16px;
    }
    .ad-car-rating-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        padding-left:unset;
        padding-top: 10px;
    }
    .ad-car-type-wrap{
        width:100%;
        padding-right:unset;
        border-right: none;
        border-bottom: 1px solid #E0E0E0;
        padding-bottom: 10px;
    }
    .report-modal .modal-body{
        padding:2px;
    }
    
}
@media (max-width:490px) {
    .ad-car-sell{
        padding: 4px 8px;
    }
    .seller-box-wrap{
        width:100%
    }
    /* .report-img-number{
        right:69px;
    } */
    .engine-modal .modal-body{
        padding:2px;
    }
    .ad-car-rating{
        font-size:13px;
    }
    .ad-carousel :deep() .carousel__pagination{
        left:38%
    }
    .ad-carousel :deep() .carousel__pagination-button::after{
        width: 9px;
        height: 9px;
    }
    .ad-carousel :deep() .carousel__pagination-button--active::after {
        width: 9px;
        height: 9px;
    }
    .report-big-img{
        aspect-ratio:4/4;
    }
    .seller-box-phone{
        flex:0 0 48%;
    }
    .seller-box-watsApp{
        flex:0 0 48%;
    }
    .review-user-name{
        font-size:13px;
    }
    .review-user-img-content{
        gap:5px;
    }
    /* real estates */
    .sheet-modal .modal-body{
        padding:0px !important;
    }
    .sheet-img{
        aspect-ratio:5/5;
    }
}
@media (max-width:420px) {
    .review-modal-btn{
        width:70%;
        padding: 10px;
    }
    .disabled-btn{
        width:70%;
        padding: 10px;
    }
    .review-more-btn{
        padding:12px 20px;
    }
    .car-img-number{
        top:2px;
        padding:2px 6px;
    }
    .report-img-number{
        padding:2px 6px;
    }
    /* .modal-close-btn{
        padding: 1px;
        top: 3px;
        left: 4px;
    } */
    .ad-car-price{
        font-size:14px;
    }
    .offer-small-icon{
        margin-left:3px;
    }
    .trade-in-wrap{
        padding:10px;
        gap:10px;
    }
    .trade-in-title{
        font-size:15px;
    }
    .trade-in-text{
        font-size:14px;
    }
    .ad-offers-wrap{
        padding:10px;
        gap:10px;
    }
    .ad-offer-text{
        font-size:16px;
    }
    .ad-offer-para{
        font-size:14px;
    }
    .reports-img-wrap{
        gap:12px 8px;
        justify-content:unset;
    }
    .report-img-box{
        width:140px;
    }
    /* .report-small-carousel .carousel-item-small{
        width:90% !important;
    } */
}
@media (max-width:390px){
    .engine-img-box{
        flex:0 0 44%;
    }
}

/* ---Car RTL-- */
[data-direction= rtl] .compare-text{
    font-family: 'tajawal-medium';
    margin-right:8px;
    margin-left:unset;
}
[data-direction= rtl] .ad-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .ad-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .ad-car-price{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .ad-car-sell{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .ad-car-rating{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .trade-in-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .trade-in-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-offer-text{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .ad-offer-para{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-title-color{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .ad-car-para{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-nav-link{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .ad-nav-link.active{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .basic-details-title{
    font-family: 'tajawal-medium';
    margin-right:3px;
    margin-left:unset;
}
[data-direction= rtl] .basic-details-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .problem-car-span{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .review-btn{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .review-para{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .review-more-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .reviews-empty-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .features-text{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .review-modal-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .textarea-review-modal{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .review-modal-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .disabled-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .disabled-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .disabled-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .car-img-number{
    font-family: 'tajawal-bold';
    left:7px;
    right:unset;
    direction: rtl;
}
[data-direction= rtl] .report-img-number{
    font-family: 'tajawal-bold';
    left:7px;
    right:unset;
    direction: rtl;
}
[data-direction= rtl] .seller-info-title{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .seller-name{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .seller-phone{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .seller-location{
    font-family: 'tajawal-regular';
}
[data-direction= rtl] .seller-box-text{
    font-family: 'tajawal-bold';
    margin-right:10px;
    margin-left:unset;
}
[data-direction= rtl] .seller-ask-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .transport-check-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .favorite-icon{
    left:16px;
    right:unset
}
[data-direction= rtl] .ad-carousel :deep() .carousel__prev{
    left:unset;
    right:16px;
    transform: rotate(180deg);
}
[data-direction= rtl] .ad-carousel :deep() .carousel__next{
    left:16px;
    right:unset;
    transform: rotate(180deg);
}
[data-direction= rtl] .ad-car-type-wrap{
    border-left: 1px solid #E0E0E0;
    border-right:unset;
    padding-left: 20px;
    padding-right:unset
}
[data-direction= rtl] .offer-small-icon{
    margin-right:8px;
    margin-left:unset;
}
[data-direction= rtl] .ad-car-rating-content{
    padding-right:10px;
    padding-left:unset;
}
[data-direction= rtl] .rating-icon{
    margin-right:4px;
    margin-left:unset;
}
[data-direction= rtl] .review-modal-close-btn{
    left:10px;
    right:unset;
}
[data-direction= rtl] .col2-wrap{
    left: 0;
    right:unset;
    padding-right:26px;
    padding-left:unset;
}
[data-direction= rtl] .compare-wrap{
    right: 44%;
    left:unset;
}
[data-direction= rtl] .ad-tabs{
    padding-right:0px;
}
/* real estates RTL */
[data-direction= rtl] .schedule-text{
    font-family: 'tajawal-medium';
}
[data-direction= rtl] .schedule-btn{
    font-family: 'tajawal-bold';
}
[data-direction= rtl] .real-estate-title{
    font-family: 'tajawal-bold';
    margin-right: 4px;
    margin-left:unset;
}
[data-direction= rtl] .real-estate-icon{
    margin-right: 2px;
}
@media(max-width:1200px){
    [data-direction= rtl] .seller-box-text{
        margin-right:2px;
        margin-left:unset;
    }
    [data-direction= rtl] .col2-wrap {
        padding-inline: 0px;
    }
}
@media(max-width:991px){
    [data-direction= rtl] .ad-car-rating-content{
        padding-right:7px;
    }
}
@media (max-width:576px){
    [data-direction= rtl] .favorite-icon{
        left:5px;
    }
    [data-direction= rtl] .compare-text{
        margin-left:unset;
        margin-right:4px
    }
    [data-direction= rtl] .ad-carousel :deep() .carousel__prev{
        right:0px;
    }
    [data-direction= rtl] .ad-carousel :deep() .carousel__next{
        left:0px;
    }
    /* [data-direction= rtl] .report-img-number{
        left:106px;
    } */
    [data-direction= rtl] .compare-wrap{
        right: 5px;
        left:unset;
    }
    [data-direction= rtl] .ad-car-type-wrap{
        border-left:none;
        padding-left:unset;
    }
}
@media (max-width:490px) {
    [data-direction= rtl] .report-img-number{
        /* left:69px; */
        padding:6px;
    }
}
@media (max-width:420px){
    [data-direction= rtl] .offer-small-icon{
        margin-right:3px;
        margin-left:unset;
    }
}
</style>