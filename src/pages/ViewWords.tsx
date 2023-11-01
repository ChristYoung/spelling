import { useSelector, useDispatch } from 'react-redux';
import { HornIcon } from '../components/icons/HornIcon';
import { getWordsListSelector } from '../store/wordsReducer/wordsSlice';
import { useRef, useState } from 'react';
import { WordsItem } from '../types';
import { CiPickerEmpty } from 'react-icons/ci';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';

export const ViewWords: React.FC = () => {
    const words = useSelector(getWordsListSelector);
    const dispatch = useDispatch();
    const [pickStatus, setPickStatus] = useState<boolean>(false);
    const pickedWordIds = useRef<Map<number, boolean>>(
        new Map<number, boolean>(),
    );
    const handleCheckBoxChange = (w: WordsItem) => {
        if (pickedWordIds.current.get(w.id)) {
            pickedWordIds.current.set(w.id, false);
        } else {
            pickedWordIds.current.set(w.id, true);
        }
    };
    const handlePickAll = () => {
        if (pickStatus) {
            if (pickedWordIds.current.size > 0) {
                setPickStatus(false);
                const pickedWordsItems = words.filter(w =>
                    pickedWordIds.current.get(w.id),
                );
                dispatch({
                    type: WORDS_SAGA.RESET_WORDS,
                    payload: pickedWordsItems,
                });
            }
        } else {
            setPickStatus(true);
        }
    };

    return (
        <>
            <div className="__ViewWords">
                <ul className="text-4xl font-mono">
                    {words.map((w, _index) => {
                        return (
                            <li
                                key={w.word}
                                className="flex py-5 px-20 mb-5
                                shadow-custom bg-white cursor-pointer rounded-md text-gray-500
                                dark:bg-little-dark dark:text-gray-50 relative">
                                {pickStatus && (
                                    <div className="form-control absolute left-5 top-[20%]">
                                        <label className="cursor-pointer label">
                                            <input
                                                type="checkbox"
                                                checked={pickedWordIds.current.get(
                                                    w.id,
                                                )}
                                                onChange={() =>
                                                    handleCheckBoxChange(w)
                                                }
                                                className="checkbox checkbox-accent"
                                            />
                                        </label>
                                    </div>
                                )}
                                <div
                                    className={`flex w-full text-lg items-center justify-between`}>
                                    <div className="flex-1">
                                        <p className="mb-5 text-left text-3xl">
                                            <em className="mr-5">{_index}.</em>
                                            <span className="italic text-4xl font-bold">
                                                {w.word}
                                            </span>
                                        </p>
                                        <p className="text-2xl text-left">
                                            {w.explanations}
                                        </p>
                                    </div>
                                    <div>
                                        <HornIcon word={w.word} />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button
                className="btn btn-circle btn-lg btn-accent text-3xl fixed right-20 bottom-20"
                onClick={handlePickAll}>
                {pickStatus ? <BiSolidBadgeCheck /> : <CiPickerEmpty />}
            </button>
        </>
    );
};
