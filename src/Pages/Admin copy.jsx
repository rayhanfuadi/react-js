import Footer from "@/components/Layouts/Footer"
import Navbar from "@/components/Layouts/Navbar"
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react"
import RedirectLogin from "./RedirectLogin";
import { Card, Typography, Dialog } from "@material-tailwind/react";
import ModalForm from "@/components/Fragments/ModalForm";
import { getTopRating } from "@/services/topFilm.services";

const Admin = () => {
    const { isLoggedIn, checkSession } = useAuthStore();
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [modalMode, setModalMode] = useState("add"); // "add" atau "edit"
    const [modalData, setModalData] = useState({}); // Data untuk tambah/edit
    const [tableRows, setTableRows] = useState([])

    // isi table
    useEffect(() => {
        getTopRating((data) => {
            setTableRows(data)
        })
    }, [])

    const openAddModal = () => {
        setModalMode("add");
        setModalData({}); // Reset data untuk tambah
        setIsModalOpen(true);
    };

    const openEditModal = (id) => {
        const rowToEdit = tableRows.find((row) => row.id === id);
        setModalMode("edit");
        setModalData(rowToEdit); // Set data yang akan diedit
        setIsModalOpen(true);
    };

    const closeModal2 = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = () => {
        if (modalMode === "add") {
            // Tambah Data Baru
            setTableRows((prevRows) => [
                ...prevRows,
                { id: Date.now(), ...modalData },
            ]);
        } else if (modalMode === "edit") {
            // Simpan Perubahan Data
            setTableRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === modalData.id ? { ...modalData } : row
                )
            );
        }
        closeModal();
    };

    // Fungsi untuk membuka modal
    const openModal = (id) => {
        setSelectedId(id);
        setIsModalOpenDelete(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setSelectedId(null);
        setIsModalOpenDelete(false);
    };

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    const tableHead = ["No", "Tittle", "Image", "Category", "Action"];

    const handleDelete = (id) => {
        const filteredRows = tableRows.filter((row) => row.id !== id);
        setTableRows(filteredRows);
        closeModal()
    };

    return (
        <div className="bg-primary">
            {!isLoggedIn ? (
                <RedirectLogin />
            ) : (
                <>
                    {/* Navbar Start */}
                    <Navbar />
                    <div className="container lg:container">
                        <div className="grid gap-2">
                            <div className="flex justify-between items-end">
                                <p className="text-2xl font-semibold text-center text-white">Dashboard Admin</p>
                                <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white" onClick={openAddModal}>Tambah Data</button>
                            </div>

                            <Card className="h-full w-full overflow-scroll">
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {tableHead.map((head) => (
                                                <th key={head} className="text-slate-900 border-b border-slate-400 bg-slate-100 p-4">
                                                    <Typography variant="small" className="font-semibold leading-none opacity-50">
                                                        {head}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRows.map(({ id, tittle, img, badge }, index) => {
                                            const isLast = index === tableRows.length - 1;
                                            const classes = isLast ? "p-2" : "p-2 border-b border-slate-300";
                                            const number = index + 1;
                                            return (
                                                <tr key={id}>
                                                    <td className={classes}>
                                                        <Typography variant="small" className="font-normal text-slate-900">
                                                            {number}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography variant="small" className="font-normal text-slate-900">
                                                            {tittle}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography variant="small" className="font-normal text-slate-900">
                                                            {img}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography variant="small" className="font-normal text-slate-900">
                                                            {badge}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="flex gap-4">
                                                            <button
                                                                className="font-medium text-sm text-slate-900 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md"
                                                                onClick={() => openEditModal(id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="font-medium text-sm text-white px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md"
                                                                onClick={() => openModal(id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </Card>

                            {/* Modal Tambah Data dan Modal Edit */}
                            <ModalForm
                                isOpen={isModalOpen}
                                onClose={closeModal2}
                                onSubmit={handleModalSubmit}
                                data={modalData}
                                setData={setModalData}
                                mode={modalMode}
                            />

                            {/* Modal Konfirmasi Hapus */}
                            <Dialog open={isModalOpenDelete} handler={closeModal}>
                                <div className="relative w-full">
                                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit p-4 bg-white rounded-xl shadow-lg border border-slate-600">
                                        <div className="p-4">
                                            <h2 className="text-lg font-semibold text-slate-800">Konfirmasi Hapus</h2>
                                            <p className="text-slate-600 mt-2">Apakah Anda yakin ingin menghapus data ini?</p>
                                            <div className="mt-4 flex justify-end gap-4">
                                                <button
                                                    className="px-4 py-2 text-slate-600 bg-gray-300 hover:bg-gray-400 rounded-md"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
                                                    onClick={() => handleDelete(selectedId)}
                                                >
                                                    Yes, Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog>

                        </div>
                    </div>

                    {/* Footer */}
                    <Footer />
                </>
            )}

        </div >
    )
}

export default Admin