import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommandForSearch = ({ isOpen, setOpen }: Props) => {
  return (
    <>
      <CommandResponsiveDialog open={isOpen} onOpenChange={setOpen}>
        <CommandInput placeholder="Find a meeting or agent" />
        <CommandList>
          <CommandItem>Test</CommandItem>
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
};
