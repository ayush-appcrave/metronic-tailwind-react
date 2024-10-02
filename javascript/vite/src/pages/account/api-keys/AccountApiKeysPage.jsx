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
import { AccountApiKeysContent } from '.';
const AccountApiKeysPage = () => {
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
							Privacy Settings
						</a>
					</ToolbarActions>
				</Toolbar>
			</Container>

			<Container>
				<AccountApiKeysContent />
			</Container>
		</Fragment>
	);
};
export { AccountApiKeysPage };
