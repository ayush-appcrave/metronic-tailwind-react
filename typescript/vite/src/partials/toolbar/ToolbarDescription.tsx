import { IToolbarDescriptionProps } from './types';

const ToolbarDescription = ({ children }: IToolbarDescriptionProps) => {
  return <div className="text-sm font-medium text-gray-600">{children}</div>;
};

export { ToolbarDescription };
