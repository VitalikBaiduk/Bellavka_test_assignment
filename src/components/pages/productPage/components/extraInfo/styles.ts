import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const WrapperBuyInfo = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const CartInfoWrapper = styled.div`
  display: flex;
`;

export const WrapperReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const ReviewsButton = styled.a<{ borderColor: string }>`
  display: flex;
  flex: 20px;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${({ borderColor }) => borderColor};
  padding: 15px 5px;
  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
`;

export const WrapperPriceOptions = styled.div`
  width: 100%;
  max-width: 285px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
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
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${({ toggle, color }) => (toggle ? "white" : color)};
    transition: 0.4s;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 15px;
  background-color: white;
  border-radius: 15px;
  & > input {
    display: none;
  }
`;
export const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(10px);
  }
`;
export const ProdReview = styled.div``;
