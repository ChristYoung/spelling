import { useSelector } from 'react-redux';

import { HornIcon } from '../components/icons/HornIcon';
import { getAllWordsListInDBSelector } from '../store/wordsReducer/wordsSlice';

export const Governance: React.FC = () => {
    const wordsList = useSelector(getAllWordsListInDBSelector);

    return (
        <div className="__Governance">
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
                                    <tr>
                                        <td className="text-2xl">{w.id}</td>
                                        <td className="text-2xl">{w.word}</td>
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
                                            <a className="link link-error">
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
