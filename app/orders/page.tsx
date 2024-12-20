import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import OrdersSection from "./sections/orders_section";
import UserSection from "./sections/user_section";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Link href={"/"} className=" text-blue-500 flex-row">
        <IoArrowBackSharp size={30} />
      </Link>
      <div className="flex flex-row w-full gap-4">
        <UserSection />
        <OrdersSection />
      </div>
    </div>
  );
}
