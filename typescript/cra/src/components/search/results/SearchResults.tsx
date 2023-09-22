import { Box } from '@mui/material';

import { SearchResultsGeneral, type SearchResultsType } from './';

interface PropsType {
  data: SearchResultsType;
}

const SearchResults = ({ data }: PropsType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5
      }}
    >
      {data.map((item) => {
        // eslint-disable-next-line react/jsx-key
        return <SearchResultsGeneral {...item.general} />;
      })}
    </Box>
  );
};

export { SearchResults };
