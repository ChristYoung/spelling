import { useSelector } from 'react-redux';

import { SpellCard } from '../components/SpellCard';
import { SpellOperator } from '../components/SpellOperator';
import {
    getCurrentWordIndexSelector,
    getCurrentWordSelector,
    getWordsListSelector,
} from '../store/wordsReducer/wordsSlice';

export const WalkThrough: React.FC = () => {
    const currentWord = useSelector(getCurrentWordSelector);
    const wordsList = useSelector(getWordsListSelector);
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const progress =
        currentWordIndex + 1 >= wordsList.length
            ? 100
            : (currentWordIndex / wordsList.length) * 100;
    return (
        <>
            <div className="container_spell_words mx-auto flex h-[500px] flex-1 flex-col items-center justify-center pb-5 mt-56">
                <div className="container relative mx-auto flex h-full flex-col items-center">
                    <div className="container flex flex-grow items-center justify-center">
                        <div className="container flex h-full w-full flex-col items-center justify-center">
                            <div className="container flex h-24 w-full shrink-0 grow-0 justify-between px-12 pt-10">
                                <progress
                                    className="progress w-full progress-accent"
                                    value={progress}
                                    max="100"></progress>
                            </div>
                            <div className="text-2xl">
                                <span>
                                    {currentWordIndex +
                                        1 +
                                        '/' +
                                        wordsList.length}
                                </span>
                            </div>
                            <div className="container flex flex-grow flex-col items-center justify-center">
                                <div className="relative flex w-full justify-center">
                                    <SpellCard
                                        {...currentWord}
                                        mode="VIEW"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SpellOperator />
            </div>
        </>
    );
};
