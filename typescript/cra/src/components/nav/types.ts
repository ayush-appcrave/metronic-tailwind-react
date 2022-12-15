export type NavItemType = {
	title?: string;
	path?: string;
	bullet?: boolean;
	badge?: boolean;
	icon?: string;
	divider?: boolean;
	subheader?: string;
	children?: NavType;
	onClick?: (_?: unknown) => unknown | void;	
};

export type NavType = {
	type?: "inline" | "popper";
	direction?: "vertical" | "horizontal";
	collapsible?: boolean;
	height?: number;
	maxHeight?: number;
	items: NavConfigType;
};
  
export type NavConfigType = { [key: string]: ReadonlyArray<NavItemType>; } | ReadonlyArray<NavItemType>;