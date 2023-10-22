import { useCallback, useState } from 'react';
import { WordUpdateAction, WordsItem } from '../types';
import { useKeySound } from '../hooks/useKeySound';
import { InputHandler } from './InputHandler';

export const SpellCard: React.FC<WordsItem> = (props: WordsItem) => {
    const { word, explanations, familiar } = props;
    const [displayWords, setDisplayWords] = useState<string[]>([]);
    const [playTypingSound, playWrongSound, playCorrectSound] = useKeySound();
    const updateInput = useCallback((letter: string) => {
        const displayWordsLen = displayWords.length;
        const isCorrect = letter === word[displayWordsLen];
        const isLastLetter = displayWordsLen === word.length - 1;
        if (isCorrect) {
            // 打字音效
            playTypingSound();
            if (isLastLetter) {
                // 打字音效
                playCorrectSound();
                setDisplayWords(prev => prev.slice(0, -1));
            }
        }
        setDisplayWords(prev => [...prev, letter]);
    }, []);
    return (
        <>
            <span>{displayWords}</span>
            <InputHandler updateInput={updateInput}></InputHandler>
        </>
    );
};
