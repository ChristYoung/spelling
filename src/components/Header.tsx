import { useRef } from 'react';
import { AiFillSetting, AiOutlineFilter } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { SettingState, updateSetting } from '../store/settingReducer/settingSlice';
import { WORDS_SAGA } from '../store/wordsReducer/wordsSaga';
import { getWordsListSelector } from '../store/wordsReducer/wordsSlice';
import { Filters } from './Filters';
import { Settings } from './Settings';
import { ThemeSwitch } from './ThemeSwitch';

export const Header: React.FC = () => {
    const filterDialogRef = useRef<HTMLDialogElement>(null);
    const settingDialogRef = useRef<HTMLDialogElement>(null);
    const dispatch = useDispatch();
    const openFilterDialog = () => filterDialogRef.current.showModal();
    const openSettingDialog = () => settingDialogRef.current.showModal();
    const currentWordsList = useSelector(getWordsListSelector);

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
                        const orderType = configs.randomOrder ? 'RANDOM' : 'ASCENDING';
                        dispatch({ type: WORDS_SAGA.RESET_WORDS_ORDER, payload: { orderType } });
                        settingDialogRef.current.close();
                    }} />
            </dialog>
        </>
    );
};
