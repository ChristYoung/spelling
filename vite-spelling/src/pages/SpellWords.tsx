import { useSelector } from 'react-redux';
import { SpellCard } from '../components/SpellCard';
import {
    getCurrentWordIndexSelector,
    getCurrentWordSelector,
    getWordsListSelector,
} from '../store/wordsReducer/wordsSlice';
import { SpellOperator } from '../components/SpellOperator';
import { KeyBoard } from '../components/KeyBoard';
import { useRef, useState } from 'react';
import { WordsItem } from '../types';

export const SpellWords: React.FC = () => {
    const currentWord = useSelector(getCurrentWordSelector);
    const wordsList = useSelector(getWordsListSelector);
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const wrongWords = useRef<WordsItem[]>([]);
    const progress =
        currentWordIndex + 1 >= wordsList.length
            ? 100
            : (currentWordIndex / wordsList.length) * 100;
    const keyDownHandler = (char: string) => setChar(char);
    const [char, setChar] = useState('');
    const handleFinishSpell = (
        wrongWord: WordsItem,
        status: 'CORRECT' | 'WRONG',
    ) => {
        if (status === 'WRONG') {
            wrongWords.current.push(wrongWord);
        } else {
            if (currentWordIndex === wordsList.length - 1) {
                if (wrongWords.current.length > 0) {
                    alert(
                        `拼写结束, 您错误的单词有: ${wrongWords.current.join(
                            ',',
                        )}`,
                    );
                } else {
                    alert('拼写结束, 全部正确！');
                }
            }
        }
    };
    return (
        <div className="container mx-auto flex h-[500px] flex-1 flex-col items-center justify-center pb-5">
            <div className="container relative mx-auto flex h-full flex-col items-center">
                <div className="container flex flex-grow items-center justify-center">
                    <div className="container flex h-full w-full flex-col items-center justify-center">
                        <div className="container flex h-24 w-full shrink-0 grow-0 justify-between px-12 pt-10">
                            <progress
                                className="progress w-full progress-accent"
                                value={progress}
                                max="100"></progress>
                        </div>
                        <div className="container flex flex-grow flex-col items-center justify-center">
                            <div className="relative flex w-full justify-center">
                                <SpellCard
                                    {...currentWord}
                                    onFinishSpell={handleFinishSpell}
                                    char={char}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SpellOperator />
            <KeyBoard onKeyDown={keyDownHandler} />
        </div>
    );
};
