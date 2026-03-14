import { z } from "zod";

export const MeetingInsertSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  agentId: z.string().min(1, { error: "Agent Id is required" }),
});

export const MeetingUpdateSchema = MeetingInsertSchema.extend({
  id: z.string().min(1, { error: "Id is required" }),
});
