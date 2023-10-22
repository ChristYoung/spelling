import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { AUDIO_SRC } from '../../enum';

export interface HornIconProps extends React.HTMLAttributes<HTMLDivElement> {
    word: string;
    autoPlay?: boolean;
    size?: 'sm' | 'base' | 'lg';
}

const SIZE_MAP: Record<
    'sm' | 'base' | 'lg',
    { width: number; height: number }
> = {
    sm: { width: 10, height: 10 },
    base: { width: 30, height: 30 },
    lg: { width: 50, height: 50 },
};

const AudioPlayer = (props, ref) => {
    const { className, style, size = 'base', word, autoPlay } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const audioUrl = `${AUDIO_SRC}${word}`;
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        if (autoPlay) {
            setIsPlaying(true);
        }
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audioUrl, autoPlay]);

    useEffect(() => {
        const audio = audioRef.current as HTMLAudioElement;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [isPlaying]);

    useImperativeHandle(ref, () => ({
        play() {
            setIsPlaying(true);
        },
        pause() {
            setIsPlaying(false);
        },
    }));

    return (
        <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className={`__HornIcon text-${size} focus:outline-none dark:fill-gray-400 dark:opacity-80 cursor-pointer text-gray-600 ${className}`}>
            <svg
                className={className}
                {...SIZE_MAP[size]}
                style={{ ...style }}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor">
                <path d="M417.28 164.198c-12.646 0-25.293 5.325-37.683 15.821L169.779 358.35H76.8c-42.342 0-76.8 34.457-76.8 76.8v204.8c0 42.342 34.458 76.8 76.8 76.8h92.98l209.817 178.33c12.339 10.495 25.037 15.82 37.683 15.82a40.755 40.755 0 0034.304-18.534c6.093-9.165 9.216-20.89 9.216-34.816v-640c0-36.864-21.862-53.402-43.52-53.402zM51.2 640V435.2a25.6 25.6 0 0125.6-25.6h76.8v256H76.8A25.6 25.6 0 0151.2 640zm358.4 213.453l-204.8-174.08V395.827l204.8-174.08v631.706z"></path>
            </svg>
        </button>
    );
};

export const HornIcon = forwardRef(AudioPlayer);
