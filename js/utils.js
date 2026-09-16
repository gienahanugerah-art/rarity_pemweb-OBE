export function hitungTotalHarga(items) {
  return items.reduce((total, item) => total + item.hargaMulai, 0);
}