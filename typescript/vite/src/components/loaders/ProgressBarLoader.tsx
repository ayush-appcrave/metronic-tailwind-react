import { LinearProgress } from '@mui/material';

const ProgressBarLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <LinearProgress color="primary" />
    </div>
  );
};

export { ProgressBarLoader };
