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
import { AccountAllowedIPAddressesContent } from '.';
const AccountAllowedIPAddressesPage = () => {
	return (
		<Fragment>
			<PageNavbar />

			<Container>
				<Toolbar>
					<ToolbarHeading>
						<ToolbarPageTitle />
						<ToolbarDescription>
							Central Hub for Personal Customization
						</ToolbarDescription>
					</ToolbarHeading>
					<ToolbarActions>
						<a href="#" className="btn btn-sm btn-light">
							Security Overview
						</a>
					</ToolbarActions>
				</Toolbar>
			</Container>

			<Container>
				<AccountAllowedIPAddressesContent />
			</Container>
		</Fragment>
	);
};
export { AccountAllowedIPAddressesPage };
