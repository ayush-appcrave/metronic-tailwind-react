import { Link } from 'react-router-dom';

import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { toAbsoluteUrl } from '@/utils';

import { CrudDatatableToolbar } from '@/partials/crud';
import { CommonAvatar } from '@/partials/common';
import { DropdownCardItem1 } from '@/partials/dropdowns/general';

interface IInvitesMember {
  avatar: string;
  name: string;
  tasks: string;
}

interface IInvitesLocation {
  name: string;
  flag: string;
}

interface IInvitesStatus {
  label: string;
  variant: string;
}

interface IInvitesItem {
  member: IInvitesMember;
  location: IInvitesLocation;
  status: IInvitesStatus;
  recentlyActivity: string;
}
interface IInvitesItems extends Array<IInvitesItem> {}

interface IInvitesProps {
  title?: string;
}

const Invites = ({ title = 'Invites' }: IInvitesProps) => {
  const data: IInvitesItems = [
    {
      member: {
        avatar: '300-3.png',
        name: 'Tyler Hero',
        tasks: '26'
      },
      location: {
        name: 'Estonia',
        flag: 'estonia.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Current session'
    },
    {
      member: {
        avatar: '300-2.png',
        name: 'Esther Howard',
        tasks: '639'
      },
      location: {
        name: 'Malaysia',
        flag: 'malaysia.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: '-'
    },
    {
      member: {
        avatar: '300-11.png',
        name: 'Jacob Jones',
        tasks: '125'
      },
      location: {
        name: 'Ukraine',
        flag: 'ukraine.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 9:53 am'
    },
    {
      member: {
        avatar: '300-2.png',
        name: 'Cody Fisher',
        tasks: '81'
      },
      location: {
        name: 'Canada',
        flag: 'canada.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: '-'
    },
    {
      member: {
        avatar: '300-5.png',
        name: 'Leslie Alexander',
        tasks: '203'
      },
      location: {
        name: 'India',
        flag: 'india.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Month ago'
    },
    {
      member: {
        avatar: '300-6.png',
        name: 'Brooklyn Simmons',
        tasks: '45'
      },
      location: {
        name: 'Spain',
        flag: 'spain.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 3:45 pm'
    },
    {
      member: {
        avatar: '300-7.png',
        name: 'Darlene Robertson',
        tasks: '108'
      },
      location: {
        name: 'Germany',
        flag: 'germany.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: '2 days ago'
    },
    {
      member: {
        avatar: '300-8.png',
        name: 'Jerome Bell',
        tasks: '91'
      },
      location: {
        name: 'France',
        flag: 'france.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-9.png',
        name: 'Devon Lane',
        tasks: '56'
      },
      location: {
        name: 'Japan',
        flag: 'japan.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 11:00 am'
    },
    {
      member: {
        avatar: '300-10.png',
        name: 'Jane Cooper',
        tasks: '47'
      },
      location: {
        name: 'South Korea',
        flag: 'south-korea.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: '3 days ago'
    },
    {
      member: {
        avatar: '300-12.png',
        name: 'Ronald Richards',
        tasks: '64'
      },
      location: {
        name: 'Brazil',
        flag: 'brazil.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Month ago'
    },
    {
      member: {
        avatar: '300-13.png',
        name: 'Kathryn Murphy',
        tasks: '78'
      },
      location: {
        name: 'United Kingdom',
        flag: 'united-kingdom.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 10:30 am'
    },
    {
      member: {
        avatar: '300-14.png',
        name: 'Jacob Smith',
        tasks: '92'
      },
      location: {
        name: 'Australia',
        flag: 'australia.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-15.png',
        name: 'Kristin Watson',
        tasks: '102'
      },
      location: {
        name: 'Italy',
        flag: 'italy.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 8:00 am'
    },
    {
      member: {
        avatar: '300-16.png',
        name: 'Cameron Williamson',
        tasks: '58'
      },
      location: {
        name: 'Russia',
        flag: 'russia.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: '2 days ago'
    },
    {
      member: {
        avatar: '300-17.png',
        name: 'Courtney Henry',
        tasks: '75'
      },
      location: {
        name: 'India',
        flag: 'india.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Month ago'
    },
    {
      member: {
        avatar: '300-18.png',
        name: 'Ralph Edwards',
        tasks: '109'
      },
      location: {
        name: 'Spain',
        flag: 'spain.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-19.png',
        name: 'Arlene McCoy',
        tasks: '84'
      },
      location: {
        name: 'Canada',
        flag: 'canada.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: 'Today, 1:00 pm'
    },
    {
      member: {
        avatar: '300-20.png',
        name: 'Theresa Webb',
        tasks: '56'
      },
      location: {
        name: 'Malaysia',
        flag: 'malaysia.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-21.png',
        name: 'Guy Hawkins',
        tasks: '68'
      },
      location: {
        name: 'Estonia',
        flag: 'estonia.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: 'Today, 3:00 pm'
    },
    {
      member: {
        avatar: '300-22.png',
        name: 'Floyd Miles',
        tasks: '43'
      },
      location: {
        name: 'Ukraine',
        flag: 'ukraine.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 11:45 am'
    },
    {
      member: {
        avatar: '300-23.png',
        name: 'Devon Lane',
        tasks: '91'
      },
      location: {
        name: 'India',
        flag: 'india.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: 'Month ago'
    },
    {
      member: {
        avatar: '300-24.png',
        name: 'Ronald Richards',
        tasks: '78'
      },
      location: {
        name: 'France',
        flag: 'france.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-25.png',
        name: 'Kathryn Murphy',
        tasks: '85'
      },
      location: {
        name: 'Japan',
        flag: 'japan.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: 'Today, 4:00 pm'
    },
    {
      member: {
        avatar: '300-26.png',
        name: 'Jacob Smith',
        tasks: '92'
      },
      location: {
        name: 'South Korea',
        flag: 'south-korea.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-27.png',
        name: 'Kristin Watson',
        tasks: '102'
      },
      location: {
        name: 'Italy',
        flag: 'italy.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 8:00 am'
    },
    {
      member: {
        avatar: '300-28.png',
        name: 'Cameron Williamson',
        tasks: '58'
      },
      location: {
        name: 'Russia',
        flag: 'russia.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: '2 days ago'
    },
    {
      member: {
        avatar: '300-29.png',
        name: 'Courtney Henry',
        tasks: '75'
      },
      location: {
        name: 'Spain',
        flag: 'spain.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Month ago'
    },
    {
      member: {
        avatar: '300-30.png',
        name: 'Ralph Edwards',
        tasks: '109'
      },
      location: {
        name: 'Canada',
        flag: 'canada.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-31.png',
        name: 'Arlene McCoy',
        tasks: '84'
      },
      location: {
        name: 'Malaysia',
        flag: 'malaysia.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 1:00 pm'
    },
    {
      member: {
        avatar: '300-32.png',
        name: 'Theresa Webb',
        tasks: '56'
      },
      location: {
        name: 'Estonia',
        flag: 'estonia.svg'
      },
      status: {
        label: 'Pending',
        variant: 'badge-warning'
      },
      recentlyActivity: 'Week ago'
    },
    {
      member: {
        avatar: '300-33.png',
        name: 'Guy Hawkins',
        tasks: '68'
      },
      location: {
        name: 'Ukraine',
        flag: 'ukraine.svg'
      },
      status: {
        label: 'Declined',
        variant: 'badge-danger'
      },
      recentlyActivity: 'Today, 3:00 pm'
    },
    {
      member: {
        avatar: '300-34.png',
        name: 'Floyd Miles',
        tasks: '43'
      },
      location: {
        name: 'India',
        flag: 'india.svg'
      },
      status: {
        label: 'Accepted',
        variant: 'badge-success'
      },
      recentlyActivity: 'Today, 11:45 am'
    }
  ];

  const renderItem = (each: IInvitesItem, index: number) => {
    return (
      <tr key={index}>
        <td className="text-center">
          <input
            data-datatable-row-check="true"
            type="checkbox"
            className="checkbox checkbox-sm"
            value={index + 1}
            readOnly
          />
        </td>

        <td>
          <div className="flex items-center gap-2.5">
            <CommonAvatar image={each.member.avatar} imageClass="h-9 rounded-full" />

            <div className="flex flex-col gap-0.5">
              <Link
                to="/network/user-cards/mini-cards"
                className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
              >
                {each.member.name}
              </Link>
              <span className="text-2sm text-gray-700 font-normal">{each.member.tasks} tasks</span>
            </div>
          </div>
        </td>

        <td>
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/flags/${each.location.flag}`)}
              className="h-4 rounded-full"
              alt="flag"
            />

            <span className="leading-none text-gray-800 font-normal">{each.location.name}</span>
          </div>
        </td>

        <td className="text-center">
          <span className="badge badge-xs badge-outline {{ each.status.variant }} items-center">
            <span className={each.status.variant}></span>
            {each.status.label}
          </span>
        </td>

        <td className="text-gray-800 font-normal">{each.recentlyActivity}</td>

        <td>
          <Menu className="items-stretch">
            <MenuItem
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: 'bottom-end',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10] // [skid, distance]
                    }
                  }
                ]
              }}
            >
              <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear mb-2.5-">
                <KeenIcon icon="dots-vertical" />
              </MenuToggle>
              {DropdownCardItem1()}
            </MenuItem>
          </Menu>
        </td>
      </tr>
    );
  };

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">{title}</h3>

        <div className="flex gap-6">
          <div className="relative">
            <KeenIcon
              icon="magnifier"
              className="leading-none text-md text-gray-500 absolute top-1/2 left-0 -translate-y-1/2 ml-3"
            />
            <input
              type="text"
              className="input input-sm pl-8"
              placeholder="Search Members"
              readOnly
            />
          </div>

          <label className="switch switch-sm">
            <input name="check" type="checkbox" value="1" className="order-2" readOnly />
            <span className="switch-label order-1">Active Users</span>
          </label>
        </div>
      </div>

      <div className="card-body">
        <div data-datatable="true" data-datatable-page-size="10">
          <div className="scrollable-x-auto">
            <table className="table table-border" data-datatable-table="true" id="members_table">
              <thead>
                <tr>
                  <th className="w-[60px] text-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      data-datatable-check="true"
                      readOnly
                    />
                  </th>
                  <th className="min-w-[250px]">
                    <span className="sort asc">
                      <span className="sort-label text-gray-700 font-normal">Member</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="min-w-[120px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">Location</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="min-w-[103px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">Status</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="min-w-[160px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">Recent activity</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="w-[60px]"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((each, index) => {
                  return renderItem(each, index);
                })}
              </tbody>
            </table>
          </div>
          <CrudDatatableToolbar />
        </div>
      </div>
    </div>
  );
};

export { Invites, type IInvitesItem, type IInvitesItems, type IInvitesProps };
