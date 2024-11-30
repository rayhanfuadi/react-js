const ModalForm = ({
    isOpen,
    onClose,
    onSubmit,
    data,
    setData,
    mode, // "add" atau "edit"
}) => {
    const handleChange = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}>
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-lg font-semibold text-gray-800">
                    {mode === "add" ? "Tambah Data" : "Edit Data"}
                </h2>
                <div className="mt-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Tittle"
                        value={data.tittle || ""}
                        onChange={(e) => handleChange("tittle", e.target.value)}
                        className="w-full border border-gray-300 rounded p-2 font-normal text-slate-900"
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={data.img || ""}
                        onChange={(e) => handleChange("img", e.target.value)}
                        className="w-full border border-gray-300 rounded p-2 font-normal text-slate-900"
                    />
                    <select
                        value={data.badge || ""}
                        onChange={(e) => handleChange("badge", e.target.value)}
                        className="w-full border border-gray-300 rounded p-2 font-normal text-slate-900"
                    >
                        <option value="" disabled>
                            Pilih Category
                        </option>
                        <option value="BadgeBiru">BadgeBiru</option>
                        <option value="BadgeMerah">BadgeMerah</option>
                    </select>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        className="px-4 py-2 bg-slate-200 text-slate-900 rounded-md hover:bg-slate-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalForm