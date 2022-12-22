import { number } from "yup";
import { ListItemButtonProps } from "@mui/material";

export type NavType = {
	variant?: "inline" | "popper";
	direction?: "vertical" | "horizontal";
	accordion?: boolean;
	collapse?: boolean;
	height?: number;
	maxHeight?: number;
	items: NavConfigType;
	styles?: any
};

export type NavItemType = {
	options: NavItemOptionsType,	
	collapse?: boolean;
	active?: boolean;
	open?: boolean,
	disabled?: boolean;
	styles?: any;
	depth?: number;
};

export type NavItemOptionsType = {
	key?: string,
	title?: string;
	path?: string;
	externalLink?:boolean;
	newTab?: boolean;
	bullet?: boolean;
	badge?: boolean;
	icon?: string;
	divider?: boolean;
	subheader?: string;
	caption?: string;
	children?: NavType;
	onClick?: (_?: unknown) => unknown | void;	
};

export type NavItemArrowType = {
	variant?: "inline" | "popper";
	direction?: "vertical" | "horizontal";	
	icon?: string;
	depth?: number;
	collapse?: boolean;
	active?: boolean;
	open?: boolean,
	disabled?: boolean;
	styles?: any;
};

export type NavItemBulletType = {
	variant?: "bar" | "dot";
	depth?: number;
	collapse?: boolean;
	active?: boolean;
	open?: boolean,
	disabled?: boolean;
	styles?: any;
};

export type NavItemChildType = {
	depth?: number;
	collapse?: boolean;
	active?: boolean;
	open?: boolean,
	disabled?: boolean;
	styles?: any
};
  
export type NavConfigType = { [key: string]: ReadonlyArray<NavItemOptionsType>; } | ReadonlyArray<NavItemOptionsType>;