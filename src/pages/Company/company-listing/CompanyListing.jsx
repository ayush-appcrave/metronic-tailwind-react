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
import { CompanyTable } from './blocks/CompanyTable';

const CompanyListing = ({ companyType }) => {
  const { currentLayout } = useLayout();
  const [stats, setStats] = useState({ totalRecords: 0, activeCompanies: 0 });

  const updateStats = (totalRecords, activeCompanies) => {
    setStats({ totalRecords, activeCompanies });
  };

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <span className="text-md text-gray-700">Total {companyType}s: {stats.totalRecords}</span>
                <span className="text-md text-gray-700">Active {companyType}s: {stats.activeCompanies}</span>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to={`/company/${companyType.toLowerCase()}/create`} className="btn btn-sm btn-primary">Add New {companyType}</Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}
      <Container>
        <CompanyTable type={companyType} onStatsUpdate={updateStats} />
      </Container>
    </Fragment>
  );
};

export { CompanyListing };
