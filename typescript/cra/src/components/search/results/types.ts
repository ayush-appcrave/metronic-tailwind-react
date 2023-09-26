import { type ColorSchema } from '../../../theme/palette';

export interface SearchResultsGeneralType {
  path: string;
  title: string;
  subTitle: string;
  category?: {
    label: string;
    color: ColorSchema;
  };
  handleClose?: () => void;
}

export interface SearchResultsItemsType {
  general: SearchResultsGeneralType;
}

export type SearchResultsType = SearchResultsItemsType[];
