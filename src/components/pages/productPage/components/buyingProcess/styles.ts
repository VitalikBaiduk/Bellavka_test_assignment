import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 20px;
  @media (max-width: 1050px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;
