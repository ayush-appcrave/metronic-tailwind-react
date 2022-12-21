import { alpha, styled } from '@mui/material/styles';
import { 
	Collapse, 
	Divider, 
	List, 
	ListSubheader, 
	ListItemButton, 
	ListItemIcon, 
	ListItemText, 
	Badge 
} from "@mui/material";
import { NavItemArrow, NavItemBullet } from "./";
import { NavType, NavItemType, NavItemChildType } from "./";

export const ListSubheaderStyled = styled(ListSubheader, {
	shouldForwardProp: (prop) => prop !== 'depth' && prop !== 'styles'
}) <NavItemChildType> (({depth, styles, theme }) => ({
	...theme.typography.overline,
	fontSize: 11,
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(1),
	color: theme.palette.text.secondary,
}));

export const ListItemButtonStyled = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== 'depth' && prop !== 'styles'
}) <NavItemChildType> (({depth, styles, theme }) => ({
	display: "flex",
	aligItems: "center",
	borderRadius: 6,
	px: 1,
	":hover " : {
		//backgroundColor: 'transparent'		
	}
}));

export const ListItemTextStyled = styled(ListItemText, {
	shouldForwardProp: (prop) => prop !== 'depth' && prop !== 'styles'
}) <NavItemChildType> (({depth, styles, theme }) => ({
	"> .MuiListItemText-primary": {
		fontSize: (depth === 1 ? styles.ROOT_ITEM_TITLE_FONT_SIZE : styles.SUB_ITEM_TITLE_FONT_SIZE),
		fontWeight: (depth === 1 ? styles.ROOT_ITEM_TITLE_FONT_WEIGHT : styles.SUB_ITEM_TITLE_FONT_WEIGHT),
		color: (depth === 1 ? styles.ROOT_ITEM_TITLE_COLOR : styles.SUB_ITEM_TITLE_COLOR),		
	},
	".MuiListItemButton-root:hover .MuiListItemText-primary" : {
		
	}	
}));

export const ListItemIconStyled = styled(ListItemIcon, {
	shouldForwardProp: (prop) => prop !== 'depth' && prop !== 'styles'
}) <NavItemChildType> (({depth, styles, theme }) => ({
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