export interface WordsItem {
    word: string;
    familiar: boolean;
    created_timestamp?: number;
    explanations?: string[]; // 释义
    example?: string; // 例句
    example_zh?: string;
    id?: number;
    phonetic?: string; // 音标
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
    entries: Array<{
        explain: string;
        entry?: string;
    }>;
}

export * from './filter.type';
export * from './relingo.type';
