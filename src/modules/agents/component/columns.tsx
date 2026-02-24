"use client";

import { ColumnDef } from "@tanstack/react-table";
import { GetOneAgentType } from "../types";
import { GenerateAvatar } from "@/components/GenerateAvatar";
import { MoveRightIcon, VideoIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<GetOneAgentType>[] = [
  {
    accessorKey: "name",
    header: "Agents Name",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <GenerateAvatar
            varient="botttsNeutral"
            seed={row.original.name}
            className="size-6"
          />
        </div>
        <span className="font-semibold capitalize">{row.original.name}</span>
        <div className="flex items-center gap-x-2">
          <MoveRightIcon className="size-3" />
          <span className="text-sm text-muted-foreground max-w-50 truncate capitalize">
            {row.original.instructions}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      <Badge variant={"outline"} className="flex items-center gap-x-2 ">
        <VideoIcon className="text-white" />
        {row.original.meetingCount}{" "}
        {row.original.meetingCount === 1 ? "meeting" : "meetings"}
      </Badge>
    ),
  },
];
