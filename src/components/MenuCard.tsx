import { ReactElement } from 'react';

export interface MenuCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    desc?: string;
    actionUrl?: string;
    icon?: ReactElement;
}

export const MenuCard: React.FC<MenuCardProps> = (props: MenuCardProps) => {
    return <div className='__MenuCard'>MenuCard component works!</div>;
};
