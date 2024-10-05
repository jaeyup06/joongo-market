"use client";

import Page from "@/app/components/Page";

function LogInPage() {
  const handleSubmitLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Page title="로그인하기" size="sm">
      <form onSubmit={handleSubmitLogIn} className="grid gap-5">
        {/* 이메일 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">이메일</h1>
          <input
            name="email"
            type="text"
            className="border p-2 w-full rounded-md"
            autoFocus
          />
        </div>

        {/* 비밀번호 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">비밀번호</h1>
          <input
            name="password"
            type="password"
            className="border p-2 w-full rounded-md"
          />
        </div>

        {/* 로그인하기 */}
        <button className="bg-blue-500 text-white p-2 rounded-md">
          로그인하기
        </button>
      </form>
    </Page>
  );
}

export default LogInPage;
