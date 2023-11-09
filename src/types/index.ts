export interface WordsItem {
    word: string;
    familiar: boolean;
    created_timestamp?: number;
    explanations?: string[]; // 释义
    examples?: ExampleItem[];
    id?: number;
    phonetic?: string; // 音标
}

export interface ExampleItem {
    zh: string;
    en: string;
}

export interface OutputYouDaoBaseResponse<T> {
    msg: 'success' | 'error' | 'failed';
    code: number;
    data?: T;
    query?: string;
    language?: 'en' | 'zh';
    type?: string;
}

export interface OutputYouDaoExplanationData {
    entries: Array<OutPutEntriesItem>;
}

export interface OutPutEntriesItem {
    explain: string;
    entry?: string;
}

export * from './filter.type';
export * from './relingo.type';
