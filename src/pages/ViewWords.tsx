import { useSelector } from 'react-redux';
import { HornIcon } from '../components/icons/HornIcon';
import { getWordsListSelector } from '../store/wordsReducer/wordsSlice';

export const ViewWords: React.FC = () => {
    const words = useSelector(getWordsListSelector);

    return (
        <div className="__ViewWords">
            <ul className="text-4xl font-mono">
                {words.map((w, _index) => {
                    return (
                        <li
                            key={w.word}
                            className="flex py-5 px-9 mb-5
                            shadow-custom bg-white cursor-pointer rounded-md text-gray-500
                            dark:bg-little-dark dark:text-gray-50">
                            <div
                                className={`flex w-full text-lg items-center justify-between`}>
                                <div className="flex-1">
                                    <p className="mb-5 text-left text-3xl">
                                        <em className="mr-5">{_index}.</em><span className="italic">{w.word}</span>
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
    );
};
