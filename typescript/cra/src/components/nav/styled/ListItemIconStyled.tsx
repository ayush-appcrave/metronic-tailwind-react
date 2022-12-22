import { alpha, styled } from '@mui/material/styles';
import { ListItemIcon } from "@mui/material";
import { NavItemChildType } from "..";

export const ListItemIconStyled = styled(ListItemIcon, {
	shouldForwardProp: (prop) => ["depth", "styles", "active", "open", "collapse", "disabled"].includes(prop as string) === false
}) <NavItemChildType> (({depth, active, open, disabled, styles, theme}) => {

	return {
		height: 18,
		width: 18,
		minWidth: 0,
		marginRight: theme.spacing(1),
		color: theme.palette.grey["500"],
		...(active && {
			color: theme.palette.primary.main
		}),
		"svg " : {
			height: "100%",
			width: "100%"
		}
	}
});