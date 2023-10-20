export interface WordsItem {
    word: string;
    familiar: boolean;
    created_timestamp?: number;
    explanation?: string; // 释义
    example?: string; // 例句
}
