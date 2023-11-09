import { useIndexedDB } from 'react-indexed-db-hook';
import { useSelector } from 'react-redux';

import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { HornIcon } from '../components/icons/HornIcon';
import { getAllWordsListInDBSelector } from '../store/wordsReducer/wordsSlice';
import { WordsItem } from '../types';

export const Governance: React.FC = () => {
    const wordsList = useSelector(getAllWordsListInDBSelector);
    const { deleteRecord } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);

    const onDeleteWord = (w: WordsItem) => {
        deleteRecord(w.id).then(e => console.log(e));
    };

    // const changeExample = (w: WordsItem) => {};

    return (
        <div className="__Governance">
            <div className="view_bar flex">
                <button
                    className="btn btn-info mb-10 text-xl"
                    onClick={() => {
                        const wordsString = wordsList
                            .map(w => w.word)
                            .join('\n');
                        console.log(wordsString);
                    }}>
                    Export in Console panel
                </button>
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
