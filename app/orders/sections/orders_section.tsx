import { orders } from "@/constants/orders";
import { Order } from "@/models/order";
import OrderComponent from "../components/order_component";

export default function OrdersSection() {
  return (
    <div className="flex flex-col text-black gap-4 shadow-lg min-h-[64rem] max-h-[64rem]  w-full overflow-auto border border-1 border-black rounded-lg p-4">
      <div className="flex flex-col gap-2">
        {orders.map((order: Order, index) => (
          <OrderComponent key={index} order={order} />
        ))}
      </div>
    </div>
  );
}
