"use client";

import Page from "@/app/components/Page";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function MyDealsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tab: string) => {
    router.push(`/my/deals?tab=${tab}`);
  };

  return (
    <Page title={activeTab}>
      {/* 전환하기 버튼 */}
      <div className="space-x-4">
        <button
          onClick={() => handleTabChange("내 판매글")}
          className={`${
            activeTab === "내 판매글" ? "text-sky-500" : "text-black"
          }`}
        >
          내 판매글
        </button>
        <button
          onClick={() => handleTabChange("관심 판매글")}
          className={`${
            activeTab === "관심 판매글" ? "text-sky-500" : "text-black"
          }`}
        >
          관심 판매글
        </button>
      </div>
      <hr className="my-5" />

      {/* 내용 */}
      {activeTab === "내 판매글" ? (
        <p>내 판매글 내용 표시</p>
      ) : (
        <p>관심 판매글 내용 표시</p>
      )}
    </Page>
  );
}

export default MyDealsPage;
