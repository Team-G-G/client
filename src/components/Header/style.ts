import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const 링크 = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
`;
