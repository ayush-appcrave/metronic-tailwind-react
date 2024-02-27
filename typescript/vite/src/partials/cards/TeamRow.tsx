import { KeenIcon } from '@/components';

import { Avatars, Rating } from '../common';
import { ITeamItem, ITeamProps } from './interfaces';

const TeamRow = ({ icon, title, description, labels, rating, team, connected }: ITeamProps) => {
  const renderItem = (label: ITeamItem) => {
    return (
      <>
        <span className="badge badge-xs badge-outline">{label}</span>
      </>
    );
  };

  return (
    <div className="card p-7.5">
      <div className="flex flex-wrap justify-between items-center gap-7">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center size-14 shrink-0 rounded-full ring-1 ring-gray-300 bg-gray-100">
            <KeenIcon icon={icon} className="text-2xl text-gray-600" />
          </div>
          <div className="grid grid-col">
            <a
              href="#"
              className="text-base font-semibold text-gray-800 hover:text-primary-active mb-px"
            >
              {title}
            </a>
            <span className="text-2sm font-normal text-gray-600">{description}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 lg:gap-12">
          <div className="grid gap-5 justify-end lg:text-right">
            <span className="text-2xs font-normal text-gray-500 uppercase">skills</span>
            <div className="flex gap-1.5">
              {labels.map((label, index) => {
                return renderItem(label);
              })}
            </div>
          </div>

          <div className="grid justify-end gap-6 lg:text-right">
            <div className="text-2xs font-normal text-gray-500 uppercase">rating</div>
            <Rating rating={rating.value} round={rating.round} />
          </div>

          <div className="grid justify-end gap-3.5 lg:text-right lg:min-w-24 shrink-0 max-w-auto">
            <span className="text-2xs font-normal text-gray-500 uppercase">memebers</span>
            <Avatars group={team.group} more={team.more} className={team.className} />
          </div>

          <div className="grid justify-end min-w-20">
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
      </div>
    </div>
  );
};

export { TeamRow };
