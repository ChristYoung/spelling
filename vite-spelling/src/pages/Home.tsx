import { MenuCard, MenuCardProps } from '../components/MenuCard';
import { useIndexedDB } from 'react-indexed-db-hook';
import { useDispatch } from 'react-redux';
import {
    BsFillLightningChargeFill,
    BsSpellcheck,
    BsEyeFill,
} from 'react-icons/bs';
import { useEffect } from 'react';
import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { restWordsList } from '../store/wordsReducer/wordsSlice';

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
    const { getAll } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const dispatch = useDispatch();

    useEffect(() => {
        getAll().then(wordsFromDB => dispatch(restWordsList(wordsFromDB)));
    }, [dispatch, getAll]);

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
