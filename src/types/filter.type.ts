export interface FilterWordsType {
    // range?: [number, number]; // Tuple Type.
    startRange?: number;
    endRange?: number;
    timeFilter?: 'last_7d' | 'last_30d' | 'last_90d';
    familiarFilter?: 'all' | 'only_familiar' | 'only_unfamiliar';
}
