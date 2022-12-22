import { alpha, styled } from '@mui/material/styles';
import { ListItemButton } from "@mui/material";
import { NavItemChildType } from "..";

export const ListItemButtonStyled = styled(ListItemButton, {
	shouldForwardProp: (prop) => ["depth", "styles", "active", "open", "collapse", "disabled"].includes(prop as string) === false
}) <NavItemChildType> (({depth, active, open, disabled, styles, theme}) => {

	const activeStyle = {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.primary.main
	};	

	return {
		display: "flex",
		aligItems: "center",
		borderRadius: 6,
		px: 1,
		...(active && {
			...activeStyle,
			'&:hover': {
				...activeStyle,
			},
		}),
		":hover " : {
			
		}	
	};	
});