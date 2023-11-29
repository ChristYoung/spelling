import { useRef, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import { useDispatch, useSelector } from 'react-redux';

import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { HighLightText } from '../components/widgets/HighLightText';
import { HornIcon } from '../components/widgets/HornIcon';
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';
import { getAllWordsListInDBSelector } from '../store/wordsReducer/wordsSlice';
import { WordsItem } from '../types';

export const Governance: React.FC = () => {
    const wordsList = useSelector(getAllWordsListInDBSelector);
    const enRef = useRef<HTMLTextAreaElement>(null);
    const zhRef = useRef<HTMLTextAreaElement>(null);
    const drawerOpenCheckBoxRef = useRef<HTMLInputElement>(null);
    const { update } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const [selectedWordItem, setSelectedWordItem] = useState<WordsItem>(null);
    const dispatch = useDispatch();
    const { deleteRecord, clear } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);

    const onDeleteWord = (w: WordsItem) => {
        deleteRecord(w.id).then(e => console.log(e));
    };

    const openDetailsDrawer = (w: WordsItem) => {
        setSelectedWordItem(w);
    };

    const removeExample = (_index: number) => {
        const currentExamples = [...selectedWordItem.examples];
        const newExamples = currentExamples.filter((_, i) => i !== _index);
        // TODO: 删除单词后的例句后需要刷新下页面, 待研究如何解决, 可能将数据库的更新操作方到hooks中去, 目前暂时使用刷新的方式.
        update({ ...selectedWordItem, examples: newExamples }).then(() => {
            setSelectedWordItem({ ...selectedWordItem, examples: newExamples });
        });
    };

    const addExample = () => {
        const en = (enRef.current as HTMLTextAreaElement).value;
        const zh = (zhRef.current as HTMLTextAreaElement).value;
        update({
            ...selectedWordItem,
            examples: [...selectedWordItem.examples, { en, zh }],
        }).then(() => {
            setSelectedWordItem({
                ...selectedWordItem,
                examples: [...selectedWordItem.examples, { en, zh }],
            });
        });
    };

    const onCloseDrawer = () => {
        setSelectedWordItem(null);
        enRef.current.value = '';
        zhRef.current.value = '';
    };

    return (
        <div className="__Governance drawer drawer-end">
            <input
                id="my-drawer"
                ref={drawerOpenCheckBoxRef}
                onChange={() => {
                    const drawerRefChecked =
                        drawerOpenCheckBoxRef.current.checked;
                    if (!drawerRefChecked) {
                        onCloseDrawer();
                    }
                }}
                type="checkbox"
                className="drawer-toggle"
            />
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
                                            <label
                                                htmlFor="my-drawer"
                                                className="link link-neutral drawer-button"
                                                onClick={() =>
                                                    openDetailsDrawer(w)
                                                }>
                                                View Details
                                            </label>
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

            {/* drawer Content */}
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"></label>
                {selectedWordItem && (
                    <div className="menu p-4 w-[50%] min-h-full bg-white text-base-content pt-32 text-3xl overflow-x-hidden">
                        <p className="text-6xl italic font-bold w-full break-words mt-10">
                            {selectedWordItem.word}
                        </p>
                        <p className="text-3xl w-full break-words mt-5">
                            <HornIcon
                                word={selectedWordItem.word}
                                phonetic={selectedWordItem.phonetic}
                            />
                        </p>
                        <p className="text-3xl w-full break-words mt-5">
                            {selectedWordItem.explanations}
                        </p>
                        <div className="examples_containers mt-10">
                            {selectedWordItem.examples.map((s, i) => {
                                return (
                                    <div
                                        className="examples_item border-b pb-4 relative"
                                        key={`${i}_example`}>
                                        <p className="text-2xl w-full break-words italic">
                                            <HighLightText
                                                example={s.en}
                                                word={selectedWordItem.word}
                                            />
                                        </p>
                                        <p className="text-2xl w-full break-words italic">
                                            {s.zh}
                                        </p>
                                        <button
                                            className="btn btn-circle btn-outline absolute top-5 left-0"
                                            onClick={() => removeExample(i)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                );
                            })}
                            <div className="mt-10">
                                <div className="input_box">
                                    <textarea
                                        ref={enRef}
                                        className="textarea textarea-bordered block w-full text-xl mb-10"
                                        placeholder="Input the English Example"></textarea>
                                    <textarea
                                        ref={zhRef}
                                        className="textarea textarea-bordered block w-full text-xl"
                                        placeholder="Input the Chinese Example"></textarea>
                                </div>
                                <button
                                    className="btn btn-outline btn-success text-xl mt-10"
                                    onClick={addExample}>
                                    Add Examples
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
