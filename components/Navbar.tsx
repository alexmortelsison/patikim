"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Recipes",
    href: "/recipes",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 lg:px-[200px] h-[80px] lg:h-[100px] bg-white/10 backdrop-blur-md z-50">
      <div>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt={"logo"} width={120} height={120} />
        </Link>
      </div>

      <div className="hidden md:flex space-x-2 items-center">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`if ${
              pathname === link.href
                ? "text-lime-500 font-bold"
                : "text-black dark:text-white hover:text-muted-foreground"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href={"/contact"}
          className="bg-lime-500 px-4 py-2 items-center flex justify-center rounded-md hover:bg-lime-600 text-white"
        >
          Contact
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
