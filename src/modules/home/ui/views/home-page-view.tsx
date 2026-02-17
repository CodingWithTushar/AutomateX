"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const HomePageView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(
    trpc.hello.queryOptions({ text: "Tushar Singh Boss Don Dc" }),
  );
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <div>hello</div>;
  }
  return (
    <>
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged In as {session?.user.name}</p>
        <p>Logged In as {data?.greeting}</p>
        <Button
          onClick={() => {
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => router.push("/sign-in"),
              },
            });
          }}
          className="w-full"
        >
          Sign Out
        </Button>
      </div>
    </>
  );
};
