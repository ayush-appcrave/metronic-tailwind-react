import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom';
const ModalWelcomMessage = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px]">
        <DialogHeader className="border-0">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col items-center pt-10 pb-10">
          <div className="mb-10">
            <img
              src={toAbsoluteUrl('/media/illustrations/21.svg')}
              className="dark:hidden max-h-[140px]"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/21-dark.svg')}
              className="light:hidden max-h-[140px]"
            />
          </div>

          <h3 className="text-lg font-medium text-gray-900 text-center mb-3">
            Welcome to Appcrave
          </h3>

          <div className="text-2sm text-center text-gray-700 mb-7">
            You've been added as a team member. We're excited to have you <br />
            join our collaborative workspace. Let's achieve great things together!
          </div>

          <div className="flex justify-center mb-2">
            <Link to="/" className="btn btn-primary flex justify-center">
              Get Started
            </Link>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
export { ModalWelcomMessage };
