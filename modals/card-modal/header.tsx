"use client";

import { useState } from "react";
import { Layout } from "lucide-react";

import { FormInput } from "@/components/form/form-input";
import { Skeleton } from "@/components/ui/skeleton";
import type { CardWithList } from "@/types";

interface HeaderProps {
  data: CardWithList;
}

export const Header = ({ data }: HeaderProps) => {
  const [title, setTitle] = useState(data.title);

  return (
    <div className="flex items-start gap-x-3 mb-6 w-full">
      <Layout className="h-5 w-5 mt-1 text-neutral-700" />
      <div className="w-full">
        <form>
          <FormInput
            id="title"
            defaultValue={title}
            className="font-semibold text-xl px-1 text-neutral-700 bg-transparent border-transparent relative -left-1.5 w-[95%] focus-visible:bg-white focus-visible:border-input mb-0.5 truncate"
          />
        </form>
      </div>
    </div>
  );
};

Header.Skeleton = function HeaderSkeleton() {
  return (
    <div className="flex items-start gap-x-3 mb-6">
      <Skeleton className="h-6 w-6 mt-1 bg-neutral-200" />
      <div>
        <Skeleton className="w-24 h-6 mb-1 bg-neutral-200" />
        <Skeleton className="w-24 h-4 bg-neutral-200" />
      </div>
    </div>
  );
};
