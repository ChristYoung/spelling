import { useKeySound } from '../hooks/useKeySound';

export interface KeyBoardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onKeyDown'> {
    char?: string;
    onKeyDown: (char: string) => void;
}

export const KeyBoard: React.FC<KeyBoardProps> = (props: KeyBoardProps) => {
    const { char, onKeyDown } = props;
    const keyboard_alphabet = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', '/'],
    ];
    const [playTypingSound, playWrongSound, playCorrectSound] = useKeySound();
    const renderLetter = (row: string[]) => {
        return row.map(rowItem => (
            <kbd
                key={`rowItem_${rowItem}`}
                onClick={() => {
                    onKeyDown(rowItem);
                    playTypingSound();
                }}
                className="kbd select-none active:bg-violet-700">
                {rowItem}
            </kbd>
        ));
    };
    return (
        <div className="__KeyBoard text-5xl mt-8">
            {keyboard_alphabet.map((row, i) => {
                return (
                    <div
                        key={`row_${i}`}
                        className="flex justify-center gap-1 my-1 w-full cursor-pointer">
                        {renderLetter(row)}
                    </div>
                );
            })}
        </div>
    );
};
