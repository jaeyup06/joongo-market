"use client";

import Page from "@/app/components/Page";
import { useAuthStore } from "@/zustand/auth.store";
import { useTabStore } from "@/zustand/tab.store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function MyDealsPage() {
  const { isLoggedIn, isAuthInitialized } = useAuthStore();
  const { initialTab } = useTabStore();
  const [activeTab, setActiveTab] = useState(initialTab);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthInitialized) return;
    if (!isLoggedIn) {
      router.push("/auth/log-in");
    }
  }, []);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <Page title={activeTab}>
      <div className="space-x-4">
        <button
          onClick={() => {
            setActiveTab("내 판매글");
            router.push("/my/deals");
          }}
          className={`${
            activeTab === "내 판매글" ? "text-sky-500" : "text-black"
          }`}
        >
          내 판매글
        </button>
        <button
          onClick={() => {
            setActiveTab("관심 판매글");
            router.push("/my/deals");
          }}
          className={`${
            activeTab === "관심 판매글" ? "text-sky-500" : "text-black"
          }`}
        >
          관심 판매글
        </button>
      </div>
      <hr className="my-5" />

      {activeTab === "내 판매글" ? (
        <p>내 판매글 내용 표시</p>
      ) : (
        <p>관심 판매글 내용 표시</p>
      )}
    </Page>
  );
}

export default MyDealsPage;
