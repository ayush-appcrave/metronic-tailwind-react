import { useState } from 'react';

import { KeenIcon } from '@/components';
import { Project, ProjectRow } from '@/partials/cards';

import { IColumns3ProjectsItem, IColumns3ProjectsItems } from './interfaces';

const Columns3Projects = () => {
  const [activeView, setActiveView] = useState('cards');

  const projects: IColumns3ProjectsItems = [
    {
      logo: 'plurk.svg',
      name: 'Phoenix SaaS',
      description: 'Real-time photo sharing app',
      startDate: 'Mar 06',
      endDate: 'Dec 21',
      status: {
        label: 'In Progress',
        variant: 'badge-primary'
      },
      progress: {
        variant: 'progress-primary',
        value: 55
      },
      team: {
        group: [
          { filename: '300-4.png', variant: 'size-7' },
          { filename: '300-2.png', variant: 'size-7' },
          {
            fallback: 'A',
            variant: 'text-success-inverse size-7 ring-success-light bg-success'
          }
        ]
      }
    },
    {
      logo: 'telegram.svg',
      name: 'Radiant Wave',
      description: 'Short-term accommodation marketplace',
      startDate: 'Mar 09',
      endDate: 'Dec 23',
      status: {
        label: 'Completed',
        variant: 'badge-success'
      },
      progress: {
        variant: 'progress-success',
        value: 100
      },
      team: {
        group: [
          { filename: '300-3.png', variant: 'size-7' },
          { filename: '300-4.png', variant: 'size-7' },
          {
            fallback: 'S',
            variant: 'text-primary-inverse size-7 ring-primary-light bg-primary'
          }
        ]
      }
    },
    {
      logo: 'kickstarter.svg',
      name: 'Dreamweaver',
      description: 'Social media photo sharing',
      startDate: 'Mar 05',
      endDate: 'Dec 12',
      status: {
        label: 'Upcoming',
        variant: ''
      },
      progress: {
        variant: 'progress-gray-300',
        value: 100
      },
      team: {
        group: [
          { filename: '300-5.png', variant: 'size-7' },
          { filename: '300-6.png', variant: 'size-7' },
          {
            fallback: 'R',
            variant: 'text-warning-inverse size-7 ring-warning-light bg-warning'
          }
        ]
      }
    },
    {
      logo: 'quickbooks.svg',
      name: 'Horizon Quest',
      description: 'collaboration',
      startDate: 'Mar 03',
      endDate: 'Dec 11',
      status: {
        label: 'In Progress',
        variant: 'badge-primary'
      },
      progress: {
        variant: 'progress-primary',
        value: 19
      },
      team: {
        group: [
          { filename: '300-7.png', variant: 'size-7' },
          { filename: '300-8.png', variant: 'size-7' },
          {
            fallback: 'E',
            variant: 'text-info-inverse size-7 ring-info-light bg-info'
          }
        ]
      }
    },
    {
      logo: 'google-analytics.svg',
      name: 'Golden Gate Analytics',
      description: 'Note-taking and organization app',
      startDate: 'Mar 22',
      endDate: 'Dec 14',
      status: {
        label: 'Upcoming',
        variant: ''
      },
      progress: {
        variant: 'progress-gray-300',
        value: 100
      },
      team: {
        group: [
          { filename: '300-9.png', variant: 'size-7' },
          { filename: '300-10.png', variant: 'size-7' },
          {
            fallback: 'B',
            variant: 'text-danger-inverse size-7 ring-danger-light bg-danger'
          }
        ]
      }
    },
    {
      logo: 'google-webdev.svg',
      name: 'Celestial SaaS',
      description: 'CRM App application to HR efficienty',
      startDate: 'Mar 14',
      endDate: 'Dec 25',
      status: {
        label: 'Completed',
        variant: 'badge-success'
      },
      progress: {
        variant: 'progress-success',
        value: 100
      },
      team: {
        group: [
          { filename: '300-11.png', variant: 'size-7' },
          { filename: '300-12.png', variant: 'size-7' },
          {
            fallback: 'S',
            variant: 'text-primary-inverse size-7 ring-primary-light bg-primary'
          }
        ]
      }
    },
    {
      logo: 'figma.svg',
      name: 'Nexus Design System',
      description: 'Online discussion and forum platform',
      startDate: 'Mar 17',
      endDate: 'Dec 08',
      status: {
        label: 'Upcoming',
        variant: ''
      },
      progress: {
        variant: 'progress-gray-300',
        value: 100
      },
      team: {
        group: [
          { filename: '300-13.png', variant: 'size-7' },
          { filename: '300-14.png', variant: 'size-7' },
          {
            fallback: 'N',
            variant: 'text-primary-inverse size-7 ring-primary-light bg-primary'
          }
        ]
      }
    },
    {
      logo: 'btcchina.svg',
      name: 'Neptune App',
      description: 'Team messaging and collaboration',
      startDate: 'Mar 09',
      endDate: 'Dec 23',
      status: {
        label: 'In Progress',
        variant: 'badge-primary'
      },
      progress: {
        variant: 'progress-primary',
        value: 35
      },
      team: {
        group: [
          { filename: '300-15.png', variant: 'size-7' },
          { filename: '300-16.png', variant: 'size-7' },
          {
            fallback: 'M',
            variant: 'text-success-inverse size-7 ring-success-light bg-success'
          }
        ]
      }
    },
    {
      logo: 'patientory.svg',
      name: 'SparkleTech',
      description: 'Meditation and relaxation app',
      startDate: 'Mar 14',
      endDate: 'Dec 21',
      status: {
        label: 'Upcoming',
        variant: ''
      },
      progress: {
        variant: 'progress-gray-300',
        value: 100
      },
      team: {
        group: [
          { filename: '300-17.png', variant: 'size-7' },
          { filename: '300-18.png', variant: 'size-7' },
          {
            fallback: 'P',
            variant: 'text-warning-inverse size-7 ring-warning-light bg-warning'
          }
        ]
      }
    },
    {
      logo: 'jira.png',
      name: 'EmberX CRM',
      description: 'Commission-free stock trading',
      startDate: 'Mar 01',
      endDate: 'Dec 13',
      status: {
        label: 'Completed',
        variant: 'badge-success'
      },
      progress: {
        variant: 'progress-success',
        value: 100
      },
      team: {
        group: [
          { filename: '300-19.png', variant: 'size-7' },
          { filename: '300-20.png', variant: 'size-7' },
          {
            fallback: 'D',
            variant: 'text-danger-inverse size-7 ring-danger-light bg-danger'
          }
        ]
      }
    },
    {
      logo: 'plastic-scm.svg',
      name: 'LunaLink',
      description: 'Meditation and relaxation app',
      startDate: 'Mar 14',
      endDate: 'Dec 21',
      status: {
        label: 'Upcoming',
        variant: ''
      },
      progress: {
        variant: 'progress-gray-300',
        value: 100
      },
      team: {
        group: [
          { filename: '300-21.png', variant: 'size-7' },
          { filename: '300-22.png', variant: 'size-7' },
          {
            fallback: 'B',
            variant: 'text-info-inverse size-7 ring-info-light bg-info'
          }
        ]
      }
    },
    {
      logo: 'perrier.svg',
      name: 'TerraCrest App',
      description: 'Video conferencing software',
      startDate: 'Mar 22',
      endDate: 'Dec 28',
      status: {
        label: 'In Progress',
        variant: 'badge-primary'
      },
      progress: {
        variant: 'progress-primary',
        value: 55
      },
      team: {
        group: [
          { filename: '300-23.png', variant: 'size-7' },
          { filename: '300-24.png', variant: 'size-7' },
          {
            fallback: 'C',
            variant: 'text-success-inverse size-7 ring-success-light bg-success'
          }
        ]
      }
    }
  ];

  const renderProject = (project: IColumns3ProjectsItem, index: number) => {
    return (
      <Project
        logo={project.logo}
        name={project.name}
        description={project.description}
        startDate={project.startDate}
        endDate={project.endDate}
        status={project.status}
        progress={project.progress}
        team={project.team}
        key={index}
      />
    );
  };

  const renderItem = (item: IColumns3ProjectsItem, index: number) => {
    return (
      <ProjectRow
        logo={item.logo}
        name={item.name}
        description={item.description}
        status={item.status}
        progress={item.progress}
        team={item.team}
        key={index}
      />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-800 font-semibold">{projects.length} Projects</h3>

        <div className="btn-group" data-tabs="true">
          <a
            href="#"
            className={`btn btn-icon btn-sm ${activeView === 'cards' ? 'active' : ''}`}
            data-tab-toggle="#projects_cards"
            onClick={() => {
              setActiveView('cards');
            }}
          >
            <KeenIcon icon="category" />
          </a>
          <a
            href="#"
            className={`btn btn-icon btn-sm ${activeView === 'list' ? 'active' : ''}`}
            data-tab-toggle="#projects_list"
            onClick={() => {
              setActiveView('list');
            }}
          >
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      {activeView === 'cards' && (
        <div id="projects_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
            {projects.map((project, index) => {
              return renderProject(project, index);
            })}
          </div>

          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <a href="#" className="btn btn-link">
              Show more projects
            </a>
          </div>
        </div>
      )}

      {activeView === 'list' && (
        <div id="projects_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {projects.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>

          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <a href="#" className="btn btn-link">
              Show more projects
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export { Columns3Projects };
