export type NavItemType = {
	title?: string;
	path?: string;
	bullet?: boolean;
	badge?: boolean;
	icon?: string;
	divider?: boolean;
	subheader?: string;
	children?: {
	  direction?: "vertical" | "horizontal";
		collapsible?: boolean
		wrapper?: "inline" | "popper";
		height?: number;
		maxHeight?: number;
	  items: ReadonlyArray<NavItemType>;		
	};
	onClick?: (_?: unknown) => unknown | void;	
};
  
export type NavType =
	| {
		[key: string]: ReadonlyArray<NavItemType>;
	  }
	| ReadonlyArray<NavItemType>;  