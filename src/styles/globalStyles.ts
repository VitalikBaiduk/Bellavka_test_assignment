import styled from "styled-components";

export const StyledText = styled.span<{ fontWeight?: string }>`
  color: ${(props) => (props.color ? props.color : "#282828")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
`;
