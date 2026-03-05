import { z } from "zod";

export const agentsInsertSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  instructions: z.string().min(1, { error: "Instructions is required" }),
});

export const agentUpdateSchema = agentsInsertSchema.extend({
  id: z.string().min(1, { error: "Id is required" }),
});
