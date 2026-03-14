"use client";
import { useRouter } from "next/navigation";

import { CommandResponsiveDialog } from "@/components/ui/command";
import MeetingForm from "./meeting-form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewMeetingDialog = ({ open, onOpenChange }: Props) => {
  const router = useRouter();

  return (
    <>
      <CommandResponsiveDialog open={open} onOpenChange={onOpenChange}>
        <div className="flex flex-col px-4 pt-4 gap-1">
          <h4>
            {" "}
            <b>New Meeting</b>
          </h4>
          <h6>Create new Ai meeting</h6>
        </div>
        <MeetingForm
          onSuccess={(id) => {
            onOpenChange(false);
            router.push(`/meetings/${id}`);
          }}
          onCancel={() => onOpenChange}
        />
      </CommandResponsiveDialog>
    </>
  );
};

export default NewMeetingDialog;
