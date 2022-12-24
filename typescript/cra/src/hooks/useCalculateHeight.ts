import { useLocation, matchPath } from 'react-router-dom';

type ReturnType = {
	height: number
};

type PropsType = {
  element?: string;
  dependecies?: object;
  spacers?: object;
  offset?: number
}

const useCalculateHeight = ({element, dependecies, spacers, offset}: PropsType ): ReturnType => {
  let height: number = 0;

  return {
    height
  };
}

export { useCalculateHeight }