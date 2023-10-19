import { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import { WordsItem } from '../types';
import { DB_WORDS_TABLE_NAME } from '../DB/db.enum';
import { AudioPlays } from '../components/AudioPlays';
import { AUDIO_SRC } from '../enum/api.enum';

export const ViewWords: React.FC = () => {
    const { getAll } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const [words, setWords] = useState<WordsItem[]>([]);

    useEffect(() => {
        getAll().then(wordsFromDB => setWords(wordsFromDB));
    }, [getAll]);

    return (
        <div className="__ViewWords">
            <ul className="text-4xl font-mono">
                {words.map(w => {
                    return (
                        <li
                            key={w.word}
                            className="flex py-5 px-9 mb-5
                            shadow-custom bg-white cursor-pointer rounded-md text-gray-500
                            dark:bg-little-dark dark:text-gray-50">
                            <AudioPlays
                                wordText={w.word}
                                audioUrl={`${AUDIO_SRC}${w.word}`}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
