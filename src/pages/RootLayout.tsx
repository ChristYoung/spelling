import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const RootLayout: React.FC = () => {
    return (
        <div className="__RootLayout bg-slate-50 h-full dark:text-white dark:bg-base-dark">
            <Header />
            <div className="mt-32">
                <Outlet></Outlet>
            </div>
        </div>
    );
};
