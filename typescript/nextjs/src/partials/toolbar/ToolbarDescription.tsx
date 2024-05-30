import { IToolbarDescriptionProps } from './interfaces';

const ToolbarDescription = ({ children }: IToolbarDescriptionProps) => {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">{children}</div>
  );
};

export { ToolbarDescription };
