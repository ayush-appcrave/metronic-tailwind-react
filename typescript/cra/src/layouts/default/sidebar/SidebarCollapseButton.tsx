import { SVGIcon } from "../../../components";
import { useDefaultLayout } from "../DefaultLayoutProvider";
import { Box, ToggleButton } from "@mui/material";

type Props = {
  onToggle: () => void;
};

const SidebarCollapseButton = ({ onToggle }: Props) => {
  const { isSidebarExpand, isSidebarCollapse } = useDefaultLayout();
  const buttonSize = "32px";

  const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => { 
    if (!isSidebarExpand) {
      event.stopPropagation();
    }    
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLElement>) => {
    if (!isSidebarExpand) {
      event.stopPropagation();
    }
  };

  return (
    <ToggleButton
      sx={{
        height: buttonSize,
        width: buttonSize,
        minWidth: buttonSize,
        color: "grey.600",
        backgroundColor: "background.paper",
        boxShadow: "0px 4px 6px rgba(130, 132, 140, 0.1)",
        borderRadius: "6px",
        border: "0px",
        padding: "0px",
        position: "absolute",
        left: "100%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        "&:hover, &.Mui-selected, &.Mui-selected:hover": {
          backgroundColor: "background.paper",
          color: "primary.main",
          opacity: 1,
        },
      }}
      onClick={onToggle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      selected={isSidebarCollapse}
      aria-label="Toggle sidebar"
      component="button"
      value="1"
    >
      <Box
        component="span"
        sx={{
          lineHeight: 0,
          ...(isSidebarCollapse && { transform: "rotate(180deg)" }),
        }}
      >
        <SVGIcon size="18" icon={"/arrows/arr079.svg"} />
      </Box>
    </ToggleButton>
  );
};

export { SidebarCollapseButton };
