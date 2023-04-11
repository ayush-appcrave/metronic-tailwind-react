export type IntroType = {
	title?: string,
	subTitle?: string,
	breadcrumbs?: IntroBreadcrumbsType,
};

export type IntroBreadcrumbsType = Array<IntroBreadcrumbType>;

export type IntroBreadcrumbType = {
	title: string,
	href?: string,	
	active?: boolean
};