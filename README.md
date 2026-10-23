# Praktikum Pemrograman Web - OBE

## Identitas
* **Nama**: Gienah Anugerah
* **NIM**: 2440304026
* **Mata Kuliah**: Pemrograman Web
* **Teknologi Server**: Laragon 5 & PHP 8.4

---

## Deskripsi Proyek
Proyek ini merupakan repositori praktikum Pemrograman Web berbasis *Outcome-Based Education* (OBE) untuk pengembangan aplikasi **Go Find Your MUA** — sebuah platform direktori dan booking jasa Make Up Artist (MUA) di Tarakan. Proyek dikembangkan secara bertahap dari fondasi environment, struktur HTML5, hingga aplikasi full-stack.

---

## Teknologi yang Digunakan
* **Laragon 5** (Web Server Environment)
* **PHP 8.4**
* **Apache Web Server**
* **HTML5**
* **CSS3**
* **JavaScript**
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
Halaman beranda (index.html) telah memiliki struktur HTML5 semantik (header, nav, main, section, article, form, footer) dengan konten proyek individu **Go Find Your MUA** — direktori booking MUA di Tarakan dengan data MUA nyata (Yheen Makeup Artist, Aurell Sekar - MUA Tarakan Kaltara, dan Andi Siti Hajar Makeup & Gown). Halaman telah diuji dan mendukung navigasi keyboard.

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

---

## Update Modul 6 - Form Aksesibel dan Validasi

### Tujuan
Mengembangkan form booking **Go Find Your MUA** (dibuat sejak Modul 2) dengan validasi client-side, atribut aksesibilitas, dan penanganan input, tanpa membuat form baru. Data yang lolos validasi belum dikirim ke server; backend menyusul di Modul 9+.

### Cara Menjalankan
Sama seperti langkah di atas: nyalakan Laragon (**Start All**), buka `http://localhost/pemweb-obe/`, lalu scroll ke bagian **Form Booking**. Jangan membuka `index.html` langsung dengan `file://`.

### Aturan Validasi
| Field | Aturan | Pesan error |
|---|---|---|
| Nama Lengkap | Wajib diisi, minimal 3 karakter | "Nama lengkap wajib diisi." / "Nama minimal 3 karakter." |
| Email | Wajib diisi, format email valid | "Email wajib diisi." / "Format email belum valid." |
| Nomor Telepon/WhatsApp | Wajib diisi, hanya angka, minimal 10 digit | "Nomor telepon wajib diisi." / "Nomor telepon hanya boleh berisi angka." / "Nomor telepon minimal 10 digit angka." |
| Pilih MUA | Wajib dipilih, harus ada di daftar MUA valid | "Pilih salah satu MUA." / "MUA yang dipilih tidak valid." |
| Tipe Makeup | Wajib dipilih, harus ada di daftar tipe valid | "Pilih tipe makeup yang diinginkan." / "Tipe makeup yang dipilih tidak valid." |
| Tanggal Acara | Wajib diisi, tidak boleh sebelum hari ini | "Tanggal acara wajib diisi." / "Tanggal acara tidak boleh sebelum hari ini." |
| Bukti Pembayaran DP | Opsional, menerima gambar atau PDF | - |
| Catatan Tambahan | Opsional, maksimal 200 karakter | - |

Input dinormalisasi sebelum divalidasi: `trim()` untuk teks, `toLowerCase()` untuk email, dan karakter non-angka dibuang saat menghitung digit telepon.

### Catatan Aksesibilitas
- Setiap input punya `<label>` yang terhubung lewat `for`/`id`.
- `novalidate` pada form, sehingga pesan error memakai pesan buatan sendiri yang tampil dekat field.
- Pesan error berada di `<small class="error" aria-live="polite">` dan terhubung ke input lewat `aria-describedby`.
- Field yang salah diberi `aria-invalid="true"` dan border lebih tebal; pesan error berupa teks, tidak hanya warna.
- Saat submit gagal, fokus pindah ke field error pertama dan status form menampilkan jumlah field yang bermasalah.
- Gaya `:focus-visible` tersedia untuk tautan, tombol, dan input; ada skip link ke konten utama.

### Hasil Peer/Code Review
Reviewer: Claude (asisten AI dari Anthropic), bukan reviewer manusia. Tanggal review: 23 Oktober 2026.

| No | Temuan | Perbaikan | Commit |
|---|---|---|---|
| 1 | Teks footer berkontras rendah (sekitar 1,25:1) | `--text-muted` diubah menjadi `#7A3B55` | [isi pesan commit / hash] |
| 2 | Nomor telepon menerima huruf | Menambah pengecekan karakter pada validasi telepon | [isi pesan commit / hash] |
| 3 | Tipe Makeup belum dicek terhadap daftar pilihan | Menambah `daftarTipeValid` | [isi pesan commit / hash] |

### Catatan Keamanan
Validasi client-side hanya untuk kenyamanan pengguna dan bisa dilewati (misalnya lewat DevTools). Validasi server-side tetap wajib saat backend dibuat. Data yang disimpan di `localStorage` hanya preferensi tampilan, bukan data sensitif.

### AI Usage Log
Penggunaan AI selama Modul 6 dicatat pada laporan Tugas OBE Pertemuan 6 (Lampiran 2).