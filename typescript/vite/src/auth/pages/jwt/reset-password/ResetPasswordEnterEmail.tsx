import { Link } from 'react-router-dom';

import { KeenIcon } from '@/components';

const ResetPasswordEnterEmail = () => {
  return (
    <div className="card max-w-[370px] w-full">
      <form className="card-body flex flex-col gap-5 p-10">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Your Email</h3>
          <span className="text-2sm text-gray-700">Enter your email to reset password</span>
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">Email</label>
          <input className="input" placeholder="email@email.com" type="text" value="" readOnly />
        </div>

        <Link
          to="/auth/classic/reset-password/check-email"
          className="btn btn-primary flex justify-center grow"
        >
          Contoinue
          <KeenIcon icon="black-right" />
        </Link>
      </form>
    </div>
  );
};

export { ResetPasswordEnterEmail };
