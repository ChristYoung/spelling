import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const RootLayout: React.FC = () => {
    return (
        <div className="__RootLayout">
            <Header />
            <div className="mt-28">
                <Outlet></Outlet>
            </div>
        </div>
    );
};
