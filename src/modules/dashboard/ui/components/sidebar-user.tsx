"use client";

import { GenerateAvatar } from "@/components/GenerateAvatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { authClient } from "@/lib/auth-client";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const SidebarUser = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { data, isPending } = authClient.useSession();

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  if (isPending || !data?.user) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (isMobile) {
    return (
      <>
        <Drawer>
          <DrawerTrigger className="rounded-lg border border-border/10 p-3 w-full flex gap-3 items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden ">
            {data.user?.image ? (
              <>
                <Avatar>
                  <AvatarImage src={data.user?.image} />
                </Avatar>
              </>
            ) : (
              <GenerateAvatar seed={data.user?.name} varient="initials" />
            )}

            <div className="flex flex-1 flex-col text-left gap-0.5 overflow-hidden min-w-0 ">
              <p className="text-sm">{data.user.name}</p>
              <p className="text-sm">{data.user.email}</p>
            </div>
            <ChevronDownIcon className="size-4 shrink-0" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{data.user.name}</DrawerTitle>
              <DrawerDescription>{data.user.email}</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button
                variant={"outline"}
                onClick={() => {}}
                className="cursor-pointer flex items-center justify-between "
              >
                Billing
                <CreditCardIcon className="size-4 text-#fff" />
              </Button>
              <Button
                variant={"outline"}
                onClick={() => {
                  onLogout();
                }}
                className="cursor-pointer flex items-center justify-between "
              >
                Logout
                <LogOutIcon className="size-4 text-#fff" />
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex gap-3 items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden ">
          {data.user?.image ? (
            <>
              <Avatar>
                <AvatarImage src={data.user?.image} />
              </Avatar>
            </>
          ) : (
            <GenerateAvatar seed={data.user?.name} varient="initials" />
          )}

          <div className="flex flex-1 flex-col text-left gap-0.5 overflow-hidden min-w-0 ">
            <p className="text-sm">{data.user.name}</p>
            <p className="text-sm">{data.user.email}</p>
          </div>
          <ChevronDownIcon className="size-4 shrink-0" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="right" className="w-72">
          <DropdownMenuLabel>
            <div className="flex flex-col gap-1">
              <span className="font-medium">{data.user.name}</span>
              <span className="font-medium">{data.user.email}</span>
            </div>
          </DropdownMenuLabel>
          <Separator className="opacity-70 text-[#FFF] my-2 " />
          <DropdownMenuItem className="cursor-pointer flex items-center justify-between ">
            Billing
            <CreditCardIcon className="size-5" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onLogout()}
            className="cursor-pointer flex items-center justify-between "
          >
            Logout
            <LogOutIcon className="size-5" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
