"use client";

import { CommandResponsiveDialog } from "@/components/ui/command";
import AgentForm from "./agent-form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AgentListDialog = ({ open, onOpenChange }: Props) => {
  return (
    <>
      <CommandResponsiveDialog
        title="New Agents"
        description="Create new Ai agents"
        open={open}
        onOpenChange={onOpenChange}
      >
        <AgentForm
          onSuccess={() => onOpenChange(false)}
          onCancel={() => onOpenChange(false)}
        />
      </CommandResponsiveDialog>
    </>
  );
};

export default AgentListDialog;
