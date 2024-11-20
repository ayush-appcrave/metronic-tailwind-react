import { KeenIcon } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const InvitePeople = () => {
  return <div className="card">
      <div className="card-header" id="webhooks">
        <h3 className="card-title">Invite People</h3>
      </div>
      <div className="card-body grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="form-label max-w-32 w-full">Email</span>
          <div className="grow min-w-48">
            <input type="text" className="input w-full" placeholder="" value="jason@studio.io" readOnly />
          </div>
        </div>

        <div className="flex items-baseline flex-wrap gap-2.5">
          <label className="form-label max-w-32">Role</label>
          <div className="grid gap-5 grow items-start">
            <Select defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Member</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>  
              </SelectContent>
            </Select>   
            <div>
              <a className="btn btn-light btn-sm">
                <KeenIcon icon="plus-squared" /> Add more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer justify-center">
        <button className="btn btn-sm btn-primary">Invite People</button>
      </div>
    </div>;
};
export { InvitePeople };