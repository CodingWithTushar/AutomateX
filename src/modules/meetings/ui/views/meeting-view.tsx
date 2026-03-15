"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/empty-state";
import { useMeetingFilter } from "../../hook/use-meeting-filter";
import DataPagination from "@/components/data-pagination";

const MeetingView = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [filters, setFilters] = useMeetingFilter();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    }),
  );

  return (
    <>
      <div className="flex flex-1 flex-col pb-4 px-4 md:px-8 gap-y-4">
        <DataTable
          data={data.items}
          columns={columns}
          onRowClick={(row) => router.push(`/meetings/${row.id}`)}
        />
        <DataPagination
          page={filters.page}
          totalPages={data.totalPages}
          onPageChange={(page) => setFilters({ page })}
        />
        {data.items.length === 0 && (
          <EmptyState
            title="Create your first meeting"
            description="Schedule a meeting to connect with others, Each meeting lets you collaborate, share ideas, and interact with participants in real time. "
          />
        )}
      </div>
    </>
  );
};

export default MeetingView;

export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Meetings"
      description="This may take a few seconds"
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error Loading Meetings"
      description="Something went wrong"
    />
  );
};
