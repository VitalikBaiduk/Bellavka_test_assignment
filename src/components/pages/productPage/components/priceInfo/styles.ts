import styled from "styled-components";
import { StyledText } from "../../../../../styles/globalStyles";

export const PriceBlock = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const PriceBlockHeader = styled.div`
  background: ${({ color }) => color};
  border-radius: 6px 6px 0 6px;
  padding: 5px 15px;
`;

export const PriceBlockItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CurrentPriceBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Prices = styled.div`
  width: 100%;
  max-width: 220px;
  padding: 10px 15px;
`;

export const OldPrice = styled(StyledText)`
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 8px;
    left: 0;
    border-top: 1px solid black;
    border-color: ${({ color }) => color};
  }
`;

export const DiscountsDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PromocodeBlock = styled.div<{ backgroundColor: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 0 0 6px 6px;
`;

export const PromocodeDescr = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px 10px;
`;

export const MainPromocodeDescr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondOptioOfPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const PromocodePercent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const EndPromoBlock = styled.div`
  display: flex;
  align-items: center;
`;
