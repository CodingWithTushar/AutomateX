"use client";

import { CommandResponsiveDialog } from "@/components/ui/command";
import AgentForm from "./agent-form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewAgentDialog = ({ open, onOpenChange }: Props) => {
  return (
    <>
      <CommandResponsiveDialog open={open} onOpenChange={onOpenChange}>
        <div className="flex flex-col px-4 pt-4 gap-1">
          <h4>
            {" "}
            <b>New Agents</b>
          </h4>
          <h6>Create new Ai agents</h6>
        </div>
        <AgentForm
          onSuccess={() => onOpenChange(false)}
          onCancel={() => onOpenChange(false)}
        />
      </CommandResponsiveDialog>
    </>
  );
};

export default NewAgentDialog;
