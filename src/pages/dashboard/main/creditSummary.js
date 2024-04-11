import * as React from "react";
import CreditSummaryCard from "../../../components/creditSummaryCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function CreditSummary() {
    return (
        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5 mt-6">
            <div className="text-2xl font-semibold leading-8 text-left text-neutral-800 max-md:max-w-full">
                Credit Summary
            </div>
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
                <Swiper
                className="mySwiper"
                breakpoints={{
                    300: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },
                    500: {
                        slidesPerView: 1.6,
                        spaceBetween: 30,
                        },
                    600: {
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                        },
                    800: {
                        slidesPerView: 2.8,
                        spaceBetween: 30,
                    },
                    1000: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    }}>
                    <SwiperSlide>
                        <CreditSummaryCard
                            count={15}
                            name="Open Accounts"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CreditSummaryCard
                            count={10}
                            name="Hard Inquiries"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CreditSummaryCard
                            count="97%"
                            name="Open Accounts"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CreditSummaryCard
                            count="98%"
                            name="Negative Accounts"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CreditSummaryCard
                            count="8%"
                            name="Debt to Income Ratio"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
