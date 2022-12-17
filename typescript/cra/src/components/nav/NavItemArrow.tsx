import { useState, memo, useMemo } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { SVGIcon } from "..";
import { NavItemArrowType } from "./types";

const NavItemArrowComponent = ({
  variant = "inline",
	direction = "vertical",
	active = false,
	icon = "arrows/arr072.svg"
}: NavItemArrowType ) => {

  const [toggle, setToggle] = useState(active);

  let rotateInitial: string =  "";
  let rotateToggle: string =  "";

  if (variant === "inline" && direction === "vertical") {
    rotateInitial = "rotate(0)";
    rotateToggle = "rotate(-180deg)";
  } else if (variant === "inline" && direction === "horizontal") {
    rotateInitial = "rotate(0)";
    rotateToggle = "rotate(180deg)";
  } else if (variant === "inline" && direction === "vertical") {
    rotateInitial = "rotate(0)";
    rotateToggle = "rotate(180deg)";
  } else if (variant === "inline" && direction === "horizontal") {
    rotateInitial = "rotate(0)";
    rotateToggle = "rotate(180deg)";
  } else if (variant === "inline" && direction === "horizontal") {
    rotateInitial = "rotate(0)";
    rotateToggle = "rotate(180deg)";
  }  

  const transform: string = active === true ? rotateToggle : rotateInitial;

  console.log("state:" + active);
 
  return (
    <Box
      sx={{
        transform: transform,
        transition: "transform 0.3s ease",
        height: 16,
        width: 16,
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        color: (theme) => theme.palette.grey["500"],
        "svg " : {
          height: "100%",
          width: "100%"
        }
      }}
    >
      <SVGIcon icon={icon}/>
    </Box>
  );
};

const NavItemArrow = memo(NavItemArrowComponent);
export { NavItemArrow };
