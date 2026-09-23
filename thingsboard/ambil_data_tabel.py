"""
Script untuk mengambil 5 data telemetri terakhir dan menampilkannya
dalam format tabel yang mudah dibaca (timestamp dikonversi ke tanggal).

Versi ini TIDAK login otomatis - JWT token diambil manual dari
ThingsBoard (Account > Security > Copy JWT token).

Tugas Praktikum MP 2 - No. 2
"""

import requests
import time
from datetime import datetime

# --- KONFIGURASI ---
# Copy JWT token dari: ThingsBoard > klik profil (kanan atas) > Account > Security > "Copy JWT token"
JWT_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaWVuYWhhbnVnZXJhaEBnbWFpbC5jb20iLCJ1c2VySWQiOiJhNTJjMGIyMC1hYjRiLTExZjEtYjU3Ni03N2EyMjBkNWJmM2UiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6ImJlMDZiNGRiLWU0MzItNDExNy1hN2ZjLTE3YWYyNTVhZjllNiIsImV4cCI6MTc4ODg3NjQ5NSwiaXNzjoidGhpbmdzYm9hcmQuY2xvdWQiLCJpYXQiOjE3ODg4NDc2OTUsImZpcnN0TmFtZSI6IkdpZW5haCIsImxhc3ROYW1lIjoiQW51Z2VyYWgiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsImlzQmlsbGluZ1NlcnZpY2UiOmZhbHNlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsInRlcm1zT2ZVc2VBY2NlcHRlZCI6dHJ1ZSwidGVuYW50SWQiOiJhNGUxOTRhMC1hYjRiLTExZjEtYjU3Ni03N2EyMjBkNWJmM2UiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIn0.bUELs2oiBw5-zr36nf794a3M6AgHhovjPV_pmM5ilrR6TfYPYLC2ZlKiScJbDZ1Xvp509cMYRa7TegnjuG0HlQ"

DEVICE_ID = "29877250-ab4d-11f1-b576-77a220d5bf3e"
KEYS = "temperature,humidity"
LIMIT = 5

# --- HITUNG RENTANG WAKTU (24 JAM TERAKHIR) ---
end_ts = int(time.time() * 1000)          # waktu sekarang (ms)
start_ts = end_ts - (24 * 60 * 60 * 1000)  # 24 jam sebelumnya (ms)

# --- AMBIL DATA TELEMETRI ---
telemetry_url = (
    f"https://thingsboard.cloud/api/plugins/telemetry/DEVICE/{DEVICE_ID}"
    f"/values/timeseries"
    f"?keys={KEYS}&startTs={start_ts}&endTs={end_ts}"
    f"&limit={LIMIT}&orderBy=DESC"
)
headers = {"X-Authorization": f"Bearer {JWT_TOKEN}"}

data_response = requests.get(telemetry_url, headers=headers)
data_response.raise_for_status()
data = data_response.json()

# --- GABUNGKAN & TAMPILKAN SEBAGAI TABEL ---
temperature_list = data.get("temperature", [])
humidity_list = data.get("humidity", [])

print(f"{'No':<4}{'Timestamp':<22}{'Temperature (°C)':<20}{'Humidity (%)':<15}")
print("-" * 61)

jumlah = max(len(temperature_list), len(humidity_list))
for i in range(jumlah):
    temp_entry = temperature_list[i] if i < len(temperature_list) else {}
    hum_entry = humidity_list[i] if i < len(humidity_list) else {}

    ts_raw = temp_entry.get("ts") or hum_entry.get("ts")
    ts_readable = datetime.fromtimestamp(ts_raw / 1000).strftime("%Y-%m-%d %H:%M:%S")

    temp_val = temp_entry.get("value", "-")
    hum_val = hum_entry.get("value", "-")

    print(f"{i+1:<4}{ts_readable:<22}{temp_val:<20}{hum_val:<15}")

if jumlah == 0:
    print("Tidak ada data ditemukan. Cek kembali DEVICE_ID dan rentang waktu.")