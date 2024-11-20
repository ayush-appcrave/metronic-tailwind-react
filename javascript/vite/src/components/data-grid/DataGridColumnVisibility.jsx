import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { KeenIcon } from '@/components/keenicons';
export function DataGridColumnVisibility({
  table
}) {
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="light" size="sm">
          <KeenIcon icon="setting-4" />
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel className="font-medium">Toggle Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table.getAllColumns().filter(column => typeof column.accessorFn !== 'undefined' && column.getCanHide()).map(column => {
        return <DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={value => column.toggleVisibility(!!value)}>
                {column.id}
              </DropdownMenuCheckboxItem>;
      })}
      </DropdownMenuContent>
    </DropdownMenu>;
}