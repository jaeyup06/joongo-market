"use client";

import Page from "@/app/components/Page";
import { supabase } from "@/supabase/supabase.client";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function SignUpPage() {
  const logIn = useAuthStore((state) => state.logIn);
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!email) return alert("이메일을 입력해 주세요");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return alert("유효한 형식의 이메일을 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (password.length < 8) return alert("비밀번호는 8자 이상이어야 합니다");
    if (!confirmPassword) return alert("비밀번호 확인을 입력해 주세요");
    if (password !== confirmPassword)
      return alert("비밀번호가 일치하지 않습니다.");

    const response = await supabase.auth.signUp({
      email,
      password,
    });

    if (response.data.user) {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
      logIn();
      router.push("/");
    } else {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <Page title="회원으로 가입하기" size="sm">
      <form onSubmit={handleSubmitSignUp} className="grid gap-5">
        {/* 이메일 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">이메일</h1>
          <input
            name="email"
            type="text"
            className="border p-2 w-full rounded-md"
            autoFocus
            ref={emailRef}
          />
        </div>

        {/* 비밀번호 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">비밀번호</h1>
          <input
            name="password"
            type="password"
            className="border p-2 w-full rounded-md"
            ref={passwordRef}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <h1 className="text-left font-bold">비밀번호 확인</h1>
          <input
            name="confirmPassword"
            type="password"
            className="border p-2 w-full rounded-md"
            ref={confirmPasswordRef}
          />
        </div>

        {/* 가입하기 */}
        <button className="bg-blue-500 text-white p-2 rounded-md">
          가입하기
        </button>
      </form>
    </Page>
  );
}

export default SignUpPage;
