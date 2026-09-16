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