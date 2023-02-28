import styled from "styled-components";

export const StyledText = styled.span<{
  fontWeight?: string;
  margin?: string;
  fontSize?: string;
  textTransform?: boolean;
  textAlign?: string;
  border?: boolean;
  borderColor?: string;
  cursor?: string;
}>`
  text-transform: ${({ textTransform }) => (textTransform ? "uppercase" : "")};
  color: ${({ color }) => (color ? color : "#282828")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  border-bottom: ${({ border }) => (border ? "1px solid" : "")};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  cursor: ${({ cursor }) => (cursor ? cursor : "")};
  transition: 0.4s;
`;
