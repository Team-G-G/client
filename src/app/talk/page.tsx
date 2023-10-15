"use client";
import React from "react";
import Header from "@/components/Header";
import * as 회화스타일 from "./style";

const 회화 = () => {
  return (
    <div>
      <Header />
      <회화스타일.회화페이지>
        <회화스타일.회화링크 href="/talk/english">
          <회화스타일.회화아이템>영어로 회화하기</회화스타일.회화아이템>
        </회화스타일.회화링크>
        <회화스타일.회화링크 href="/talk/france">
          <회화스타일.회화아이템>프랑스어로 회화하기</회화스타일.회화아이템>
        </회화스타일.회화링크>
        <회화스타일.회화링크 href="/talk/russia">
          <회화스타일.회화아이템>러시아어로 회화하기</회화스타일.회화아이템>
        </회화스타일.회화링크>
      </회화스타일.회화페이지>
    </div>
  );
};

export default 회화;
