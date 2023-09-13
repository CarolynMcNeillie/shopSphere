export default function Phone() {
  return (
    <article className="device relative py-26 rounded-[5px] w-430 h-800 overflow-y-auto overflow-x-hidden border-2 flex flex-col mb-20">
      <h1 className="flex-grow-0 mb-13 font-shopify px-14 text-36">
        ShopSphere
      </h1>
      <div className="flex-grow bg-[#9E9E9E] w-full py-14 flex flex-col">
        <img className="w-full" src="https://cdn.shopify.com/s/files/1/0693/6274/5366/files/Detail.png?v=1694638796"/>
        <div className="w-[calc(100%-40px)] bg-white pt-6 pb-40 px-28 rounded-[20px] mx-20 -mt-30">
          <hr className="mb-16 mt-6 w-50 h-3 mx-auto bg-[#A1A1AA]" />
          <h2 className="text-center font-shopify text-18 font-bold">
            Share your world and list
          </h2>
          <div className="flex gap-8 items-center justify-between">
            <img className="w-43 h-43" src="https://cdn.shopify.com/s/files/1/0693/6274/5366/files/Group_12362.png?v=1694638216" />
            <span className="text-[rgba(60,60,67,0.60)] text-12">https://shopsphere.com/erin-3298</span>
            <img className="w-22 h-22" src="https://cdn.shopify.com/s/files/1/0693/6274/5366/files/Vector.png?v=1694638222"/>
          </div>
          <div className="mt-16 py-20 border-t border-[#D8D8DD]">
            <img src="https://cdn.shopify.com/s/files/1/0693/6274/5366/files/Frame_85423.png?v=1694638225" />
            <img src="https://cdn.shopify.com/s/files/1/0693/6274/5366/files/Frame_85424.png?v=1694638229" />
          </div>
        </div>
      </div>
    </article>
  );
}
