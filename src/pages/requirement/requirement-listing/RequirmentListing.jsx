import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { RequirementTable } from './blocks/RequirementTable';

const RequirementListing = () => {
  const { currentLayout } = useLayout();
  const [stats, setStats] = useState({ totalRecords: 0, activeRequirements: 0 });

  const updateStats = (totalRecords, activeRequirements) => {
    setStats({ totalRecords, activeRequirements });
  };

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <span className="text-md text-gray-700">Total Requirements: {stats.totalRecords}</span>
                <span className="text-md text-gray-700">Active Requirements: {stats.activeRequirements}</span>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to="/requirement/create" className="btn btn-sm btn-primary">Add New Requirement</Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}
      <Container>
        <RequirementTable onStatsUpdate={updateStats} />
      </Container>
    </Fragment>
  );
};

export { RequirementListing };