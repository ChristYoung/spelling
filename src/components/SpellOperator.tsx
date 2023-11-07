import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineHeart,
    AiTwotoneHeart,
} from 'react-icons/ai';
import { useIndexedDB } from 'react-indexed-db-hook';
import { useDispatch, useSelector } from 'react-redux';

import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import {
    changeCurrentWordByIndex,
    getCurrentWordIndexSelector,
    getCurrentWordSelector,
    getWordsListSelector,
    updateCurrentWordProperties,
} from '../store/wordsReducer/wordsSlice';
import { WordsItem } from '../types';
import { InputHandler } from './InputHandler';

export interface SpellOperatorProps {
    onIgnoreWord?: (word: WordsItem) => void;
}

export const SpellOperator: React.FC<SpellOperatorProps> = (
    props: SpellOperatorProps,
) => {
    const dispatch = useDispatch();
    const { onIgnoreWord } = props;
    const { update } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const currentWord = useSelector(getCurrentWordSelector);
    const wordsList = useSelector(getWordsListSelector);
    const switchNext = () => {
        if (currentWordIndex + 1 < wordsList.length) {
            dispatch(changeCurrentWordByIndex(currentWordIndex + 1));
            onIgnoreWord && onIgnoreWord(currentWord);
        }
    };
    const switchPrev = () => {
        if (currentWordIndex > 0) {
            dispatch(changeCurrentWordByIndex(currentWordIndex - 1));
            onIgnoreWord && onIgnoreWord(currentWord);
        }
    };
    const updateInput = (keyboardEventObj: { key: string; code?: string }) => {
        const { key } = keyboardEventObj;
        if (key === 'ArrowLeft') {
            switchPrev();
        } else {
            switchNext();
        }
    };

    return (
        <div
            style={{
                boxShadow:
                    '0 100px 80px #322e8112, 0 41.7776px 33.4221px #322e810d, 0 22.3363px 17.869px #322e810b, 0 12.5216px 10.0172px #322e8109, 0 6.6501px 5.32008px #322e8107, 0 2.76726px 2.21381px #322e8105',
            }}
            className="__SpellOperator text-4xl flex w-3/5 rounded-xl bg-white p-4 py-10 opacity-50 transition-colors duration-300 dark:bg-gray-800">
            <div
                className={`flex flex-1 flex-col items-center justify-center ${
                    currentWordIndex <= 0
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer'
                }`}
                onClick={switchPrev}>
                <span className="w-4/5 pb-2 text-center font-bold text-gray-600 transition-colors duration-300 dark:text-gray-400">
                    <AiOutlineArrowLeft style={{ display: 'inline' }} />
                </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center cursor-pointer">
                <span
                    className="w-4/5 pb-2 text-center font-bold text-orange-300 transition-colors duration-300 dark:text-gray-400"
                    onClick={() => {
                        const familiar = !currentWord?.familiar;
                        update({ ...currentWord, familiar }).then(() => {
                            dispatch(
                                updateCurrentWordProperties({
                                    ...currentWord,
                                    familiar,
                                }),
                            );
                        });
                    }}
                    title={
                        currentWord?.familiar
                            ? 'Removal of the "mastered" marker.'
                            : 'Marked as mastered.'
                    }>
                    {currentWord?.familiar ? (
                        <AiTwotoneHeart style={{ display: 'inline' }} />
                    ) : (
                        <AiOutlineHeart style={{ display: 'inline' }} />
                    )}
                </span>
            </div>
            <div
                className={`flex flex-1 flex-col items-center justify-center ${
                    currentWordIndex + 1 < wordsList.length
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed'
                }`}
                onClick={switchNext}>
                <span className="w-4/5 pb-2 text-center font-bold text-gray-600 transition-colors duration-300 dark:text-gray-400">
                    <AiOutlineArrowRight style={{ display: 'inline' }} />
                </span>
            </div>
            <InputHandler
                updateInput={updateInput}
                keyList={{
                    bannedList: [],
                    allowedList: ['ArrowLeft', 'ArrowRight'],
                }}></InputHandler>
        </div>
    );
};
