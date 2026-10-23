import { hitungTotalHarga } from './utils.js';

const daftarMUA = [
  { id: 1, nama: 'Yheen Makeup Artist', spesialisasi: 'Airbrush Wedding Makeup', hargaMulai: 1000000, tersedia: true, lokasi: 'Tarakan Tengah' },
  { id: 2, nama: 'Aurell Sekar - MUA Tarakan Kaltara', spesialisasi: 'Rias Wisuda & Pesta', hargaMulai: 350000, tersedia: true, lokasi: 'Tarakan Barat' },
  { id: 3, nama: 'Andi Siti Hajar Makeup & Gown', spesialisasi: 'Rias Pengantin, Sewa Gaun/Kebaya', hargaMulai: 750000, tersedia: false, lokasi: 'Tarakan Timur' }
];

const muaTersedia = daftarMUA.filter(mua => mua.tersedia);
const namaMUA = daftarMUA.map(mua => mua.nama);
const totalHarga = hitungTotalHarga(daftarMUA);
const cariAurell = daftarMUA.find(mua => mua.nama.includes('Aurell'));

function ringkasMUA(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return {
    jumlahMUA: data.length,
    totalEstimasiHarga: data.reduce((total, m) => total + m.hargaMulai, 0),
    jumlahTersedia: data.filter(m => m.tersedia).length
  };
}

try {
  console.log('=== Daftar MUA Go Find Your MUA ===');
  console.table(daftarMUA);
  console.log('MUA yang tersedia:', muaTersedia);
  console.log('Nama-nama MUA:', namaMUA);
  console.log('Total estimasi harga semua MUA:', totalHarga);
  console.log('Hasil pencarian MUA "Aurell":', cariAurell);
  console.log('Ringkasan data MUA:', ringkasMUA(daftarMUA));
} catch (error) {
  console.error('Terjadi kesalahan saat mengolah data:', error.message);
}

// ===== LATIHAN TERBIMBING PERTEMUAN 4 =====

// Latihan 1: filter berdasarkan lokasi tertentu
const muaTarakanTengah = daftarMUA.filter(mua => mua.lokasi === 'Tarakan Tengah');
console.log('--- Latihan 1: MUA di Tarakan Tengah ---');
console.log(muaTarakanTengah);

// Latihan 2: function mencari MUA berdasarkan id, menggunakan find
function cariMUAById(id) {
  return daftarMUA.find(mua => mua.id === id);
}
console.log('--- Latihan 2: Cari MUA dengan id 2 ---');
console.log(cariMUAById(2));

// Latihan 3: destructuring + template literal untuk ringkasan
function ringkasanMUA({ nama, spesialisasi, hargaMulai, lokasi }) {
  return `${nama} (${lokasi}) - spesialisasi ${spesialisasi}, mulai dari Rp${hargaMulai.toLocaleString('id-ID')}`;
}

console.log('--- Latihan 3: Ringkasan setiap MUA ---');
try {
  daftarMUA.forEach(mua => console.log(ringkasanMUA(mua)));

} catch (error) {
  console.error('Gagal membuat ringkasan:', error.message);
}
// ===================== MODUL 5: DOM, EVENT, WEB STORAGE =====================

const muaListContainer = document.querySelector('#mua-list');
const detailContainer = document.querySelector('#detail-mua');
const filterButtons = document.querySelectorAll('[data-filter]');
const searchInput = document.querySelector('#search-mua');
const limitSelect = document.querySelector('#limit-mua');
const themeButton = document.querySelector('#theme-button');

// --- Render aman: createElement + textContent (BUKAN innerHTML) ---
function renderMUA(list) {
  muaListContainer.replaceChildren();

  if (list.length === 0) {
    const pesan = document.createElement('p');
    pesan.textContent = 'MUA tidak ditemukan.';
    muaListContainer.append(pesan);
    return;
  }

  for (const mua of list) {
    const article = document.createElement('article');

    const title = document.createElement('h3');
    title.textContent = mua.nama;

    const info = document.createElement('p');
    info.textContent = `${mua.spesialisasi} - mulai dari Rp${mua.hargaMulai.toLocaleString('id-ID')}`;

    const statusInfo = document.createElement('p');
    statusInfo.textContent = mua.tersedia ? 'Status: Tersedia' : 'Status: Tidak Tersedia';

    const detailButton = document.createElement('button');
    detailButton.type = 'button';
    detailButton.textContent = 'Detail';
    detailButton.dataset.detail = mua.id;

    article.append(title, info, statusInfo, detailButton);
    muaListContainer.append(article);
  }
}

// --- Interaksi 1: Filter berdasarkan status tersedia ---
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let hasil;

    if (filter === 'Semua') {
      hasil = daftarMUA;
    } else if (filter === 'Tersedia') {
      hasil = daftarMUA.filter(mua => mua.tersedia === true);
    } else {
      hasil = daftarMUA.filter(mua => mua.tersedia === false);
    }

    renderMUA(hasil);
  });
});

// --- Latihan 1: Pencarian real-time berdasarkan nama ---
searchInput.addEventListener('input', (event) => {
  const keyword = event.target.value.toLowerCase();
  const hasil = daftarMUA.filter(mua => mua.nama.toLowerCase().includes(keyword));
  renderMUA(hasil);
});

// --- Interaksi 2 / Latihan 2: Tombol Detail dengan event delegation ---
muaListContainer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-detail]');
  if (!button) return;

  const mua = daftarMUA.find(data => data.id === Number(button.dataset.detail));
  if (!mua) return;

  detailContainer.replaceChildren();

  const judul = document.createElement('h3');
  judul.textContent = `Detail: ${mua.nama}`;

  const spesialisasi = document.createElement('p');
  spesialisasi.textContent = `Spesialisasi: ${mua.spesialisasi}`;

  const lokasi = document.createElement('p');
  lokasi.textContent = `Lokasi: ${mua.lokasi}`;

  const harga = document.createElement('p');
  harga.textContent = `Estimasi harga mulai dari Rp${mua.hargaMulai.toLocaleString('id-ID')}`;

  detailContainer.append(judul, spesialisasi, lokasi, harga);
});

// --- Latihan 3: Simpan preferensi jumlah item ditampilkan ---
const savedLimit = localStorage.getItem('limitMUA') ?? '3';
limitSelect.value = savedLimit;

limitSelect.addEventListener('change', () => {
  localStorage.setItem('limitMUA', limitSelect.value);
  renderMUA(daftarMUA.slice(0, Number(limitSelect.value)));
});

// --- Interaksi 3: Preferensi tema (Web Storage) ---
const savedTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.dataset.theme = savedTheme;

themeButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

// --- Render awal saat halaman dimuat (menghormati preferensi limit tersimpan) ---
renderMUA(daftarMUA.slice(0, Number(savedLimit)));

// ===================== MODUL 6: FORM & VALIDASI =====================

const bookingForm = document.querySelector('#booking-form');
const formStatus = document.querySelector('#form-status');

const daftarMUAValid = ['yheen', 'aurellsekar', 'andisitihajar'];

function validateBookingForm(data) {
  const errors = {};

  const nama = String(data.get('nama') ?? '').trim();
  const email = String(data.get('email') ?? '').trim().toLowerCase();
  const telepon = String(data.get('telepon') ?? '').trim();
  const pilihMua = String(data.get('pilih_mua') ?? '');
  const tipeMakeup = String(data.get('tipe_makeup') ?? '');
  const tanggalAcara = String(data.get('tanggal_acara') ?? '');

  // Aturan 1: nama minimal 3 karakter
  if (nama.length === 0) {
    errors.nama = 'Nama lengkap wajib diisi.';
  } else if (nama.length < 3) {
    errors.nama = 'Nama minimal 3 karakter.';
  }

  // Aturan 2: format email
  if (email.length === 0) {
    errors.email = 'Email wajib diisi.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Format email belum valid.';
  }

  // Aturan 3: nomor telepon minimal 10 digit angka
  const teleponAngka = telepon.replace(/\D/g, '');
  if (telepon.length === 0) {  
  errors.telepon = 'Nomor telepon wajib diisi.';
} else if (!/^[0-9+\-\s]+$/.test(telepon)) {  
  errors.telepon = 'Nomor telepon hanya boleh berisi angka.';
} else if (teleponAngka.length < 10) {  
  errors.telepon = 'Nomor telepon minimal 10 digit angka.';
}

  // Aturan 4: pilih MUA wajib & harus dari daftar yang tersedia (Latihan 2)
  if (pilihMua.length === 0) {
    errors.pilih_mua = 'Pilih salah satu MUA.';
  } else if (!daftarMUAValid.includes(pilihMua)) {
    errors.pilih_mua = 'MUA yang dipilih tidak valid.';
  }

  // Aturan 5: tipe makeup wajib dipilih
  if (tipeMakeup.length === 0) {
    errors.tipe_makeup = 'Pilih tipe makeup yang diinginkan.';
  }

  // Aturan 6: tanggal acara wajib & tidak boleh sebelum hari ini (Latihan 1)
  if (tanggalAcara.length === 0) {
    errors.tanggal_acara = 'Tanggal acara wajib diisi.';
  } else {
    const hariIni = new Date();
    hariIni.setHours(0, 0, 0, 0);
    const tanggalDipilih = new Date(tanggalAcara);
    if (tanggalDipilih < hariIni) {
      errors.tanggal_acara = 'Tanggal acara tidak boleh sebelum hari ini.';
    }
  }

  return errors;
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(bookingForm);
    const errors = validateBookingForm(data);

    // Bersihkan error lama
    bookingForm.querySelectorAll('.error').forEach(el => (el.textContent = ''));
    bookingForm.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));

    if (Object.keys(errors).length > 0) {
      for (const [field, message] of Object.entries(errors)) {
        const errorEl = document.querySelector(`#error-${field.replace('_', '-')}`);
        if (errorEl) errorEl.textContent = message;

        const inputEl = bookingForm.elements[field];
        if (inputEl) inputEl.setAttribute('aria-invalid', 'true');
      }

      const firstErrorField = Object.keys(errors)[0];
      bookingForm.elements[firstErrorField]?.focus();

      formStatus.textContent = `Periksa kembali data yang belum valid (${Object.keys(errors).length} field bermasalah).`;
      return;
    }

    formStatus.textContent = 'Data valid dan siap dikirim. (Belum dikirim ke server karena backend belum dibuat - akan dilanjutkan di Modul 9+)';
    console.log('Preview data booking:', Object.fromEntries(data.entries()));
  });
}