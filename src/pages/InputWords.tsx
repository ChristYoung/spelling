import React, { useRef, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { fetchWordDetails } from '../hooks';
import { WordsItem } from '../types';
import { getDateString } from '../utils';

// import Typo from 'typo-js';

// const dictionary = new Typo('en_US');

export const InputWords: React.FC = () => {
    const { add } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const value = useRef<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const onSubmitWords = async () => {
        setLoading(true);
        const words = value.current.trim().split('\n');
        if (!value.current) {
            setLoading(false);
            return;
        }
        // TODO: 验证单词拼写是否正确.
        // something...

        const wordsToAdd: WordsItem[] = words.map(word => {
            return {
                word,
                created_timestamp: 0,
                familiar: false,
            };
        });

        for (const w of wordsToAdd) {
            // 调用有道api获取单词的释义, 存入到数据库中.
            const { phonetic, example, explanations, example_zh } =
                await fetchWordDetails(w);
            w.phonetic = phonetic;
            w.example = example;
            w.explanations = explanations;
            w.example_zh = example_zh;
        }
        for (const word of wordsToAdd) {
            word.created_timestamp = getDateString();
            await add(word);
        }
        setLoading(false);
    };
    return (
        <div className="__InputWords text-6xl text-slate-600">
            <h3 className="dark:text-white mb-10">
                Please Input the words that you want to review later.
            </h3>
            <textarea
                className="textarea textarea-bordered textarea-lg text-6xl width-full"
                placeholder="Any words"
                rows={10}
                onChange={e => {
                    value.current = e.target.value;
                }}></textarea>
            <div>
                <button
                    className="btn btn-success btn-lg btn-wide"
                    onClick={onSubmitWords}>
                    <span
                        className={
                            loading ? 'loading loading-spinner' : ''
                        }></span>
                    {loading ? 'loading' : 'Save'}
                </button>
            </div>
        </div>
    );
};
