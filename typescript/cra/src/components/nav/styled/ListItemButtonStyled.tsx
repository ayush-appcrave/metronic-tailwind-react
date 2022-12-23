import { alpha, styled } from '@mui/material/styles';
import { ListItemButton } from "@mui/material";
import { NavItemChildType } from "..";

export const ListItemButtonStyled = styled(ListItemButton, {
	shouldForwardProp: (prop) => ["depth", "styles", "active", "here", "open", "collapse", "disabled"].includes(prop as string) === false
}) <NavItemChildType> (({depth, active, here, open, disabled, styles, theme}) => {

	const activeStyle = {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.primary.main
	};	

	return {
		display: "flex",
		aligItems: "center",
		borderRadius: styles.ITEM_BORDER_RADIUS as number,
		//paddingLeft: theme.spacing(styles.ITEM_ITEM_PX),	
		//paddingRight: theme.spacing(styles.ITEM_ITEM_PX),	
		...(active && {
			...activeStyle
		}),
		":hover " : {
			//backgroundColor: 'transparent'
		}	
	};	
});