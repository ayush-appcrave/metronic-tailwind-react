import { alpha, styled } from '@mui/material/styles';
import { ListSubheader } from "@mui/material";
import { NavItemChildType } from "..";

export const ListSubheaderStyled = styled(ListSubheader, {
	shouldForwardProp: (prop) => ["depth", "styles", "active", "here", "open", "collapse", "disabled"].includes(prop as string) === false
}) <NavItemChildType> (({depth, collapse, active, here, open, disabled, styles, theme}) => {

	return {
		...theme.typography.overline,
		fontSize: 11,
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(1),
		color: theme.palette.text.secondary,
	}	
});