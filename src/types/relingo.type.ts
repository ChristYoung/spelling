export interface OutBaseRelingo {
    code: number;
    message: string;
    data: OutRelingoWordItem[];
}

export interface OutRelingoWordItem {
    word: string;
    variant: Variant;
    phonetic: Phonetic;
    wordFrequency: number;
    definition: TopLevelDefinition[];
    translations: Translation[];
    mastered: boolean;
    stared: boolean;
    sentences: unknown[];
    needRevise: boolean;
}

export interface TopLevelDefinition {
    partOfSpeech: string;
    language: string;
    definitions: DefinitionDefinition[];
    synonyms: unknown[];
    antonyms: unknown[];
}

export interface DefinitionDefinition {
    definition: string;
    examples: string[];
}

export interface Phonetic {
    us: string[];
    uk: string[];
}

export interface Translation {
    target: string;
    pos: string;
    score: number;
}

export interface Variant {
    diagnosis: string[];
    diagnoses: string[];
}
