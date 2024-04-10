import * as React from 'react';

export default function CreditSummaryCard(props){
    return (
        <div className="flex flex-col items-start py-0 w-full rounded-3xl bg-neutral-900">
            <div className="flex overflow-hidden relative flex-col px-8 pt-8 pb-4 max-w-full text-center aspect-[1.23] w-[179px] max-md:px-5">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd4335f5250830bb0a60d8d6bcba9bc0364b2281c63fd72f973d11d153a3936?apiKey=2a73886494004d7089b4468484ca08f2&"
                className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col">
                <div className="flex justify-start text-5xl font-medium tracking-tight text-lime-500 leading-[65px] max-md:text-4xl">
                    {props.count}
                </div>
                <div className="flex justify-start mt-2 text-base tracking-normal leading-6 text-white whitespace-nowrap">
                    {props.name}
                </div>
                </div>
            </div>
            <div className="justify-center self-end w-full px-6 py-3.5 text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-zinc-900 max-md:pr-6 max-md:pl-6">
            <div className="flex justify-center items-center px-6 py-3 mb-6 whitespace-nowrap rounded-2xl bg-gray-850">
                Actions
              </div>
            </div>
        </div>
    )
}