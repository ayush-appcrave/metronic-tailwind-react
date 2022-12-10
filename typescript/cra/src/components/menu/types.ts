export type MenuItemType = {
	title?: string;
	path?: string;
	bullet?: boolean;
	icon?: string;
	children?: {
	  variant: "accordion" | "dropdown";
	  items: ReadonlyArray<MenuItemType>;
	};
	onClick?: (_?: unknown) => unknown | void;
	divider?: boolean;
  };
  
export type MenuType =
	| {
		[key: string]: ReadonlyArray<MenuItemType>;
	  }
	| ReadonlyArray<MenuItemType>;  