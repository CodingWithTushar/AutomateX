import { createTRPCRouter } from "../init";
import { agentsRouter } from "@/modules/agents/server/procedures";
export const AppRouter = createTRPCRouter({
  agents: agentsRouter,
});
export type AppRouter = typeof AppRouter;
