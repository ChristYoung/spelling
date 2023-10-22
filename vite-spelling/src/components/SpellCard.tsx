import { useState } from 'react';
import { useKeySound } from '../hooks/useKeySound';
import { WordsItem } from '../types';
import { InputHandler } from './InputHandler';
import { HornIcon } from './icons/HornIcon';
import { changeCurrentWordByIndex } from '../store/wordsReducer/wordsSlice';
import { getCurrentWordIndexSelector } from '../store/wordsReducer/wordsSlice';
import { useSelector, useDispatch } from 'react-redux';

export const SpellingStateClassNames = {
    normal: 'text-gray-400',
    correct: 'text-correct dark:text-correct-dark',
    // wrong: 'text-red-400 dark:text-red-600',
};

export const SpellCard: React.FC<WordsItem> = (props: WordsItem) => {
    const { word, explanations } = props;
    const [displayWords, setDisplayWords] = useState<string[]>([]);
    const [playTypingSound, playWrongSound, playCorrectSound] = useKeySound();
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const dispatch = useDispatch();
    const updateInput = (letter: string) => {
        const displayWordsLen = displayWords.length;
        const isCorrect = letter === word[displayWordsLen];
        const isLastLetter = displayWordsLen === word.length - 1;
        if (displayWords.length === word.length) return;
        if (isCorrect) {
            playTypingSound();
            if (isLastLetter) {
                console.log('the word you input was right!');
                dispatch(changeCurrentWordByIndex(currentWordIndex + 1));
                playCorrectSound();
            }
            setDisplayWords(prev => [...prev, letter]);
        } else {
            playWrongSound();
            setDisplayWords([]);
        }
    };
    return (
        <>
            <InputHandler updateInput={updateInput}></InputHandler>
            <div className="relative">
                <div
                    lang="en"
                    className="flex flex-col items-center justify-center pb-1 pt-4">
                    <div className="tooltip-info relative w-fit bg-transparent p-0 leading-normal shadow-none dark:bg-transparent tooltip">
                        <div className="flex items-center false justify-center ">
                            {word.split('').map((w, _index) => {
                                return (
                                    <span
                                        key={`${_index}_${w}_word`}
                                        className={`m-0 p-0 font-mono text-[48px] px-1 font-normal  dark:text-gray-50 duration-0 dark:text-opacity-80 ${
                                            w === displayWords[_index]
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
                        <HornIcon
                            word={word}
                            autoPlay={true}
                            className="absolute -right-12 top-1/2 h-9 w-9 -translate-y-1/2 transform"
                        />
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
