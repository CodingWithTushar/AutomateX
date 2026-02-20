"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import AgentListDialog from "./agent-list-dialog";

const AgentListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <AgentListDialog
        open={isDialogOpen}
        onOpenChange={() => setIsDialogOpen(false)}
      />
      <div className="flex flex-col gap-y-4 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <h5>My Agents</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            Add new agent
          </Button>
        </div>
      </div>
    </>
  );
};

export default AgentListHeader;
