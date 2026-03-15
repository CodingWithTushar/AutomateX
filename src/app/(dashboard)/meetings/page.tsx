import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SearchParams } from "nuqs";

import MeetingView, {
  MeetingsViewError,
  MeetingsViewLoading,
} from "@/modules/meetings/ui/views/meeting-view";
import MeetingListHeader from "@/modules/meetings/ui/components/meeting-list-header";
import { loadSearchParams } from "@/modules/meetings/params";

interface Props {
  searchParams: Promise<SearchParams>;
}

const MeetingPage = async ({ searchParams }: Props) => {
  const filters = await loadSearchParams(searchParams);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    }),
  );

  return (
    <>
      <MeetingListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsViewLoading />}>
          <ErrorBoundary fallback={<MeetingsViewError />}>
            <MeetingView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default MeetingPage;
