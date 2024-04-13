"use client";

import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <div
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </div>
  );
};

export default NavLink;
