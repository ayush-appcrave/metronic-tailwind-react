import { useAuthContext } from '@/auth/useAuthContext';
import { Container } from '@/components/container';
import { KeenIcon } from '@/components/keenicons';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { userRole } from '@/constants/userRole';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/demo1/toolbar';
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Demo1LightSidebarContent } from './';

const Demo1LightSidebarPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();

  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });
  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading title="Dashboard" description="Central Hub for Personal Customization" />
          <ToolbarActions>
            {currentUser?.role === userRole.SYSTEM_ADMINISTRATION && (
              <Button variant="default" size="sm" onClick={() => navigate('/auth/members/add')}>
                <KeenIcon icon="plus" className="me-0.5" />
                Add Member
              </Button>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  id="date"
                  className={cn(
                    'btn btn-sm btn-light data-[state=open]:bg-light-active',
                    !date && 'text-gray-400'
                  )}
                >
                  <KeenIcon icon="calendar" className="me-0.5" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(date.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </ToolbarActions>
        </Toolbar>
      </Container>

      <Container>
        <Demo1LightSidebarContent />
      </Container>
    </Fragment>
  );
};
export { Demo1LightSidebarPage };
