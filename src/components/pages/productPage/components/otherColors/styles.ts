import styled from "styled-components";
import { ReactComponent as OtherColorImg } from "../../../../../assets/otherColor.svg";

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const ImagesBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0;
`;

// export const StyledImg = styled.img`
//   border-radius: 6px;
//   margin: 10px 0 0;
// `;

export const StyledImg = styled(OtherColorImg)`
  margin-right: 10px;
`;
