import { alpha, styled } from '@mui/material/styles';
import { ListItemButton } from "@mui/material";
import { NavItemChildType } from "..";

export const ListItemButtonStyled = styled(ListItemButton, {
	shouldForwardProp: (prop) => ["depth", "styles", "active", "here", "hover", "open", "collapse", "expand", "disabled"].includes(prop as string) === false
}) <NavItemChildType> (({depth, active, here, hover, open, disabled, styles, theme}) => {

	const activeStyle = {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.primary.main
	};	

	return {
		display: "flex",
		aligItems: "center",
		borderRadius: styles.ITEM_BORDER_RADIUS as number,
		height: depth === 1 ? styles.ROOT_ITEM_HEIGHT as number : styles.SUB_ITEM_HEIGHT as number,
		...(active && {
			...activeStyle
		}),
		...(hover && {
			//x...activeStyle
		})
	};	
});