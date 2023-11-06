"use client";

import React from "react";

import image from "../../public/download.png";
import Image from "next/image";

const Login = () => {
  return (
    <section className="w-full h-screen bg-black text-white">
      <div className="w-full h-full container mx-auto p-5 flex items-center gap-5 justify-center flex-col">
        <Image
          src={image}
          alt="PhotoProfile"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default Login;
