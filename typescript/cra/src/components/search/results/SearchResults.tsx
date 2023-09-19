import { KeenIcon } from '@components/keenicons';
import Scrollbar from '@components/scrollbar';
import { Box, Divider, InputBase, useTheme } from '@mui/material';

import { SearchResultsGeneral, type SearchResultsType } from './';

interface PropsType {
  data: SearchResultsType;
}

const SearchResults = ({ data }: PropsType) => {
  const theme = useTheme();

  return (
    <Box>
      {data.map((item) => {
        // eslint-disable-next-line react/jsx-key
        return <SearchResultsGeneral {...item.general} />;
      })}
    </Box>
  );
};

export { SearchResults };
