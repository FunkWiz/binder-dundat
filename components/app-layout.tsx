"use client";
import { PropsWithChildren } from "react";
import { Heading } from "./heading";
import { SocialBar } from "./social-bar";
import { socialItems } from "../consts";
import { NavBar } from "./nav-bar";
import dynamic from "next/dynamic";

export function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <div className="z-10 relative py-2 px-4">
        <Heading />
        <NavBar />
        <SocialBar items={socialItems} />
        <main className="py-6 flex flex-col gap-3 items-center max-w-lg mx-auto">
          {children}
        </main>
      </div>
    </>
  );
}
