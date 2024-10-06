"use client";

import { useAuthStore } from "@/zustand/auth.store";
import { useTabStore } from "@/zustand/tab.store";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const { isLoggedIn, isAuthInitialized, logOut } = useAuthStore();
  const { setActiveTab } = useTabStore();
  const router = useRouter();

  const handleClickLogout = async () => {
    await logOut();
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push("/my/deals");
  };

  return (
    <header className="flex justify-between items-center px-72 mx-auto h-16 border-b">
      <div className="flex gap-14 items-center">
        <Link href="/" className="font-bold text-2xl">
          중고마켓
        </Link>
        <ul className="flex gap-4">
          <button onClick={() => handleTabClick("관심 판매글")}>구입하기</button>
          <Link href="/deals/create">판매하기</Link>
          <button onClick={() => handleTabClick("내 판매글")}>내 판매글</button>
        </ul>
      </div>
      {isAuthInitialized ? (
        <ul className="flex gap-4">
          {isLoggedIn ? (
            <li>
              <button onClick={handleClickLogout}>로그아웃</button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/auth/log-in">로그인</Link>
              </li>
              <li>
                <Link href="/auth/sign-up">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      ) : null}
    </header>
  );
}

export default Header;
