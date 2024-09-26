import { MiscFaq, MiscHighlightedPosts } from '@/partials/misc';
import { Backup , BackupSettings} from './blocks/backups';


const AccountBackupAndRecoveryContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="grid gap-5 lg:gap-7.5">
          <Backup />
    
          <MiscFaq />
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <BackupSettings />
        </div>
      </div>
    </div>
  );
};

export { AccountBackupAndRecoveryContent };

