import { Product } from "@/models/product";

export default function ProductComponent({ prod }: { prod: Product }) {
  return (
    <div className="border border-1 border-blue-500 shadow-lg text-[25px] h-80 w-80 rounded-lg font-bold p-4 flex flex-col">
      {prod.product_name}
      <div className="mt-auto text-blue-500">${prod.cost}</div>
    </div>
  );
}
