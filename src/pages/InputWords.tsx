import React, { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';

import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { fetchWordSuggestions, useDebounce } from '../hooks';
import { OutPutEntriesItem } from '../types';

export const InputWords: React.FC = () => {
    const { add } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const [valueList, setValueList] = useState<string[]>([]);
    const [entries, setEntries] = useState<OutPutEntriesItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    // const onSubmitWords = async () => {
    //     setLoading(true);
    //     const words = value.current.trim().split('\n');
    //     if (!value.current) {
    //         setLoading(false);
    //         return;
    //     }
    //     const wordsToAdd: WordsItem[] = words.map(word => {
    //         return {
    //             word,
    //             created_timestamp: 0,
    //             familiar: false,
    //         };
    //     });

    //     for (const w of wordsToAdd) {
    //         // 调用有道api获取单词的释义, 存入到数据库中.
    //         const { phonetic, example, explanations, example_zh } =
    //             await fetchWordDetails(w);
    //         w.phonetic = phonetic;
    //         w.example = example;
    //         w.explanations = explanations;
    //         w.example_zh = example_zh;
    //     }
    //     for (const word of wordsToAdd) {
    //         word.created_timestamp = getDateString();
    //         await add(word);
    //     }
    //     setLoading(false);
    // };

    const handleInputChange = useDebounce(
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            const requestString = e.target.value;
            const suggestions = await fetchWordSuggestions(requestString);
            setEntries(suggestions);
            setLoading(false);
        },
        500,
    );

    return (
        <div className="__InputWords text-6xl text-slate-600 flex">
            <div className="input_area flex w-full">
                <div className="select_area flex-1 relative">
                    <input
                        type="text"
                        maxLength={26}
                        onChange={e => {
                            setLoading(true);
                            handleInputChange(e);
                        }}
                        className="px-10 py-3 w-full font-mono italic bg-slate-50  dark:bg-base-dark dark:text-white border-b-2 border-slate-200 dark:border-slate-700 focus:outline-none tracking-wider"
                    />
                    <div
                        className="select_panel absolute top-[60px] left-0 right-0 bg-white"
                        style={{
                            boxShadow:
                                '0 100px 80px #322e8112, 0 41.7776px 33.4221px #322e810d, 0 22.3363px 17.869px #322e810b, 0 12.5216px 10.0172px #322e8109, 0 6.6501px 5.32008px #322e8107, 0 2.76726px 2.21381px #322e8105',
                        }}>
                        <ul className="font-mono italic">
                            {entries?.length > 0 &&
                                entries.map((e, _index) => {
                                    return (
                                        <li
                                            key={`${e.entry}_${_index}`}
                                            className="panel_item flex flex-col border-b-2 border-dashed border-slate-300 px-10 py-8 text-5xl transition-all duration-300 cursor-pointer hover:bg-slate-400">
                                            <p className="text-left w-full">
                                                {e.entry}
                                            </p>
                                            <p className="text-xl text-left">
                                                {e.explain}
                                            </p>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <div className="display_area flex-1"></div>
            </div>
        </div>
    );
};
