"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import AgentListDialog from "./agent-list-dialog";
import AgentSearchFilter from "./agent-search-filter";
import { useAgentFilter } from "../hook/use-agent-filter";
import { DEFAULT_PAGE } from "@/constants";

const AgentListHeader = () => {
  const [filter, setFilter] = useAgentFilter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAnyModified = !!filter.search;

  const onClearFilter = () => {
    setFilter({
      search: "",
      page: DEFAULT_PAGE,
    });
  };

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
        <div className="flex items-center gap-x-2 p-1">
          <AgentSearchFilter />
          {isAnyModified && (
            <Button variant={"outline"} size={"sm"} onClick={onClearFilter}>
              <XCircleIcon />
              Clear
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default AgentListHeader;
