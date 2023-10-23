import { useSelector } from 'react-redux';
import { SpellCard } from '../components/SpellCard';
import { getCurrentWordSelector } from '../store/wordsReducer/wordsSlice';
import { SpellOperator } from '../components/SpellOperator';

export const SpellWords: React.FC = () => {
    const currentWord = useSelector(getCurrentWordSelector);
    // const wordsList = useSelector(getWordsListSelector);
    // const currentWordIndex = useSelector(getCurrentWordIndexSelector);
    return (
        <div className="container mx-auto flex h-full flex-1 flex-col items-center justify-center pb-5">
            <div className="container relative mx-auto flex h-full flex-col items-center">
                <div className="container flex flex-grow items-center justify-center">
                    <div className="container flex h-full w-full flex-col items-center justify-center">
                        <div className="container flex h-24 w-full shrink-0 grow-0 justify-between px-12 pt-10"></div>
                        <div className="container flex flex-grow flex-col items-center justify-center">
                            <div className="relative flex w-full justify-center">
                                <SpellCard {...currentWord} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SpellOperator />
        </div>
    );
};