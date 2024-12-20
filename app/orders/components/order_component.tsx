import { Order } from "@/models/order";

export default function OrderComponent({ order }: { order: Order }) {
  const totalNetCost =
    order.items?.reduce((total, item) => total + item.netCost, 0) || 0;
  return (
    <div className="w-full h-36  shadow-lg text-[25px] rounded-lg p-4 flex flex-col justify-between">
      <div className="flex flex-row justify-between">
        <div>Order #{order.id}</div>
        <div className="text-gray-400 text-sm">{order.created}</div>
      </div>
      <div>${totalNetCost}</div>
    </div>
  );
}
