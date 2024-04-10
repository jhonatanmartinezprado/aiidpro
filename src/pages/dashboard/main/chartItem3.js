import * as React from "react";

export default function ChatItem3() {
    return (
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
                        Do you need help, John? <span className="">😀</span>
                    </div>
                    <div className="mt-4 text-sm tracking-normal leading-5 text-white text-opacity-70">
                        I'm your AI Credit Advisor. Designed to empower you with
                        actionable financial insights, I'm your personal guide to a
                        brighter financial future.{" "}
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex justify-center items-center px-4 py-3.5 mt-6 text-sm tracking-normal leading-5 whitespace-nowrap bg-white rounded-2xl text-neutral-900">
                Start
                </div>
            </div>
        </div>
    )
}