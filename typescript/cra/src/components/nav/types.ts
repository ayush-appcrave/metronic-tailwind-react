import { number } from "yup";

export type NavType = {
	variant?: "inline" | "popper";
	direction?: "vertical" | "horizontal";
	collapsible?: boolean;
	height?: number;
	maxHeight?: number;
	items: NavConfigType;
	styles?: any
};

export type NavItemType = {
	title?: string;
	path?: string;
	isExternalLink?:boolean;
	bullet?: boolean;
	badge?: boolean;
	icon?: string;
	divider?: boolean;
	subheader?: string;
	caption?: string;
	children?: NavType;
	active?: boolean;
	disabled?: boolean;
	styles?: any;
	depth?: number;
	onClick?: (_?: unknown) => unknown | void;	
};

export type NavItemArrowType = {
	variant?: "inline" | "popper";
	direction?: "vertical" | "horizontal";
	active?: boolean;
	icon?: string;
	depth?: number;
	styles?: any;
};

export type NavItemBulletType = {
	variant?: "bar" | "dot";
	depth?: number;
	styles?: any;
};

export type NavItemChildType = {
	depth?: number,
	styles?: any
};
  
export type NavConfigType = { [key: string]: ReadonlyArray<NavItemType>; } | ReadonlyArray<NavItemType>;