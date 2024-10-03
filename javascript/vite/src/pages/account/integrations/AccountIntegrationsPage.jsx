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
import { AccountIntegrationsContent } from '.';
const AccountIntegrationsPage = () => {
	return (
		<Fragment>
			<PageNavbar />

			<Container>
				<Toolbar>
					<ToolbarHeading>
						<ToolbarPageTitle />
						<ToolbarDescription>
							Enhance Workflows with Advanced Integrations.
						</ToolbarDescription>
					</ToolbarHeading>
					<ToolbarActions>
						<a href="#" className="btn btn-sm btn-light">
							Add New Integration
						</a>
					</ToolbarActions>
				</Toolbar>
			</Container>

			<Container>
				<AccountIntegrationsContent />
			</Container>
		</Fragment>
	);
};
export { AccountIntegrationsPage };
