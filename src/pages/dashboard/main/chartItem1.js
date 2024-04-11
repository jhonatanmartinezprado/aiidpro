import * as React from "react";

export default function ChatItem1() {
    return (
        <div className="flex flex-col justify-between p-8 max-[640px]:mt-6 bg-white rounded-3xl w-full">
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
                <div className="flex justify-center items-center px-6 py-3.5 text-white whitespace-nowrap rounded-2xl bg-neutral-900">
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
    )
}