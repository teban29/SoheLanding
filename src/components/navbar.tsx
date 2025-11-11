import { Link } from "@heroui/link";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/media/img/logo.png";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import React from "react";

export const Navbar = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1); // Remove the '#'
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById("main-navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 72; // Default height if navbar not found

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };
  return (
    <HeroUINavbar
      id="main-navbar"
      position="sticky"
      className="bg-white/95 dark:bg-darkbg/95 text-black dark:text-darkfg">
      {/* Left Content */}
      <NavbarContent className="basis-1//5 sm:basis-full" justify="start">
        <a href="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </a>
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/">
            {/* Puedes agregar texto o elementos aquí si quieres */}
          </Link>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  "text-black dark:text-darkfg"
                )}
                color="foreground"
                href={item.href}
                onClick={(e) =>
                  handleScroll(e as React.MouseEvent<HTMLAnchorElement>, item.href)
                }
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeToggle />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-black dark:text-darkfg"
                )}
                color="foreground"
                href={item.href}
                onClick={(e) =>
                  handleScroll(e as React.MouseEvent<HTMLAnchorElement>, item.href)
                }
                size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
