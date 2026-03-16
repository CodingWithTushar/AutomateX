"use client";

import { CommandResponsiveDialog } from "@/components/ui/command";
import MeetingForm from "./meeting-form";
import { GetOneMeetingType } from "../../types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: GetOneMeetingType;
}

const UpdateMeetingDialog = ({ open, onOpenChange, initialValues }: Props) => {
  return (
    <>
      <CommandResponsiveDialog open={open} onOpenChange={onOpenChange}>
        <div className="flex flex-col px-4 pt-4 gap-1">
          <h4>
            {" "}
            <b>Edit Meeting</b>
          </h4>
          <h6>Edit the meeting details</h6>
        </div>
        <MeetingForm
          onSuccess={() => onOpenChange(false)}
          onCancel={() => onOpenChange(false)}
          initialValues={initialValues}
        />
      </CommandResponsiveDialog>
    </>
  );
};

export default UpdateMeetingDialog;
