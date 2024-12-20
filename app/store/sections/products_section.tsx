import { products } from "@/constants/products";
import { Product } from "@/models/product";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import ProductComponent from "../components/product_component";

export default function ProductsSection() {
  return (
    <div className="flex flex-col text-black gap-4">
      <Link href={"/"} className=" text-blue-500">
        <IoArrowBackSharp size={30} />
      </Link>
      <div className="text-[50px] font-bold">Store</div>
      <hr className="bg-grey-100 h-2 w-full" />
      <div className="flex flex-row flex-wrap gap-4">
        {products.map((prod: Product, index) => (
          <ProductComponent key={index} prod={prod} />
        ))}
      </div>
    </div>
  );
}
