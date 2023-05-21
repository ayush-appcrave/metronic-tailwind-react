import { createContext, type FC, type ReactNode, useContext, useMemo, useState } from 'react';

import {
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  initialListView,
  type ListViewContextProps
} from '../helpers';
import { useQueryResponse, useQueryResponseData } from './QueryResponseProvider';

interface WithChildren {
  children?: ReactNode;
}

const ListViewContext = createContext<ListViewContextProps>(initialListView);

const ListViewProvider: FC<WithChildren> = ({ children }) => {
  const [selected, setSelected] = useState<string[]>(initialListView.selected);
  const [itemIdForUpdate, setItemIdForUpdate] = useState<string | undefined>(
    initialListView.itemIdForUpdate
  );
  const { isLoading } = useQueryResponse();
  const data = useQueryResponseData();
  const disabled = useMemo(() => calculatedGroupingIsDisabled(isLoading, data), [isLoading, data]);
  const isAllSelected = useMemo(() => calculateIsAllDataSelected(data, selected), [data, selected]);

  return (
    <ListViewContext.Provider
      value={{
        selected,
        itemIdForUpdate,
        setItemIdForUpdate,
        disabled,
        isAllSelected,
        onSelect: (id: string) => {
          groupingOnSelect(id, selected, setSelected);
        },
        onSelectAll: () => {
          groupingOnSelectAll(isAllSelected, setSelected, data);
        },
        clearSelected: () => {
          setSelected([]);
        }
      }}
    >
      {children}
    </ListViewContext.Provider>
  );
};

const useListView = () => useContext(ListViewContext);

export { ListViewProvider, useListView };
