import * as React from 'react';

export default function CreditScoreCard(props){
    return(
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 mx-auto w-full rounded-3xl bg-neutral-100 leading-[140%] max-md:px-5 max-md:mt-6">
            <div className="flex gap-5 justify-between text-center text-neutral-800">
                <div className="text-lg">{props.name}</div>
                <div className="my-auto text-xs tracking-normal">
                {props.time}
                </div>
            </div>
            <img
                loading="lazy"
                src={props.chart}
                className="mt-10 w-full aspect-[1.14]"
            />
            <div className="justify-center items-center px-4 py-3.5 mt-10 text-sm tracking-normal whitespace-nowrap bg-white rounded-2xl text-neutral-900 max-md:px-5">
                {props.details}
            </div>
            </div>
        </div>
    )
}