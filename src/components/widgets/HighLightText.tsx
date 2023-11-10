export interface HighLightTextProps
    extends React.HTMLAttributes<HTMLDivElement> {
    example: string;
    word: string;
}

export const HighLightText: React.FC<HighLightTextProps> = (
    props: HighLightTextProps,
) => {
    const { example, word } = props;
    const _index = example
        ? example.toLowerCase().indexOf(word.toLowerCase())
        : -1;
    if (_index < 0) {
        return <>{example}</>;
    }
    const before = example.slice(0, _index);
    const after = example.slice(_index + word.length);
    const highLight = example.slice(_index, _index + word.length);
    return (
        <>
            {before}
            <span className="text-orange-700 font-bold">{highLight}</span>
            {after}
        </>
    );
};
