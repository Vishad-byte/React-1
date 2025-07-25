import React from "react";

function Card({channel, btnText = "click here"}){
    return (
        // <div className=" min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-60 flex flex-col rounded-xl bg-amber-600 min-h-[19rem]  ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{channel}</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
          <button className="bg-violet-400 font-bold rounded-xl w-35 hover:underline">{btnText}</button>
        </div>
      </div>
        // </div>
        
    )
}

export default Card