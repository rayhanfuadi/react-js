import Navbar from '@/components/Layouts/Navbar';
import React, { useEffect, useState } from 'react';

const movieData = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'Interstellar' },
    { id: 3, title: 'The Dark Knight' },
    { id: 4, title: 'Pulp Fiction' },
    { id: 5, title: 'The Matrix' },
];

const MenuTest = () => {
    const [cart, setCart] = useState([]);

    // Memuat data cart dari localStorage saat komponen dimuat
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    // Fungsi untuk menambah film ke cart dan menyimpan di localStorage
    const addToCart = (movie) => {
        if (!cart.some((item) => item.id === movie.id)) {
            const newCart = [...cart, movie];
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };
    return (
        <div className="p-6">
            <Navbar />
            <h1 className="text-2xl font-bold mb-4">Daftar Film</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {movieData.map((movie) => (
                    <div
                        key={movie.id}
                        className="p-4 border border-gray-300 rounded shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                        <button
                            onClick={() => addToCart(movie)}
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                        >
                            Tambah ke Cart
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-8">Cart</h2>
            <div className="mt-4">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="border-b py-2">
                            {item.title}
                        </div>
                    ))
                ) : (
                    <div>Cart kosong</div>
                )}
            </div>
        </div>
    )
}

export default MenuTest