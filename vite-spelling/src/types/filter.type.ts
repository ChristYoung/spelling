export interface FilterWordsType {
    range?: [number, number];
    timeFilter?: 'last_7d' | 'last_30d' | 'last_90d';
    onlyFamiliar?: boolean;
}
