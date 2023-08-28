import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

function NavItem(props: PropsWithChildren<{ href: string }>) {
  const { href, children } = props;
  const pathname = usePathname();
  const isActive = href === pathname;
  const className = twJoin(
    "font-semibold",
    isActive && "text-theme-ig",
    !isActive && "text-slate-400 underline"
  );

  return (
    <NavigationMenu.Item>
      {isActive ? (
        <span className={className}>{children}</span>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </NavigationMenu.Item>
  );
}

export function NavBar() {
  return (
    <NavigationMenu.Root className="relative flex justify-center">
      <NavigationMenu.List className="flex gap-4">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/releases">Releases</NavItem>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
