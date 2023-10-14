import { ThemeSwitch } from './ThemeSwitch';

export const Header: React.FC = () => {
    return (
        <div className="fixed flex align-middle top-0 left-0 right-0 justify-end px-12 py-6 bg-white shadow-custom dark:bg-base-dark">
            <ThemeSwitch />
        </div>
    );
};
