"use client";
import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { searchAction } from "@/actions/search";
import { useSearchParams } from "next/navigation";

const ArticleSearchInput = () => {
  const searchParams = useSearchParams();

  return (
    <form action={searchAction} className="mx-auto max-w-2xl">
      <div className="relative">
        {/* Icon Wrapper */}
        <Search className="w-4 h-4 absolute left-3 items-center top-1/2 -translate-y-1/2" />

        {/* Input */}
        <Input
          type="text"
          name="search"
          placeholder="Search articles..."
          className="w-full pl-9 pr-4 py-6 text-lg"
        />
      </div>
    </form>
  );
};

export default ArticleSearchInput;
