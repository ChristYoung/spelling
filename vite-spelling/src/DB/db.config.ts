import { DB_NAME, DB_WORDS_TABLE_NAME } from './db.enum';

export const DBConfig = {
    name: DB_NAME.ALL_WORDS_DB,
    version: 1,
    objectStoresMeta: [
        {
            store: DB_WORDS_TABLE_NAME.WORDS,
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'word', keypath: 'word', options: { unique: false } },
                {
                    name: 'created_timestamp',
                    keypath: 'created_timestamp',
                    options: { unique: false },
                },
                {
                    name: 'familiar',
                    keypath: 'familiar',
                    options: { unique: false },
                },
            ],
        },
    ],
};
