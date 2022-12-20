export type NavItemType = {
	title?: string;
	path?: string;
	bullet?: boolean;
	badge?: boolean;
	icon?: string;
	divider?: boolean;
	subheader?: string;
	children?: NavType;
	isChild?: boolean;
	onClick?: (_?: unknown) => unknown | void;	
};

export type NavType = {
	variant?: "inline" | "popper";
	direction?: "vertical" | "horizontal";
	collapsible?: boolean;
	height?: number;
	maxHeight?: number;
	items: NavConfigType;
};

export type NavItemArrowType = {
	variant?: "inline" | "popper";
	direction?: "vertical" | "horizontal";
	active?: boolean;
	icon?: string;
};

export type NavItemBulletType = {
	variant?: "bar" | "dot";
};
  
export type NavConfigType = { [key: string]: ReadonlyArray<NavItemType>; } | ReadonlyArray<NavItemType>;