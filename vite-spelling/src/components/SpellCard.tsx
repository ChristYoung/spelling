import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKeySound } from '../hooks/useKeySound';
import {
    changeCurrentWordByIndex,
    getCurrentWordIndexSelector,
} from '../store/wordsReducer/wordsSlice';
import { WordsItem } from '../types';
import { InputHandler } from './InputHandler';
import { HornIcon } from './icons/HornIcon';
import { getSettingSelector } from '../store/settingReducer/settingSlice';

export const SpellingStateClassNames = {
    normal: 'text-gray-400',
    correct: 'text-correct dark:text-correct-dark',
    // wrong: 'text-red-400 dark:text-red-600',
};

export const SpellCard: React.FC<WordsItem> = (props: WordsItem) => {
    const { word, explanations, char } = props;
    const settingConfig = useSelector(getSettingSelector);
    const hornIconRef = useRef(null);
    const [displayWords, setDisplayWords] = useState<string[]>([]);
    const [playTypingSound, playWrongSound, playCorrectSound] = useKeySound();
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const dispatch = useDispatch();
    const updateInput = (keyboardEventObj: { key: string; code?: string }) => {
        const displayWordsLen = displayWords.length;
        const { code, key } = keyboardEventObj;
        if (code === 'Space') {
            if (!settingConfig.onlyShowExplanationWhenSpelling) {
                hornIconRef.current.play();
            }
        } else {
            const isCorrect = key === word[displayWordsLen].toLowerCase();
            const isLastLetter = displayWordsLen === word.length - 1;
            if (displayWords.length === word.length) return;
            if (isCorrect) {
                playTypingSound();
                setDisplayWords(prev => [...prev, key]);
                if (isLastLetter) {
                    console.log('the word you input was right!');
                    dispatch(changeCurrentWordByIndex(currentWordIndex + 1));
                    playCorrectSound();
                    setDisplayWords([]);
                }
            } else {
                playWrongSound();
                setDisplayWords([]);
            }
        }
    };

    useEffect(() => setDisplayWords([]), [word]);
    useEffect(() => {
        if (char) {
            updateInput({ key: char as string, code: null });
        }
    }, [char]);

    return (
        <>
            <InputHandler updateInput={updateInput}></InputHandler>
            <div className="relative">
                <div
                    lang="en"
                    className="flex flex-col items-center justify-center pb-1 pt-4">
                    <div className="tooltip-info relative w-fit bg-transparent p-0 leading-normal shadow-none dark:bg-transparent tooltip">
                        <div className="flex items-center false justify-center select-none">
                            {word &&
                                word.split('').map((w, _index) => {
                                    return (
                                        <span
                                            key={`${_index}_${w}_word`}
                                            className={`m-0 p-0 font-mono text-[48px] px-1 font-normal dark:text-gray-50 duration-0 dark:text-opacity-80 ${
                                                w.toLocaleLowerCase() ===
                                                displayWords[_index]
                                                    ? SpellingStateClassNames.correct
                                                    : SpellingStateClassNames.normal
                                            }`}>
                                            {displayWords[_index]
                                                ? displayWords[_index]
                                                : '_'}
                                        </span>
                                    );
                                })}
                        </div>
                        {!settingConfig.onlyShowExplanationWhenSpelling ? (
                            <HornIcon
                                word={word}
                                ref={hornIconRef}
                                autoPlay={true}
                                className="absolute -right-12 top-1/2 h-9 w-9 -translate-y-1/2 transform"
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center  pb-4 pt-5">
                    <span
                        className="max-w-4xl text-center font-sans transition-colors duration-300 dark:text-white dark:text-opacity-80 false false"
                        style={{
                            fontSize: '18px',
                        }}>
                        {explanations?.length > 0
                            ? explanations.join('\n')
                            : '--'}
                    </span>
                </div>
            </div>
        </>
    );
};
