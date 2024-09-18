import { Link, Outlet } from 'react-router-dom';
import { toAbsoluteUrl } from '@/utils';
import useBodyClasses from '@/hooks/useBodyClasses';
import { AuthLayoutProvider } from '../auth/AuthLayoutProvider';
const LayoutBranded = () => {
  useBodyClasses('dark:bg-coal-500');
  return <>
      <style>
        {`
          .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1.png')}');
          }
          .dark .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1-dark.png')}');
          }
        `}
      </style>

      <div className="grid lg:grid-cols-2 grow">
        <div className="flex justify-center items-center p-8 lg:p-10 order-2 lg:order-1">
          <Outlet />
        </div>

        <div className="lg:rounded-xl lg:border lg:border-gray-200 lg:m-5 order-1 lg:order-2 bg-top xxl:bg-center xl:bg-cover bg-no-repeat branded-bg">
          <div className="flex flex-col p-8 lg:p-16 gap-4">
            <Link to="/">
              <img src={toAbsoluteUrl('/media/app/mini-logo.svg')} className="h-[28px] max-w-none" alt="" />
            </Link>

            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold text-gray-900">Secure Access Portal</h3>
              <div className="text-base font-medium text-gray-600">
                A robust authentication gateway ensuring
                <br /> secure&nbsp;
                <span className="text-gray-900 font-semibold">efficient user access</span>
                &nbsp;to the Metronic
                <br /> Dashboard interface.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
const AuthBrandedLayout = () => <AuthLayoutProvider>
    <LayoutBranded />
  </AuthLayoutProvider>;
export { AuthBrandedLayout };