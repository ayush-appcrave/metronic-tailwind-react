import { Box } from '@mui/material';

import { SearchResultsGeneral, type SearchResultsType } from './';

interface PropsType {
  data: SearchResultsType;
  handleClose?: () => void;
}

const SearchResults = ({ data, handleClose }: PropsType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5
      }}
    >
      {data.map((item, index) => {
        return (
          <SearchResultsGeneral
            key={index}
            {...item.general}
            {...(handleClose && { handleClose })}
          />
        );
      })}
    </Box>
  );
};

export { SearchResults };
