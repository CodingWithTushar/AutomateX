import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export type GetOneAgentType = inferRouterOutputs<AppRouter>["agents"]["getOne"];
