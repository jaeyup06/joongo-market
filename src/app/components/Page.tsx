import React from "react";

function Page({
  children,
  title,
  size,
}: {
  children: React.ReactNode;
  title?: string;
  size?: string;
}) {
  return (
    <main className={`pt-16 ${size === "sm" ? "px-[480px]" : "px-72"}`}>
      <h1 className="text-3xl font-bold mb-14">{title}</h1>
      {children}
    </main>
  );
}

export default Page;
