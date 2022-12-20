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

export const ListItemButtonStyled = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== 'isChild'
}) <{isChild: boolean}> (({ theme, isChild }) => ({
	display: "flex",
	aligItems: "center",
	borderRadius: 6,
	px: 1,
	":hover " : {
		//backgroundColor: 'transparent'		
	}
}));

export const ListItemTextStyled = styled(ListItemText, {
	shouldForwardProp: (prop) => prop !== 'isChild'
}) <{isChild: boolean}> (({ theme, isChild }) => ({	
	"> .MuiListItemText-primary": {
		fontWeight: (isChild ? theme.typography.fontWeightMedium : theme.typography.fontWeightBold),
		color: (isChild ? theme.palette.grey[500] : theme.palette.grey[700]),
		fontSize: (isChild ? 13 : 13)
	},
	".MuiListItemButton-root:hover .MuiListItemText-primary" : {
		color: theme.palette.primary.light
	}	
}));

export const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
	height: 18,
	width: 18,
	minWidth: 0,
	marginRight: theme.spacing(1),
	color: theme.palette.grey["500"],
	"svg " : {
		height: "100%",
		width: "100%"
	}
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(2),
}));