import { KeenIcon } from '@/components';

import { Avatars, Rating } from '../common';
import { ITeamItem, ITeamProps } from './interfaces';

const Team = ({ icon, title, description, labels, rating, team, connected }: ITeamProps) => {
  const renderItem = (label: ITeamItem) => {
    return (
      <>
        <span className="badge badge-xs badge-outline">{label}</span>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-body grid gap-7 py-7.5">
        <div className="grid place-items-center gap-4">
          <div className="flex justify-center items-center size-14 rounded-full ring-1 ring-gray-300 bg-gray-100">
            <KeenIcon icon={icon} className="text-2xl text-gray-600" />
          </div>

          <div className="grid place-items-center">
            <a
              href="#"
              className="text-base font-semibold text-gray-800 hover:text-primary-active mb-px"
            >
              {title}
            </a>
            <span className="text-2sm font-normal text-gray-600">{description}</span>
          </div>
        </div>

        <div className="grid">
          <div className="flex items-center justify-between flex-wrap mb-3.5 gap-2">
            <span className="text-2xs font-normal text-gray-500 uppercase ">skills</span>

            <div className="flex flex-wrap gap-1.5">
              {labels.map((label, index) => {
                return renderItem(label);
              })}
            </div>
          </div>

          <div className="border-t border-gray-300 border-dashed"></div>

          <div className="flex items-center justify-between flex-wrap my-2.5 gap-2">
            <span className="text-2xs font-normal text-gray-500 uppercase ">rating</span>

            <Rating rating={rating.value} round={rating.round} />
          </div>

          <div className="border-t border-gray-300 border-dashed mb-3.5"></div>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-2xs font-normal text-gray-500 uppercase ">memebers</span>

            <Avatars group={team.group} more={team.more} className={team.className} />
          </div>
        </div>
      </div>

      <div className="card-footer justify-center">
        {connected ? (
          <a className="btn btn-light btn-sm">
            <KeenIcon icon="check-circle" className="" /> Joined
          </a>
        ) : (
          <a className="btn btn-sm btn-primary">
            <KeenIcon icon="people" className="" /> Join
          </a>
        )}
      </div>
    </div>
  );
};

export { Team };
