import { meetingRouter } from "@/modules/meetings/server/procedures";
import { createTRPCRouter } from "../init";
import { agentsRouter } from "@/modules/agents/server/procedures";
export const AppRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingRouter,
});
export type AppRouter = typeof AppRouter;
