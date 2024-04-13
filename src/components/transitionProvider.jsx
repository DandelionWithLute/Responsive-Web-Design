"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName} //wait what does it do?
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to bg-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>
        <div className="h-[calc(100vh-6em)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
