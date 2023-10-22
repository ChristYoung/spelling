import { useCallback, useState } from 'react';
import { WordUpdateAction, WordsItem } from '../types';
import { useKeySound } from '../hooks/useKeySound';
import { InputHandler } from './InputHandler';
import { HornIcon } from './icons/HornIcon';

export const SpellingStateClassNames = {
    normal: 'text-gray-400',
    correct: 'text-correct dark:text-correct-dark',
    // wrong: 'text-red-400 dark:text-red-600',
};

export const SpellCard: React.FC<WordsItem> = (props: WordsItem) => {
    const { word, explanations, familiar } = props;
    const [displayWords, setDisplayWords] = useState<string[]>([]);
    const [playTypingSound, playWrongSound, playCorrectSound] = useKeySound();
    const updateInput = (letter: string) => {
        const displayWordsLen = displayWords.length;
        const isCorrect = letter === word[displayWordsLen];
        const isLastLetter = displayWordsLen === word.length - 1;
        if (displayWords.length === word.length) return;
        if (isCorrect) {
            playTypingSound();
            if (isLastLetter) {
                console.log('the word you input was right!');
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
            <div className="container mx-auto flex h-full flex-1 flex-col items-center justify-center pb-5">
                <div className="container relative mx-auto flex h-full flex-col items-center">
                    <div className="container flex flex-grow items-center justify-center">
                        <div className="container flex h-full w-full flex-col items-center justify-center">
                            <div className="container flex h-24 w-full shrink-0 grow-0 justify-between px-12 pt-10"></div>
                            <div className="container flex flex-grow flex-col items-center justify-center">
                                <div className="relative flex w-full justify-center">
                                    <div className="relative">
                                        <div
                                            lang="en"
                                            className="flex flex-col items-center justify-center pb-1 pt-4">
                                            <div className="tooltip-info relative w-fit bg-transparent p-0 leading-normal shadow-none dark:bg-transparent tooltip">
                                                <div className="flex items-center false justify-center ">
                                                    {word
                                                        .split('')
                                                        .map((w, _index) => {
                                                            return (
                                                                <span
                                                                    key={`${_index}_${w}_word`}
                                                                    className={`m-0 p-0 font-mono text-[48px] px-1 font-normal  dark:text-gray-50 duration-0 dark:text-opacity-80 ${
                                                                        w ===
                                                                        displayWords[
                                                                            _index
                                                                        ]
                                                                            ? SpellingStateClassNames.correct
                                                                            : SpellingStateClassNames.normal
                                                                    }`}>
                                                                    {displayWords[
                                                                        _index
                                                                    ]
                                                                        ? displayWords[
                                                                              _index
                                                                          ]
                                                                        : '_'}
                                                                </span>
                                                            );
                                                        })}
                                                </div>
                                                <button
                                                    type="button"
                                                    className="focus:outline-none dark:fill-gray-400 dark:opacity-80 cursor-pointer text-gray-600 absolute -right-12 top-1/2 h-9 w-9 -translate-y-1/2 transform ">
                                                    <HornIcon />
                                                </button>
                                            </div>
                                        </div>
                                        {/* TODO: 后续看有没有API可以获取到音标. */}
                                        {/* <div className="space-x-5 text-center text-sm font-normal text-gray-600 transition-colors duration-300 dark:text-gray-400 false">
                                            <span>
                                                AmE: [ɪk'splosɪv; ɪk'splozɪv]
                                            </span>
                                        </div> */}
                                        {/* 中文释义 */}
                                        <div className="flex items-center justify-center  pb-4 pt-5">
                                            <span
                                                className="max-w-4xl text-center font-sans transition-colors duration-300 dark:text-white dark:text-opacity-80 false false"
                                                style={{
                                                    fontSize: '18px',
                                                }}>
                                                爆炸的； 极易引起争论的；炸药
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
