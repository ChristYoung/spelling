import { HornIcon } from './icons/HornIcon';

export interface AudioPlaysProps extends React.HTMLAttributes<HTMLDivElement> {
    audioUrl: string;
    wordText: string;
    explanation?: string; // 释义
    example?: string; // 例句
    size?: 'sm' | 'base' | 'lg';
}

export const AudioPlays: React.FC<AudioPlaysProps> = (
    props: AudioPlaysProps,
) => {
    const { audioUrl, wordText, explanation, size = 'lg' } = props;
    return (
        <div
            className={`flex w-full text-${size} items-center justify-between`}>
            <div className="flex-1">
                <p className="mb-5 text-left">{wordText}</p>
                <p className="text-2xl text-left">{explanation}</p>
            </div>
            <div>
                <HornIcon audioUrl={audioUrl} />
            </div>
        </div>
    );
};
