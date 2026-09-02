# 🤖 AI Usage Log

Dokumen ini mencatat riwayat penggunaan kecerdasan buatan (AI) selama pengerjaan **Praktikum Pemrograman Web - OBE**.

---

## 📊 Tabel Catatan Penggunaan AI

| Tanggal | Tujuan Penggunaan AI | Prompt Ringkas | Hasil | Verifikasi | Keputusan Mahasiswa |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **26/08/2026** | Mengatasi error Git Remote di VS Code | *"ini kok ga bisa yaa error remote origin already exists"* | Penjelasan bahwa remote `origin` sudah terpasang dan solusi perintah `git push origin main` / `git remote set-url`. | Memeriksa daftar remote dengan `git remote -v` di terminal VS Code. | Mengikuti arahan untuk langsung melakukan `git push origin main`. |
| **26/08/2026** | Konfigurasi Git Credential Helper | *"ini yang mana?"* | Rekomendasi memilih `manager-core` pada pop-up CredentialHelperSelector. | Memilih opsi `manager-core` dan mencentang *"Always use this from now on"*. | Mengikuti rekomendasi agar autentikasi GitHub tersimpan otomatis. |
| **26/08/2026** | Penyusunan dokumentasi proyek `README.md` | *"beb periksa aja latihannya"* | Template struktur `README.md` lengkap beserta langkah eksekusi perintah Git. | Memeriksa hasil *render* Markdown di VS Code dan repositori GitHub. | Memakai template `README.md` yang disediakan dan mengunggahnya ke GitHub. |
| **26/08/2026** | Pembuatan log penggunaan AI (`AI_USAGE_LOG.md`) | *"lanjut bantu arahkan aku."* | Template struktur dokumen `AI_USAGE_LOG.md` berbentuk tabel standar praktikum. | Memastikan kolom tabel sesuai dengan instruksi soal praktikum. | Menggunakan template tabel ini untuk memenuhi persyaratan Langkah 10. |

---

## 📝 Catatan Tambahan
Seluruh saran, kode, dan perintah yang dihasilkan oleh AI telah diperiksa dan diverifikasi secara mandiri di lingkungan lokal (Laragon 5 & Git Terminal) sebelum diterapkan pada repositori proyek. 

| Tanggal | Tool AI | Tujuan/Prompt Ringkas | Hasil yang Dipakai | Verifikasi/Perubahan Mahasiswa |
|---|---|---|---|---|
| 02/09/2026 | Claude | Membuat struktur HTML5 (header, nav, section, article, form, footer) untuk halaman beranda proyek RiasKu | Kode index.html dengan struktur semantik lengkap | Kode dipaste ke index.html, disimpan, lalu diuji langsung dengan membuka http://localhost/pemweb-obe/ dan dipastikan seluruh section (Tentang, Daftar MUA, Fitur Unggulan, Cara Booking, Form Booking) tampil dengan benar di browser. |
| 02/09/2026 | Claude | Troubleshooting error "Not Found" saat mengakses localhost/pemweb-obe/ | Diagnosis konflik port antara XAMPP dan Laragon 5, solusi mematikan XAMPP | Masalah ditelusuri langkah demi langkah (cek folder, cek localhost polos), ditemukan XAMPP aktif di port 80, kemudian Apache dan MySQL XAMPP dimatikan sendiri melalui XAMPP Control Panel dan dikonfirmasi berhasil setelah halaman proyek bisa diakses normal. |
| 02/09/2026 | Claude | Bimbingan langkah Git (branch, commit, push, merge Pull Request) | Panduan perintah git checkout -b, add, commit, push, dan proses merge di GitHub | Setiap perintah diketik dan dijalankan sendiri di terminal VS Code, hasilnya dicek satu per satu (git status, git log --oneline), dan proses merge Pull Request dilakukan sendiri melalui GitHub hingga status berubah menjadi "Merged". |
| 02/09/2026 | Claude | Mencari referensi nama MUA nyata di Tarakan untuk data proyek | Nama 3 MUA (Yheen Makeup Artist, Aurell Sekar, Andi Siti Hajar) beserta spesialisasi | Nama akun Instagram MUA (@by.sfrdha, @aurellsekar, @mauladymakeup) diberikan sendiri oleh mahasiswa, kemudian dipilih 3 nama final (Yheen Makeup Artist, Aurell Sekar, Andi Siti Hajar) untuk digunakan sebagai data pada proyek, dengan kontak asli sengaja tidak disertakan demi menjaga privasi. |
| 02/09/2026 | Claude | Merapikan format README.md yang tercampur kode HTML | Perbaikan struktur README menjadi markdown murni | Isi README dibaca ulang setelah perbaikan, dipastikan tidak ada lagi kode HTML yang nyasar maupun karakter \n yang salah ketik, dan disimpan ulang sebelum di-commit sebagai perbaikan tersendiri (self-review). |