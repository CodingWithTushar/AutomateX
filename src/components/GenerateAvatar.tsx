import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { createAvatar } from "@dicebear/core";
import { initials,botttsNeutral } from "@dicebear/collection";
import { cn } from "@/lib/utils";

interface Props {
    seed: string,
    className?: string,
    varient: "initials" | "botttsNeutral",
}


export const GenerateAvatar = ({seed,className,varient}:Props) => {
  let avatar;

  if(varient === "initials") {
    avatar = createAvatar(initials,{
      seed: seed,
      fontWeight: 500,
      fontSize: 42,
    })
  } else {
    avatar = createAvatar(botttsNeutral,{
      seed:seed
    })
  }
  return (
    <>
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar.toDataUri()}/>
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    </>
  )
}
