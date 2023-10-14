import React from "react";
import * as _ from "./style";
import Image from "next/image";
import 로고 from "@/public/BSM.png";

const 헤더 = () => {
  return (
    <div>
      <_.HeaderWrapper>
        <_.링크 href="/">
          <Image src={로고} alt="logo" height={40} width={80} />
        </_.링크>
        <_.HeaderItems>
          <_.링크 href="/login">
            <_.HeaderItem>로그인</_.HeaderItem>
          </_.링크>
        </_.HeaderItems>
      </_.HeaderWrapper>
    </div>
  );
};

export default 헤더;
