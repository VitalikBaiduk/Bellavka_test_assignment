import Slider from "react-slick";
import styled from "styled-components";
import { ReactComponent as Player } from "../../../../../assets/VideoPlayer.svg";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 570px;
  height: 670px;
  display: flex;
`;

export const SmallItem = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 13px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledButton = styled.button<{ down?: boolean }>`
  width: 100%;
  height: 35px;
  position: absolute;
  display: flex !important;
  align-items: flex-end;
  justify-content: center;
  top: ${(props) => (props.down && props.down ? "-13px" : "679px")};
  transform: ${(props) => (props.down && props.down ? "" : "rotate(180deg)")};
  cursor: pointer;
  background-color: #ffffff;
  z-index: 1;
`;

export const StyledSlider = styled(Slider)`
  & > ul {
    display: none !important;
  }
  &.slick-slider {
    position: relative;
    max-width: 100px;
    box-sizing: border-box;
    top: -15px;
    & > div {
      height: 710px !important;
    }
  }
`;

export const WrapperActiveItem = styled.div`
  position: relative;
  max-width: 445px;
  height: 100%;
  margin-left: 20px;
`;

export const ActiveItem = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const ActiveVideo = styled.video`
  height: 100%;
  border-radius: 6px;
`;

export const StyledPlayeIcon = styled(Player)`
  position: absolute;
  top: 35%;
  left: 30%;
  z-index: 1;
`;

export const SmallVideoWrapper = styled.div`
  position: relative;
`;

export const ActiveItemTopLabel = styled.div`
  max-width: 80px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${(props) => (props.color ? props.color : "#ffffff")};
  border-radius: 16px;
  box-sizing: border-box;
  padding: 10px 15px;
`;

export const ActiveItemBottomLabel = styled.div`
  position: absolute;
  bottom: 15px;
  right: 0px;
  background: ${(props) => (props.color ? props.color : "#ffffff")};
  box-sizing: border-box;
  padding: 10px 7px;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    float: left;
    transform: skew(45deg);
    background: inherit;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    float: left;
    transform: skew(-45deg);
    background: inherit;
  }
  & > span {
    position: relative;
    z-index: 1;
  }
`;
