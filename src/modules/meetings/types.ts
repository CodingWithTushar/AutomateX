import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export type GetManyMeetingType =
  inferRouterOutputs<AppRouter>["meetings"]["getMany"]["items"];
export type GetOneMeetingType =
  inferRouterOutputs<AppRouter>["meetings"]["getOne"];
