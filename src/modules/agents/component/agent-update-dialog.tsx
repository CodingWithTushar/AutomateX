"use client";

import { CommandResponsiveDialog } from "@/components/ui/command";
import AgentForm from "./agent-form";
import { GetOneAgentType } from "../types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: GetOneAgentType;
}

const UpdateAgentDialog = ({ open, onOpenChange, initialValues }: Props) => {
  return (
    <>
      <CommandResponsiveDialog
        title="Edit Agent"
        description="Edit the agent details"
        open={open}
        onOpenChange={onOpenChange}
      >
        <AgentForm
          onSuccess={() => onOpenChange(false)}
          onCancel={() => onOpenChange(false)}
          initialValues={initialValues}
        />
      </CommandResponsiveDialog>
    </>
  );
};

export default UpdateAgentDialog;
