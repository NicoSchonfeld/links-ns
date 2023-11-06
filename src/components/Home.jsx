"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import image from "../../public/download.png";

import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [loginPage, setLoginPage] = useState(false);

  const socialMedia = [
    { id: 1, title: "Portfolio", path: "https://nicoschonfeld.vercel.app/" },
    { id: 2, title: "Github", path: "https://github.com/NicoSchonfeld" },
    {
      id: 3,
      title: "Linkedin",
      path: "https://www.linkedin.com/in/nicoschonfeld/",
    },
    {
      id: 4,
      title: "Drump UI",
      path: "https://drump-ui.vercel.app/",
    },
    {
      id: 5,
      title: "Instagram",
      path: "https://www.instagram.com/nicoschonfeld_/",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoginPage(true);
    }, 1500);
  }, []);

  return (
    <AnimatePresence>
      <main className="w-full h-screen bg-black text-white">
        <div className="w-full h-full container mx-auto p-5 flex items-center gap-5 justify-center flex-col">
          <motion.div
            initial={{ opacity: 1, y: 190, scale: 0 }}
            animate={{ opacity: 1, y: loginPage && 0, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              /*  scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              }, */
            }}
          >
            <Image
              src={image}
              alt="PhotoProfile"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="font-bold text-3xl mb-10"
          >
            Nico Schönfeld
          </motion.h1>

          {socialMedia?.map((dato) => (
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              key={dato?.id}
            >
              <Link
                href={dato?.path}
                target="_blank"
                className="bg-white hover:bg-gray-100 text-black w-80 rounded-md py-1.5 flex items-center justify-center transition-all"
              >
                {dato?.title}
              </Link>
            </motion.span>
          ))}
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Home;
