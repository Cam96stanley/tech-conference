"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "../primitives/Button";

const links = [
    {label: "Home", link: "/"},
    {label: "Schedule", link: "/schedule"},
    {label: "Speakers", link: "/speakers"},
];

export default function HeaderMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button
        variant={"tab"}
        size={"menu"}
        className="md:hidden"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen(true)}
      >
        <ListIcon size={20} />
      </Button>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-4">
        {links.map(({ link, label }) => (
          <Button key={link} variant={"tab"}>
            {label}
          </Button>
        ))}
      </nav>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-background z-40 md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <nav
        id="mobile-drawer"
        aria-label="Mobile navigation"
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-background border-l border-border z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer header */}
        <div className="flex justify-end p-4">
          <Button variant={"tab"} size={"menu"} onClick={() => setOpen(false)}>
            <XIcon size={20} />
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 px-4">
          {links.map(({link, label}) => (
            <Link
              key={label}
              href={link}
              onClick={() => setOpen(false)}
            >
              <Button variant={"tab"} className="justify-start">
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
