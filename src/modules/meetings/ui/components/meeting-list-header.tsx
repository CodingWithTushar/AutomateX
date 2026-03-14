"use client";
import { useState } from "react";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import NewMeetingDialog from "./new-meeting-dialog";

const MeetingListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="flex flex-col gap-y-4 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <h5>My Meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            Add new Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">TODO: filter</div>
      </div>
    </>
  );
};

export default MeetingListHeader;
