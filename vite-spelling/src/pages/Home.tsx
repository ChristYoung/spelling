import { MenuCard, MenuCardProps } from '../components/MenuCard';
import {
    BsFillLightningChargeFill,
    BsSpellcheck,
    BsEyeFill,
} from 'react-icons/bs';

const MenuList: MenuCardProps[] = [
    {
        title: 'INPUT',
        actionUrl: 'input',
        icon: <BsFillLightningChargeFill></BsFillLightningChargeFill>,
        desc: 'You can input any words you are not familiar with.',
    },
    {
        title: 'SPELLING',
        actionUrl: 'spellWords',
        icon: <BsSpellcheck></BsSpellcheck>,
        desc: 'You can practice spelling words by typing.',
    },
    {
        title: 'VIEW',
        actionUrl: 'view',
        icon: <BsEyeFill></BsEyeFill>,
        desc: 'View all of the words.(Including familiar or not)',
    },
];

export const Home: React.FC = () => {
    return (
        <div className="__Home">
            <div className="flex justify-between">
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
