import { createContext, useContext, useState, useEffect } from 'react';
import { TDataGridProps } from './DataGrid';

export interface IDataGridContextProps {
  props: TDataGridProps;
  loading: boolean;
  setLoading: (state: boolean) => void;
  selectedRowIds: Set<number>;
  toggleRowSelection: (id: number) => void;
  toggleAllRowsSelection: (checked: boolean) => void;
  getSelectedRowIds: () => number[];
  isSelectAllChecked: boolean;
  isSelectAllIndeterminate: boolean;
}

const initialProps: IDataGridContextProps = {
  props: {
    children: undefined
  },
  loading: false,
  setLoading: (state: boolean) => {
    console.log(`${state}`);
  },
  selectedRowIds: new Set(),
  toggleRowSelection: () => {},
  toggleAllRowsSelection: () => {},
  getSelectedRowIds: () => [],
  isSelectAllChecked: false,
  isSelectAllIndeterminate: false
};

// Create a DataGrid Context
const DataGridContext = createContext<IDataGridContextProps>(initialProps);

// Custom hook to use the DataGrid Context
// eslint-disable-next-line react-refresh/only-export-components
const useDataGrid = () => useContext(DataGridContext);

const DataGridProvider = (props: TDataGridProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<number>>(new Set());
  const [isSelectAllChecked, setIsSelectAllChecked] = useState<boolean>(false);
  const [isSelectAllIndeterminate, setIsSelectAllIndeterminate] = useState<boolean>(false);
  const rowIds = Array.from({ length: 100 }, (_, i) => i + 1); // Replace with actual row IDs

  // Toggle individual row selection
  const toggleRowSelection = (id: number) => {
    setSelectedRowIds((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  // Select or deselect all rows
  const toggleAllRowsSelection = (checked: boolean) => {
    if (checked) {
      setSelectedRowIds(new Set(rowIds));
    } else {
      setSelectedRowIds(new Set());
    }
  };

  // Update select all and indeterminate states
  useEffect(() => {
    const isAllSelected = selectedRowIds.size === rowIds.length;
    const isNoneSelected = selectedRowIds.size === 0;

    setIsSelectAllChecked(isAllSelected);
    setIsSelectAllIndeterminate(!isAllSelected && !isNoneSelected);
  }, [selectedRowIds, rowIds]);

  // Get all selected row IDs
  const getSelectedRowIds = () => {
    return Array.from(selectedRowIds);
  };

  return (
    <DataGridContext.Provider
      value={{
        props,
        loading,
        setLoading,
        selectedRowIds,
        toggleRowSelection,
        toggleAllRowsSelection,
        getSelectedRowIds,
        isSelectAllChecked,
        isSelectAllIndeterminate
      }}
    >
      {props.children}
    </DataGridContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { DataGridProvider, useDataGrid };
