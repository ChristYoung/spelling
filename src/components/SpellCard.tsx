import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useKeySound } from '../hooks/useKeySound';
import { getSettingSelector } from '../store/settingReducer/settingSlice';
import { WordsItem } from '../types';
import { BANNED_KEYS } from '../utils';
import { InputHandler } from './InputHandler';
import { HornIcon } from './icons/HornIcon';

export interface SpellCardProps extends WordsItem {
    char?: string;
    onFinishSpell?: (wordItem: WordsItem, status: 'CORRECT' | 'WRONG') => void;
    mode?: 'VIEW' | 'SPELLING';
}

export const SpellingStateClassNames = {
    normal: 'text-gray-400',
    correct: 'text-correct dark:text-correct-dark',
    // wrong: 'text-red-400 dark:text-red-600',
};

export const SpellCard: React.FC<SpellCardProps> = (props: SpellCardProps) => {
    const {
        word,
        explanations,
        char,
        onFinishSpell,
        phonetic,
        example,
        example_zh,
        mode = 'SPELLING',
    } = props;
    const settingConfig = useSelector(getSettingSelector);
    const hornIconRef = useRef(null);
    const _DISPLAY_WORDS_INIT = mode === 'VIEW' ? word?.split('') : [];
    const [displayWords, setDisplayWords] = useState<string[]>([]);
    const [playTypingSound, playWrongSound, playCorrectSound] = useKeySound();
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
                    playCorrectSound();
                    onFinishSpell(props, 'CORRECT');
                    setDisplayWords([]);
                }
            } else {
                playWrongSound();
                setDisplayWords([]);
                if (settingConfig.strictSpelling) {
                    onFinishSpell(props, 'WRONG');
                }
            }
        }
    };
    const highLightExample = useCallback(() => {
        const _index = example
            ? example.toLowerCase().indexOf(word.toLowerCase())
            : -1;
        if (_index < 0) {
            return <>{example}</>;
        }
        const before = example.slice(0, _index);
        const after = example.slice(_index + word.length);
        const highLight = example.slice(_index, _index + word.length);
        return (
            <>
                {before}
                <span className="text-orange-700 font-bold">{highLight}</span>
                {after}
            </>
        );
    }, [example, word]);

    const renderDisplayWords = () => {
        if (mode === 'SPELLING') {
            return (
                <div className="flex items-center false justify-center select-none">
                    {word &&
                        word.split('').map((w, _index) => {
                            return (
                                <span
                                    key={`${_index}_${w}_word`}
                                    className={`m-0 p-0 font-mono text-[50px] px-1 font-normal dark:text-gray-50 duration-0 dark:text-opacity-80 ${
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
            );
        }
        return (
            <div className="flex items-center false justify-center select-none">
                {displayWords?.length > 0 &&
                    displayWords.map((w, _index) => {
                        return (
                            <span
                                key={`${_index}_${w}_word`}
                                className={`m-0 p-0 font-mono text-[50px] px-1 font-normal dark:text-gray-50 duration-0 dark:text-opacity-80 ${SpellingStateClassNames.correct}`}>
                                {w}
                            </span>
                        );
                    })}
            </div>
        );
    };

    useEffect(() => setDisplayWords(_DISPLAY_WORDS_INIT), [word]);
    useEffect(() => {
        if (char) {
            updateInput({ key: char as string, code: null });
        }
    }, [char]);

    return (
        <>
            {mode === 'SPELLING' ? (
                <InputHandler
                    updateInput={updateInput}
                    keyList={{
                        bannedList: BANNED_KEYS,
                        allowedList: [],
                    }}></InputHandler>
            ) : (
                <InputHandler
                    updateInput={updateInput}
                    keyList={{
                        bannedList: [],
                        allowedList: ['Space'],
                    }}></InputHandler>
            )}
            <div className="relative">
                <div
                    lang="en"
                    className="flex flex-col items-center justify-center pb-1 pt-4">
                    {settingConfig.showPhonetic && (
                        <p className="mt-5 text-2xl">/{phonetic}/</p>
                    )}
                    <div className="tooltip-info mt-2 relative w-fit bg-transparent p-0 leading-normal shadow-none dark:bg-transparent tooltip">
                        {renderDisplayWords()}
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
                {settingConfig.showExample && (
                    <div className="examples py-4 text-3xl mb-10">
                        <p className="my-3 italic">{highLightExample()}</p>
                        <p className="text-2xl my-3 italic">{example_zh}</p>
                    </div>
                )}
            </div>
        </>
    );
};
