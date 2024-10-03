import React from 'react';
import { useDataGrid } from '.';
import clsx from 'clsx';
const DataGridTable = ({ children }) => {
	const { props } = useDataGrid();
	const spacingClasses = {
		xs: 'table-xs',
		sm: 'table-sm',
		lg: 'table-lg',
	};
	return (
		<table
			className={clsx(
				'table',
				props.cellsBorder && 'table-border',
				props.tableSpacing && spacingClasses[props.tableSpacing],
			)}>
			{children}
		</table>
	);
};
export { DataGridTable };
