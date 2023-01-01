import { alpha, styled } from '@mui/material/styles';
import { ListItemIcon } from "@mui/material";
import { NavItemChildType } from "..";

export const ListItemIconStyled = styled(ListItemIcon, {
	shouldForwardProp: (prop) => ["depth", "styles", "active", "here", "hover", "open", "collapse", "expand", "disabled"].includes(prop as string) === false
}) <NavItemChildType> (({depth, active, here, hover, open, disabled, styles, theme}) => {

	return {
		height: 18,
		width: 18,
		minWidth: 0,
		marginRight: theme.spacing(1),
		color: theme.palette.grey["500"],
		...(active && {
			color: theme.palette.primary.main
		}),
		...(hover && {
			color: theme.palette.grey["700"]
		}),
		...(here && {
			color: theme.palette.grey["700"]
		}),
		"svg " : {
			height: "100%",
			width: "100%"
		}
	}
});