import { useDataGrid } from './DataGrid/DataGridProvider';
const DataGridTableEmpty = () => {
	const { table, props } = useDataGrid(); // Destructure props to get emptyText
	const totalColumns = table.getAllColumns().length + (props.rowSelect ? 1 : 0);
	return (
		<tr>
			<td colSpan={totalColumns} className="text-center py-4">
				{props.emptyState || 'No data available'}
			</td>
		</tr>
	);
};
export { DataGridTableEmpty };
