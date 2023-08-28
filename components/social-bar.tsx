import * as Menubar from "@radix-ui/react-menubar";
import { SocialItem } from "../types";
import { twMerge } from "tailwind-merge";

export interface SocialBarProps {
  items: SocialItem[];
}

export function SocialBar(props: SocialBarProps) {
  const { items } = props;
  return (
    <Menubar.Root className="absolute md:fixed top-4 left-2 flex flex-col gap-4 md:gap-6 py-2 bg-slate-200 rounded-md w-8 items-center justify-center">
      {items.map(({ icon: Icon, href, className }, idx) => (
        <Menubar.Menu key={idx}>
          <Menubar.Trigger
            className={twMerge(
              className,
              "outline-none select-none text-slate-700 text-lg md:hover:scale-125 md:transition-color md:transition-transform md:origin-center"
            )}
          >
            <a href={href} target="_blank" className="w-full h-full">
              <Icon />
            </a>
          </Menubar.Trigger>
        </Menubar.Menu>
      ))}
    </Menubar.Root>
  );
}
