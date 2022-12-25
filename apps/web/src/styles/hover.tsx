import tw, { css } from "twin.macro";

export const hoverStyle = css`
  &:hover {
    border: 1px solid black;

    ${tw`text-black`}
  }
`;
