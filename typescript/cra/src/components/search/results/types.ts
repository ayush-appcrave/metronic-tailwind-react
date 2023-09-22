import { type ColorSchema } from '../../../theme/palette';

export interface SearchResultsGeneralType {
  path: string;
  title: string;
  description: string;
  chip?: {
    label: string;
    color: ColorSchema;
  };
}

export interface SearchResultsItemsType {
  general: SearchResultsGeneralType;
}

export type SearchResultsType = SearchResultsItemsType[];
