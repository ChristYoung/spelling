import { useRef } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { AiFillSetting, AiOutlineFilter } from 'react-icons/ai';
import { Filters } from './Filters';
import { useDispatch } from 'react-redux';
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';
import { Settings } from './Settings';
import { SettingState, updateSetting } from '../store/settingReducer/settingSlice';

export const Header: React.FC = () => {
    const filterDialogRef = useRef<HTMLDialogElement>(null);
    const settingDialogRef = useRef<HTMLDialogElement>(null);
    const dispatch = useDispatch();
    const openFilterDialog = () => filterDialogRef.current.showModal();
    const openSettingDialog = () => settingDialogRef.current.showModal();

    return (
        <>
            <div className="fixed z-50 flex align-middle top-0 left-0 right-0 items-center justify-end px-12 py-6 bg-white shadow-custom dark:bg-base-dark">
                <div
                    className="text-5xl cursor-pointer"
                    onClick={openSettingDialog}>
                    <AiFillSetting />
                </div>
                <div
                    className="text-5xl cursor-pointer"
                    onClick={openFilterDialog}>
                    <AiOutlineFilter />
                </div>
                <div>
                    <ThemeSwitch />
                </div>
            </div>

            {/* filter dialog */}
            <dialog
                id="filter_dialog"
                ref={filterDialogRef}
                className="modal">
                <Filters onConfirm={params => {
                    dispatch({ type: WORDS_SAGA.FILTER_WORDS, payload: params });
                    filterDialogRef.current.close();
                }} />
            </dialog>

            {/* setting dialog */}
            <dialog
                id="setting_dialog"
                ref={settingDialogRef}
                className="modal">
                    <Settings onConfirm={(configs: SettingState) => {
                        dispatch(updateSetting(configs));
                        settingDialogRef.current.close();
                    }} />
            </dialog>
        </>
    );
};
