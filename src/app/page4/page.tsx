import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fibo | Page 4",
  description: "Page 4 of the Fibo app.",
};

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white text-xl">
      page4
    </div>
  );
};

export default page;
