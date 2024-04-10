import * as React from "react";

export default function Layout() {
  return (
    <div className="flex flex-col pb-20 bg-neutral-900">
      <div className="justify-between px-10 w-full border-b border-solid border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dd327a1dcf118824df16c5f505b9e844013932c30bfc3fc6ab6291c160f68ea?apiKey=2a73886494004d7089b4468484ca08f2&"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[10] w-[200px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-center self-stretch py-7 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center px-6 py-3.5 w-full text-sm tracking-normal leading-5 whitespace-nowrap bg-white rounded-2xl text-neutral-800 max-md:px-5 max-md:mt-10">
                    Dashboard
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center px-6 py-3.5 w-full text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-gray-850 max-md:px-5 max-md:mt-10">
                    Reports
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center px-6 py-3.5 w-full text-sm tracking-normal leading-5 text-white whitespace-nowrap rounded-2xl bg-gray-850 max-md:px-5 max-md:mt-10">
                    Monitoring
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="grow flex justify-center px-6 py-3.5 w-full text-sm tracking-normal leading-5 text-white rounded-2xl bg-gray-850 max-md:px-5 max-md:mt-10">
                    Plan Ahead
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-4 self-stretch my-auto max-md:mt-10">
              <div className="flex gap-2.5 justify-center px-6 py-3.5 my-auto text-sm tracking-normal leading-5 text-white rounded-2xl bg-gray-850 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d106f8842dd64e2eb5c997f58cce8d10b9f3f55f7225eab7a04e1c31840a73ed?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="shrink-0 w-8 aspect-square"
                />
                <div className="my-auto">AI Advisor</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7829d38ec5347f47c17d3a74ec084e2267abe858a675ad4c707660e011ebfcc4?apiKey=2a73886494004d7089b4468484ca08f2&"
                className="shrink-0 my-auto w-px aspect-[0.02]"
              />
              <div className="flex justify-center items-center py-3.5 bg-gray-850 h-[58px] rounded-[51px] w-[58px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e40fd01f1cade622d31e42605d9c613fad9540feec37a169e9e0a6296c3cd6?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="w-6 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&"
                className="shrink-0 aspect-square w-[58px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-start px-10 mt-24 text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-5xl font-bold tracking-tight leading-[65px] max-md:max-w-full max-md:text-4xl">
          Hi John 👋{" "}
        </div>
        <div className="mt-2 text-base tracking-normal leading-6 max-md:max-w-full">
          Here you can see key information about your finances
        </div>
      </div>
    </div>
  );
}


