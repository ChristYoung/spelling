import { ThemeSwitch } from './ThemeSwitch';
import { AiFillSetting } from 'react-icons/ai';

export const Header: React.FC = () => {
    return (
        <div className="fixed z-50 flex align-middle top-0 left-0 right-0 items-center justify-end px-12 py-6 bg-white shadow-custom dark:bg-base-dark">
            <div className="text-5xl cursor-pointer">
                <AiFillSetting />
            </div>
            <div>
                <ThemeSwitch />
            </div>
        </div>
    );
};
