import { FaRegUserCircle } from "react-icons/fa";

export default function UserSection() {
  return (
    <div className="w-2/4 text-black flex flex-col ">
      <div className="text-[35px] font-bold">Orders</div>
      <hr className="bg-grey-100 h-2 w-full" />
      <div className="flex flex-col items-center justify-center gap-4 my-10">
        <FaRegUserCircle size={250} />
        <div className="text-[35px] font-bold">John Doe</div>
      </div>
      <div className="text-[25px]">11/11/1922</div>
      <div className="text-[25px]">Male</div>
      <div className="text-[25px]">Sample Adress, USA</div>
    </div>
  );
}
