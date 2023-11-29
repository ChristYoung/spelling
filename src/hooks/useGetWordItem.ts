import { WORDS_COMPLEX_EXPLANATION, WORDS_SIMPLE_SUGGESTIONS } from '../enum';
import { OutPutEntriesItem, WordsItem } from '../types';
import { fetchRequest } from '../utils';

export const fetchWordDetails = async (w: WordsItem) => {
    const response = await fetchRequest<unknown>({
        url: `${WORDS_COMPLEX_EXPLANATION}${w.word}`,
    });
    const ecDicWord = response['ec']['word'][0];
    const blngDicWord = response['blng_sents_part'];
    const phonetic = ecDicWord['usphone'];
    const explanations = ecDicWord['trs'][0]['tr'][0]['l']['i'];
    const example = blngDicWord['sentence-pair'][0]['sentence'];
    const example_zh = blngDicWord['sentence-pair'][0]['sentence-translation'];
    return { phonetic, explanations, example, example_zh };
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
