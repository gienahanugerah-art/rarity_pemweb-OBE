# Praktikum Pemrograman Web - OBE

## Identitas
* **Nama**: Gienah Anugerah
* **NIM**: 2440304026
* **Mata Kuliah**: Pemrograman Web
* **Teknologi Server**: Laragon 5 & PHP 8.4

---

## Deskripsi Proyek
Proyek ini merupakan repositori praktikum Pemrograman Web berbasis *Outcome-Based Education* (OBE) untuk pengembangan aplikasi **GFYM** — sebuah platform direktori dan booking jasa Make Up Artist (MUA) di Tarakan. Proyek dikembangkan secara bertahap dari fondasi environment, struktur HTML5, hingga aplikasi full-stack.

---

## Teknologi yang Digunakan
* **Laragon 5** (Web Server Environment)
* **PHP 8.4**
* **Apache Web Server**
* **HTML5**
* **Git & GitHub** (Version Control System)

---

## Cara Menjalankan Proyek
1. Pastikan aplikasi **Laragon 5** sudah terinstal dan berjalan.
2. Simpan folder proyek pada direktori `C:\laragon\www\pemweb-obe` (atau `D:\laragon\www\pemweb-obe`).
3. Buka aplikasi Laragon, lalu klik tombol **Start All** untuk mengaktifkan Apache.
4. Buka browser dan akses alamat URL lokal proyek.

---

## URL Lokal
Proyek dapat diakses secara lokal melalui:
`http://localhost/pemweb-obe/`
* **Status Proyek**: Dalam Pengembangan

---

## Update Modul 2
Halaman beranda (index.html) telah memiliki struktur HTML5 semantik (header, nav, main, section, article, form, footer) dengan konten proyek individu **GFYM** — direktori booking MUA di Tarakan dengan data MUA nyata (Yheen Makeup Artist, Aurell Sekar - MUA Tarakan Kaltara, dan Andi Siti Hajar Makeup & Gown). Halaman telah diuji dan mendukung navigasi keyboard.

---

## Fitur yang Sudah Selesai (Modul 2)
* [x] Struktur HTML5 semantik: header, nav, main, 4 section, 3 article, footer
* [x] Hierarchy heading logis (h1 → h2 → h3)
* [x] Alt text deskriptif pada seluruh gambar
* [x] Form booking dengan label yang terhubung ke input (for/id)
* [x] Navigasi dapat diakses penuh menggunakan keyboard (Tab)
* [x] Data MUA menggunakan referensi bisnis nyata di Tarakan
* [ ] Styling CSS responsif (menyusul di Modul 3)
* [ ] Backend PHP dan database (menyusul di Modul 9+)

---

## Dokumentasi Alur Event & State (Modul 5)

**State yang digunakan:**
- Filter aktif (Semua/Tersedia/Tidak Tersedia) — disimpan sementara di memori saat tombol filter diklik.
- `theme` — preferensi light/dark, disimpan di localStorage.
- `limitMUA` — jumlah maksimal kartu MUA yang ditampilkan, disimpan di localStorage.

**Alur event:**
1. User klik tombol filter → event `click` → data MUA disaring sesuai status → `renderMUA()` memperbarui tampilan.
2. User mengetik di kotak pencarian → event `input` → data disaring berdasarkan nama → `renderMUA()` dipanggil ulang.
3. User klik tombol "Detail" pada kartu → event delegation di container `#mua-list` → `closest('[data-detail]')` menemukan tombol yang diklik → detail MUA ditampilkan di `#detail-mua`.
4. User mengubah dropdown "Tampilkan maksimal" → event `change` → pilihan disimpan ke localStorage → tampilan dirender ulang sesuai limit.
5. User klik "Ganti Tema" → event `click` → tema di-toggle dan disimpan ke localStorage.
6. Saat halaman di-reload, preferensi `theme` dan `limitMUA` diambil kembali dari localStorage sebelum render pertama, sehingga preferensi pengguna tetap konsisten.

**Keamanan DOM:** seluruh rendering data menggunakan `createElement` dan `textContent`, bukan `innerHTML`, untuk mencegah risiko XSS dari data yang mungkin tidak tepercaya.