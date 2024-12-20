"use client";

import Link from "next/link";

export default function HomeSection() {
  return (
    <div className="h-screen flex items-center gap-8 justify-center flex-wrap">
      <Link
        href={"/store"}
        className="shadow-xl w-80 h-80 rounded-lg text-white text-[30px] bg-blue-400 hover:shadow-2xl flex items-center justify-center"
      >
        Store
      </Link>
      <Link
        href={"/orders"}
        className="shadow-xl w-80 h-80 rounded-lg text-white text-[30px] bg-blue-400 hover:shadow-2xl flex items-center justify-center"
      >
        My Orders
      </Link>
    </div>
  );
}
