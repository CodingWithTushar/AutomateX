"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import { DashboardCommandForSearch } from "./dashboard-command";

export const DashboardNavbar = () => {
  const [commandopen, setCommandopen] = useState(false);
  const { state, toggleSidebar, isMobile } = useSidebar();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandopen((commandopen) => !commandopen);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <DashboardCommandForSearch
        isOpen={commandopen}
        setOpen={setCommandopen}
      />
      <nav className="flex px-4 gap-x-2 py-3 items-center h-10 border-b bg-background">
        <Button className="size-9" variant={"outline"} onClick={toggleSidebar}>
          {state === "collapsed" || isMobile ? (
            <PanelLeftIcon />
          ) : (
            <PanelLeftCloseIcon />
          )}
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className="h-9  w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground"
          onClick={() => {
            setCommandopen((commandopen) => !commandopen);
          }}
        >
          <SearchIcon className="size-4" />
          Search
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">&#8984;</span>K
          </kbd>
        </Button>
      </nav>
    </>
  );
};
