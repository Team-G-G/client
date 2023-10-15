import styled from "@emotion/styled";
import Link from "next/link";

export const 헤더부분 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

export const 헤더아이템들 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

export const 헤더아이템 = styled.span``;

export const 링크 = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
`;
