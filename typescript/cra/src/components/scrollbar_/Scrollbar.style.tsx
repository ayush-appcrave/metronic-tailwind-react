
import { Box, BoxProps } from "@mui/system";
import { styled } from "@mui/system";
import { ScrollbarProps } from "./types";

const getScrollDefault = (size: string) => `
{
  overflow-y: "hidden";
  border-right: ${size};
  border-bottom: ${size};
  margin-right: ${size};
  "&:hover": {
    overflow-y: "scroll";
    border-right: "0";
    border-bottom: "0";
  };
  "@-moz-document url-prefix()": {
    overflow-y: "scroll";
    position: "relative";
    border-right: "0";
    border-bottom: "0";
  };
};
`;

const getScrollY = (size: string) => `
{
  overflow-y: "hidden";
  border-right: ${size} + " solid transparent";
  margin-right: "-" + ${size};
  "&:hover": {
    overflow-y: "scroll";
    border-right: "0";
  };
  "@-moz-document url-prefix()": {
    overflow-y: "scroll";
    position: "relative";
    border-right: "0";
  };
};
`;

const getScrollX = (size: string) => `
{
  overflow-x: "hidden";
  border-bottom: ${size};
  margin-right: ${size};
  "&:hover": {
    overflow-x: "scroll";
    border-bottom: "0";
  };
  "@-moz-document url-prefix()": {
    overflow-y: "scroll";
    position: "relative";
    border-bottom: "0";
};
`;

const getScroll = (variant: string, size: string) => {
  switch (variant) {
    case "default":
      return getScrollDefault(size);
    case "scroll-x":
      return getScrollX(size);
    case "scroll-y":
      return getScrollY(size);
  }
  return "";
};

const MobileBoxStyled = styled(
  ({
    height,
    minHeight,
    children,
    ...otherProps
  }: BoxProps & ScrollbarProps) => <Box {...otherProps}>{children}</Box>
)`
  overflow: "auto";
  ${({ height }) => (height ? "height: " + height : "")}
  ${({ minHeight }) => (minHeight ? "minHeight: " + minHeight : "")}
`;

const DesktopBoxStyled = styled(
  ({
    height,
    minHeight,
    size,
    color,
    children,
    ...otherProps
  }: BoxProps & ScrollbarProps) => <Box {...otherProps}>{children}</Box>
)`
  position: "relative",
  scrollbar-width: "thin",
  scrollbar-color: ${({ color }) => color},
  ${({ height }) => (height ? "height: " + height : "")}
  ${({ minHeight }) => (minHeight ? "min-height: " + minHeight : "")}
  "&::-webkit-scrollbar": {
    width: ${({ size }) => size},
    height: ${({ size }) => size},
  };
  "&::-webkit-scrollbar-thumb": {
    background-color: ${({ color }) => color},
    border-radius: "6px",
  };
  "&::-webkit-scrollbar-corner": {
    background-color: "transparent",
  };
  ${({ variant = "", size = "" }) => getScroll(variant, size)}
`;

// const TestingProps = styled(Box, {
//   // Configure which props should be forwarded on DOM
//   shouldForwardProp: (prop: ScrollbarProps & Theme) =>
//     prop !== "minHeight" && prop !== "height" && prop !== "maxHeight",
// })(({ height: heightProp, minHeight = "", maxHeight = "" }) => ({
//   overflow: "auto",
//   // ...(minHeight && { minHeight: minHeight }),
//   // ...(maxHeight && { maxHeight: maxHeight }),
// }));

export { MobileBoxStyled, DesktopBoxStyled };
