import useBodyClasses from '@/hooks/useBodyClasses';
import { Demo1LayoutProvider, Main } from './';
const Demo1Layout = () => {
	useBodyClasses(
		'[--tw-page-bg:#fefefe] [--tw-page-bg-dark:var(--tw-coal-500)] bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]',
	);
	return (
		<Demo1LayoutProvider>
			<Main />
		</Demo1LayoutProvider>
	);
};
export { Demo1Layout };
