"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function Navigation() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      subLabel: "VBUSS Delhi",
      subLink: "/vbuss",
    },
    {
      name: "About the Journal",
      link: "/about",
    },
    {
      name: "Submission Guidelines",
      link: "/submission-guidelines",
    },
   
    {
      name: "Editorial Board",
      link: "/editorial-board",
    },
    {
      name: "Archives",
      link: "/archives",
    },
    {
      name: "Indexing",
      link: "/indexing",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <NavbarButton variant="dark">Submit Your Paper</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Submit Your Paper
              </NavbarButton>
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      

      {/* Navbar */}
    </div>
  );
}
