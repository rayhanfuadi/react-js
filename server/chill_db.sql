CREATE DATABASE chill_movie;

USE chill_movie;

CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    tanggal_daftar DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    users (fullname, username, email, password, avatar, tanggal_daftar)
VALUES
    ('Rayhan Fuadi', 'ehan', 'ehan@gmail.com', 'ehan', 'img/avatar/default.png', NOW()),
    ('ehan 2', 'ehan2', 'ehan2@gmail.com', 'ehan2', 'img/avatar/default.png', NOW());

CREATE TABLE paket (
    id_paket INT AUTO_INCREMENT PRIMARY KEY,
    nama_paket VARCHAR(100) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    durasi_langganan INT NOT NULL,
    deskripsi TEXT,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO
    Paket (nama_paket, harga, durasi_langganan, deskripsi)
VALUES 
    ('Basic', 50000, 30, 'Akses untuk satu perangkat dengan kualitas SD'),
    ('Standard', 100000, 30, 'Akses untuk dua perangkat dengan kualitas HD / 1080p'),
    ('Premium', 150000, 30, 'Akses untuk empat perangkat dengan kualitas 4K');

CREATE TABLE orders (
    id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_paket INT NOT NULL,
    tanggal_order DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_order ENUM(
        'pending',
        'active',
        'cancelled'
    ) DEFAULT 'pending',
    FOREIGN KEY (id_user) REFERENCES users (id_user),
    FOREIGN KEY (id_paket) REFERENCES paket (id_paket)
);

INSERT INTO
    Orders (id_user, id_paket, tanggal_order, status_order)
VALUES 
    (1, 2, '2024-12-01 10:00:00', 'active'),
    (2, 3, '2024-12-02 11:30:00', 'pending');

CREATE TABLE pembayaran (
    id_pembayaran INT AUTO_INCREMENT PRIMARY KEY,
    id_order INT NOT NULL,
    metode_pembayaran VARCHAR(50) NOT NULL,
    status ENUM(
        'pending',
        'completed',
        'failed'
    ) DEFAULT 'pending',
    tanggal_pembayaran DATETIME,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (id_order) REFERENCES orders (id_order)
);

INSERT INTO
    Pembayaran (id_order, metode_pembayaran, status, tanggal_pembayaran)
VALUES 
    (4, 'Credit Card', 'completed', '2024-12-01 10:05:00'),
    (5, 'E-Wallet', 'pending', NULL);

CREATE TABLE genre (
    id_genre INT AUTO_INCREMENT PRIMARY KEY,
    nama_genre VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    Genre (nama_genre)
VALUES 
    ('Action'),
    ('Drama'),
    ('Comedy'),
    ('Sci-Fi'),
    ('Horror');

CREATE TABLE series_film (
    id_series_film integer PRIMARY KEY AUTO_INCREMENT,
    tittle VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    badge VARCHAR(255) NOT NULL,
    rating VARCHAR(255) NOT NULL,
    total_episode VARCHAR(255) NOT NULL,
    sinopsis VARCHAR(255) NOT NULL,
    id_genre INT NOT NULL,
    tahun_rilis YEAR NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (id_genre) REFERENCES genre (id_genre)
);

INSERT INTO
    series_film (tittle, img, badge, rating, total_episode, sinopsis, id_genre, tahun_rilis)
VALUES 
    ('Suzume', 'img/film/t1.png', 'BadgeBiru', '8.5', '10', 'sinopsis 1', 1, 2019),
    ('Guardian Of Galaxy Vol III', 'img/film/t2.png', 'BadgeBiru', '9.5', '10', 'sinopsis 1', 2, 2023),
    ('Sonic 2', 'img/film/t2.png', 'BadgeBiru', '9.5', '10', 'sinopsis 1', 2, 2023);

CREATE TABLE episode_movie (
    id_episode_movie INT AUTO_INCREMENT PRIMARY KEY,
    tittle VARCHAR(200) NOT NULL,
    img VARCHAR(255) NOT NULL,
    badge VARCHAR(255) NOT NULL,
    rating VARCHAR(255) NOT NULL,
    sinopsis VARCHAR(255) NOT NULL,
    id_series_film INT NOT NULL,
    tanggal_rilis DATE,
    FOREIGN KEY (id_series_film) REFERENCES series_film (id_series_film)
);

INSERT INTO
    episode_movie (tittle, img, badge, rating, sinopsis, id_series_film, tanggal_rilis)
VALUES 
    ('Big Hero 6', 'img/film/t3.png', 'BadgeBiru', '8.5', 'sinopsis 1', 1, '2023-01-01'),
    ('All of Us Are Dead', 'img/film/t4.png', 'BadgeBiru', '8.5', 'sinopsis 1', 2, '2023-01-01');

CREATE TABLE daftar_saya (
    id_daftar INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_episode_movie INT,
    id_series_film INT,
    tanggal_tambah DATETIME DEFAULT CURRENT_TIMESTAMP,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (id_user) REFERENCES users (id_user),
    FOREIGN KEY (id_episode_movie) REFERENCES episode_movie (id_episode_movie),
    FOREIGN KEY (id_series_film) REFERENCES series_film (id_series_film)
);

INSERT INTO
    daftar_saya (id_user, id_episode_movie, id_series_film, tanggal_tambah)
VALUES 
    (1, 3, 1, '2024-12-02'),
    (2, 4, 2, '2024-12-02');