import { useSelector, useDispatch } from 'react-redux';
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
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';

export const SpellWords: React.FC = () => {
    const dispatch = useDispatch();
    const currentWord = useSelector(getCurrentWordSelector);
    const wordsList = useSelector(getWordsListSelector);
    const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    const wrongWords = useRef<WordsItem[]>([]);
    const wrongWordsDialogRef = useRef<HTMLDialogElement>(null);
    const progress =
        currentWordIndex + 1 >= wordsList.length
            ? 100
            : (currentWordIndex / wordsList.length) * 100;
    const keyDownHandler = (char: string) => setChar(char);
    const [char, setChar] = useState('');
    const isInWrongWordList = (word: WordsItem) =>
        wrongWords.current.some(wrongWord => wrongWord.word === word.word);
    const handleFinishSpell = (
        wrongWord: WordsItem,
        status: 'CORRECT' | 'WRONG',
    ) => {
        if (status === 'WRONG') {
            if (!isInWrongWordList(wrongWord)) {
                wrongWords.current.push(wrongWord);
            }
        } else {
            if (currentWordIndex === wordsList.length - 1) {
                wrongWordsDialogRef.current.showModal();
            }
        }
    };
    const confirmBtnClicked = () => {
        if (wrongWords.current.length > 0) {
            dispatch({ type: WORDS_SAGA.RESET_WORDS, payload: wrongWords.current });
        } else {
            dispatch({ type: WORDS_SAGA.RESET_ORIGINAL_WORDS });
        }
        wrongWords.current = [];
        wrongWordsDialogRef.current.close();
    };
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
                                 <span>{(currentWordIndex + 1) + '/' + wordsList.length}</span>
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
                <SpellOperator onIgnoreWord={(w: WordsItem) => handleFinishSpell(w, 'WRONG')} />
                <KeyBoard onKeyDown={keyDownHandler} />

                <dialog
                    id="wrong_words_dialog"
                    ref={wrongWordsDialogRef}
                    className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="py-4 text-2xl">
                            { wrongWords?.current?.length > 0 && <p className="mt-10 text-3xl">
                                The following words are spelled incorrectly,
                                rewrite them?
                            </p> }
                            <div className="text-2xl mt-10 flex flex-wrap">
                                {wrongWords.current.length > 0 ? (
                                    wrongWords.current.map(w => (
                                        <span
                                            key={`_wrong_word_${w.word}`}
                                            className="text-2xl ml-6 mb-3 block border-solid border-cyan-600 border-2 p-5 rounded-full cursor-pointer">
                                            {w.word}
                                        </span>
                                    ))
                                ) : (
                                    <div className="w-full text-center">🎉🎉🎉 Congratulations! No wrong words! 🎉🎉🎉</div>
                                )}
                            </div>
                        </div>
                        <div className="modal-action">
                            <div
                                className="btn"
                                onClick={confirmBtnClicked}>
                                Confirm
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
};
