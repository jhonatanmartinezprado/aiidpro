import * as React from "react";

export default function ChatItem4() {
    return (
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
                <div className="flex justify-center items-center px-6 py-3.5 mt-6 text-sm tracking-normal leading-5 text-white rounded-2xl bg-neutral-900">
                Upgrade Now
                </div>
            </div>
        </div>
    )
}