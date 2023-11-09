import { useIndexedDB } from 'react-indexed-db-hook';
import { useDispatch, useSelector } from 'react-redux';

import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { HornIcon } from '../components/icons/HornIcon';
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';
import { getAllWordsListInDBSelector } from '../store/wordsReducer/wordsSlice';
import { WordsItem } from '../types';

export const Governance: React.FC = () => {
    const wordsList = useSelector(getAllWordsListInDBSelector);
    const dispatch = useDispatch();
    const { deleteRecord, clear } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);

    const onDeleteWord = (w: WordsItem) => {
        deleteRecord(w.id).then(e => console.log(e));
    };

    // const changeExample = (w: WordsItem) => {};

    return (
        <div className="__Governance">
            <div className="view_bar flex">
                <button
                    className="btn btn-info mb-10 text-xl mx-4"
                    onClick={() => {
                        const wordsString = wordsList
                            .map(w => w.word)
                            .join('\n');
                        console.log(wordsString);
                    }}>
                    Export in Console panel
                </button>
                <button
                    className="btn btn-error mb-10 text-xl mx-4"
                    onClick={() => {
                        confirm('Are you sure you want to clear all the words?')
                            ? clear().then(() => {
                                  dispatch({ type: WORDS_SAGA.CLEAR_WORDS });
                              })
                            : null;
                    }}>
                    Remove all
                </button>
                <input
                    type="text"
                    placeholder="Search for any words"
                    className="input input-bordered w-full max-w-xs text-xl"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-lg">
                    <thead className="text-3xl">
                        <tr>
                            <th>Uid</th>
                            <th>Word</th>
                            <th>Phonetic</th>
                            <th>Operators</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wordsList?.length > 0 &&
                            wordsList.map(w => {
                                return (
                                    <tr key={`${w.id}_${w.word}`}>
                                        <td className="text-2xl">{w.id}</td>
                                        <td className="text-3xl italic">
                                            {w.word}
                                        </td>
                                        <td className="text-2xl flex items-center">
                                            <span>/{w.phonetic}/</span>
                                            <span className="ml-16">
                                                <HornIcon word={w.word} />
                                            </span>
                                        </td>
                                        <td className="text-2xl">
                                            <a className="link link-neutral">
                                                View Details
                                            </a>{' '}
                                            |{' '}
                                            <a className="link link-neutral">
                                                Change Example
                                            </a>{' '}
                                            |{' '}
                                            <a
                                                className="link link-error"
                                                onClick={() => onDeleteWord(w)}>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
