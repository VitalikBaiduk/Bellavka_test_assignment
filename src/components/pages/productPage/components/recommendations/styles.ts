import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 330px;
  margin-top: 30px;
  @media (max-width: 1050px) {
    max-width: 100%;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSlider = styled(Slider)`
  & > ul {
    display: none !important;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: -21px;
  right: 55px;
  cursor: pointer;
  &:nth-child(3) {
    top: -25px;
    right: -2px;
    position: absolute;
    transform: rotate(180deg);
  }
  @media (max-width: 1050px) {
    display: none !important;
  }
`;
