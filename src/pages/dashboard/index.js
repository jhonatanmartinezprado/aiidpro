import * as React from "react";

export default function Layout() {
    return (
        <div className="px-10 max-1200:px-5 bg-backColor">
            <div className="-translate-y-16">
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-3">
                        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5">
                            <div className="flex gap-5 justify-between w-full leading-[140%] max-md:flex-wrap max-md:max-w-full">
                                <div className="self-start mt-3.5 text-2xl font-semibold text-center text-neutral-800">
                                Credit Scores
                                </div>
                                <div className="flex gap-4 text-sm tracking-normal text-neutral-900">
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
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow p-8 mx-auto w-full rounded-3xl bg-neutral-100 leading-[140%] max-md:px-5 max-md:mt-6">
                                    <div className="flex gap-5 justify-between text-center text-neutral-800">
                                        <div className="text-lg">TransUnion</div>
                                        <div className="my-auto text-xs tracking-normal">
                                        Updated 02/21/24
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb97e81c05ab5bed74dad39c686da8c61880f880e6b8b31af49a5ee35988cbe0?apiKey=2a73886494004d7089b4468484ca08f2&"
                                        className="mt-10 w-full aspect-[1.14]"
                                    />
                                    <div className="justify-center items-center px-4 py-3.5 mt-10 text-sm tracking-normal whitespace-nowrap bg-white rounded-2xl text-neutral-900 max-md:px-5">
                                        Details
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow p-8 mx-auto w-full rounded-3xl bg-neutral-100 leading-[140%] max-md:px-5 max-md:mt-6">
                                    <div className="flex gap-5 justify-between text-center text-neutral-800">
                                        <div className="text-lg">Experian</div>
                                        <div className="my-auto text-xs tracking-normal">
                                        Updated 02/21/24
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/459eb4df4b508536158702e67761e8627b0afd6697714de7cbd0dd00b0674968?apiKey=2a73886494004d7089b4468484ca08f2&"
                                        className="mt-10 w-full aspect-[1.15]"
                                    />
                                    <div className="justify-center items-center px-4 py-3.5 mt-10 text-sm tracking-normal whitespace-nowrap bg-white rounded-2xl text-neutral-900 max-md:px-5">
                                        Details
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow p-8 mx-auto w-full rounded-3xl bg-neutral-100 leading-[140%] max-md:px-5 max-md:mt-6">
                                    <div className="flex gap-5 justify-between text-center text-neutral-800">
                                        <div className="text-lg">Equifax</div>
                                        <div className="my-auto text-xs tracking-normal">
                                        Updated 02/21/24
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c4993c47d11f39b0c6aeca6811033c58719168558a850519e1ddb110287e74?apiKey=2a73886494004d7089b4468484ca08f2&"
                                        className="mt-10 w-full aspect-[1.14]"
                                    />
                                    <div className="justify-center items-center px-4 py-3.5 mt-10 text-sm tracking-normal whitespace-nowrap bg-white rounded-2xl text-neutral-900 max-md:px-5">
                                        Details
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5 mt-6">
                            <div className="flex gap-5 justify-between w-full leading-[140%] text-neutral-900 max-md:flex-wrap max-md:max-w-full">
                                <div className="self-start mt-3.5 text-2xl font-semibold text-center">
                                AI Dispute Resolutions
                                </div>
                                <div className="flex gap-2 justify-center px-4 py-3.5 text-sm tracking-normal rounded-2xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4b11e400e23980f05a4a7e4139d0b926b3472dfcbb8bf356af098208760c7e?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>View Details</div>
                                </div>
                            </div>
                            <div className="mt-6 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-between self-stretch max-md:mt-6">
                                    <div className="flex flex-col justify-center items-center px-8 rounded-3xl aspect-square bg-neutral-100 max-md:px-5">
                                        <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1814aa1d75dccbcab47cb9d98ab4d916d31d2ed2a9273df60f4f34f7d75f2a32?apiKey=2a73886494004d7089b4468484ca08f2&"
                                        className="w-full aspect-square"
                                        />
                                    </div>
                                    <div className="flex flex-col mt-20 text-sm tracking-normal leading-5 max-md:mt-10">
                                        <div className="justify-center items-center px-6 py-3.5 text-white rounded-2xl bg-neutral-900 max-md:px-5">
                                        Learn more
                                        </div>
                                        <div className="justify-center items-center px-4 py-3.5 mt-4 rounded-2xl bg-neutral-100 text-neutral-900 max-md:px-5">
                                        Create Disputes
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow w-full rounded-3xl bg-neutral-100 max-md:mt-6 max-md:max-w-full">
                                    <div className="flex flex-col justify-center p-2 text-sm font-medium tracking-normal leading-5 whitespace-nowrap text-neutral-800 max-md:max-w-full">
                                        <div className="flex gap-0 bg-white rounded-2xl max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex flex-col flex-1 justify-center items-start px-4 py-3 max-md:pr-5">
                                            <div className="justify-center">Status</div>
                                        </div>
                                        <div className="flex flex-col flex-1 justify-center items-start px-4 py-3 max-md:pr-5">
                                            <div className="justify-center">TransUnion</div>
                                        </div>
                                        <div className="flex flex-col flex-1 justify-center items-start px-4 py-3 max-md:pr-5">
                                            <div className="justify-center">Experian</div>
                                        </div>
                                        <div className="flex flex-col flex-1 justify-center items-start px-4 py-3 max-md:pr-5">
                                            <div className="justify-center">Equifax</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="max-md:max-w-full">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm tracking-normal leading-5 text-neutral-800">
                                            <div className="flex flex-col justify-center px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-teal-300 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-teal-300 rounded-full" />
                                                <div className="text-ellipsis">Unspecified</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                <div className="text-ellipsis">Positive</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                <div className="text-ellipsis">Deleted</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                <div className="text-ellipsis">Resolved</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                <div className="text-ellipsis">Updated</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-orange-400 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-orange-400 rounded-full" />
                                                <div className="text-ellipsis">In Dispute</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-rose-500 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-rose-500 rounded-full" />
                                                <div className="text-ellipsis">Verified</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-rose-500 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 bg-rose-500 rounded-full" />
                                                <div className="text-ellipsis">Negative</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center px-4 py-2.5">
                                                <div className="flex gap-2.5 px-2 py-1 bg-neutral-400 bg-opacity-10 rounded-[100px]">
                                                <div className="shrink-0 my-auto w-2 h-2 rounded-full bg-neutral-400" />
                                                <div className="text-ellipsis">Bureau Letters</div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm tracking-normal leading-5 whitespace-nowrap text-neutral-800">
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                7
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                5
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                3
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                2
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm tracking-normal leading-5 whitespace-nowrap text-neutral-800">
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                1
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                7
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                1
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                2
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                2
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm tracking-normal leading-5 whitespace-nowrap text-neutral-800">
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                5
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                3
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                1
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                2
                                            </div>
                                            <div className="justify-center px-4 py-3 text-ellipsis">
                                                0
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5 mt-6">
                            <div className="text-2xl font-semibold leading-8 text-center text-neutral-800 max-md:max-w-full">
                                Score Tracker
                            </div>
                            <div className="flex flex-col mt-10 max-md:max-w-full">
                                <div className="flex gap-3 justify-between max-md:flex-wrap">
                                <div className="flex flex-col text-sm tracking-normal leading-5 whitespace-nowrap text-stone-500 max-md:hidden">
                                    <div>720</div>
                                    <div className="mt-5">700</div>
                                    <div className="mt-5">680</div>
                                    <div className="mt-5">660</div>
                                    <div className="mt-5">640</div>
                                    <div className="mt-5">620</div>
                                    <div className="mt-5">600</div>
                                    <div className="mt-5">580</div>
                                </div>
                                <div className="flex flex-col max-md:max-w-full">
                                    <div className="flex flex-col self-end mr-48 max-w-full text-white leading-[140%] w-[113px] max-md:mr-2.5">
                                    <div className="flex flex-col px-4 pt-2.5 pb-4 bg-rose-400 rounded-lg">
                                        <div className="flex flex-col justify-center text-sm whitespace-nowrap">
                                        <div className="flex gap-1">
                                            <div className="font-semibold">Equifax:</div>
                                            <div>710</div>
                                        </div>
                                        </div>
                                        <div className="mt-2 text-xs tracking-normal">Dec 10, 2023</div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e373698f72f29242bca613468b55fdd4b792de8e0ed82a0fa695bbba67b62e7?apiKey=2a73886494004d7089b4468484ca08f2&"
                                        className="self-center aspect-[1.79] fill-rose-400 w-[9px]"
                                    />
                                    </div>
                                    <div className="flex flex-col justify-center py-1 mt-5 max-md:max-w-full">
                                    <div className="flex flex-col max-md:max-w-full">
                                        <div className="flex gap-5 justify-between items-end w-full max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex gap-1 mt-24 max-md:mt-10">
                                            <div className="shrink-0 self-start mt-5 w-3 h-20 bg-indigo-400 rounded-3xl" />
                                            <div className="shrink-0 self-end mt-7 w-3 bg-fuchsia-400 rounded-3xl h-[71px]" />
                                            <div className="shrink-0 w-3 bg-rose-400 rounded-3xl h-[98px]" />
                                        </div>
                                        <div className="flex gap-1 items-end mt-16 max-md:mt-10">
                                            <div className="shrink-0 mt-9 w-3 bg-indigo-400 rounded-3xl h-[86px]" />
                                            <div className="shrink-0 mt-6 w-3 bg-fuchsia-400 rounded-3xl h-[100px]" />
                                            <div className="shrink-0 self-stretch w-3 bg-rose-400 rounded-3xl h-[122px] max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 items-end mt-11 max-md:mt-10">
                                            <div className="shrink-0 mt-8 w-3 bg-indigo-400 rounded-3xl h-[114px]" />
                                            <div className="shrink-0 mt-11 w-3 bg-fuchsia-400 rounded-3xl h-[100px] max-md:mt-10" />
                                            <div className="shrink-0 self-stretch w-3 h-36 bg-rose-400 rounded-3xl max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 mt-24 max-md:mt-10">
                                            <div className="shrink-0 w-3 bg-indigo-400 rounded-3xl h-[89px]" />
                                            <div className="shrink-0 self-start mt-3 w-3 bg-fuchsia-400 rounded-3xl h-[78px]" />
                                            <div className="shrink-0 self-end mt-6 w-3 bg-rose-400 rounded-3xl h-[66px]" />
                                        </div>
                                        <div className="flex gap-1 items-start pt-2.5 mt-32 max-md:mt-10">
                                            <div className="shrink-0 mt-2 w-3 bg-indigo-400 rounded-3xl h-[42px]" />
                                            <div className="shrink-0 w-3 bg-fuchsia-400 rounded-3xl h-[50px]" />
                                            <div className="shrink-0 mt-2 w-3 bg-rose-400 rounded-3xl h-[42px]" />
                                        </div>
                                        <div className="flex gap-1 mt-24 max-md:mt-10">
                                            <div className="shrink-0 self-start mt-5 w-3 h-20 bg-indigo-400 rounded-3xl" />
                                            <div className="shrink-0 self-end mt-7 w-3 bg-fuchsia-400 rounded-3xl h-[71px]" />
                                            <div className="shrink-0 w-3 bg-rose-400 rounded-3xl h-[98px]" />
                                        </div>
                                        <div className="flex gap-1 items-end mt-16 max-md:mt-10">
                                            <div className="shrink-0 mt-9 w-3 bg-indigo-400 rounded-3xl h-[86px]" />
                                            <div className="shrink-0 mt-6 w-3 bg-fuchsia-400 rounded-3xl h-[100px]" />
                                            <div className="shrink-0 self-stretch w-3 bg-rose-400 rounded-3xl h-[122px] max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 items-end self-start mt-2.5">
                                            <div className="shrink-0 mt-9 w-3 bg-indigo-400 rounded-3xl h-[140px] max-md:hidden" />
                                            <div className="shrink-0 mt-14 w-3 bg-fuchsia-400 rounded-3xl h-[123px] max-md:hidden max-md:mt-10" />
                                            <div className="shrink-0 self-stretch w-3 bg-rose-400 rounded-3xl h-[177px] max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 items-end self-stretch">
                                            <div className="shrink-0 mt-6 w-3 bg-indigo-400 rounded-3xl h-[162px] max-md:hidden" />
                                            <div className="shrink-0 mt-11 w-3 h-36 bg-fuchsia-400 rounded-3xl max-md:hidden max-md:mt-10" />
                                            <div className="shrink-0 self-stretch w-3 bg-rose-400 rounded-3xl h-[186px] max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 self-stretch">
                                            <div className="shrink-0 self-end mt-6 w-3 bg-indigo-400 rounded-3xl h-[163px] max-md:hidden" />
                                            <div className="shrink-0 w-3 bg-fuchsia-400 rounded-3xl h-[186px] max-md:hidden" />
                                            <div className="shrink-0 w-3 bg-rose-400 rounded-3xl h-[186px] max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 self-stretch">
                                            <div className="shrink-0 w-3 bg-indigo-400 rounded-3xl h-[186px] max-md:hidden" />
                                            <div className="shrink-0 self-end mt-6 w-3 bg-fuchsia-400 rounded-3xl h-[164px] max-md:hidden" />
                                            <div className="shrink-0 w-3 bg-rose-400 rounded-3xl h-[186px] max-md:hidden" />
                                        </div>
                                        <div className="flex gap-1 self-stretch">
                                            <div className="shrink-0 w-3 bg-indigo-400 rounded-3xl h-[186px] max-md:hidden" />
                                            <div className="shrink-0 w-3 bg-fuchsia-400 rounded-3xl h-[186px] max-md:hidden" />
                                            <div className="shrink-0 bg-rose-400 rounded-3xl h-[186px] w-[9px]" />
                                        </div>
                                        </div>
                                        <div className="flex flex-col justify-center max-md:max-w-full">
                                        <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex gap-5 self-center mt-3 ml-5 text-sm tracking-normal leading-5 whitespace-nowrap text-stone-500 max-md:flex-wrap">
                                <div className="grow">02/23</div>
                                <div>03/23</div>
                                <div>04/23</div>
                                <div>05/23</div>
                                <div>06/23</div>
                                <div>07/23</div>
                                <div>08/23</div>
                                <div>09/23</div>
                                <div>10/23</div>
                                <div>11/23</div>
                                <div>12/23</div>
                                <div>02/24</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col justify-between p-8 bg-white rounded-3xl w-full">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                <div className="flex gap-2 leading-[140%]">
                                    <div className="justify-center px-3.5 py-1 text-sm font-bold tracking-normal text-rose-500 whitespace-nowrap bg-rose-500 bg-opacity-10 rounded-[34px]">
                                    0%
                                    </div>
                                    <div className="text-lg font-semibold text-center text-neutral-800">
                                    Protection Level
                                    </div>
                                </div>
                                <div className="mt-4 text-sm tracking-normal leading-5 text-stone-500">
                                    It looks like you haven’t finished setting up your protection.
                                </div>
                                </div>
                                <div className="flex flex-col justify-center mt-6 text-sm tracking-normal leading-5">
                                <div className="justify-center items-center px-6 py-3.5 text-white whitespace-nowrap rounded-2xl bg-neutral-900">
                                    Resume
                                </div>
                                <div className="justify-center self-center mt-4 underline rounded-2xl text-neutral-900">
                                    Tell us why
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center mt-7">
                                <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200" />
                            </div>
                            <div className="flex flex-col mt-6">
                                <div className="flex gap-2">
                                <div className="flex flex-col justify-center">
                                    <div className="shrink-0 h-6 border border-solid border-neutral-200 rounded-[67px]" />
                                </div>
                                <div className="my-auto text-sm tracking-normal leading-5 text-stone-500">
                                    Identify Your Goals
                                </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                <div className="flex flex-col justify-center">
                                    <div className="shrink-0 h-6 border border-solid border-neutral-200 rounded-[67px]" />
                                </div>
                                <div className="my-auto text-sm tracking-normal leading-5 text-stone-500">
                                    Set Up Identity Protection
                                </div>
                                </div>
                                <div className="flex gap-2 mt-4 text-sm tracking-normal leading-5 text-stone-500">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/665619d672ff17b8050b8a90dc33a3788c991eee795d72ba56ffcf1c46136725?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div className="my-auto">Review Action Plan</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col p-8 mt-6 bg-white rounded-3xl leading-[140%] w-full">
                            <div className="flex flex-col justify-center text-lg font-semibold text-center text-neutral-800">
                                <div className="flex flex-col justify-center">
                                <div className="flex gap-2">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a22c0a0d6293dd7ae46a60d009bc992badc8eb04d9372585cf58e66c912eaf20?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div>Required Documents</div>
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-col mt-6 text-sm tracking-normal">
                                <div className="flex gap-2 justify-between w-full">
                                <div className="flex gap-2 text-stone-500">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c84ffe792ea7d90a53906b41ad9449bb09108e83b8f13035f22444090ecc9fe?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 w-6 aspect-square"
                                    />
                                    <div className="my-auto">Social Security card</div>
                                </div>
                                <div className="my-auto text-lime-500">View</div>
                                </div>
                                <div className="flex gap-2 justify-between mt-4">
                                <div className="flex gap-2 text-stone-500">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/01460003eb1b74403a38a5e68000f1a8d60b639c3544096569b3770db6aa20a2?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 w-6 aspect-square"
                                    />
                                    <div className="my-auto">Photo ID Uploaded</div>
                                </div>
                                <div className="my-auto text-rose-500">Upload</div>
                                </div>
                                <div className="flex gap-2 justify-between mt-4">
                                <div className="flex gap-2 text-stone-500">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/01460003eb1b74403a38a5e68000f1a8d60b639c3544096569b3770db6aa20a2?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 w-6 aspect-square"
                                    />
                                    <div className="my-auto">Utility Bill Uploaded</div>
                                </div>
                                <div className="my-auto text-rose-500">Upload</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-3xl bg-neutral-900 mt-6 w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fc4e966d104434bcf4b38bafcabde294759abfd48875dd337405b851aae4132?apiKey=2a73886494004d7089b4468484ca08f2&"
                                className="w-full aspect-[1.79] rounded-3xl"
                            />
                            <div className="flex flex-col px-8 pb-8 mt-6 w-full">
                                <div className="flex flex-col justify-center">
                                <div className="flex flex-col justify-center">
                                    <div className="flex flex-col">
                                    <div className="text-lg font-semibold leading-6 text-white">
                                        Do you need help, John? <span className="">�</span>�
                                    </div>
                                    <div className="mt-4 text-sm tracking-normal leading-5 text-white text-opacity-70">
                                        I'm your AI Credit Advisor. Designed to empower you with
                                        actionable financial insights, I'm your personal guide to a
                                        brighter financial future.{" "}
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="justify-center items-center px-4 py-3.5 mt-6 text-sm tracking-normal leading-5 whitespace-nowrap bg-white rounded-2xl text-neutral-900">
                                Start
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white rounded-3xl mt-6 w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/774c8d53877323c36323805430314d1e2cfbf255857277af2be55afd23eb64ed?apiKey=2a73886494004d7089b4468484ca08f2&"
                                className="w-full aspect-[3.45]"
                            />
                            <div className="flex flex-col px-8 pb-8 mt-6 w-full">
                                <div className="flex flex-col justify-center">
                                <div className="flex flex-col justify-center">
                                    <div className="flex flex-col">
                                    <div className="text-lg font-semibold leading-6 text-neutral-800">
                                        Upgrade your Protection
                                    </div>
                                    <div className="mt-4 text-sm tracking-normal leading-5 text-stone-500">
                                        Facing identity theft? Upgrade to the AI Elite Plan for superior
                                        recovery assistance. Our plan outlines clear, actionable steps
                                        for a methodical recovery, ensuring your financial safety is
                                        restored.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="justify-center items-center px-6 py-3.5 mt-6 text-sm tracking-normal leading-5 text-white rounded-2xl bg-neutral-900">
                                Upgrade Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5 mt-6">
                    <div className="text-2xl font-semibold leading-8 text-center text-neutral-800 max-md:max-w-full">
                        Credit Summary
                    </div>
                    <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col items-start py-8 rounded-3xl bg-neutral-900">
                            <div className="flex overflow-hidden relative flex-col px-8 pt-8 pb-4 max-w-full text-center aspect-[1.23] w-[179px] max-md:px-5">
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd4335f5250830bb0a60d8d6bcba9bc0364b2281c63fd72f973d11d153a3936?apiKey=2a73886494004d7089b4468484ca08f2&"
                                className="object-cover absolute inset-0 size-full"
                                />
                                <div className="flex relative flex-col">
                                <div className="text-5xl font-medium tracking-tight text-lime-500 leading-[65px] max-md:text-4xl">
                                    15
                                </div>
                                <div className="mt-2 text-base tracking-normal leading-6 text-white">
                                    Open Accounts
                                </div>
                                </div>
                            </div>
                            <div className="justify-center self-end px-6 py-3.5 mt-4 text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-zinc-900 max-md:pr-6 max-md:pl-6">
                                Actions
                            </div>
                        </div>
                        <div className="flex flex-col items-start py-8 rounded-3xl bg-neutral-900">
                        <div className="flex overflow-hidden relative flex-col px-8 pt-8 pb-4 max-w-full text-center aspect-[1.23] w-[179px] max-md:px-5">
                            <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35aa85530c2904b563aebb606a8f392a9537efb06f282033edfc9930d403e351?apiKey=2a73886494004d7089b4468484ca08f2&"
                            className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col">
                            <div className="text-5xl font-medium tracking-tight text-lime-500 leading-[65px] max-md:text-4xl">
                                10
                            </div>
                            <div className="mt-2 text-base tracking-normal leading-6 text-white">
                                Hard Inquiries
                            </div>
                            </div>
                        </div>
                        <div className="justify-center self-end px-6 py-3.5 mt-4 text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-zinc-900 max-md:pr-6 max-md:pl-6">
                            Actions
                        </div>
                        </div>
                        <div className="flex flex-col items-start py-8 rounded-3xl bg-neutral-900">
                        <div className="flex overflow-hidden relative flex-col items-start px-8 pt-8 pb-4 max-w-full text-center aspect-[1.23] w-[179px] max-md:pl-5">
                            <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d642684becc4e6c92772aad5fdb079f5ff4a8cf2a245eebbe1af9586690dc7c?apiKey=2a73886494004d7089b4468484ca08f2&"
                            className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col">
                            <div className="text-5xl font-medium tracking-tight text-lime-500 leading-[65px] max-md:text-4xl">
                                97%
                            </div>
                            <div className="mt-2 text-base tracking-normal leading-6 text-white">
                                Credit Utilization
                            </div>
                            </div>
                        </div>
                        <div className="justify-center self-end px-6 py-3.5 mt-4 text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-zinc-900 max-md:pr-6 max-md:pl-6">
                            Actions
                        </div>
                        </div>
                        <div className="flex flex-col items-start py-8 rounded-3xl bg-neutral-900">
                        <div className="flex overflow-hidden relative flex-col items-start px-8 pt-8 pb-4 max-w-full text-center aspect-[1.23] w-[179px] max-md:pl-5">
                            <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d642684becc4e6c92772aad5fdb079f5ff4a8cf2a245eebbe1af9586690dc7c?apiKey=2a73886494004d7089b4468484ca08f2&"
                            className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col">
                            <div className="text-5xl font-medium tracking-tight text-lime-500 leading-[65px] max-md:text-4xl">
                                98%
                            </div>
                            <div className="mt-2 text-base tracking-normal leading-6 text-white">
                                Negative Accounts
                            </div>
                            </div>
                        </div>
                        <div className="justify-center self-end px-6 py-3.5 mt-4 text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-zinc-900 max-md:pr-6 max-md:pl-6">
                            Actions
                        </div>
                        </div>
                        <div className="flex flex-col items-start py-8 rounded-3xl bg-neutral-900">
                        <div className="flex overflow-hidden relative flex-col items-start px-8 pt-8 pb-4 max-w-full text-center aspect-[1.23] w-[179px] max-md:pl-5">
                            <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d642684becc4e6c92772aad5fdb079f5ff4a8cf2a245eebbe1af9586690dc7c?apiKey=2a73886494004d7089b4468484ca08f2&"
                            className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col">
                            <div className="text-5xl font-medium tracking-tight text-lime-500 leading-[65px] max-md:text-4xl">
                                8%
                            </div>
                            <div className="mt-2 text-base tracking-normal leading-6 text-white">
                                Debt to Income Ratio
                            </div>
                            </div>
                        </div>
                        <div className="justify-center self-end px-6 py-3.5 mt-4 text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-zinc-900 max-md:pr-6 max-md:pl-6">
                            Actions
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}