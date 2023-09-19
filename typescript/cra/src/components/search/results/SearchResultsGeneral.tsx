import { KeenIcon } from '@components/keenicons';
import { Box, Divider, InputBase, useTheme } from '@mui/material';

import { type SearchResultsGeneralType } from './';

const SearchResultsGeneral = (props: SearchResultsGeneralType) => {
  return <Box>{props.title}</Box>;
};

export { SearchResultsGeneral };
