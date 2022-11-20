import { isMobileDevice } from "@base/helpers";
import { MobileBoxStyled, DesktopBoxStyled } from "./Scrollbar.style";
import { ScrollbarProps } from "./types";

const Scrollbar = (props: ScrollbarProps) => {
  return isMobileDevice() ? (
    <MobileBoxStyled {...props}>{props.children}</MobileBoxStyled>
  ) : (
    <DesktopBoxStyled {...props}>{props.children}</DesktopBoxStyled>
  );
};

export { Scrollbar };
