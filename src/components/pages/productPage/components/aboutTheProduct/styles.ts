import styled from "styled-components";

export const Wrapper = styled.div<{ isShowInfo: boolean }>`
  width: 100%;
  max-width: 585px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  & > div > svg {
    transform: ${({ isShowInfo }) => (isShowInfo ? "" : "rotate(180deg)")};
  }
  & > span {
    display: ${({ isShowInfo }) => (isShowInfo ? "" : "none")};
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1050px) {
    justify-content: space-between;
  }
`;
