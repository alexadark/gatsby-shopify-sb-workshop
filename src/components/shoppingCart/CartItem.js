import React from "react";
export const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between py-5 border-b">
      <div className="flex items-center gap-5">
        <div className="w-[150px]">
          <img src={item.variant.image.src} alt="" />
        </div>

        <div className="">
          <div className="font-bold">{item.title}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{item.quantity}</div>
        <div className="text-sm">{item.variant.price}eur</div>
      </div>
    </div>
  );
};
