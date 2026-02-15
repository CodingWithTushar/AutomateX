"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BotIcon, TrendingUpIcon, VideoIcon } from "lucide-react";
import { log } from "console";
import { cn } from "@/lib/utils";
import { SidebarUser } from "./sidebar-user";

const firstSession = [
  {
    icon: VideoIcon,
    label: "Meeting",
    href: "/meeting",
  },
  {
    icon: BotIcon,
    label: "Agents",
    href: "/agents",
  },
];

const secondSession = [
  {
    icon: TrendingUpIcon,
    label: "Upgrade",
    href: "/upgrade",
  },
];

const DashboardSidebar = () => {
  const pathName = usePathname();

  return (
    <>
      <Sidebar>
        <SidebarHeader className="text-sidebar-accent-foreground">
          <Link
            href={"/"}
            className="flex text-center items-center justify-center gap-3 px-2 pt-3"
          >
            <Image
              src={"logo.svg"}
              alt="AutomateX"
              width={"42"}
              height={"42"}
            />
            <p className="text-2xl font-bold">AutomateX</p>
          </Link>
        </SidebarHeader>
        <div className="px-4 py-2">
          <Separator className="opacity-70 text-[#FFF]" />
        </div>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {firstSession.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "h-10 hover:bg-linear-to-r/oklab border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar",
                      )}
                      isActive={pathName === item.href}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span className="text-sm font-medium tracking-tight">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <div className="px-4 pb-2">
            <Separator className="opacity-70 text-[#FFF]" />
          </div>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="gap-2">
                  {secondSession.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "h-10 hover:bg-linear-to-r/oklab border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar",
                          pathName === item.href &&
                            "bg-linear-to-r/oklch border-[#5D6B68]/10",
                        )}
                      >
                        <Link href={item.href}>
                          <item.icon />
                          <span className="text-sm font-medium tracking-tight">
                            {item.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </SidebarContent>

        <SidebarFooter>
          <SidebarUser />
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;
