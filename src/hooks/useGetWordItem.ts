import { WORDS_COMPLEX_EXPLANATION } from '../enum';
import { WordsItem } from '../types';
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
