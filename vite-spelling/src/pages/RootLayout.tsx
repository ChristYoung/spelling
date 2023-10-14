import { Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
    return (
        <div className="__RootLayout">
            <Outlet></Outlet>
        </div>
    );
};
