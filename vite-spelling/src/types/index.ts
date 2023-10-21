export interface WordsItem {
    word: string;
    familiar: boolean;
    created_timestamp?: number;
    explanations?: string[]; // 释义
    example?: string; // 例句
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

export interface SoundResource {
    key: string;
    name: string;
    filename: string;
}
