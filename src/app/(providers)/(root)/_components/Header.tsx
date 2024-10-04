import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center px-72 mx-auto h-16 border-b">
      <div className="flex gap-14 items-center">
        <Link href="/" className="font-bold text-2xl">중고마켓</Link>
        {/* 로그인 하지 않았을 때 이 안의 요소들을 클릭하면 로그인 모달 띄우기 */}
        <ul className="flex gap-4">
          <li>구입하기</li>
          <Link href={"/deals/create"}>판매하기</Link>
          <Link href={"/my/deals"}>내 판매글</Link>
        </ul>
      </div>
      <ul className="flex gap-4">
        <li>로그인</li>
        <Link href={"/auth/sign-up"}>회원가입</Link>
      </ul>
    </header>
  );
}

export default Header;
