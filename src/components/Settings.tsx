import { useState } from 'react';
import {
    SettingState,
    getSettingSelector,
} from '../store/settingReducer/settingSlice';
import { useSelector } from 'react-redux';

export interface SettingsProps {
    onConfirm: (params: SettingState) => void;
}

export const Settings: React.FC<SettingsProps> = (props: SettingsProps) => {
    const { onConfirm } = props;
    const settingConfig = useSelector(getSettingSelector);
    const [configs, setConfigs] = useState<SettingState>(settingConfig);

    return (
        <div className="modal-box w-11/12 max-w-5xl px-10">
            <h3 className="text-3xl">Basic Setting</h3>
            <form method="dialog">
                <div className="py-4 text-2xl">
                    <ul className="mt-10">
                        <li className="flex items-center mb-10 justify-between px-10">
                            <p>Show phonetic:</p>
                            <div className="flex ml-5">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    onChange={() =>
                                        setConfigs({
                                            ...configs,
                                            showPhonetic: !configs.showPhonetic,
                                        })
                                    }
                                    checked={configs.showPhonetic}
                                />
                            </div>
                        </li>
                        <li className="flex items-center mb-10 justify-between px-10">
                            <p>Show Examples:</p>
                            <div className="flex ml-5">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    onChange={() =>
                                        setConfigs({
                                            ...configs,
                                            showExample: !configs.showExample,
                                        })
                                    }
                                    checked={configs.showExample}
                                />
                            </div>
                        </li>
                        <li className="flex items-center mb-10 justify-between px-10">
                            <p>Auto play pronunciation when spelling:</p>
                            <div className="flex ml-5">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    onChange={() =>
                                        setConfigs({
                                            ...configs,
                                            autoPlayWordPronunciation:
                                                !configs.autoPlayWordPronunciation,
                                        })
                                    }
                                    checked={configs.autoPlayWordPronunciation}
                                />
                            </div>
                        </li>
                        <li className="flex items-center mb-10 justify-between px-10">
                            <p>Only show explanation when spelling:</p>
                            <div className="flex items-center ml-5">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    onChange={() =>
                                        setConfigs({
                                            ...configs,
                                            onlyShowExplanationWhenSpelling:
                                                !configs.onlyShowExplanationWhenSpelling,
                                        })
                                    }
                                    checked={
                                        configs.onlyShowExplanationWhenSpelling
                                    }
                                />
                            </div>
                        </li>
                        <li className="flex items-center mb-10 justify-between px-10">
                            <p>Mute key board:</p>
                            <div className="flex items-center ml-5">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    onChange={() =>
                                        setConfigs({
                                            ...configs,
                                            muteKeyBoardSound:
                                                !configs.muteKeyBoardSound,
                                        })
                                    }
                                    checked={configs.muteKeyBoardSound}
                                />
                            </div>
                        </li>
                        <li className="flex items-center justify-between px-10">
                            <p>Random order:</p>
                            <div className="flex items-center ml-5">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    onChange={() =>
                                        setConfigs({
                                            ...configs,
                                            randomOrder: !configs.randomOrder,
                                        })
                                    }
                                    checked={configs.randomOrder}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="modal-action">
                    {/* if there is a button, it will close the modal */}
                    <div
                        className="btn text-xl"
                        onClick={() => {
                            onConfirm({ ...configs });
                        }}>
                        Confirm
                    </div>
                </div>
            </form>
        </div>
    );
};
