import { DB_NAME, DB_WORDS_TABLE_NAME } from './db.enum';

export const DBConfig = {
    name: DB_NAME.ALL_WORDS_DB,
    version: 1,
    objectStoresMeta: [
        {
            store: DB_WORDS_TABLE_NAME.WORDS,
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'word', keypath: 'word', options: { unique: true } },
                {
                    name: 'created_timestamp', // 单词创建的时间
                    keypath: 'created_timestamp',
                    options: { unique: false },
                },
                {
                    name: 'familiar', // 单词是否掌握
                    keypath: 'familiar',
                    options: { unique: false },
                },
                {
                    name: 'explanation', // 单词释义
                    keypath: 'explanation',
                    options: { unique: false },
                },
                {
                    name: 'example', // 单词例句
                    keypath: 'example',
                    options: { unique: false },
                },
                {
                    name: 'example_zh',
                    keypath: 'example_zh',
                    options: { unique: false },
                },
                {
                    name: 'phonetic', // 单词音标
                    keypath: 'phonetic',
                    options: { unique: false },
                },
            ],
        },
    ],
};
