import { alpha, styled } from '@mui/material/styles';
import { Collapse, Divider, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Badge } from "@mui/material";
import { NavItemArrow, NavItemBullet } from "./";

export const ListSubheaderStyled = styled(ListSubheader)(({ theme }) => ({
	...theme.typography.overline,
	fontSize: 11,
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(1),
	color: theme.palette.text.secondary,
}));

export const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
	display: "flex",
	aligItems: "center"
}));

export const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
	height: 18,
	width: 18,
	minWidth: 0,
	marginRight: theme.spacing(1),
	color: "gray.500",
	"svg " : {
		height: "100%",
		width: "100%"
	}
}));