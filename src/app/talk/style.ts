import styled from "@emotion/styled";
import Link from "next/link";

export const 회화페이지 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-around;
  gap: 3rem;
  padding: 2rem 0;
  height: 30px;
`;

export const 회화아이템 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 700;
  background: black;
  padding: 12px 12px;
  width: 200px;
  height: 90%;
`;

export const 회화링크 = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
`;
