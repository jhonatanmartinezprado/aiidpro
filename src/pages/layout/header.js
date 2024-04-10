import * as React from "react";
import {
  Drawer,
} from "@material-tailwind/react";

export default function Header() {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="flex flex-col bg-neutral-900">
      {/* Desktop layout */}
      <div className="max-1200:hidden justify-between px-10 w-full border-b border-solid border-white border-opacity-10 max-1200:px-5 max-1200:max-w-full">
        <div className="flex items-center max-1200:flex-col max-1200:gap-0">
          <div className="">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dd327a1dcf118824df16c5f505b9e844013932c30bfc3fc6ab6291c160f68ea?apiKey=2a73886494004d7089b4468484ca08f2&"
              className="inline-block my-auto max-w-[220px] w-[220px] max-1200:mt-10"
            />
          </div>
          <div className="flex flex-col w-full ml-5 max-1200:ml-0">
            <div className="grow min-[1200px]:flex justify-center self-stretch max-1200:pt-0 py-7 max-1200:mt-10 max-1200:max-w-full">
              <div className="flex gap-0 max-1200:flex-col">
                <div className="flex flex-col w-fit max-1200:ml-0 max-1200:w-full">
                  <div className="flex justify-center px-4 py-3.5 w-full text-sm tracking-normal leading-5 whitespace-nowrap bg-white rounded-2xl text-neutral-800 max-1200:px-5 max-1200:mt-10">
                    Dashboard
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-fit max-1200:ml-0 max-1200:w-full">
                  <div className="flex justify-center px-4 py-3.5 w-full text-sm tracking-normal leading-5 text-lightGray whitespace-nowrap rounded-2xl bg-gray-850 max-1200:px-5 max-1200:mt-10">
                    Reports
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-fit max-1200:ml-0 max-1200:w-full">
                  <div className="flex justify-center px-4 py-3.5 w-full text-sm tracking-normal leading-5 text-lightGray whitespace-nowrap rounded-2xl bg-gray-850 max-1200:px-5 max-1200:mt-10">
                    Monitoring
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-fit max-1200:ml-0 max-1200:w-full">
                  <div className="grow flex justify-center px-4 py-3.5 w-full text-sm tracking-normal leading-5 text-lightGray rounded-2xl bg-gray-850 max-1200:px-5 max-1200:mt-10">
                    Plan Ahead
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-fit max-1200:ml-0 max-1200:w-full">
            <div className="flex gap-4 self-stretch my-auto max-1200:mt-10">
              <div className="flex gap-2.5 justify-center px-6 lg:px-4 py-2 my-auto text-sm tracking-normal leading-5 text-white rounded-2xl bg-gray-850 max-1200:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/49168fb54aff16eebef13baff71c73031854a1d41f15b5840285f74871fbb662?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="shrink-0 w-8 aspect-square"
                />
                <div className="my-auto w-[90px]">AI Advisor</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7829d38ec5347f47c17d3a74ec084e2267abe858a675ad4c707660e011ebfcc4?apiKey=2a73886494004d7089b4468484ca08f2&"
                className="shrink-0 my-auto w-px aspect-[0.02]"
              />
              <div className="flex justify-center items-center py-3.5 bg-gray-850 rounded-full w-[68px] h-[58px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e40fd01f1cade622d31e42605d9c613fad9540feec37a169e9e0a6296c3cd6?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="h-[58px] w-[58px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa1ab69eea7c193f628f8c847185b5b20056a9658ffd793f5955a84691bccb11?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="shrink-0 aspect-square w-[58px] max-w-[58px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="min-[1200px]:hidden justify-between px-10 w-full border-b border-solid border-white border-opacity-10 max-1200:px-5 max-1200:max-w-full">
        <div className="flex items-center max-1200:flex-col max-1200:gap-0">
          <div className="flex gap-5 justify-between items-center px-4 py-6 w-full">
            <button className="flex justify-center items-center px-6 py-3.5 bg-rose-500 h-[58px] rounded-[51px] w-[58px]" onClick={openDrawer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17c9c46d233a3fd513d3755abb7ef7d1e790fdbfdecbb605f89ed57bc4176976?apiKey=2a73886494004d7089b4468484ca08f2&"
                className="w-[58px] max-w-[58px] aspect-square"
              />
            </button>
            <div className="flex gap-5 justify-between">
              <div className="flex justify-center items-center px-6 py-3.5 bg-gray-850 h-[58px] rounded-[51px] w-[58px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d9adcda3cc9028974de8744993badc89063d45c732112bf343c0bc2d86b0769?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="w-[58px] max-w-[58px] aspect-square"
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
      {/* Navbar Section */}
      <Drawer className="fixed z-50" size={339} open={isDrawerOpen} onClose={closeDrawer}>
        <div className="flex flex-col justify-between px-4 pb-14 border-r border-solid bg-neutral-900 border-white border-opacity-10 max-w-[339px] h-full">
          <div className="flex flex-col">
            <div className="flex gap-5 justify-between py-8 border-b border-solid border-white border-opacity-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f0d3439e548dcc629844eec1a8a1f48d89eae32fcc8fd613bc99213dcce1f45?apiKey=2a73886494004d7089b4468484ca08f2&"
                className="shrink-0 my-auto max-w-full aspect-[10] w-[156px]"
              />
              <button onClick={closeDrawer}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/113ccec22ad3fb772bb1cab3b75198b9350c744dbcf8c8355a4a46176ef9243b?apiKey=2a73886494004d7089b4468484ca08f2&"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
            <div className="flex flex-col justify-center mt-8 text-lg text-lightGray">
              <div className="flex justify-center items-center px-6 py-3.5 whitespace-nowrap bg-white rounded-2xl text-neutral-800">
                Dashboard
              </div>
              <div className="flex justify-center items-center px-6 py-3.5 mt-6 whitespace-nowrap rounded-2xl bg-gray-850">
                Reports
              </div>
              <div className="flex justify-center items-center px-6 py-3.5 mt-6 whitespace-nowrap rounded-2xl bg-gray-850">
                Monitoring
              </div>
              <div className="flex justify-center items-center px-6 py-3.5 mt-6 rounded-2xl bg-gray-850">
                Plan Ahead
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3 mt-36 text-lg text-white rounded-2xl bg-gray-850">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49168fb54aff16eebef13baff71c73031854a1d41f15b5840285f74871fbb662?apiKey=2a73886494004d7089b4468484ca08f2&"
              className="shrink-0 w-8 aspect-square"
            />
            <div className="my-auto">AI Advisor</div>
          </div>
        </div>
      </Drawer>
      {/* Header Section */}
      <div className="flex flex-col self-start px-10 pb-40 mt-24 text-white max-1200:px-5 max-1200:mt-10 max-1200:max-w-full w-full bg-100% bg-right bg-no-repeat min-[1200px]:bg-hero-pattern">
        <div className="text-5xl font-bold tracking-tight leading-[65px] max-1200:max-w-full max-1200:text-4xl">
          Hi John 👋{" "}
        </div>
        <div className="mt-2 text-base tracking-normal leading-6 max-1200:max-w-full text-lightGray">
          Here you can see key information about your finances
        </div>
      </div>
    </div>
  );
}


