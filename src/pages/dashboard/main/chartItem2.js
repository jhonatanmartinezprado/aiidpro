import * as React from "react";

export default function ChatItem2() {
    return (
        <div className="flex flex-col p-8 min-[1000px]:mt-6 bg-white rounded-3xl leading-[140%] w-full">
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
    )
}