import Slider from "react-slick";
import styled from "styled-components";
import { ReactComponent as Player } from "../../../../../assets/videoPlayer.svg";

export const Wrapper = styled.div`
  width: 570px;
  max-height: 675px;
  display: flex;
  & > div:first-child {
    width: 100px;
    position: relative;
    top: -21px;
  }
  & > div > div:nth-child(2).slick-list {
    height: 675px !important;
  }
`;

export const StyledSlider = styled(Slider)`
  & > ul {
    display: none !important;
  }
`;

export const StyledButton = styled.button<{ down?: boolean }>`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ down }) => (down && down ? "" : "rotate(180deg)")};
  cursor: pointer;
  &:first-child {
    height: 30px;
    position: absolute;
    top: -1px;
    display: flex !important;
    align-items: flex-end;
    z-index: 1;
  }
`;

export const SmallItem = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    opacity: 0.8;
  }
`;
export const SmallVideoWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

export const StyledPlayeIcon = styled(Player)`
  position: absolute;
  top: 45%;
  left: 30%;
  z-index: 1;
`;

export const ActiveVideo = styled.video`
  border-radius: 6px;
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`;

export const WrapperActiveItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 445px;
  display: flex;
  margin-left: 20px;
`;

export const ActiveItem = styled.img`
  object-fit: cover;
  border-radius: 6px;
`;

export const ActiveItemTopLabel = styled.div`
  max-width: 80px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${({ color }) => (color ? color : "#ffffff")};
  border-radius: 16px;

  padding: 10px 15px;
`;

export const ActiveItemBottomLabel = styled.div`
  position: absolute;
  bottom: 15px;
  right: 0px;
  background: ${({ color }) => (color ? color : "#ffffff")};
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

export const InteractiveBlock = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
