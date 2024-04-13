"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return <AnimatePresence></AnimatePresence>;
};

export default TransitionProvider;
