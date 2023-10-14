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
        <a className="cursor-pointer text-left">
            <span className="group transition-colors duration-[250ms] ease-out delay-0 w-[238px] relative block m-0 rounded-[0.8rem] py-6 px-8 overflow-hidden bg-slate-200 hover:bg-transparent dark:bg-little-dark dark:hover:bg-transparent">
                <span className="transition-opacity duration-[250ms] ease-out delay-0 group-hover:opacity-100 opacity-0 block absolute inset-0 -z-[1] bg-gradient-custom"></span>
                <span className="block mb-[1.4rem] text-[2.4rem]">{icon}</span>
                <h2 className="text-[2rem] leading-[3rem] relative">{title}</h2>
                <p className="text-[1.6rem] leading-[2.6rem] font-light mt-4 mb-8">
                    {desc}
                </p>
            </span>
        </a>
    );
};
