import React from 'react';
import { useDataGrid } from './';

const DataGridTableHeadRowsSelect = () => {
  const { isSelectAllChecked, isSelectAllIndeterminate, toggleAllRowsSelection } = useDataGrid();

  return (
    <th>
      <input
        type="checkbox"
        className="checkbox checkbox-sm"
        checked={isSelectAllChecked}
        ref={(input) => {
          if (input) {
            input.indeterminate = isSelectAllIndeterminate;
          }
        }}
        onChange={(e) => {
          const { checked } = e.target; // Correctly capture the checked value
          toggleAllRowsSelection(checked);
        }}
      />
    </th>
  );
};

export { DataGridTableHeadRowsSelect };
