import styled from "styled-components";
import { StyledText } from "../../../styles/globalStyles";

export const ExtraWrapper = styled.div`
  width: 100%;
  padding: 40px 30px 70px 30px;
  @media (max-width: 1050px) {
    padding: 0;
  }
`;

export const HeaderBlock = styled.div`
  position: relative;
  display: flex;
`;

export const GlobalWrapper = styled.div`
  display: flex;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const MainInfoWrapper = styled.div`
  width: 100%;
  margin-left: 20px;
`;

export const Title = styled(StyledText)`
  font-size: 35px;
  margin: 10px 0 0 120px;
`;

export const GlobalWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1050px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const RecommendationsWrapper = styled.div`
  width: 100%;
  max-width: 450px;
`;

export const MobileWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;
