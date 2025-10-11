import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <Image src="/logo.svg" alt="apple-logo" width={25} height={25} />
        <ul>
          {navLinks.map((link) => (
            <Link
              href={`#${link.label.toLowerCase()}`}
              key={link.label}
              className="hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <Image src="/search.svg" alt="Search" width={25} height={25} />
          </button>
          <button>
            <Image src="/cart.svg" alt="Cart" width={25} height={25} />
          </button>
        </div>
      </nav>
    </header>
  );
};
