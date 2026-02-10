"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {

  const {data:session} = authClient.useSession()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      name,
      email,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong!")
      },
      onSuccess: () => {
        window.alert("Success")
      }
    })
  }

  const onLogIn = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong!")
      },
      onSuccess: () => {
        window.alert("Success")
      }
    })
  }

  if(session) {
    return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged In {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>
        Sign Out
      </Button>
    </div>
    )
  }

  return (
    <><div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant={"secondary"} onClick={onSubmit}>
        Create User
      </Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant={"secondary"} onClick={onLogIn}>
        Login
      </Button>
      </div>
    </div>
    </>
  );
}
