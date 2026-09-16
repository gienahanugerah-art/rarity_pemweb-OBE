import { hitungRataRataRating, formatTanggal } from './testimoniUtils.js';

const daftarTestimoni = [
  { id: 1, namaPelanggan: 'Satine Zaneta', muaId: 1, rating: 5, komentar: 'finisih makeupnya awet seharian, aku puas bgt', tanggal: '2026-08-12' },
  { id: 2, namaPelanggan: 'Arthaada', muaId: 2, rating: 4, komentar: 'kakanya ramah dan hasilnya rapi, minusnya agak telat datengnya', tanggal: '2026-08-20' },
  { id: 3, namaPelanggan: 'Keybings', muaId: 1, rating: 3, komentar: 'okelah, tp harganya agak pricey', tanggal: '2026-09-01' },
  { id: 4, namaPelanggan: 'Bagas Dribble', muaId: 3, rating: 5, komentar: 'recommended bgt buat acara wisuda kelulusan', tanggal: '2026-09-05' }
];

// Array methods
const testimoniRatingTinggi = daftarTestimoni.filter(t => t.rating >= 4);
const namaPelangganList = daftarTestimoni.map(t => t.namaPelanggan);
const rataRataRating = hitungRataRataRating(daftarTestimoni);

// Function biasa
function cariTestimoniById(id) {
  return daftarTestimoni.find(t => t.id === id);
}

// Arrow function + destructuring + template literal
const ringkasanTestimoni = ({ namaPelanggan, rating, komentar, tanggal }) =>
  `${namaPelanggan} memberi rating ${rating}/5 pada ${formatTanggal(tanggal)}: "${komentar}"`;

try {
  console.log('=== Data Testimoni Go Find Your MUA ===');
  console.table(daftarTestimoni);
  console.log('Testimoni rating tinggi (>=4):', testimoniRatingTinggi);
  console.log('Daftar nama pelanggan:', namaPelangganList);
  console.log('Rata-rata rating:', rataRataRating);
  console.log('Cari testimoni id 2:', cariTestimoniById(2));

  console.log('--- Ringkasan tiap testimoni ---');
  daftarTestimoni.forEach(t => console.log(ringkasanTestimoni(t)));

  const testimoniTidakAda = cariTestimoniById(99);
  if (!testimoniTidakAda) {
    throw new Error('Testimoni dengan id tersebut tidak ditemukan');
  }
} catch (error) {
  console.error('Terjadi kesalahan saat mengolah data testimoni:', error.message);
}