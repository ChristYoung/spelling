import { useRef } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { AiFillSetting } from 'react-icons/ai';
import { Filters } from './Filters';
import { useDispatch } from 'react-redux';
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';

export const Header: React.FC = () => {
    const settingDialogRef = useRef<HTMLDialogElement>(null);
    const dispatch = useDispatch();
    const openSettingDialog = () => {
        settingDialogRef.current.showModal();
    };

    return (
        <>
            <div className="fixed z-50 flex align-middle top-0 left-0 right-0 items-center justify-end px-12 py-6 bg-white shadow-custom dark:bg-base-dark">
                <div
                    className="text-5xl cursor-pointer"
                    onClick={openSettingDialog}>
                    <AiFillSetting />
                </div>
                <div>
                    <ThemeSwitch />
                </div>
            </div>

            {/* setting dialog */}
            <dialog
                id="setting_dialog"
                ref={settingDialogRef}
                className="modal">
                <Filters onConfirm={params => {
                    dispatch({ type: WORDS_SAGA.FILTER_WORDS, payload: params });
                    settingDialogRef.current.close();
                }} />
            </dialog>
        </>
    );
};
