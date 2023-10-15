import { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import { WordsItem } from '../types';
import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';

export const ViewWords: React.FC = () => {
    const { getAll } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const [words, setWords] = useState<WordsItem[]>([]);

    useEffect(() => {
        getAll().then(wordsFromDB => setWords(wordsFromDB));
    }, []);

    return (
        <div className="__ViewWords">
            <ul>
                {words.map(w => {
                    return <li key={w.word}>{w.word}</li>;
                })}
            </ul>
        </div>
    );
};
