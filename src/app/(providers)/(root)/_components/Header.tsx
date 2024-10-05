import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center px-72 mx-auto h-16 border-b">
      <div className="flex gap-14 items-center">
        <Link href="/" className="font-bold text-2xl">중고마켓</Link>
        {/* 로그인 하지 않았을 때 로그인 모달 띄우기 */}
        <ul className="flex gap-4">
          <Link href={"/my/deals?tab=관심%20판매글"}>구입하기</Link>
          <Link href="/deals/create">판매하기</Link>
          <Link href={"/my/deals?tab=내%20판매글"}>내 판매글</Link>
        </ul>
      </div>
      <ul className="flex gap-4">
        {/* 로그인 되었을 때 로그아웃만 표시되도록 */}
        <Link href="/auth/log-in">로그인</Link>
        <Link href="/auth/sign-up">회원가입</Link>
      </ul>
    </header>
  );
}

export default Header;
