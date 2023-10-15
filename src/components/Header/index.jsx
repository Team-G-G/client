import React from "react";
import * as 스타일 from "./style";
import Image from "next/image";
import 로고 from "@/public/BSM.png";

const 헤더 = () => {
  return (
    <>
      <스타일.헤더부분>
        <스타일.링크 href="/">
          <Image src={로고} alt="로고" height={40} width={80} />
        </스타일.링크>
        <스타일.헤더아이템들>
          <스타일.링크 href="/talk">
            <스타일.헤더아이템>영어회화</스타일.헤더아이템>
          </스타일.링크>
          <스타일.링크 href="/login">
            <스타일.헤더아이템>로그인</스타일.헤더아이템>
          </스타일.링크>
        </스타일.헤더아이템들>
      </스타일.헤더부분>
    </>
  );
};

export default 헤더;
