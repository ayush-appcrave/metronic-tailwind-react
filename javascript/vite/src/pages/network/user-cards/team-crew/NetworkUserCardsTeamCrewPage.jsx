import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
	Toolbar,
	ToolbarActions,
	ToolbarDescription,
	ToolbarHeading,
	ToolbarPageTitle,
} from '@/partials/toolbar';
import { NetworkUserCardsTeamCrewContent } from '.';
const NetworkUserCardsTeamCrewPage = () => {
	return (
		<Fragment>
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
							Upload CSV
						</a>
						<a href="#" className="btn btn-sm btn-primary">
							Add User
						</a>
					</ToolbarActions>
				</Toolbar>
			</Container>

			<Container>
				<NetworkUserCardsTeamCrewContent />
			</Container>
		</Fragment>
	);
};
export { NetworkUserCardsTeamCrewPage };
