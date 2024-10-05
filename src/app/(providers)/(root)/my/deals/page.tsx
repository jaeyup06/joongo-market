"use client";

import Page from "@/app/components/Page";
import { useState } from "react";

function MyDealsPage() {

  const [activeTab, setActiveTab] = useState("내 판매글");

  return (
    <Page title={activeTab}>
      {/* 전환하기 버튼 */}
      <div className="space-x-4">
        <button
          onClick={() => setActiveTab("내 판매글")}
          className={`${
            activeTab === "내 판매글" ? "text-sky-500" : "text-black"
          }`}
        >
          내 판매글
        </button>
        <button
          onClick={() => setActiveTab("관심 판매글")}
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
