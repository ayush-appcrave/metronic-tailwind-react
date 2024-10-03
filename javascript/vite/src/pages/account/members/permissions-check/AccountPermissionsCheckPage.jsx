import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
	Toolbar,
	ToolbarActions,
	ToolbarDescription,
	ToolbarHeading,
	ToolbarPageTitle,
} from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';
import { AccountPermissionsCheckContent } from '.';
const AccountPermissionsCheckPage = () => {
	return (
		<Fragment>
			<PageNavbar />

			<Container>
				<Toolbar>
					<ToolbarHeading>
						<ToolbarPageTitle />
						<ToolbarDescription>
							Overview of all team members and roles.
						</ToolbarDescription>
					</ToolbarHeading>
					<ToolbarActions>
						<a href="#" className="btn btn-sm btn-light">
							View Roles
						</a>
					</ToolbarActions>
				</Toolbar>
			</Container>

			<Container>
				<AccountPermissionsCheckContent />
			</Container>
		</Fragment>
	);
};
export { AccountPermissionsCheckPage };
