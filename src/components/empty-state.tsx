import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const EmptyState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center justify-center ">
        <Image src={"./empty.svg"} alt="Empty" width={240} height={240} />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
