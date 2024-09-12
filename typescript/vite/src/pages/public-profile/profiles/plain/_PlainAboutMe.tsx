import clsx from 'clsx';

import { IPlainAboutMeProps } from './types';

const PlainAboutMe = ({ className }: IPlainAboutMeProps) => {
  return (
    <div className={clsx(`card ${className && className}`)}>
      <div className="card-header">
        <h3 className="card-title">About Me</h3>
      </div>
      <div className="card-body">
        <p className="text-sm text-gray-700 font-medium leading-5.5 mb-4">
          I am a passionate and dedicated individual with a flair for creativity and innovation.
          With a background in UI/UX design, I have a keen eye for detail and a strong understanding
          of user experience. My goal is to craft visually appealing and intuitive designs that not
          only meet clients&apos; needs but also exceed their expectations.
        </p>

        <p className="text-sm text-gray-700 font-medium leading-5.5">
          Over the years, I have honed my skills in various design tools and techniques, allowing me
          to bring ideas to life with precision and elegance. I thrive in collaborative
          environments, where I can work closely with clients and teams to achieve remarkable
          results.
        </p>
      </div>
    </div>
  );
};

export { PlainAboutMe };
