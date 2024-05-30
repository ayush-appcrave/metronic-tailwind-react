import { KeenIcon } from '@/components/keenicons';
const Topbar = () => {
  return <div className="flex items-center gap-4 lg:gap-6">
      <button className="btn btn-icon text-gray-500">
        <KeenIcon icon="calendar" />
      </button>
    </div>;
};
export { Topbar };