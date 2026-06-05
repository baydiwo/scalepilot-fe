import React from 'react';
import TheNav from "@/components/TheNav";
import TheFooter from "@/components/TheFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TheNav />
      <div className="w-full h-screen gradient-top absolute top-0 left-0 z-0 pointer-events-none"></div>
      <main className="relative z-10">
        {children}
      </main>
      <TheFooter />
    </>
  );
}
