"use client";

import { usePathname } from "next/navigation";
import React from "react";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return <div>TransitionProvider</div>;
};

export default TransitionProvider;
