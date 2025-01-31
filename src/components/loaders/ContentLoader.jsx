import { CircularProgress } from '@mui/material';

const ContentLoader = ({ size = 20 }) => {
  return (
    <div className="flex flex-col items-center justify-center self-center relative top-1/2 -translate-x-1/2">
      <CircularProgress size={size} color="primary" />
    </div>
  );
};

export { ContentLoader };
