import { ReactElement } from 'react';
import style from './MenuCard.module.scss';

export interface MenuCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    desc?: string;
    actionUrl?: string;
    icon?: ReactElement;
}

export const MenuCard: React.FC<MenuCardProps> = (props: MenuCardProps) => {
    const { title, desc, actionUrl, icon } = props;
    return (
        <a
            className={style['__MenuCard']}
            href={actionUrl}
            target="_blank">
            <span className={style.wrapper}>
                <span className={style.bgContainer}></span>
                <span className={style.cardIcon}>{icon}</span>
                <h2 className={style.cardTitle}>{title}</h2>
                <p className={style.desc}>{desc}</p>
            </span>
        </a>
    );
};
