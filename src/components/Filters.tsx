import { useState } from 'react';
import { FilterWordsType } from '../types';

export interface FiltersProps {
    onConfirm: (params: FilterWordsType) => void;
}

export const Filters: React.FC<FiltersProps> = (props: FiltersProps) => {
    const { onConfirm } = props;
    const [formData, setFormData] = useState<FilterWordsType>({
        startRange: 0,
        endRange: 100,
        familiarFilter: 'all',
        timeFilter: null,
        resetOriginal: false,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <div className="modal-box w-11/12 max-w-5xl px-10">
            <h3 className="text-3xl">
                Filter what words you want to review222
            </h3>
            <form method="dialog">
                <div className="py-4 text-2xl">
                    <ul className="mt-10">
                        <li className="flex items-center justify-between px-10 mb-10">
                            <p>Rest original words:</p>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-md"
                                    name="resetOriginal"
                                    checked={formData.resetOriginal}
                                    onChange={handleChange}
                                />
                            </div>
                        </li>
                        <li className="flex items-center justify-between px-10 mb-10">
                            <p>Pick the range of the words:</p>
                            <div className="flex">
                                <input
                                    type="number"
                                    placeholder="Start"
                                    name="startRange"
                                    value={formData.startRange || 0}
                                    onChange={handleChange}
                                    className="input input-bordered input-info w-[80px] text-2xl ml-10"
                                />
                                <span className="mx-10">-</span>
                                <input
                                    type="number"
                                    placeholder="End"
                                    name="endRange"
                                    value={formData.endRange || 0}
                                    onChange={handleChange}
                                    className="input input-bordered input-info w-[80px] text-2xl"
                                />
                            </div>
                        </li>
                        <li className="flex items-center justify-between px-10 mb-10">
                            <p>Pick familiar type:</p>
                            <div className="flex items-center ml-5">
                                <label
                                    className="cursor-pointer label"
                                    htmlFor="only_unfamiliar">
                                    <input
                                        type="radio"
                                        id="only_unfamiliar"
                                        name="familiarFilter"
                                        onChange={handleChange}
                                        value="only_unfamiliar"
                                        checked={
                                            formData.familiarFilter ===
                                            'only_unfamiliar'
                                        }
                                        className="radio radio-success mx-5 cursor-pointer"
                                    />
                                    Only UnFamiliar
                                </label>
                                <label
                                    className="cursor-pointer label"
                                    htmlFor="all">
                                    <input
                                        type="radio"
                                        id="all"
                                        name="familiarFilter"
                                        onChange={handleChange}
                                        value="all"
                                        checked={
                                            formData.familiarFilter === 'all'
                                        }
                                        className="radio radio-success mx-5 cursor-pointer"
                                    />
                                    All
                                </label>
                                <label
                                    className="cursor-pointer label"
                                    htmlFor="only_familiar">
                                    <input
                                        type="radio"
                                        id="only_familiar"
                                        name="familiarFilter"
                                        onChange={handleChange}
                                        value="only_familiar"
                                        checked={
                                            formData.familiarFilter ===
                                            'only_familiar'
                                        }
                                        className="radio radio-success mx-5 cursor-pointer"
                                    />
                                    Only Familiar
                                </label>
                            </div>
                        </li>
                        <li className="flex items-center justify-between px-10 mb-10">
                            <p>Pick recent words:</p>
                            <div className="flex items-center ml-5">
                                <label
                                    className="cursor-pointer label"
                                    htmlFor="last_7">
                                    <input
                                        type="radio"
                                        id="last_7"
                                        name="timeFilter"
                                        onChange={handleChange}
                                        value={-7}
                                        checked={formData.timeFilter === -7}
                                        className="radio radio-success mx-5 cursor-pointer"
                                    />
                                    last 7 days
                                </label>
                                <label
                                    className="cursor-pointer label"
                                    htmlFor="last_30">
                                    <input
                                        type="radio"
                                        id="last_30"
                                        name="timeFilter"
                                        onChange={handleChange}
                                        value={-30}
                                        checked={formData.timeFilter === -30}
                                        className="radio radio-success mx-5 cursor-pointer"
                                    />
                                    last 30 days
                                </label>
                                <label
                                    className="cursor-pointer label"
                                    htmlFor="last_90">
                                    <input
                                        type="radio"
                                        id="last_90"
                                        name="timeFilter"
                                        onChange={handleChange}
                                        value={-90}
                                        checked={formData.timeFilter === -90}
                                        className="radio radio-success mx-5 cursor-pointer"
                                    />
                                    last 90 days
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="modal-action">
                    {/* if there is a button, it will close the modal */}
                    <div
                        className="btn text-xl"
                        onClick={() => {
                            onConfirm(formData);
                        }}>
                        Confirm
                    </div>
                </div>
            </form>
        </div>
    );
};
