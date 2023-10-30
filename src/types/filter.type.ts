export interface FilterWordsType {
    // range?: [number, number]; // Tuple Type.
    startRange?: number;
    endRange?: number;
    timeFilter?: -7 | -30 | -90;
    familiarFilter?: 'all' | 'only_familiar' | 'only_unfamiliar';
}
