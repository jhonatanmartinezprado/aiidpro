import * as React from "react";

export default function DisputeResolution() {
    return (
        <div className="flex flex-col p-8 bg-white rounded-3xl max-md:px-5 mt-6">
            <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-[1000px]:inline-block max-[1000px]:w-full max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-[1000px]:w-full max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 justify-between w-full leading-[140%] text-neutral-900 max-md:flex-wrap max-md:max-w-full">
                            <div className="self-start mb-7 text-2xl font-semibold text-center">
                                AI Dispute Resolutions
                            </div>
                        </div>
                        <div className="flex flex-col grow h-[500px] justify-between self-stretch max-md:mt-6">
                            <div className="flex flex-col justify-center items-center px-8 rounded-3xl aspect-square bg-neutral-100 max-md:px-5">
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1814aa1d75dccbcab47cb9d98ab4d916d31d2ed2a9273df60f4f34f7d75f2a32?apiKey=2a73886494004d7089b4468484ca08f2&"
                                className="aspect-square max-w-[300px]"
                                />
                            </div>
                            <div className="flex flex-col mt-20 text-sm tracking-normal leading-5 max-md:mt-10">
                                <div className="flex justify-center items-center px-6 py-3.5 text-white rounded-2xl bg-neutral-900 max-md:px-5">
                                Learn more
                                </div>
                                <div className="flex justify-center items-center px-4 py-3.5 mt-4 rounded-2xl bg-neutral-100 text-neutral-900 max-md:px-5">
                                Create Disputes
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 max-[1000px]:ml-0 max-[1000px]:mt-8 w-[67%] max-[1000px]:w-full max-md:ml-0 max-md:w-full">
                        <div className="max-[1000px]:hidden flex gap-5 mb-3 justify-end w-full leading-[140%] text-neutral-900 max-md:flex-wrap max-md:max-w-full -translate-y-4">
                            <div className="flex gap-2 justify-center px-4 py-3.5 text-sm tracking-normal rounded-2xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4b11e400e23980f05a4a7e4139d0b926b3472dfcbb8bf356af098208760c7e?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>View Details</div>
                            </div>
                        </div>
                        <div className="flex flex-col grow w-full rounded-3xl bg-neutral-100 max-md:mt-6 max-md:max-w-full">
                        <table className="m-2">
                            <thead className="bg-white">
                                <tr>
                                    <th className="w-[30%] rounded-tl-2xl rounded-bl-2xl">
                                        <div className="flex flex-col flex-1 justify-center items-start px-4 py-3 max-md:pr-5 ">
                                            <div className="justify-center ">Status</div>
                                        </div>
                                    </th>
                                    <th className="w-[21%] ">
                                        <div className="flex flex-col flex-1 justify-start items-start px-0 py-3 max-md:pr-5">
                                            <div className="max-[640px]:hidden justify-center">TransUnion</div>
                                            <div className="min-[640px]:hidden justify-center">TRU</div>
                                        </div>
                                    </th>
                                    <th className="w-[21%] ">
                                        <div className="flex flex-col flex-1 justify-start items-start px-0 py-3 max-md:pr-5">
                                            <div className="max-[640px]:hidden justify-center">Experian</div>
                                            <div className="min-[640px]:hidden justify-center">EXP</div>
                                        </div>
                                    </th>
                                    <th className="w-[23%] rounded-tr-2xl rounded-br-2xl">
                                        <div className="flex flex-col flex-1 justify-start items-start px-0 py-3 max-md:pr-5">
                                            <div className="max-[640px]:hidden justify-center">Equifax</div>
                                            <div className="min-[640px]:hidden justify-center">EQ</div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col max-[800px] w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-teal-300 bg-opacity-10 rounded-[100px]">
                                                        <div className="shrink-0 my-auto w-2 h-2 bg-teal-300 rounded-full" />
                                                        <div className="text-ellipsis">
                                                            Unspecified
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col max-[800px] w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-teal-300 bg-opacity-10 rounded-[100px]">
                                                        <div className="shrink-0 my-auto w-2 h-2 bg-teal-300 rounded-full" />
                                                        <div className="text-ellipsis">
                                                            Unspecified
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                    <div className="text-ellipsis">Deleted</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                    <div className="text-ellipsis">Resolved</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-lime-400 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-lime-500 rounded-full" />
                                                    <div className="text-ellipsis">Updated</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-orange-400 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-orange-400 rounded-full" />
                                                    <div className="text-ellipsis whitespace-nowrap">In Dispute</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-rose-500 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-rose-500 rounded-full" />
                                                    <div className="text-ellipsis">Verified</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-rose-500 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-rose-500 rounded-full" />
                                                    <div className="text-ellipsis">Negative</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex flex-col w-3/12 ml-0 max-md:w-full">
                                                <div className="flex flex-col justify-center items-start px-4 py-2.5 whitespace-nowrap max-md:pr-5">
                                                    <div className="flex gap-2.5 px-2 py-1 bg-neutral-400 bg-opacity-10 rounded-[100px]">
                                                    <div className="shrink-0 my-auto w-2 h-2 bg-neutral-400 rounded-full" />
                                                    <div className="text-ellipsis">Bureau Letters</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=" min-[1000px]:hidden my-5">
                            <div className="flex justify-center items-center px-4 py-3.5 mt-4 rounded-2xl bg-neutral-100 text-neutral-900 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4b11e400e23980f05a4a7e4139d0b926b3472dfcbb8bf356af098208760c7e?apiKey=2a73886494004d7089b4468484ca08f2&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div className="ml-2">View Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}