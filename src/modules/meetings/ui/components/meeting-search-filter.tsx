import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useMeetingFilter } from "../../hook/use-meeting-filter";

const MeetingSearchFilter = () => {
  const [filter, setFilter] = useMeetingFilter();
  return (
    <div className="relative">
      <Input
        className="h-9 bg-white w-50 pl-7 text-black"
        placeholder="Filter by name"
        value={filter.search}
        onChange={(e) => setFilter({ search: e.target.value })}
      />
      <SearchIcon className="absolute size-4 left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};

export default MeetingSearchFilter;
