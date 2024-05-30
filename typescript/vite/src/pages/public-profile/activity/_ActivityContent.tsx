import { useState } from 'react';

import {
  Anniversary,
  BloggingConference,
  DesignerWelcome,
  FollowersMilestone,
  Interview,
  NewArticle,
  NewTeam,
  PhotographyWorkshop,
  ProductWebinar,
  ProjectStatus,
  UpcomingContent,
  VirtualTeam
} from '@/partials/activities/items';

const ActivityContent = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const years = Array.from({ length: 8 }, (_, i) => 2024 - i);

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-800 font-semibold">Activity</h3>
      </div>

      <div className="flex gap-5 lg:gap-7.5">
        {years.map((year, index) => (
          <div
            key={index}
            className={`card grow ${year === currentYear ? '' : 'hidden'}`}
            id={`activity_${year}`}
          >
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <input
                    className="order-2"
                    type="checkbox"
                    value="1"
                    name="check"
                    defaultChecked
                  />
                  <span className="switch-label order-1">
                    &nbsp;Auto refresh:
                    <span className="hidden switch-off:inline">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="card-body">
              {(year === 2024 || year === 2023 || year === 2022) && <NewArticle />}
              {(year === 2024 || year === 2022) && <Interview />}
              {(year === 2024 || year === 2021) && <PhotographyWorkshop />}
              <UpcomingContent />
              {(year === 2024 || year === 2019) && <ProductWebinar url="#" />}
              <FollowersMilestone />
              {(year === 2024 || year === 2021) && <ProjectStatus />}
              {(year === 2024 || year === 2018) && (
                <BloggingConference image="/images/content/illustration/28.svg" />
              )}
              <DesignerWelcome />
              {(year === 2024 || year === 2017) && <NewTeam />}
              <VirtualTeam />
              <Anniversary />
            </div>
            <div className="card-footer justify-center">
              <a href="#" className="btn btn-link">
                All-time Activity
              </a>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2.5" data-tabs="true">
          {years.map((year, index) => (
            <a
              key={index}
              href="#"
              data-tab-toggle={`#activity_${year}`}
              className={`btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary ${
                year === currentYear ? 'active' : ''
              }`}
              onClick={() => {
                setCurrentYear(year);
              }}
            >
              {year}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ActivityContent };
