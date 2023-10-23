import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineHeart,
    AiTwotoneHeart,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeCurrentWordByIndex,
    getCurrentWordIndexSelector,
    getWordsListSelector,
} from '../store/wordsReducer/wordsSlice';

export const SpellOperator: React.FC = (props: { familiar: boolean }) => {
    const { familiar } = props;
    const dispatch = useDispatch();
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const wordsList = useSelector(getWordsListSelector);
    return (
        <div
            style={{
                boxShadow:
                    '0 100px 80px #322e8112, 0 41.7776px 33.4221px #322e810d, 0 22.3363px 17.869px #322e810b, 0 12.5216px 10.0172px #322e8109, 0 6.6501px 5.32008px #322e8107, 0 2.76726px 2.21381px #322e8105',
            }}
            className="__SpellOperator text-3xl flex w-3/5 rounded-xl bg-white p-4 py-10 opacity-50 transition-colors duration-300 dark:bg-gray-800">
            <div className="flex flex-1 flex-col items-center justify-center cursor-pointer">
                <span
                    className="w-4/5 pb-2 text-center font-bold text-gray-600 transition-colors duration-300 dark:text-gray-400"
                    onClick={() => {
                        if (currentWordIndex + 1 > 0) {
                            dispatch(
                                changeCurrentWordByIndex(currentWordIndex - 1),
                            );
                        }
                    }}>
                    <AiOutlineArrowLeft style={{ display: 'inline' }} />
                </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center cursor-pointer">
                <span className="w-4/5 pb-2 text-center font-bold text-gray-600 transition-colors duration-300 dark:text-gray-400">
                    {familiar ? (
                        <AiTwotoneHeart style={{ display: 'inline' }} />
                    ) : (
                        <AiOutlineHeart style={{ display: 'inline' }} />
                    )}
                </span>
            </div>
            <div
                className="flex flex-1 flex-col items-center justify-center cursor-pointer"
                onClick={() => {
                    if (currentWordIndex + 1 < wordsList.length) {
                        dispatch(
                            changeCurrentWordByIndex(currentWordIndex + 1),
                        );
                    }
                }}>
                <span className="w-4/5 pb-2 text-center font-bold text-gray-600 transition-colors duration-300 dark:text-gray-400">
                    <AiOutlineArrowRight style={{ display: 'inline' }} />
                </span>
            </div>
        </div>
    );
};
