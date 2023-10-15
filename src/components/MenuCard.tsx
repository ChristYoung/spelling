import { ReactElement } from 'react';

export interface MenuCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    desc?: string;
    actionUrl?: string;
    icon?: ReactElement;
}

export const MenuCard: React.FC<MenuCardProps> = (props: MenuCardProps) => {
    const { title, desc, icon } = props;
    return (
        // <div className={style['__MenuCard']}>
        //     <span className={style.wrapper}>
        //         <span className={style.bgContainer}></span>
        //         <span className={style.cardIcon}>{icon}</span>
        //         <h2 className={style.cardTitle}>{title}</h2>
        //         <p className={style.desc}>{desc}</p>
        //     </span>
        // </div>
        <div className="text-3xl font-bold underline">Hello World</div>
    );
};
