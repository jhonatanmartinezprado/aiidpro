import * as React from "react";
import CreditSummary from "./creditSummary";
import CreditScores from "./creditScore";
import DisputeResolution from "./disputeResolution";
import ScoreTracker from "./scoreTracker";
import ChatItem1 from "./chartItem1";
import ChatItem2 from "./chartItem2";
import ChatItem3 from "./chartItem3";
import ChatItem4 from "./chartItem4";


export default function Layout() {
    return (
        <div className="px-10 max-[640px]:px-0 max-1200:px-5 bg-backColor">
            <div className="-translate-y-16">
                <div className="max-[640px]:hidden grid grid-cols-4 max-1200:grid-cols-2 gap-5 max-[640px]:gap-0">
                    <div className="col-span-3">
                        <CreditScores/>
                        <DisputeResolution/>
                        <ScoreTracker/>
                    </div>
                    <div className="col-span-1 max-1200:col-span-2 max-1200:grid max-1200:grid-cols-2 max-[640px]:grid-cols-1 max-1200:gap-5">
                        <ChatItem1/>
                        <ChatItem2/>
                        <ChatItem3/>
                        <ChatItem4/>
                    </div>
                </div>
                <div className="min-[640px]:hidden">
                    <CreditScores/>
                    <ChatItem1/>
                    <ChatItem2/>
                    <ScoreTracker/>
                    <ChatItem4/>
                    <DisputeResolution/>
                    <ChatItem3/>
                </div>
                <CreditSummary/>
            </div>
        </div>
    )
}