import { MenuCard, MenuCardProps } from '../components/MenuCard';
import { BsFillBrushFill, BsSpellcheck, BsEyeFill } from 'react-icons/bs';

const MenuList: MenuCardProps[] = [
    {
        title: 'INPUT',
        actionUrl: '',
        icon: <BsFillBrushFill></BsFillBrushFill>,
        desc: 'You can input any words you are not familiar with.',
    },
    {
        title: 'SPELLING',
        actionUrl: '',
        icon: <BsSpellcheck></BsSpellcheck>,
        desc: 'Practice spelling the words.',
    },
    {
        title: 'VIEW',
        actionUrl: '',
        icon: <BsEyeFill></BsEyeFill>,
        desc: 'View the words.',
    },
];

export const Home: React.FC = () => {
    return (
        <div className="__Home">
            <div className="content">
                {MenuList.map(c => (
                    <MenuCard
                        key={c.title}
                        {...c}
                    />
                ))}
            </div>
            <div className="footer"></div>
        </div>
    );
};
