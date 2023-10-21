import { useState } from 'react';
import { WordsItem } from '../types';

export const SpellCard: React.FC<WordsItem> = (props: WordsItem) => {
    const { word, explanations, familiar } = props;
    const [keyboardList, setKeyboardList] = useState<string[]>([]);
    return <div className="__SpellCard">SpellCard component works!</div>;
};
