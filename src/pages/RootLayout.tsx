import { Outlet } from 'react-router-dom';

export interface RootLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RootLayout: React.FC<RootLayoutProps> = (
    props: RootLayoutProps,
) => {
    return (
        <div className="__RootLayout">
            <Outlet></Outlet>
        </div>
    );
};
