import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props ={
    title:string;
};

export const Header = ({ title }: Props) => {
  return (
    <div className=" sticky top-0 bg-white pb-3 lg:pt-7 border-b-2 mb-5 text-neutral-400 lg:z-50">
      
      <Link href="/courses" className="absolute left-4 top-1/2 -translate-y-1/2">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-500" />
        </Button>
      </Link>

      <h1 className="text-center font-bold text-lg pt-2">
        {title}
      </h1>

    </div>
  );
};