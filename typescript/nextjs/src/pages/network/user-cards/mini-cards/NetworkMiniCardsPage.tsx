import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { NetworkMiniCardsContent } from '.';

const NetworkMiniCardsPage = () => {
  return (
    <>
      <Container>
        <Toolbar>
          <ToolbarHeading>
            <ToolbarPageTitle />
            <ToolbarDescription>
              <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                Central Hub for Personal Customization
              </span>
            </ToolbarDescription>
          </ToolbarHeading>
          <ToolbarActions>Buttons</ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <NetworkMiniCardsContent />
      </Container>
    </>
  );
};

export default  NetworkMiniCardsPage ;
