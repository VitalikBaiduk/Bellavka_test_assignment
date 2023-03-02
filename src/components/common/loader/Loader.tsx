import styled from "styled-components";
import { ReactComponent as LoaderSVG } from "../../../assets/loader.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderSVG />
    </Wrapper>
  );
};
