"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ 
  course 
}: { 
  course: { name: string; _id?: string; [key: string]: any } | undefined; 
}) {
  const pathname = usePathname();
  return (
    <span>
    {course?.name} &gt; {pathname.split("/").pop()}
    </span>
  );
}