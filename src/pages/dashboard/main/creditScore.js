import * as React from "react";
import CreditScoreCard from "../../../components/creditScoreCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function CreditScores() {
    return (
        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5">
            <div className="flex gap-5 justify-between w-full leading-[140%] max-md:flex-wrap max-md:max-w-full">
                <div className="self-start mt-3.5 text-2xl font-semibold text-center text-neutral-800 font-bold">
                Credit Scores
                </div>
                <div className="max-[640px]:hidden flex gap-4 text-sm tracking-normal text-neutral-900">
                    <div className="flex gap-2 justify-center px-4 py-3.5 rounded-2xl bg-neutral-100">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4b11e400e23980f05a4a7e4139d0b926b3472dfcbb8bf356af098208760c7e?apiKey=2a73886494004d7089b4468484ca08f2&"
                        className="shrink-0 my-auto w-4 aspect-square"
                        />
                        <div>View Latest Report</div>
                    </div>
                    <div className="flex gap-2 justify-center px-4 py-3.5 rounded-2xl bg-neutral-100">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d316a74b0cef1a4b0dbeda49ab831973eb78746ddbd232466b1598ee7be60446?apiKey=2a73886494004d7089b4468484ca08f2&"
                        className="shrink-0 my-auto w-4 aspect-square"
                        />
                        <div>Refresh Report</div>
                    </div>
                </div>
            </div>
            <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <Swiper
                        className="mySwiper"
                        breakpoints={{
                            300: {
                              slidesPerView: 1.2,
                              spaceBetween: 20,
                            },
                            500: {
                                slidesPerView: 1.4,
                                spaceBetween: 30,
                              },
                            600: {
                                slidesPerView: 1.8,
                                spaceBetween: 20,
                                },
                            800: {
                              slidesPerView: 2.4,
                              spaceBetween: 30,
                            },
                            1000: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                              },
                            1200: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                          }}>
                            <SwiperSlide>
                                <CreditScoreCard
                                    name="TransUnion"
                                    time="Updated 02/21/24"
                                    chart="https://cdn.builder.io/api/v1/image/assets/TEMP/fb97e81c05ab5bed74dad39c686da8c61880f880e6b8b31af49a5ee35988cbe0?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    details="Details"
                                    />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CreditScoreCard
                                    name="Experian"
                                    time="Updated 02/21/24"
                                    chart="https://cdn.builder.io/api/v1/image/assets/TEMP/459eb4df4b508536158702e67761e8627b0afd6697714de7cbd0dd00b0674968?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    details="Details"
                                    />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CreditScoreCard
                                    name="Equifax"
                                    time="Updated 02/21/24"
                                    chart="https://cdn.builder.io/api/v1/image/assets/TEMP/89c4993c47d11f39b0c6aeca6811033c58719168558a850519e1ddb110287e74?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    details="Details"
                                    />
                            </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="min-[640px]:hidden flex flex-col mt-6 text-sm tracking-normal leading-5 text-neutral-900">
                <div className="flex gap-2 justify-center px-4 py-3.5 rounded-2xl bg-neutral-100">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4b11e400e23980f05a4a7e4139d0b926b3472dfcbb8bf356af098208760c7e?apiKey=2a73886494004d7089b4468484ca08f2&"
                    className="shrink-0 my-auto w-4 aspect-square"
                />
                <div>View Latest Report</div>
                </div>
                <div className="flex justify-center items-center px-4 py-3.5 mt-2 w-full rounded-2xl bg-neutral-100">
                <div className="flex gap-2">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d316a74b0cef1a4b0dbeda49ab831973eb78746ddbd232466b1598ee7be60446?apiKey=2a73886494004d7089b4468484ca08f2&"
                    className="shrink-0 my-auto w-4 aspect-square"
                    />
                    <div>Refresh Report</div>
                </div>
                </div>
            </div>
        </div>
    )
}