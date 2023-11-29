import { WORDS_COMPLEX_EXPLANATION, WORDS_SIMPLE_SUGGESTIONS } from '../enum';
import { OutPutEntriesItem, WordsItem } from '../types';
import { fetchRequest } from '../utils';

export const fetchWordDetails = async (w: WordsItem) => {
    const response = await fetchRequest<unknown>({
        url: `${WORDS_COMPLEX_EXPLANATION}/${w.word}`,
    });
    return response;
};

export const fetchWordSuggestions = async (
    letter: string,
    maxLen: number = 5,
) => {
    const response = await fetchRequest<unknown>({
        url: `${WORDS_SIMPLE_SUGGESTIONS}${letter}`,
    });
    const entries =
        response['data'] && response['data']['entries']
            ? (response['data']['entries'] as OutPutEntriesItem[])
            : [];
    if (entries.length > 0) {
        return entries
            .filter(e => e.explain)
            .filter(e => e.entry.length >= 3)
            .filter((_, i) => i <= maxLen);
    }
    return [];
};
