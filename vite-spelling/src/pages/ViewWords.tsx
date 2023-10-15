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
            <ul className="text-4xl">
                {words.map(w => {
                    return (
                        <li
                            key={w.word}
                            className="flex">
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
