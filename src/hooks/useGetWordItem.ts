import { WORDS_COMPLEX_EXPLANATION } from '../enum';
import { OutBaseRelingo, WordsItem } from '../types';
import { fetchRequest } from '../utils';

export const fetchWordDetailsByRelingos = async (w: WordsItem) => {
    const response = await fetchRequest<
        OutBaseRelingo[]
    >({
        url: `${WORDS_COMPLEX_EXPLANATION}${w.word}`,
    });
    // const explanations = explanationsResponse?.data?.entries.map(
    //     e => e.explain,
    // );
};
