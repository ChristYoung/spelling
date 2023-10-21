import { useRef } from 'react';
import { AiFillNotification } from 'react-icons/ai';

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
    const { audioUrl, wordText, size, explanation } = props;
    const sizeClass = size ? `text-${props.size}` : 'base';
    const audioRef = useRef(null);
    return (
        <div
            className={`flex w-full ${sizeClass} items-center justify-between`}>
            <div className="flex-1">
                <p className="mb-5 text-left">{wordText}</p>
                <p className="text-2xl text-left">{explanation}</p>
            </div>
            <div>
                <AiFillNotification
                    className="cursor-pointer"
                    onClick={() => {
                        if (audioRef.current.paused) {
                            audioRef.current.play();
                        } else {
                            audioRef.current.pause();
                        }
                    }}
                />
                <audio
                    ref={audioRef}
                    src={audioUrl}
                    className="hidden"
                    controls
                />
            </div>
        </div>
    );
};