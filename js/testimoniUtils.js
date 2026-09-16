// Modul utilitas untuk mengolah data testimoni

export function hitungRataRataRating(dataTestimoni) {
  if (!Array.isArray(dataTestimoni) || dataTestimoni.length === 0) {
    throw new Error('Data testimoni kosong atau tidak valid');
  }
  const total = dataTestimoni.reduce((sum, t) => sum + t.rating, 0);
  return (total / dataTestimoni.length).toFixed(1);
}

export function formatTanggal(tanggalISO) {
  const opsi = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(tanggalISO).toLocaleDateString('id-ID', opsi);
}