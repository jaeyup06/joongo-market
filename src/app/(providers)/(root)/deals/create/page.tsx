"use client";

import Page from "@/app/components/Page";

function DealCreatePage() {
  const handleSubmitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Page title="판매글 작성하기" size="sm">
      <form onSubmit={handleSubmitCreate} className="grid gap-5">
        {/* 글 제목 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">글 제목</h1>
          <input
            name="title"
            type="text"
            className="border p-2 w-full rounded-md"
            autoFocus
          />
        </div>

        {/* 글 내용 */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-4">
          <h1 className="text-left font-bold mt-3">글 내용</h1>
          <textarea
            name="content"
            className="border p-2 h-72 w-full rounded-md resize-none"
          />
        </div>

        {/* 직거래 위치 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">직거래 위치</h1>
          <input type="text" className="border p-2 w-full rounded-md" />
        </div>

        {/* 판매가격 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">판매가격</h1>
          <input
            name="price"
            type="text"
            className="border p-2 w-full rounded-md"
          />
        </div>

        {/* 작성하기 버튼 */}
        <button className="bg-blue-500 text-white p-2 rounded-md">
          판매글 작성하기
        </button>
      </form>
    </Page>
  );
}

export default DealCreatePage;
