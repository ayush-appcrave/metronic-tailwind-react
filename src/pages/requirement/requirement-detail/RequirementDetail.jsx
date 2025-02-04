import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { RequirementForm } from './blocks/RequirementForm';
import { CommentSection } from './blocks/CommentSection';
import { DocumentUpload } from './blocks/DocumentUpload';

const RequirementDetail = ({}) => {
  const { currentLayout } = useLayout();
  const { id } = useParams();
  const [RequirementId, setRequirementId] = useState(id || null);

  const handleClientCreated = (createdRequirementId) => {
    setRequirementId(createdRequirementId);
  };
  useEffect(() => {
    setRequirementId(id);
  }, [id]);

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">
                    {RequirementId
                      ? `Edit Requirement`
                      : `Create Requirement`}
                  </span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to={`/Requirement}`} className="btn btn-sm btn-light">
                Back to Requirements
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <div className="grid grid-cols-12 gap-5 lg:gap-7.5 max-w-full">
          <div className={`col-span-12 ${RequirementId ? 'lg:col-span-8' : 'lg:col-span-12'} min-w-0`}>
            <div className="grid gap-5 lg:gap-7.5">
              <RequirementForm
                onClientCreated={handleClientCreated}
                RequirementID={RequirementId}
              />
              {RequirementId && <DocumentUpload typeID={RequirementId} />}
            </div>
          </div>
          {RequirementId && (
            <div className="col-span-12 lg:col-span-4 min-w-0">
              <div className="grid gap-5 lg:gap-7.5">
                <CommentSection typeId={RequirementId} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export { RequirementDetail };
