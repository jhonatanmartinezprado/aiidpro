import * as React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-8 bg-backColor">
      <div className="flex flex-col justify-center self-stretch w-full max-md:max-w-full">
        <div className="w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex gap-5 justify-center px-5 mt-8 text-sm tracking-normal leading-5 text-center text-stone-500">
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
        <div>Contact Us</div>
      </div>
      <div className="mt-8 text-xs tracking-normal leading-4 text-center text-stone-500">
        © 2024 AIIDPRO.com - All Rights Reserved
      </div>
    </div>
  );
}


