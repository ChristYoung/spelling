import { useRef } from 'react';
import { AiFillNotification } from 'react-icons/ai';

export interface AudioPlaysProps extends React.HTMLAttributes<HTMLDivElement> {
    audioUrl: string;
    wordText: string;
    size?: 'sm' | 'base' | 'lg';
}

export const AudioPlays: React.FC<AudioPlaysProps> = (
    props: AudioPlaysProps,
) => {
    const { audioUrl, wordText, size = 'base' } = props;
    const sizeClass = size ? `text-${props.size}` : '';
    const audioRef = useRef(null);
    return (
        <div className={`flex ${sizeClass}`}>
            <span>{wordText}</span>
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
    );
};
