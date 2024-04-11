import * as React from "react";

export default function ScoreTracker() {
    return (
        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5 mt-6">
            <div className="text-2xl font-semibold leading-8 text-center text-neutral-800 max-md:max-w-full">
                Score Tracker
            </div>
            <div className="flex flex-col mt-10 max-md:max-w-full">
                <div className="flex gap-3 justify-start w-full max-md:flex-wrap">
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
                <div className="flex flex-col w-full overflow-hidden">
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
                <div className="flex justify-between gap-5 self-center mt-3 ml-5 text-sm tracking-normal leading-5 whitespace-nowrap text-stone-500 max-md:flex-wrap w-full overflow-hidden">
                <div>02/23</div>
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
    )
}