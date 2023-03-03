import styled from "styled-components";
import Slider from "react-slick";
import { StyledText } from "../../../../../../styles/globalStyles";
import { theme } from "../../../../../../styles/theme";
import { ReactComponent as Like } from "../../../../../../assets/whiteLike.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSlider = styled(Slider)`
  position: relative;
  height: 375px;

  & > button {
    display: none !important;
  }
  & > div > div > div {
    width: 250px !important;
    height: 375px;
    overflow: hidden;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 375px;
`;

export const SmallVideoWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ActiveVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 15px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelsBlock = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const Status = styled(StyledText)`
  position: absolute;
  bottom: 65px;
  left: 15px;
  border-radius: 10px;
  background-color: ${() => theme.green};
  padding: 5px 10px;
`;

export const Label = styled(StyledText)<{ backgroundColor: string }>`
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  padding: 5px 10px;
`;

export const StyledLike = styled(Like)`
  margin-right: 10px;
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  left: 15px;
  & > ul {
    display: flex;
  }
`;

export const Dots = styled.ul`
  & > li {
    margin-right: 10px;
    list-style-type: none;
  }
  & > li > button {
    width: 10px;
    height: 10px;
    border: 1px solid;
    border-color: ${() => theme.black};
    border-radius: 100%;
    font-size: 0;
    background: none;
  }
  & > li.slick-active {
    & > button {
      background: ${() => theme.black};
    }
  }
`;
