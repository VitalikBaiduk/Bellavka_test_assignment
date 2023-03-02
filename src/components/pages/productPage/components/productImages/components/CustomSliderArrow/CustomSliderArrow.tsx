// import styled from "styled-components";

// export const StyledButton = styled.button<any>`
//   width: 100%;
//   height: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform: ${({ down }) => (down && down ? "" : "rotate(180deg)")};
//   cursor: pointer;
//   &:first-child {
//     height: 30px;
//     position: absolute;
//     top: -1px;
//     display: flex !important;
//     align-items: flex-end;
//     z-index: 1;
//   }
// `;

// export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
//   <button
//     {...props}
//     className={
//       "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
//     }
//     aria-hidden="true"
//     aria-disabled={currentSlide === 0 ? true : false}
//     type="button"
//   >
//     Previous
//   </button>
// );
// export const SlickArrowRight = ({
//   currentSlide,
//   slideCount,
//   ...props
// }: any) => (
//   <button
//     {...props}
//     className={
//       "slick-next slick-arrow" +
//       (currentSlide === slideCount - 1 ? " slick-disabled" : "")
//     }
//     aria-hidden="true"
//     aria-disabled={currentSlide === slideCount - 1 ? true : false}
//     type="button"
//   >
//     Next
//   </button>
// );

export const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <span {...props}>{children}</span>;
