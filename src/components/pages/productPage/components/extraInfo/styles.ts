import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1050px) {
    margin-top: 20px;
  }
`;

export const WrapperInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const WrapperBuyInfo = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1050px) {
    align-items: flex-start;
    flex-direction: column;
    & > span:nth-child(2) {
      display: none;
    }
  }
`;

export const CartInfoWrapper = styled.div`
  display: flex;
`;

export const WrapperPriceOptions = styled.div`
  width: 100%;
  max-width: 285px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const WrapperReviews = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const Slider = styled.span<{ toggle: boolean; color: string }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle, color }) => (toggle ? color : "white")};
  border-radius: 15px;
  border: 1px solid;
  border-color: ${({ color }) => color};
  transition: 0.4s;
  &:before {
    content: "";
    position: absolute;
    left: 1px;
    bottom: 0.5px;
    width: 11px;
    height: 11px;
    border-radius: 100%;
    background-color: ${({ toggle, color }) => (toggle ? "white" : color)};
    transition: 0.4s;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 13px;
  background-color: white;
  border-radius: 15px;
  & > input {
    display: none;
  }
`;
export const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(7px);
  }
`;
